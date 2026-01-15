"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS_CONTENT } from "@/constants";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { items } = TESTIMONIALS_CONTENT;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="bg-[#F5F5F0] py-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-6 font-sans">
            {TESTIMONIALS_CONTENT.sectionHeader}
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-black leading-[1.15] max-w-4xl mx-auto">
            {TESTIMONIALS_CONTENT.title}
          </h2>
        </motion.div>

        {/* Testimonial Stack */}
        <div className="relative max-w-4xl mx-auto h-[450px] md:h-[400px]">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-24 z-50 hidden md:block">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all duration-300 rounded-sm cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-24 z-50 hidden md:block">
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all duration-300 rounded-sm cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Cards */}
          <div className="relative w-full h-full">
            <AnimatePresence>
              {items.map((testimonial, index) => {
                const offset =
                  (index - currentIndex + items.length) % items.length;

                const isActive = offset === 0;

                if (offset > 2 && offset !== items.length - 1) return null;

                return (
                  <motion.div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full bg-white p-8 md:p-12 shadow-xl rounded-sm flex flex-col border border-gray-100"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{
                      opacity: isActive || offset <= 2 ? 1 : 0,
                      scale: 1 - offset * 0.05,
                      y: offset * 20,
                      zIndex: items.length - offset,
                      filter: isActive ? "blur(0px)" : "blur(1px)",
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      transformOrigin: "top center",
                    }}
                  >
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <svg
                        width="32"
                        height="24"
                        viewBox="0 0 40 32"
                        fill="none"
                        className="text-gray-300 w-8 h-6"
                      >
                        <path
                          d="M0 32V16C0 7.168 5.504 0 17.6 0v6.4C11.264 6.4 8.8 10.24 8.8 16h8.8v16H0zm22.4 0V16C22.4 7.168 27.904 0 40 0v6.4C33.664 6.4 31.2 10.24 31.2 16H40v16H22.4z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="mb-8 flex-grow">
                      <p className="text-xl md:text-2xl font-serif font-medium italic leading-relaxed text-gray-800">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>

                    {/* Client Info */}
                    <div className="mt-auto flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-semibold text-sm shrink-0 rounded-full font-sans">
                        {testimonial.initial}
                      </div>

                      {/* Name and Title */}
                      <div className="font-sans">
                        <p className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                          {testimonial.title} · {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-black w-8"
                    : "bg-gray-300 w-1.5 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
