"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function LocationFlipper() {
  const [location, setLocation] = useState("charlottesville, va");
  const locations = ["charlottesville, va", "northern virginia"];

  useEffect(() => {
    const interval = setInterval(() => {
      setLocation((current) =>
        current === locations[0] ? locations[1] : locations[0]
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[24px] relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={location}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
          className="absolute"
        >
          {location}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
