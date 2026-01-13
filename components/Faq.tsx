"use client";

import { FAQ_CONTENT } from "@/constants";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[var(--color-arctic-50)] py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Header */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-6 font-sans">
              {FAQ_CONTENT.sectionHeader}
            </h3>
            <h2 className="text-5xl sm:text-6xl font-serif text-black leading-none">
              {FAQ_CONTENT.title}
            </h2>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-gray-200">
              {FAQ_CONTENT.items.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-8 flex justify-between items-center text-left focus:outline-hidden group"
                  >
                    <span className="text-lg font-medium text-gray-900 font-sans group-hover:text-black transition-colors">
                      {item.question}
                    </span>
                    <span
                      className={`ml-6 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100 mb-8"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm cursor-text text-gray-500 font-sans leading-relaxed max-w-2xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
