"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

interface PremiumVideoProps {
  videoId: string;
  thumbnailUrl: string;
  title: string;
}

export default function PremiumVideo({ videoId, thumbnailUrl, title }: PremiumVideoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button/Thumbnail */}
      <div 
        className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-line bg-[#0A0A0A] aspect-video"
        onClick={() => setIsOpen(true)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <MagneticButton className="h-16 w-16 !rounded-full !px-0 flex items-center justify-center">
            <svg className="ml-1 h-6 w-6 text-base-ink" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </MagneticButton>
        </div>
      </div>

      {/* Cinematic Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 backdrop-blur-xl"
          >
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-[101]">
              <button 
                onClick={() => setIsOpen(false)}
                className="text-mute hover:text-white transition-colors duration-300"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[1200px] overflow-hidden rounded-2xl border border-line bg-black shadow-2xl aspect-video relative"
            >
              <iframe 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`} 
                title={title}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
