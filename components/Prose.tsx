import React from "react";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Prose wrapper for rendering MDX content.
 * Applies Origo One's brutalist, high-contrast typography system to standard HTML tags.
 */
export default function Prose({ children, className = "" }: ProseProps) {
  return (
    <div
      className={`prose prose-invert max-w-none 
        prose-headings:font-display prose-headings:font-semibold prose-headings:text-ink
        prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl
        prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl
        prose-p:mb-4 prose-p:text-[18px] prose-p:leading-relaxed prose-p:text-mute md:prose-p:text-[19px]
        prose-a:text-accent prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-white
        prose-strong:font-semibold prose-strong:text-ink
        prose-ul:mb-6 prose-ul:list-outside prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-2
        prose-li:text-[18px] prose-li:text-mute md:prose-li:text-[19px]
        prose-li:marker:text-mute
        ${className}`}
    >
      {children}
    </div>
  );
}
