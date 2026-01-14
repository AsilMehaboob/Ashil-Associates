export const INDUSTRIES_AND_CLIENTS = {
  sectionHeader: "INDUSTRIES & CLIENTS",
  title: "Diverse Expertise, Unified Excellence",
  description:
    "Serving clients across industries with specialized knowledge and proven experience. From ambitious startups to established enterprises, we deliver tailored solutions that drive sustainable growth.",
  categories: [
    {
      title: "SMEs",
      description: "Tailored solutions for growing businesses",
    },
    {
      title: "Corporates",
      description: "Enterprise-grade financial services",
    },
    {
      title: "Startups",
      description: "Scalable support for innovation",
    },
    {
      title: "GCC Businesses",
      description: "Regional expertise across the Gulf",
    },
    {
      title: "Manufacturing",
      description: "Industry-specific knowledge",
    },
    {
      title: "International",
      description: "Cross-border expertise",
    },
  ],
};

export const CONTACT_INFO = {
  sectionHeader: "GET IN TOUCH",
  title: "Let's discuss your financial needs.",
  description:
    "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  details: [
    {
      type: "Head Office",
      lines: ["123 Business Tower, Floor 15", "Mumbai, Maharashtra 400001"],
      icon: "map-pin",
      url: "https://www.google.com/maps/place/Mumbai,+Maharashtra",
    },
    {
      type: "Phone",
      lines: ["+91 98765 43210", "+91 22 1234 5678"],
      icon: "phone",
    },
    {
      type: "Email",
      lines: ["info@ashilassociates.com", "enquiry@ashilassociates.com"],
      icon: "mail",
    },
  ],
  form: {
    fields: [
      {
        label: "Full Name *",
        placeholder: "John Doe",
        type: "text",
        name: "name",
      },
      {
        label: "Email Address *",
        placeholder: "john@example.com",
        type: "email",
        name: "email",
      },
      {
        label: "Phone Number",
        placeholder: "+91 98765 43210",
        type: "tel",
        name: "phone",
      },
      {
        label: "Message *",
        placeholder: "Tell us about your requirements...",
        type: "textarea",
        name: "message",
      },
    ],
    buttonText: "SEND MESSAGE",
  },
};

export const BANNER_CONTENT = {
  title: "Easily manage your finances and reach your goals.",
  buttonText: "GET STARTED TODAY",
  stats: [
    { number: "250+", label: "PROJECTS COMPLETED" },
    { number: "50+", label: "TEAM MEMBERS" },
    { number: "2K+", label: "HAPPY CLIENTS" },
  ],
};

export const FOOTER_CONTENT = {
  description:
    "Trusted Chartered Accountants delivering comprehensive financial solutions across India and the GCC region.",
  columns: [
    {
      title: "Pages",
      links: [
        { label: "Home", href: "/#home" },
        { label: "About", href: "/#about" },
        { label: "Services", href: "/#services" },
        { label: "Contact", href: "/#contact" },
      ],
    },
  ],
  copyright: "© 2026 Ashil & Associates. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export const TEAM_CONTENT = {
  sectionHeader: "LEADERSHIP",
  title: "Meet our team of experts",
  members: [
    {
      name: "CA Ashil Sharma",
      role: "Founder & Managing Partner",
      description: "15+ years in audit and taxation across India and GCC",
      socials: { linkedin: "#", mail: "mailto:ashil@example.com" },
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "CA Priya Mehta",
      role: "Partner - Tax & Compliance",
      description:
        "Expert in international taxation and cross-border transactions.",
      socials: { linkedin: "#", mail: "mailto:priya@example.com" },
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "CA Rajesh Kumar",
      role: "Partner - Audit & Assurance",
      description:
        "Specializes in statutory audits and forensic investigations.",
      socials: { linkedin: "#", mail: "mailto:rajesh@example.com" },
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const FAQ_CONTENT = {
  sectionHeader: "COMMON QUESTIONS",
  title: "FAQ.",
  items: [
    {
      question: "What services does Ashil & Associates offer?",
      answer:
        "We offer comprehensive financial services including Audit & Assurance, Tax & Regulatory Compliance, GCC VAT & Corporate Tax, Virtual CFO Advisory, International Taxation, and Forensic Audits.",
    },
    {
      question: "Which regions do you serve?",
      answer:
        "We primarily serve clients across India and the GCC region (UAE, Saudi Arabia, Qatar, Bahrain, Oman, and Kuwait), providing localized expertise with global standards.",
    },
    {
      question: "How can I schedule a consultation?",
      answer:
        "You can schedule a consultation by using the contact form on our website, emailing us directly, or calling our office numbers. We'll arrange a meeting to discuss your specific needs.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in a wide range of industries including Manufacturing, Retail, Healthcare, Real Estate, Technology, and Financial Services, among others.",
    },
  ],
};
