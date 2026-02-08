"use client";

import { motion } from "framer-motion";

interface CareerPosition {
  id: number;
  title: string;
  description?: string | null;
  location?: string | null;
  type?: string | null;
}

interface CareerClientProps {
  positions: CareerPosition[];
}

export default function CareerClient({ positions }: CareerClientProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white">
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
              Careers
            </h1>
            <p className="text-gray-400 font-sans text-sm tracking-wide">
              Join our team of professionals
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
                Why Join Ashil & Associates?
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  At Ashil & Associates, we believe in fostering a culture of
                  excellence, professional growth, and continuous learning. As a
                  leading Chartered Accountancy firm with over 25 years of
                  experience, we offer a dynamic work environment where your
                  expertise can make a real impact.
                </p>
                <p>
                  We are committed to providing our team members with
                  opportunities to work on diverse projects, engage with clients
                  across industries, and develop their skills in audit,
                  taxation, advisory, and financial services.
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
                What We Offer
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  We provide a comprehensive benefits package and a supportive
                  work environment designed to help you thrive:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      label: "Professional Growth",
                      text: "Continuous learning opportunities and career advancement paths.",
                    },
                    {
                      label: "Diverse Projects",
                      text: "Work across multiple industries and client engagements.",
                    },
                    {
                      label: "Competitive Compensation",
                      text: "Attractive salary packages and performance-based incentives.",
                    },
                    {
                      label: "Work-Life Balance",
                      text: "Flexible working arrangements and supportive team culture.",
                    },
                    {
                      label: "Global Exposure",
                      text: "Opportunities to work with international clients and GCC markets.",
                    },
                    {
                      label: "Technology-Driven",
                      text: "Access to modern tools and automation platforms.",
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
                Open Positions
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  We are always looking for talented professionals to join our
                  team. Whether you&apos;re a recent graduate or an experienced
                  professional, we welcome applications from individuals who are
                  passionate about accounting, audit, and advisory services.
                </p>

                {positions.length > 0 ? (
                  <div className="space-y-4 mt-6">
                    {positions.map((position) => (
                      <div
                        key={position.id}
                        className="bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-100 hover:border-gray-200 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <h3 className="text-lg font-serif font-semibold text-black">
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {position.type && (
                              <span className="text-xs font-sans bg-white text-gray-600 px-3 py-1 rounded-sm border border-gray-200">
                                {position.type}
                              </span>
                            )}
                            {position.location && (
                              <span className="text-xs font-sans bg-white text-gray-600 px-3 py-1 rounded-sm border border-gray-200">
                                {position.location}
                              </span>
                            )}
                          </div>
                        </div>
                        {position.description && (
                          <p className="text-sm text-gray-500 font-sans mt-3 leading-relaxed">
                            {position.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 p-6 md:p-8 rounded-sm mt-6">
                    <p className="text-gray-500 font-sans text-sm">
                      There are no open positions at the moment. Please check
                      back later or send us your resume for future opportunities.
                    </p>
                  </div>
                )}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-black mb-6">
                How to Apply
              </h2>
              <div className="text-gray-600 font-sans leading-relaxed text-base space-y-4">
                <p>
                  If you&apos;re interested in joining our team, please send your
                  resume and a cover letter to our HR department. We review all
                  applications and will contact qualified candidates for
                  further discussions.
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
                Contact Us
              </h2>
              <div className="bg-[#F5F5F0] p-8 sm:p-10 rounded-sm">
                <p className="text-gray-600 font-sans leading-relaxed mb-6">
                  For career opportunities, please reach out to us at:
                </p>
                <a
                  href="mailto:info@ashilandassociates.com"
                  className="text-black font-serif text-xl border-b border-black/20 hover:border-black pb-1 transition-colors"
                >
                  info@ashilandassociates.com
                </a>
                <p className="text-gray-600 font-sans leading-relaxed mt-6 text-sm">
                  Please mention &quot;Career Application&quot; in the subject line of your
                  email.
                </p>
              </div>
            </motion.section>
          </div>
        </article>
      </main>
    </div>
  );
}
