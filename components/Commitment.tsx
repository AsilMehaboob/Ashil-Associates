"use client";

import { motion } from "framer-motion";
import { COMMITMENT_CONTENT } from "@/constants";
import { Shield, CheckCircle2, Target } from "lucide-react";

const IconMap: Record<string, any> = {
  shield: Shield,
  target: Target,
  "check-circle": CheckCircle2,
};

export default function Commitment() {
  return (
    <section className="bg-white py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header + Content */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-6 font-sans">
            {COMMITMENT_CONTENT.sectionHeader}
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-black leading-tight mb-8 max-w-2xl mx-auto">
            {COMMITMENT_CONTENT.title}
          </h2>
          <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-base max-w-4xl mx-auto">
            <p>{COMMITMENT_CONTENT.description.paragraph1}</p>
            <p>{COMMITMENT_CONTENT.description.paragraph2}</p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {COMMITMENT_CONTENT.values.map((value, index) => {
            const IconComponent = IconMap[value.icon];
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gray-100 text-black rounded-sm transition-transform duration-500 group-hover:scale-110">
                  {IconComponent && (
                    <IconComponent size={28} strokeWidth={1.5} />
                  )}
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
