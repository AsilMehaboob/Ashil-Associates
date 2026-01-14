'use client';

import { useState } from 'react';

interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    id: '01',
    number: '01',
    title: 'Audit & Assurance',
    description: 'Comprehensive audit services ensuring accuracy, compliance, and transparency in financial reporting.',
    details: [
      'Statutory Audits',
      'Internal Audits',
      'Tax Audits',
      'Concurrent Audits',
      'Stock Audits',
      'Due Diligence',
    ],
  },
  {
    id: '02',
    number: '02',
    title: 'Tax & Regulatory Compliance',
    description: 'Expert guidance on tax planning, compliance, and regulatory requirements to optimize your tax position.',
    details: [
      'Income Tax Planning & Filing',
      'GST Registration & Returns',
      'TDS Compliance',
      'Transfer Pricing',
      'International Taxation',
      'Tax Litigation Support',
    ],
  },
  {
    id: '03',
    number: '03',
    title: 'GCC/VAT & Corporate Tax',
    description: 'Specialized services for GCC region VAT and Corporate Tax compliance and advisory.',
    details: [
      'VAT Registration & Compliance',
      'Corporate Tax Advisory',
      'Tax Impact Assessment',
      'VAT Refund Services',
      'Transfer Pricing Documentation',
      'Tax Health Check',
    ],
  },
  {
    id: '04',
    number: '04',
    title: 'Virtual CFO Advisory',
    description: 'Strategic financial leadership and guidance without the cost of a full-time CFO.',
    details: [
      'Financial Planning & Analysis',
      'Budgeting & Forecasting',
      'Cash Flow Management',
      'Financial Reporting',
      'Strategic Business Advisory',
      'Risk Management',
    ],
  },
  {
    id: '05',
    number: '05',
    title: 'International Taxation',
    description: 'Navigate complex cross-border tax issues with our international taxation expertise.',
    details: [
      'Cross-Border Tax Planning',
      'DTAA Benefits',
      'Foreign Tax Credit',
      'FEMA Compliance',
      'Expatriate Taxation',
      'Global Mobility Services',
    ],
  },
];

export default function Services() {
  const [openAccordion, setOpenAccordion] = useState<string>('01');

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F0F0EF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-gray-900">
            Our Services
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-0 border-t border-gray-200">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-b border-gray-200 transition-all duration-300"
              onMouseEnter={() => setOpenAccordion(service.id)}
            >
              {/* Accordion Header */}
              <button
                className="w-full py-8 px-6 flex items-center justify-between text-left transition-colors duration-200 group"
                onClick={() =>
                  setOpenAccordion(openAccordion === service.id ? '' : service.id)
                }
              >
                <div className="flex items-center gap-8">
                  <span className="text-sm text-gray-400 font-light">
                    {service.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    openAccordion === service.id ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openAccordion === service.id
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-8 pl-6 md:pl-24">
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="text-base">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-3 border border-gray-300 text-gray-700 text-sm tracking-wider uppercase hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
