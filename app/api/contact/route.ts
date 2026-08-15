import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company is required"),
  workflow: z.string().min(10, "Please describe the workflow constraint"),
});

export async function POST(req: Request) {
  // Initialize Supabase client inside the handler to prevent Next.js build-time execution errors
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    console.log("Received contact submission:", validatedData);

    // Insert data into Supabase 'leads' table
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company,
          workflow_constraint: validatedData.workflow,
        }
      ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ success: false, message: "Failed to save lead to database." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Submission received and saved securely." }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
