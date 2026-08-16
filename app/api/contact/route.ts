import { NextResponse } from "next/server";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize Upstash Redis & Ratelimit only if the env vars exist
const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
const webhookUrl = process.env.CONTACT_WEBHOOK_URL; // e.g. Formspree or Zapier URL

const redis = (redisUrl && redisToken) ? new Redis({ url: redisUrl, token: redisToken }) : null;

// Create a new ratelimiter, that allows 3 requests per 1 minute
const ratelimit = redis ? new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "1 m"),
  analytics: true,
}) : null;

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company is required"),
  workflow: z.string().min(10, "Please describe the workflow constraint"),
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";

    if (ratelimit) {
      const { success } = await ratelimit.limit(`ratelimit_contact_${ip}`);
      if (!success) {
        return NextResponse.json(
          { success: false, message: "Too many requests. Please try again later." },
          { status: 429 }
        );
      }
    }

    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    console.log("Received contact submission:", validatedData);

    // Forward to Webhook/Formspree if configured
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to forward to CRM webhook");
      }
    } else {
      console.warn("No CONTACT_WEBHOOK_URL provided. Simulating successful submission.");
    }

    return NextResponse.json(
      { success: true, message: "Submission received and saved securely." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    console.error("API Error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
