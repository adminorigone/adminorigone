"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("origo-cookie-consent");
    if (!consent) {
      // Small delay so it doesn't pop aggressively immediately
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("origo-cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 z-50 mx-auto max-w-md md:left-auto md:right-8"
        >
          <div className="flex flex-col gap-4 overflow-hidden rounded-xl border border-line bg-[#0A0A0A]/95 p-6 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-[16px] font-semibold text-ink">We use cookies.</h3>
              <p className="text-[14px] leading-relaxed text-mute">
                Strictly to monitor latency metrics and ensure the WebGL engine performs efficiently. No invasive tracking.
              </p>
            </div>
            <div className="flex justify-end pt-2">
              <MagneticButton onClick={accept} className="px-6 py-2.5 text-[14px]">
                Accept & Close
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
