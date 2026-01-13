"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

  const currentTestimonial = testimonials[currentIndex];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


  return (
    <section className="bg-[#F5F5F0] py-24 px-6">
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

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white shadow-md hidden md:flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white shadow-md hidden md:flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ArrowRight size={24} />
          </button>

          {/* Card */}
          <div className="bg-white p-6 md:p-16 shadow-lg min-h-auto md:min-h-[500px] flex flex-col">
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
            <blockquote className="mb-8 md:mb-12">
              <p className="text-lg md:text-2xl font-serif font-medium italic leading-relaxed text-gray-800">
                "{currentTestimonial.quote}"
              </p>
            </blockquote>

            {/* Client Info */}
            <div className="mt-auto flex items-center gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-semibold text-lg shrink-0">
                {currentTestimonial.initial}
              </div>

              {/* Name and Title */}
              <div>
                <p className="font-semibold text-gray-900">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {currentTestimonial.title} · {currentTestimonial.location}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
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
