export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

export const HOME_CONTENT = {
  heroImage: "/hero-bg.jpg",
  title: {
    line1: "Audit / Advisory",
    line2: "Made Simple.",
  },
  description:
    "Ashil & Associates delivers Audit, Accounting , Financial Advisory & Litigation services with a focus on world class standards , precision and professional integrity across India and Globally.",
  buttons: {
    primary: "Schedule Consultation",
    secondary: "Learn More",
  },
};

export const INDUSTRIES_AND_CLIENTS = {
  sectionHeader: "EXPERTISE ACROSS INDUSTRIES",
  title: "Excellence without borders.",
  description:
    "Ashil & Associates works with a diverse range of clients, from growing enterprises to established corporations. Our industry-focused expertise and regulatory insight enable us to deliver practical, compliant, and scalable financial solutions aligned with each client's business environment.",
  categories: [
    {
      title: "SMEs",
      description:
        "Practical advisory and compliance support for growing businesses.",
    },
    {
      title: "Corporates",
      description: "Structured, enterprise-grade audit and advisory services.",
    },
    {
      title: "Startups",
      description: "Scalable financial guidance from inception to expansion.",
    },
    {
      title: "GCC Businesses",
      description: "Specialized regional expertise across the GCC countries.",
    },
    {
      title: "Manufacturing",
      description:
        "Industry-focused audit, accounting, and compliance support.",
    },
    {
      title: "International Clients",
      description: "Cross-border taxation and regulatory advisory services.",
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
      type: "Address",
      lines: [
        "M/s Ashil & Associates",
        "Chartered Accountants",
        "Door No. 64/2822-D,",
        "Vazhakuttathil Building Kk Road,",
        "Opp Axis Bank,",
        "Cochin -682017",
      ],
      icon: "map-pin",
      url: "https://maps.app.goo.gl/ayZXTJUieC9iaFum7",
    },
    {
      type: "Phone",
      lines: [
        "Office : 0484 - 4062030",
        "Office : 0484 - 4042112",
        "Mob Phone : 9946010020",
      ],
      icon: "phone",
    },
    {
      type: "E-mail",
      lines: [
        "ashil@ashilandassociates.com",
        "info@ashilandassociates.com",
        "aakochin@ashilandassociates.com",
      ],
      icon: "mail",
    },
    // {
    //   type: "Website",
    //   lines: ["www.ashilandassociates.com"],
    //   icon: "globe",
    // },
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
  title: "Expert advisory. Reliable compliance. Long-term value.",
  buttonText: "GET STARTED TODAY",
  stats: [
    { number: "25+", label: "Years of Professional Experience" },
    { number: "500+", label: "Clients Served" },
    { number: "7", label: "Countries Served" },
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
  sectionHeader: "Leadership",
  title: "Our Core Team",
  members: [
    {
      name: "CA. Ashil M.A., FCA",
      role: "Senior Partner",
      description:
        "Founder and senior advisor with over 25 years of experience in audit, taxation, and regulatory advisory across India and the GCC.",
      // socials: { linkedin: "#", mail: "mailto:ashil@example.com" },
      image: "/ashil.jpg",
    },
    {
      name: "CA. Ceeja Udayanan, FCA",
      role: "Partner",
      description:
        "Specialist in financial reporting, auditing, and end-to-end accounting operations across diverse industries.",
      // socials: { linkedin: "#", mail: "mailto:ceeja@example.com" },
      image: "/ceeja.jpg",
    },
    {
      name: "CA. Saandra Thomas, FCA",
      role: "Partner",
      description:
        "Expert in internal audits, process frameworks, and forensic investigations with extensive public and private sector experience.",
      // socials: { linkedin: "#", mail: "mailto:saandra@example.com" },
      image: "/saandra.jpg",
    },
    {
      name: "CS. Manju Sebastian, ACS",
      role: "Senior Associate – Company Secretary",
      description:
        "Corporate governance and regulatory compliance professional with strong expertise in company law and board advisory.",
      // socials: { linkedin: "#", mail: "mailto:manju@example.com" },
      image: "/manju.jpg",
    },
    {
      name: "CA. Vidhya Muraly, ACA",
      role: "Senior Audit Manager",
      description:
        "Experienced audit professional specializing in statutory audits, taxation, and regulatory representations.",
      // socials: { linkedin: "#", mail: "mailto:vidhya@example.com" },
      image: "/vidhya.jpg",
    },
    {
      name: "Binsa N.H., CMA Finalist",
      role: "Team Head – International Outsource Division",
      description:
        "Leads international finance outsourcing and Virtual CFO engagements with a focus on MIS, compliance, and strategic finance.",
      // socials: { linkedin: "#", mail: "mailto:binsa@example.com" },
      image: "/binsa.jpg",
    },
  ],
};

export const FAQ_CONTENT = {
  sectionHeader: "FAQ",
  title: "Got a question? We're here to help.",
  items: [
    {
      question: "What services does Ashil & Associates offer?",
      answer:
        "Ashil & Associates provides a comprehensive range of professional services including audit and assurance, tax and regulatory compliance, GCC VAT and corporate tax advisory, accounting and bookkeeping, finance outsourcing, international taxation, and Virtual CFO services.",
    },
    {
      question: "Which regions do you serve?",
      answer:
        "We serve clients across India and the GCC region, including the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. We also support international clients with cross-border taxation and regulatory advisory.",
    },
    {
      question: "How can I schedule a consultation?",
      answer:
        "You can schedule a consultation by filling out the contact form on our website, emailing us directly, or calling our office. Our team will coordinate a meeting to understand your requirements and propose the appropriate solution.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We work with a diverse range of industries including SMEs, corporates, startups, manufacturing, service sectors, and international businesses. Our industry-focused approach ensures practical, compliant, and scalable financial solutions.",
    },
  ],
};

export const COMMITMENT_CONTENT = {
  sectionHeader: "OUR COMMITMENT",
  title: "Professional integrity. Delivered with precision.",
  description: {
    paragraph1:
      "At Ashil & Associates, every engagement is guided by strong ethical standards, regulatory discipline, and a commitment to excellence. We believe long-term client relationships are built on trust, transparency, and consistently reliable outcomes.",
    paragraph2:
      "Our approach combines deep technical expertise, industry knowledge, and technology-driven processes to deliver solutions that are accurate, compliant, and aligned with our clients' strategic objectives.",
  },
  values: [
    {
      icon: "shield",
      label: "Ethical Standards",
      description: "Strong ethical foundation in every engagement",
    },
    {
      icon: "target",
      label: "Regulatory Excellence",
      description: "Disciplined approach to compliance",
    },
    {
      icon: "check-circle",
      label: "Reliable Outcomes",
      description: "Consistently delivering on our promises",
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  sectionHeader: "OUR COMMITMENT",
  title: "Professional integrity. Delivered with precision.",
  items: [
    {
      quote:
        "At Ashil & Associates, every engagement is guided by strong ethical standards, regulatory discipline, and a commitment to excellence. We believe long-term client relationships are built on trust, transparency, and consistently reliable outcomes.",
      name: "Our Approach",
      title: "Excellence in Every Engagement",
      location: "Built on Trust",
      initial: "O",
    },
    {
      quote:
        "Our approach combines deep technical expertise, industry knowledge, and technology-driven processes to deliver solutions that are accurate, compliant, and aligned with our clients' strategic objectives.",
      name: "Our Promise",
      title: "Quality & Precision",
      location: "Client-Centric Focus",
      initial: "P",
    },
  ],
};

export const WHY_CHOOSE_US_CONTENT = {
  sectionHeader: "WHY CHOOSE US",
  title: "What sets us apart is not just expertise, it's trust.",
  buttonText: "GET STARTED",
  features: [
    {
      title: "Commitment to Compliance",
      subtitle: "Compliance isn't a task. It's our foundation.",
      description:
        "We ensure your business stays aligned with evolving regulatory requirements through meticulous audits, proactive compliance management, and strict adherence to statutory standards.",
      image: "/why-choose-us-1.jpg",
    },
    {
      title: "Absolute Confidentiality",
      subtitle: "Your data. Protected with integrity.",
      description:
        "We handle sensitive financial and business information with the highest levels of confidentiality, ethical responsibility, and robust security protocols.",
      image: "/why-choose-us-2.jpg",
    },
    {
      title: "Technology-Driven Processes",
      subtitle: "Smarter systems. Faster insights.",
      description:
        "By leveraging modern accounting tools, automation, and ERP-driven workflows, we deliver accurate reporting, operational efficiency, and actionable financial insights.",
      image: "/why-choose-us-3.jpg",
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
  title: "Over 15 years of expertise in audit, taxation, and advisory.",
  description: [
    "Ashil & Associates is a professionally managed Chartered Accountancy firm offering audit, taxation, accounting, and advisory services to businesses across India and Globally . Founded in 2010, the firm is backed by over 25 years of leadership experience and a strong commitment to professional integrity and regulatory excellence.",
    "We support corporates, SMEs, and international businesses with end-to-end solutions including statutory and forensic audits, tax compliance, accounting and bookkeeping, finance outsourcing, and Virtual CFO services. With deep expertise in Indian and GCC regulations, our team delivers accurate, timely, and technology-driven financial solutions tailored to each client’s needs.",
    "Delivering compliance-led solutions with global standards and local expertise.",
  ],
  stats: [
    { value: "25+", label: "Years of Professional Experience" },
    { value: "500+", label: "Clients Served" },
    { value: "7", label: "Countries Served" },
  ],
  image: "/about-img.jpg",
};

export const SERVICES_CONTENT = {
  sectionHeader: "WHAT WE OFFER",
  title: "OUR SERVICES",
  items: [
    {
      title: "Audit & Assurance",
      description:
        "Clarity you can trust. Assurance you can rely on. We deliver independent, high-quality audit services that strengthen financial credibility, ensure regulatory compliance, and build stakeholder confidence.",
      details: [
        "Statutory Audits",
        "Tax Audits",
        "Internal Audits",
        "Concurrent Audits",
        "Stock Audits",
        "Due Diligence",
        "Systems Audits",
        "Forensic Audits",
      ],
    },
    {
      title: "Tax & Regulatory Compliance",
      description:
        "Smarter tax decisions. Zero compliance stress. We help businesses stay compliant, optimize tax positions, and confidently navigate complex regulatory frameworks in India and overseas.",
      details: [
        "Income Tax Planning & Filing",
        "GST Registration & Returns",
        "TDS Compliance",
        "International Taxation ( FEMA )",
        "Transfer Pricing",
        "Tax Litigation Support",
      ],
    },
    {
      title: "GCC / VAT & Corporate Tax",
      description:
        "Local expertise. Global tax confidence. Specialized advisory and compliance services for businesses operating across GCC countries, ensuring seamless VAT and corporate tax compliance.",
      details: [
        "VAT Registration & Compliance",
        "Corporate Tax Advisory",
        "VAT Refund Services",
        "Tax Impact Assessment",
        "Transfer Pricing Documentation",
        "Tax Health Check",
      ],
    },
    {
      title: "Virtual CFO Advisory",
      description:
        "Strategic finance leadership—without a full-time CFO. Our Virtual CFO services provide senior-level financial insight to help businesses improve profitability, manage cash flows, and make informed decisions.",
      details: [
        "Financial Planning & Forecasting",
        "Budgeting & Performance Reviews",
        "MIS & Management Dashboards",
        "Cost Optimization Strategies",
        "Board & Investor Reporting",
      ],
    },
    {
      title: "International Taxation",
      description:
        "Cross-border operations. Handled with confidence. We assist businesses with international structuring, cross-border tax planning, and treaty advisory to ensure global compliance and tax efficiency.",
      details: [
        "Cross-border Tax Advisory",
        "Treaty Benefit Analysis",
        "Entity & Transaction Structuring",
        "Regulatory Compliance Support",
        "Global Tax Planning",
      ],
    },
  ],
};
