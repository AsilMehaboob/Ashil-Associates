"use client";

import { WHY_CHOOSE_US_CONTENT } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8 md:gap-0">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-6 font-sans">
              {WHY_CHOOSE_US_CONTENT.sectionHeader}
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif text-black leading-[1.15]">
              {WHY_CHOOSE_US_CONTENT.title}
            </h2>
          </motion.div>

          <motion.a
            className="bg-black text-white px-8 py-4 text-xs font-semibold cursor-pointer tracking-[0.2em] hover:bg-gray-800 transition-colors uppercase whitespace-nowrap hidden md:block" // Hidden on mobile if not essential or stack it
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#contact"
          >
            {WHY_CHOOSE_US_CONTENT.buttonText}
          </motion.a>
        </div>

        {/* Features */}
        <div className="space-y-20 md:space-y-32">
          {WHY_CHOOSE_US_CONTENT.features.map((feature, index) => {
            const isEven = index % 2 !== 0;
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isReversed ? "" : ""
                }`}
              >
                {/* Image Side */}
                <motion.div
                  className={`relative aspect-[4/3] w-full overflow-hidden bg-gray-100 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>

                {/* Text Side */}
                <motion.div
                  className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <p className="text-sm font-medium tracking-[0.2em] text-gray-400 mb-6 font-sans">
                    {(index + 1).toString().padStart(2, "0")}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-serif text-black mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-sans leading-relaxed text-lg max-w-lg">
                    <span className="font-semibold">{feature.subtitle}</span>{" "}
                    {feature.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 md:hidden">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="block w-full text-center bg-black text-white px-8 py-4 text-xs font-medium tracking-[0.2em] hover:bg-gray-800 transition-colors uppercase"
          >
            {WHY_CHOOSE_US_CONTENT.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
