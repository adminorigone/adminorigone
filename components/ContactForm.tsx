"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company is required"),
  workflow: z.string().min(10, "Please describe the workflow constraint"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-10 max-w-[500px] border border-line bg-raised/50 p-8">
        <h3 className="font-display text-[24px] text-signal">Request received.</h3>
        <p className="mt-2 text-mute">We will review your workflow constraints and get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex w-full max-w-[500px] flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-faint">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          className="w-full border-b border-line bg-transparent pb-2 text-[16px] text-ink outline-none transition-colors focus:border-signal"
        />
        {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-faint">
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          className="w-full border-b border-line bg-transparent pb-2 text-[16px] text-ink outline-none transition-colors focus:border-signal"
        />
        {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="font-mono text-xs uppercase tracking-wider text-faint">
          Company
        </label>
        <input
          {...register("company")}
          id="company"
          className="w-full border-b border-line bg-transparent pb-2 text-[16px] text-ink outline-none transition-colors focus:border-signal"
        />
        {errors.company && <span className="text-xs text-red-500">{errors.company.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="workflow" className="font-mono text-xs uppercase tracking-wider text-faint">
          Workflow Constraint
        </label>
        <textarea
          {...register("workflow")}
          id="workflow"
          rows={3}
          className="w-full border-b border-line bg-transparent pb-2 text-[16px] text-ink outline-none transition-colors focus:border-signal"
          placeholder="What is currently breaking?"
        />
        {errors.workflow && <span className="text-xs text-red-500">{errors.workflow.message}</span>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 flex h-12 w-full items-center justify-center bg-ink font-sans text-[15px] font-medium text-base transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : "Send Request"}
      </button>

      {status === "error" && (
        <span className="text-center text-sm text-red-500">Something went wrong. Please try again.</span>
      )}
    </form>
  );
}
