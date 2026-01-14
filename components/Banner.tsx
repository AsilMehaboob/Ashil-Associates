"use client";

import { BANNER_CONTENT } from "@/constants";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="bg-[#090f15] py-24 px-6 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-12 leading-tight">
            {BANNER_CONTENT.title}
          </h2>

          <a
            href="#contact"
            className="inline-block bg-white text-black px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-gray-200 transition-colors duration-300 font-sans mb-20 cursor-pointer"
          >
            {BANNER_CONTENT.buttonText}
          </a>
        </motion.div>

        <motion.div
          className="border-t border-white/10 w-full mb-12"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-4 max-w-3xl mx-auto">
          {BANNER_CONTENT.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <span className="text-4xl font-serif italic mb-2">
                {stat.number}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
