"use client";

import { motion } from "framer-motion";
import { COMMITMENT_CONTENT } from "@/constants";
import { Shield, CheckCircle2, Target } from "lucide-react";

export default function Commitment() {
  const values = [
    {
      icon: Shield,
      label: "Ethical Standards",
      description: "Strong ethical foundation in every engagement",
    },
    {
      icon: Target,
      label: "Regulatory Excellence",
      description: "Disciplined approach to compliance",
    },
    {
      icon: CheckCircle2,
      label: "Reliable Outcomes",
      description: "Consistently delivering on our promises",
    },
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-6 font-sans">
            {COMMITMENT_CONTENT.sectionHeader}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black leading-[1.1] max-w-5xl mx-auto mb-4">
            {COMMITMENT_CONTENT.title}
          </h2>
          <div className="w-24 h-[1px] bg-black mx-auto mt-8"></div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-[#F5F5F0] p-10 sm:p-14 md:p-20 border border-gray-200/50">
            <div className="space-y-8 text-gray-700 font-sans leading-relaxed text-lg sm:text-xl max-w-4xl mx-auto">
              <p className="text-gray-800 font-light">
                {COMMITMENT_CONTENT.description.paragraph1}
              </p>
              <p className="text-gray-800 font-light">
                {COMMITMENT_CONTENT.description.paragraph2}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-black text-white rounded-sm transition-transform duration-300 group-hover:scale-110">
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-black mb-3">
                  {value.label}
                </h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed max-w-xs mx-auto">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
