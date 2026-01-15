"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="pt-40 pb-24 px-6 sm:px-8 lg:px-12">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
            className="mb-16 border-b border-gray-100 pb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black leading-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-gray-400 font-sans text-sm tracking-wide">
              Last updated: January 15, 2026
            </p>
          </motion.div>

          {/* Content */}
          <div className="space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-black mb-6">
                1. Acceptance of Terms
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  By accessing and using this website, you accept and agree to
                  be bound by the terms and provision of this agreement.
                </p>
                <p>
                  In addition, when using these particular services, you shall
                  be subject to any posted guidelines or rules applicable to
                  such services. Any participation in this service will
                  constitute acceptance of this agreement. If you do not agree
                  to abide by the above, please do not use this service.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-black mb-6">
                2. Intellectual Property
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  This site and its original content, features, and
                  functionality are owned by Ashil & Associates and are
                  protected by international copyright, trademark, patent, trade
                  secret, and other intellectual property or proprietary rights
                  laws.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-black mb-6">
                3. Use License
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on Ashil & Associates'
                  website for personal, non-commercial transitory viewing only.
                  This is the grant of a license, not a transfer of title, and
                  under this license you may not:
                </p>
                <div className="bg-gray-50 p-6 md:p-8 rounded-sm">
                  <ul className="list-disc pl-5 space-y-3 marker:text-black">
                    <li>Modify or copy the materials;</li>
                    <li>
                      Use the materials for any commercial purpose, or for any
                      public display;
                    </li>
                    <li>
                      Attempt to decompile or reverse engineer any software
                      contained on the website;
                    </li>
                    <li>
                      Remove any copyright or other proprietary notations; or
                    </li>
                    <li>
                      Transfer the materials to another person or "mirror" the
                      materials on any other server.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-black mb-6">
                4. Disclaimer
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  The materials on Ashil & Associates' website are provided on
                  an 'as is' basis. Ashil & Associates makes no warranties,
                  expressed or implied, and hereby disclaims and negates all
                  other warranties including, without limitation, implied
                  warranties or conditions of merchantability, fitness for a
                  particular purpose, or non-infringement of intellectual
                  property or other violation of rights.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-black mb-6">
                5. Governing Law
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  Any claim relating to Ashil & Associates' website shall be
                  governed by the laws of India without regard to its conflict
                  of law provisions.
                </p>
              </div>
            </motion.section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
