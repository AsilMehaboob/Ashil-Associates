"use client";

import { useState, useEffect, useRef } from "react";
import { SERVICES_CONTENT } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function Services() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="services"
      className="py-24 px-6 sm:px-8 lg:px-12 bg-[#F5F5F0] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-6 font-sans">
            {SERVICES_CONTENT.sectionHeader}
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-black leading-tight">
            {SERVICES_CONTENT.title}
          </h2>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-0 border-t border-gray-300/50">
          {SERVICES_CONTENT.items.map((service, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-300/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => !isScrolling && setOpenAccordion(index)}
            >
              {/* Accordion Header */}
              <button
                className="w-full py-10 md:py-12 flex items-center justify-between text-left group focus:outline-none"
                onClick={() =>
                  setOpenAccordion(openAccordion === index ? null : index)
                }
              >
                <div className="flex items-baseline gap-8 md:gap-16">
                  <span className="text-sm font-medium tracking-[0.2em] text-gray-400 font-sans">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3
                    className={`text-2xl md:text-3xl font-serif transition-colors duration-300 ${
                      openAccordion === index
                        ? "text-black"
                        : "text-gray-500 group-hover:text-black"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <div
                  className={`transition-transform duration-500 ${
                    openAccordion === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <Plus
                    className="w-6 h-6 md:w-8 md:h-8 text-gray-400 font-light"
                    strokeWidth={1}
                  />
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 pl-0 md:pl-[calc(2rem+32px)] lg:pl-[calc(4rem+50px)] pr-4 md:pr-12">
                      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                        <div className="flex-1">
                          <p className="text-gray-600 text-base leading-relaxed font-sans max-w-xl">
                            {service.description}
                          </p>
                        </div>
                        <div className="flex-1">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                            {service.details.map((detail, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-3 text-gray-700 font-sans"
                              >
                                <div className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></div>
                                <span className="text-sm tracking-wide text-gray-600">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
