import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company is required"),
  workflow: z.string().min(10, "Please describe the workflow constraint"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // In a real application, we would use the SQLite MCP agent to save this to a DB
    // or send it to a CRM. For now, we simulate success.
    console.log("Received contact submission:", validatedData);

    return NextResponse.json({ success: true, message: "Submission received" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
