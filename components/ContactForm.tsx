"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company is required"),
  workflow: z.string().min(10, "Tell us what you're working on"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

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

  const inputClass = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[16px] text-white outline-none transition-all placeholder:text-white/30 hover:border-white/20 focus:border-[#FFB000] focus:bg-white/10 focus:ring-1 focus:ring-[#FFB000]/50 backdrop-blur-md shadow-inner";

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="relative mt-12 w-full max-w-[550px]">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#FFB000]/5 blur-[100px]" />
      
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card flex flex-col items-center justify-center rounded-2xl border border-[#FFB000]/30 p-12 text-center shadow-[0_0_40px_rgba(255,176,0,0.1)]"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFB000]/20 text-[#FFB000]">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-[28px] font-semibold text-white">We'll be in touch.</h3>
            <p className="mt-3 text-[16px] text-white/60">
              Got your message. We'll review it and come back to you within one business day.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card flex w-full flex-col gap-6 rounded-2xl border border-white/10 p-8 shadow-2xl"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="name" className="pl-1 font-mono text-[11px] uppercase tracking-widest text-[#FFB000]">
                Name
              </label>
              <input {...register("name")} id="name" placeholder="John Doe" className={inputClass} />
              {errors.name && <span className="pl-1 text-xs text-red-400">{errors.name.message}</span>}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="email" className="pl-1 font-mono text-[11px] uppercase tracking-widest text-[#FFB000]">
                Email
              </label>
              <input {...register("email")} id="email" type="email" placeholder="john@company.com" className={inputClass} />
              {errors.email && <span className="pl-1 text-xs text-red-400">{errors.email.message}</span>}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="company" className="pl-1 font-mono text-[11px] uppercase tracking-widest text-[#FFB000]">
                Company
              </label>
              <input {...register("company")} id="company" placeholder="Acme Corp" className={inputClass} />
              {errors.company && <span className="pl-1 text-xs text-red-400">{errors.company.message}</span>}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="workflow" className="pl-1 font-mono text-[11px] uppercase tracking-widest text-[#FFB000]">
                What do you need built?
              </label>
              <textarea
                {...register("workflow")}
                id="workflow"
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Describe the problem, workflow, or product — whatever you're trying to solve or build."
              />
              {errors.workflow && <span className="pl-1 text-xs text-red-400">{errors.workflow.message}</span>}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-4 flex w-full justify-end">
               <button
                type="submit"
                disabled={status === "submitting"}
                className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-[#FFB000] font-sans text-[15px] font-semibold text-black transition-all hover:bg-[#FFB000]/90 disabled:opacity-50"
              >
                <span className="relative z-10">{status === "submitting" ? "Sending..." : "Send it"}</span>
              </button>
            </motion.div>

            {status === "error" && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm text-red-400">
                An error occurred. Please try again or contact us directly at hello@oorigone.com.
              </motion.span>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
