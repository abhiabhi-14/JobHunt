"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInSplit({ left, right, reverse = false }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const directionX = reverse ? 100 : -100; // Slide in from left or right

  const containerVariants = {
    hidden: { opacity: 0, x: directionX },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full px-4"
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 px-6 py-12 
                      bg-gradient-to-r from-purple-800 via-violet-900 to-zinc-900
                      text-white rounded-2xl mt-[5vh] mb-[5vh] max-w-screen-xl mx-auto
                      border-2 border-violet-500 bg-gray-900 transition-shadow duration-300 shadow-[0_0_6px_#8b5cf6,0_0_12px_#a855f7] hover:shadow-[0_0_12px_#8b5cf6,0_0_24px_#a855f7]"
      >
        <div className={`w-full md:w-1/2 ${reverse ? "md:order-2" : ""}`}>
          <div className="text-center md:text-left">{left}</div>
        </div>
        <div className={`w-full md:w-1/2 ${reverse ? "md:order-1" : ""}`}>
          <div className="text-center md:text-left">{right}</div>
        </div>
      </div>
    </motion.div>
  );
}
