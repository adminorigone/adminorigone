"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  company: z.string().min(1, "Company required"),
  workflow: z.string().min(10, "Tell us a bit more"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const STEPS = [
  { field: "name" as const, question: "What's your name?", placeholder: "First name is fine", type: "text", tag: "01" },
  { field: "email" as const, question: "Your email address.", placeholder: "you@company.com", type: "email", tag: "02" },
  { field: "company" as const, question: "Company or project name.", placeholder: "Acme, or just the project", type: "text", tag: "03" },
  { field: "workflow" as const, question: "What do you need built?", placeholder: "Describe the problem, the workflow, or the product. Even rough is fine.", type: "textarea", tag: "04" },
];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [answers, setAnswers] = useState<Partial<ContactFormData>>({});
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const { register, handleSubmit, trigger, getValues, formState: { errors } } =
    useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const currentStep = STEPS[step];
  const isLast = step === STEPS.length - 1;

  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 350);
    return () => clearTimeout(timer);
  }, [step]);

  const advance = async () => {
    const valid = await trigger(currentStep.field);
    if (!valid) return;
    setAnswers((prev) => ({ ...prev, [currentStep.field]: getValues(currentStep.field) }));
    if (isLast) {
      handleSubmit(onSubmit)();
    } else {
      setStep((s) => s + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentStep.type !== "textarea") { e.preventDefault(); advance(); }
    if (e.key === "Enter" && currentStep.type === "textarea" && e.metaKey) { e.preventDefault(); advance(); }
  };

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  const registerWithRef = (field: keyof ContactFormData) => {
    const { ref, ...rest } = register(field);
    return { ...rest, ref: (el: HTMLInputElement | HTMLTextAreaElement | null) => { ref(el); (inputRef as React.MutableRefObject<typeof el>).current = el; } };
  };

  const inputBase = "w-full bg-transparent text-[20px] md:text-[22px] font-light text-white outline-none placeholder:text-white/20 transition-all duration-300 caret-[#FFB000]";

  if (status === "success") {
    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mt-12 flex flex-col gap-5">
        {STEPS.map((s) => (
          <div key={s.field} className="flex items-baseline gap-4 border-b border-white/5 pb-3">
            <span className="w-6 font-mono text-[10px] text-white/20">{s.tag}</span>
            <span className="text-[15px] text-white/50">{getValues(s.field)}</span>
          </div>
        ))}
        <div className="mt-2 flex items-center gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#FFB000]/40 bg-[#FFB000]/10">
            <svg className="h-4 w-4 text-[#FFB000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-[16px] font-medium text-white">We&apos;ll be in touch.</p>
            <p className="text-[13px] text-white/40">Usually within one business day.</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative mt-12 w-full" noValidate>
      {/* Previous answers */}
      <div className="mb-8 flex flex-col">
        <AnimatePresence>
          {STEPS.slice(0, step).map((s) => (
            <motion.button key={s.field} type="button" onClick={() => setStep(STEPS.findIndex((x) => x.field === s.field))}
              initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
              className="group flex items-baseline gap-4 border-b border-white/5 py-3 text-left transition-colors hover:border-white/15 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFB000] rounded-sm px-1 -mx-1"
            >
              <span className="w-6 font-mono text-[10px] text-white/20 transition-colors group-hover:text-[#FFB000]/60">{s.tag}</span>
              <span className="text-[15px] text-white/40 transition-colors group-hover:text-white/70">{getValues(s.field)}</span>
              <span className="ml-auto font-mono text-[10px] text-white/15 transition-colors group-hover:text-white/30">edit</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Current step */}
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-[#FFB000]/60">{currentStep.tag} /</span>
            <span className="text-[13px] text-white/50">{currentStep.question}</span>
          </div>

          <div className="relative border-b-2 border-white/10 pb-3 transition-colors duration-300 focus-within:border-[#FFB000]/60">
            {currentStep.type === "textarea" ? (
              <textarea {...(registerWithRef(currentStep.field) as any)} rows={3} placeholder={currentStep.placeholder}
                onKeyDown={handleKeyDown} className={`${inputBase} resize-none leading-relaxed`} />
            ) : (
              <input {...(registerWithRef(currentStep.field) as any)} type={currentStep.type} placeholder={currentStep.placeholder}
                onKeyDown={handleKeyDown} className={inputBase} />
            )}
            <motion.div className="absolute bottom-0 left-0 h-[2px] bg-[#FFB000]"
              initial={{ width: "0%" }} animate={{ width: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <AnimatePresence>
            {errors[currentStep.field] && (
              <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="text-[12px] text-red-400/80"
              >
                {errors[currentStep.field]?.message}
              </motion.span>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between pt-2">
            <span className="font-mono text-[11px] text-white/20">
              {currentStep.type === "textarea" ? "⌘ + Enter to continue" : "Enter to continue"}
            </span>
            <motion.button type="button" onClick={advance} disabled={status === "submitting"}
              whileHover={{ x: 4 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 font-mono text-[13px] text-[#FFB000] transition-opacity disabled:opacity-40"
            >
              <span>{status === "submitting" && isLast ? "Sending…" : isLast ? "Send it" : "Continue"}</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress */}
      <div className="mt-10 h-px w-full bg-white/5">
        <motion.div className="h-full bg-[#FFB000]/40"
          initial={{ width: "0%" }} animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] text-white/20">
        <span>{step + 1} of {STEPS.length}</span>
        <span>{Math.round(((step + 1) / STEPS.length) * 100)}%</span>
      </div>

      {status === "error" && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center text-[13px] text-red-400/80">
          Something went wrong. Email us at hello@oorigone.com
        </motion.p>
      )}
    </form>
  );
}

