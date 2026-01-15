"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                1. Introduction
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  Welcome to Ashil & Associates ("we," "our," or "us"). We
                  represent Chartered Accountants delivering comprehensive
                  financial solutions across India and the GCC region. We
                  respect your privacy and are committed to protecting your
                  personal data.
                </p>
                <p>
                  This privacy policy will inform you as to how we look after
                  your personal data when you visit our website and tell you
                  about your privacy rights and how the law protects you.
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
                2. Data We Collect
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  We may collect, use, store and transfer different kinds of
                  personal data about you which we have grouped together as
                  follows:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      label: "Identity Data",
                      text: "First name, last name, username or similar identifier.",
                    },
                    {
                      label: "Contact Data",
                      text: "Email address, telephone numbers.",
                    },
                    {
                      label: "Technical Data",
                      text: "IP address, browser type, time zone, location, operating system.",
                    },
                    {
                      label: "Usage Data",
                      text: "Information about how you use our website and services.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="bg-gray-50 p-6 rounded-sm">
                      <strong className="block text-black font-semibold font-serif mb-2 text-lg">
                        {item.label}
                      </strong>
                      <span className="text-sm text-gray-500">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-black mb-6">
                3. How We Use Your Data
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  We will only use your personal data when the law allows us to.
                  Most commonly, we will use your personal data in the following
                  circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-3 marker:text-gray-300">
                  <li>
                    Where we need to perform the contract we are about to enter
                    into or have entered into with you.
                  </li>
                  <li>
                    Where it is necessary for our legitimate interests (or those
                    of a third party) and your interests and fundamental rights
                    do not override those interests.
                  </li>
                  <li>
                    Where we need to comply with a legal or regulatory
                    obligation.
                  </li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-black mb-6">
                4. Data Security
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  We have put in place appropriate security measures to prevent
                  your personal data from being accidentally lost, used or
                  accessed in an unauthorized way, altered or disclosed.
                </p>
                <p>
                  In addition, we limit access to your personal data to those
                  employees, agents, contractors and other third parties who
                  have a business need to know.
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
                5. Contact Us
              </h2>
              <div className="bg-[#F5F5F0] p-8 sm:p-10 rounded-sm">
                <p className="text-gray-600 font-sans leading-relaxed mb-6">
                  If you have any questions about this privacy policy or our
                  privacy practices, please contact us at:
                </p>
                <a
                  href="mailto:info@ashilassociates.com"
                  className="text-black font-serif text-xl border-b border-black/20 hover:border-black pb-1 transition-colors"
                >
                  info@ashilassociates.com
                </a>
              </div>
            </motion.section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
