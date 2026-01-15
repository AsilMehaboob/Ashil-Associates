"use client";

import { ABOUT_CONTENT } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 px-6 sm:px-8 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={ABOUT_CONTENT.image}
              alt="About Ashil & Associates"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Small heading */}
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 font-sans">
              {ABOUT_CONTENT.sectionHeader}
            </p>

            {/* Main headline */}
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
              {ABOUT_CONTENT.title}
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-base">
              {ABOUT_CONTENT.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Separator */}
            <div className="border-t border-gray-200 pt-8"></div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              {ABOUT_CONTENT.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-serif text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium tracking-[0.15em] text-gray-400 uppercase font-sans w-[120px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
