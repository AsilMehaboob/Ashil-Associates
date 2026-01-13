"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Ashil & Associates transformed our financial operations. Their expertise in GCC taxation and compliance has been invaluable for our cross-border business. The team's dedication to timely delivery and accuracy is exceptional.",
    name: "Rajesh Kumar",
    title: "CEO, TechNext Solutions",
    location: "Dubai, UAE",
    initial: "R",
  },
  {
    id: 2,
    quote:
      "Working with Ashil & Associates has been a game-changer for our business. Their strategic financial planning and tax optimization strategies have significantly improved our bottom line. Highly recommended!",
    name: "Sarah Al-Mansoori",
    title: "CFO, Global Ventures",
    location: "Abu Dhabi, UAE",
    initial: "S",
  },
  {
    id: 3,
    quote:
      "The professionalism and expertise of Ashil & Associates is unmatched. They helped us navigate complex regulatory requirements with ease. Their personalized approach makes all the difference.",
    name: "Mohammed Hassan",
    title: "Managing Director, Emirates Trading Co.",
    location: "Sharjah, UAE",
    initial: "M",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="bg-[#F5F5F0] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-gray-600 mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif">
            Hear From Those Who Achieved
            <br />
            <em className="font-serif">Financial Freedom</em>
          </h2>
        </div>

        {/* Testimonial Stack */}
        <div className="relative max-w-4xl mx-auto h-[500px] md:h-[450px]">
          {/* Navigation Arrows - Moved outside appropriately or z-indexed above */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-24 z-50 hidden md:block">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all duration-300 rounded-full"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-24 z-50 hidden md:block">
             <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all duration-300 rounded-full"
              aria-label="Next testimonial"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Cards */}
          <div className="relative w-full h-full"> 
             <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                // Calculate position relative to key index
                const offset = (index - currentIndex + testimonials.length) % testimonials.length;
                
                // Allow only top 3 cards to be visible/interactable for performance visually
                const isActive = offset === 0;
                
                return (
                  <motion.div
                    key={testimonial.id}
                    className="absolute top-0 left-0 w-full h-full bg-white p-8 md:p-16 shadow-xl rounded-2xl flex flex-col border border-gray-100"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{
                      opacity: 1, // Always visible if in the map, control via z-index
                      scale: 1 - offset * 0.05,
                      y: offset * 20, // Stack vertical offset
                      zIndex: testimonials.length - offset, // 0 offset = highest z-index
                      filter: isActive ? "blur(0px)" : "blur(1px)", // Subtle blur for depth
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    style={{
                      transformOrigin: "top center",
                    }}
                  >
                    {/* Quote Icon */}
                    <div className="mb-6 md:mb-8">
                      <svg
                        width="40"
                        height="32"
                        viewBox="0 0 40 32"
                        fill="none"
                        className="text-gray-300 w-8 h-6 md:w-10 md:h-8"
                      >
                        <path
                          d="M0 32V16C0 7.168 5.504 0 17.6 0v6.4C11.264 6.4 8.8 10.24 8.8 16h8.8v16H0zm22.4 0V16C22.4 7.168 27.904 0 40 0v6.4C33.664 6.4 31.2 10.24 31.2 16H40v16H22.4z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="mb-8 md:mb-12 flex-grow">
                      <p className="text-lg md:text-2xl font-serif font-medium italic leading-relaxed text-gray-800">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>

                    {/* Client Info */}
                    <div className="mt-auto flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-semibold text-lg shrink-0 rounded-full">
                        {testimonial.initial}
                      </div>

                      {/* Name and Title */}
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
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
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gray-800 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
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
