export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

export const HOME_CONTENT = {
  heroImage:
    "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1920&q=80",
  title: {
    line1: "Finance",
    line2: "Made Simple.",
  },
  description:
    "Ashil & Associates delivers world-class accounting and advisory services with a focus on precision and professional integrity across India and the GCC.",
  buttons: {
    primary: "Schedule Consultation",
    secondary: "Learn More",
  },
};

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

export const TESTIMONIALS_CONTENT = {
  sectionHeader: "TESTIMONIALS",
  title: "Hear From Those Who Achieved Financial Freedom",
  items: [
    {
      quote:
        "Ashil & Associates transformed our financial operations. Their expertise in GCC taxation and compliance has been invaluable for our cross-border business. The team's dedication to timely delivery and accuracy is exceptional.",
      name: "Rajesh Kumar",
      title: "CEO, TechNext Solutions",
      location: "Dubai, UAE",
      initial: "R",
    },
    {
      quote:
        "Working with Ashil & Associates has been a game-changer for our business. Their strategic financial planning and tax optimization strategies have significantly improved our bottom line. Highly recommended!",
      name: "Sarah Al-Mansoori",
      title: "CFO, Global Ventures",
      location: "Abu Dhabi, UAE",
      initial: "S",
    },
    {
      quote:
        "The professionalism and expertise of Ashil & Associates is unmatched. They helped us navigate complex regulatory requirements with ease. Their personalized approach makes all the difference.",
      name: "Mohammed Hassan",
      title: "Managing Director, Emirates Trading Co.",
      location: "Sharjah, UAE",
      initial: "M",
    },
  ],
};

export const WHY_CHOOSE_US_CONTENT = {
  sectionHeader: "WHY CHOOSE US",
  title: "Amazing accounting statistics show the power of numbers.",
  buttonText: "GET STARTED",
  features: [
    {
      title: "What sets us apart? Strong commitment to compliance.",
      description:
        "We ensure your business adheres to all regulatory requirements with meticulous attention to detail and proactive compliance management.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "We value your trust with absolute confidentiality.",
      description:
        "Your financial information is protected with stringent security protocols and professional ethics that prioritize your privacy.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Embrace automation with technology-driven processes.",
      description:
        "Leveraging cutting-edge tools and automation to deliver accurate, efficient, and insightful financial solutions.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const KEY_SERVICES_CONTENT = [
  "Audit Assurance",
  "Tax Compliance",
  "Virtual CFO",
  "GCC VAT",
  "Corporate Tax",
  "Accounting Services",
  "Business Advisory",
  "Financial Planning",
];

export const ABOUT_CONTENT = {
  sectionHeader: "ABOUT THE FIRM",
  title: "With a global reach, our firm has been in business since 1998.",
  description: [
    "Ashil & Associates is a distinguished Chartered Accountancy firm committed to delivering exceptional professional services across India and the GCC region. With a foundation built on integrity, expertise, and client-centric values, we serve as trusted advisors to businesses navigating complex financial landscapes.",
    "Our multidisciplinary team brings together specialists in taxation, audit, advisory, and technology-driven financial solutions. We pride ourselves on understanding each client's unique needs and delivering tailored strategies.",
  ],
  stats: [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Clients Served" },
    { value: "7", label: "Countries" },
  ],
  image:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
};

export const SERVICES_CONTENT = {
  sectionHeader: "WHAT WE OFFER",
  title: "Our Services",
  items: [
    {
      title: "Audit & Assurance",
      description:
        "Comprehensive audit services ensuring accuracy, compliance, and transparency in financial reporting.",
      details: [
        "Statutory Audits",
        "Internal Audits",
        "Tax Audits",
        "Concurrent Audits",
        "Stock Audits",
        "Due Diligence",
      ],
    },
    {
      title: "Tax & Regulatory Compliance",
      description:
        "Expert guidance on tax planning, compliance, and regulatory requirements to optimize your tax position.",
      details: [
        "Income Tax Planning & Filing",
        "GST Registration & Returns",
        "TDS Compliance",
        "Transfer Pricing",
        "International Taxation",
        "Tax Litigation Support",
      ],
    },
    {
      title: "GCC/VAT & Corporate Tax",
      description:
        "Specialized services for GCC region VAT and Corporate Tax compliance and advisory.",
      details: [
        "VAT Registration & Compliance",
        "Corporate Tax Advisory",
        "Tax Impact Assessment",
        "VAT Refund Services",
        "Transfer Pricing Documentation",
        "Tax Health Check",
      ],
    },
    {
      title: "Virtual CFO Advisory",
      description:
        "Strategic financial leadership and guidance without the cost of a full-time CFO.",
      details: [
        "Financial Planning & Analysis",
        "Budgeting & Forecasting",
        "Cash Flow Management",
        "Financial Reporting",
        "Strategic Business Advisory",
        "Risk Management",
      ],
    },
    {
      title: "International Taxation",
      description:
        "Navigate complex cross-border tax issues with our international taxation expertise.",
      details: [
        "Cross-Border Tax Planning",
        "DTAA Benefits",
        "Foreign Tax Credit",
        "FEMA Compliance",
        "Expatriate Taxation",
        "Global Mobility Services",
      ],
    },
  ],
};
