"use client";

import Image from "next/image";
import { HOME_CONTENT } from "@/constants";
import { motion } from "framer-motion";

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Home() {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HOME_CONTENT.heroImage}
          alt="Ashil & Associates Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-grow flex flex-col justify-center pb-12 pt-20">
        <div className="max-w-4xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[var(--color-arctic-100)] text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-medium leading-[1.1] tracking-tight mb-8 font-serif"
          >
            <span className="italic block mb-2 text-white">
              {HOME_CONTENT.title.line1}
            </span>
            <span className="block italic text-white">
              {HOME_CONTENT.title.line2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white/80 text-lg md:text-xl font-medium max-w-xl leading-relaxed font-sans mb-12"
          >
            {HOME_CONTENT.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="bg-white text-[var(--color-midnight-900)] px-10 pt-5.5 pb-5 text-xs font-bold tracking-[0.2em] hover:bg-gray-200 transition-colors uppercase font-sans text-center cursor-pointer min-w-[200px]"
            >
              {HOME_CONTENT.buttons.primary}
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="border border-white/40 text-white px-10 pt-5.5 pb-5 text-xs font-bold tracking-[0.2em] hover:bg-white/10 transition-colors uppercase font-sans text-center cursor-pointer min-w-[200px] backdrop-blur-sm"
            >
              {HOME_CONTENT.buttons.secondary}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent opacity-50"></div>
        <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase font-sans">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
