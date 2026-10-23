export interface InitialService {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  iconName: string;
  bannerUrl: string;
  features: string[];
  order: number;
  isPublished: boolean;
}

export interface InitialProduct {
  id: string;
  slug: string;
  name: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  targetAudience: string;
  keyBenefits: string[];
  liveDemoUrl: string;
  order: number;
  isPublished: boolean;
}

export interface InitialCaseStudy {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: { metric: string; label: string }[];
  imageUrl: string;
  tags: string[];
  isFeatured: boolean;
  order: number;
  isPublished: boolean;
}

export interface InitialIndustry {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
  keySolutions: string[];
  order: number;
  isPublished: boolean;
}

export const INITIAL_SERVICES: InitialService[] = [
  {
    id: "srv-sap",
    slug: "sap-solution-consulting",
    title: "SAP Solutions & Consulting",
    subtitle: "Enterprise Systems Aligned with Business Strategy",
    shortDesc: "We handle implementation to optimization, aligning your enterprise systems with strategic goals for optimal performance.",
    fullDesc: "Adamas Tech Consulting offers full lifecycle SAP consulting from architectural roadmap and greenfield S/4HANA migrations to Treasury, Cash Management, and SAP Analytics Cloud. Our certified consultants optimize core business processes, eliminate data silos, and enable real-time operational visibility.",
    category: "Enterprise ERP",
    iconName: "Layers",
    bannerUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/SAP-Solutions-and-COnsulting-mini-banner-1.webp",
    features: [
      "Streamline Operations Across Business Units",
      "Real-Time Data-Driven Insights with SAC",
      "S/4HANA Greenfield & Brownfield Migrations",
      "Automated Cash Management & Treasury"
    ],
    order: 1,
    isPublished: true,
  },
  {
    id: "srv-aws",
    slug: "aws-solutions",
    title: "AWS Solutions & Cloud Services",
    subtitle: "Scalable Cloud Architecture & AI Automation",
    shortDesc: "Harness advanced AWS services in AI, automation, and cloud to drive digital transformation, efficiency, and scalable growth.",
    fullDesc: "Modernize infrastructure, automate deployment pipelines, and optimize compute spend with AWS-certified architects. From serverless microservices and container orchestration on ECS/EKS to AI-driven developer productivity using Amazon Q Developer, we engineer cloud platforms built for enterprise resilience.",
    category: "Cloud & DevOps",
    iconName: "Cloud",
    bannerUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/Frame-3106.webp",
    features: [
      "Eliminate Tech Debt with Q Developer",
      "Scalable Hosting & High Availability on EC2",
      "Serverless Architecture & Event-Driven Systems",
      "Enterprise Cloud Security & Well-Architected Reviews"
    ],
    order: 2,
    isPublished: true,
  },
  {
    id: "srv-ai",
    slug: "ai-data-analytics",
    title: "AI/ML & Data Analytics",
    subtitle: "Intelligent Automation & Computer Vision",
    shortDesc: "Automate processes to enhance efficiency and reduce operational costs through cutting-edge artificial intelligence and computer vision.",
    fullDesc: "We translate advanced machine learning models into high-impact operational tools. Our capabilities include edge computer vision (facial recognition, ANPR, automated inspection), predictive analytics for demand planning, natural language understanding, and automated decision-making engines.",
    category: "Artificial Intelligence",
    iconName: "Cpu",
    bannerUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/inteli-mini.webp",
    features: [
      "Computer Vision & High-Speed Edge Recognition",
      "Automated Process Intelligence & Workflow Bots",
      "Predictive Modeling & Demand Forecasting",
      "Secure On-Premise & Cloud ML Deployments"
    ],
    order: 3,
    isPublished: true,
  },
  {
    id: "srv-netsuite",
    slug: "oracle-netsuite-solutions",
    title: "Oracle NetSuite Services",
    subtitle: "Unified Cloud ERP for Fast-Growing Enterprises",
    shortDesc: "Unified Cloud ERP for modern construction, retail, and manufacturing enterprises requiring real-time financial control.",
    fullDesc: "Accelerate financial close times, consolidate global subsidiaries, and eliminate fragmented spreadsheets with certified Oracle NetSuite implementation and customization. We build tailored SuiteScript workflows, third-party integrations, and automated billing engines.",
    category: "Enterprise ERP",
    iconName: "Compass",
    bannerUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/oraclenetsuite.webp",
    features: [
      "Single-Database Global Financial Consolidation",
      "Industry-Specific SuiteApp & SuiteScript Customization",
      "Automated Order-to-Cash & Procure-to-Pay Cycles",
      "Real-Time Executive Dashboards & KPI Tracking"
    ],
    order: 4,
    isPublished: true,
  },
  {
    id: "srv-openedx",
    slug: "openedx",
    title: "Open edX® Platform Services",
    subtitle: "Scalable Digital Learning & Campus Academics",
    shortDesc: "Custom development and enterprise services for scalable, highly engaging educational platforms and corporate academies.",
    fullDesc: "As an Open edX service provider, we design, deploy, and support customized digital learning environments for universities, governments, and enterprise training academies. We engineer custom XBlocks, LMS/CMS theming, LTI integrations, and high-concurrency cloud hosting.",
    category: "EdTech",
    iconName: "GraduationCap",
    bannerUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/openedx-mini.webp",
    features: [
      "Custom Micro-Frontend LMS & CMS Theming",
      "Third-Party SIS & CRM System Integration (LTI)",
      "High-Concurrency Cloud Architecture on AWS",
      "Automated Assessment & Learner Analytics"
    ],
    order: 5,
    isPublished: true,
  },
  {
    id: "srv-transform",
    slug: "technology-transformation",
    title: "Technology Transformation",
    subtitle: "Legacy Modernization & Digital Agility",
    shortDesc: "Enhance operational efficiency, agility, and scalability by systematically modernizing legacy applications and architectures.",
    fullDesc: "Digital transformation is more than new software—it is aligning business architecture, technology stacks, and operational culture. We untangle monolithic codebases, implement event-driven architectures, and implement DevOps culture to help enterprises adapt swiftly to market changes.",
    category: "Strategy & Transformation",
    iconName: "Zap",
    bannerUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/tt-miin.webp",
    features: [
      "Monolith to Microservices Deconstruction",
      "CI/CD Pipeline Automation & Automated Testing",
      "API First & Integration Middleware Design",
      "Digital Roadmap & Enterprise Architecture Audits"
    ],
    order: 6,
    isPublished: true,
  },
  {
    id: "srv-mdg",
    slug: "master-data-governance",
    title: "Master Data Governance",
    subtitle: "Golden Records & Regulatory Trust",
    shortDesc: "Establish a single source of enterprise truth, data quality frameworks, and audit-ready governance protocols.",
    fullDesc: "Maintain data integrity across disparate ERP, CRM, and supply chain applications. Our master data governance solutions enforce automated data validation, role-based stewardship workflows, and compliance controls that eliminate duplicate records and costly operational errors.",
    category: "Data Management",
    iconName: "Database",
    bannerUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/tech-Excellence-1.webp",
    features: [
      "Centralized Domain Governance (Customer, Vendor, Material)",
      "Automated Deduplication & Quality Rules",
      "Regulatory Audit Trails & Lineage Tracking",
      "Multi-System Data Synchronization"
    ],
    order: 7,
    isPublished: true,
  },
  {
    id: "srv-analytics",
    slug: "data-science-analytics",
    title: "Data Science & Advanced Analytics",
    subtitle: "From Raw Data to Strategic Competitive Advantage",
    shortDesc: "Extract deep predictive value and actionable intelligence from complex business data streams with advanced analytics.",
    fullDesc: "Build enterprise data lakes and interactive intelligence suites. We design modern data pipelines, automated ETL/ELT transformations, and predictive machine learning models that help executives forecast revenue, optimize inventory, and reduce customer churn.",
    category: "Data & BI",
    iconName: "BarChart3",
    bannerUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/Card-1-case-studies.webp",
    features: [
      "Modern Data Warehouse & Lakehouse Engineering",
      "Executive PowerBI & Tableau Intelligence Portals",
      "Predictive Machine Learning Algorithms",
      "Real-Time Streaming Analytics"
    ],
    order: 8,
    isPublished: true,
  },
  {
    id: "srv-einvoice",
    slug: "e-invoicing-uae",
    title: "UAE E-Invoicing & Compliance",
    subtitle: "Turnkey FTA Mandate Integration",
    shortDesc: "Seamless compliance with UAE Federal Tax Authority (FTA) mandates and electronic invoicing standards.",
    fullDesc: "Ensure immediate compliance with UAE national e-invoicing legislation. We integrate directly with your ERP (SAP, Oracle NetSuite, Microsoft Dynamics) to generate, validate, sign, and transmit e-invoices via certified Peppol access points with zero business interruption.",
    category: "Compliance & Fintech",
    iconName: "FileCheck",
    bannerUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/tech-Excellence-1.webp",
    features: [
      "Peppol Access Point & XML Format Conformance",
      "Native ERP Integration for SAP and Oracle NetSuite",
      "Real-Time FTA Clearance & Cryptographic Signatures",
      "Secure Archived Ledger & Tax Audit Compliance"
    ],
    order: 9,
    isPublished: true,
  },
  {
    id: "srv-appdev",
    slug: "application-development",
    title: "Application Development",
    subtitle: "Custom Cloud, Web & Mobile Engineering",
    shortDesc: "Robust, secure, and user-centric custom software engineered to address unique enterprise operational workflows.",
    fullDesc: "When off-the-shelf software falls short, we engineer bespoke web and mobile platforms designed for high transaction volume, ironclad security, and frictionless user experiences. Built with modern TypeScript, Next.js, Flutter, and secure cloud microservices.",
    category: "Custom Engineering",
    iconName: "Code2",
    bannerUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/Image-_Right.webp",
    features: [
      "Enterprise Next.js & React Web Applications",
      "iOS & Android Mobile Applications",
      "High-Performance REST & GraphQL Microservices",
      "OWASP Top-10 Compliant Security Architecture"
    ],
    order: 10,
    isPublished: true,
  }
];

export const INITIAL_PRODUCTS: InitialProduct[] = [
  {
    id: "prd-ums",
    slug: "arivoo-ums",
    name: "Arivoo UMS",
    tag: "University Management System",
    shortDesc: "Efficient campus operations, improved student experience.",
    fullDesc: "Arivoo UMS transforms higher education administration with a modular, cloud-based platform. Built to support multi-campus universities, it automates student enrollment, curriculum management, faculty assignments, fee collections with payment gateway integration, and transcript generation.",
    targetAudience: "Universities, Higher Education Colleges, Multi-campus Institutions",
    keyBenefits: [
      "Automated paperless admissions and applicant ranking",
      "Semester credit tracking and automated grading calculations",
      "Integrated tuition fee invoicing and payment reconciliation",
      "Self-service student portal and faculty research dashboards"
    ],
    liveDemoUrl: "https://arivoo.in/arivoo-ums",
    order: 1,
    isPublished: true,
  },
  {
    id: "prd-sms",
    slug: "arivoo-sms",
    name: "Arivoo SMS",
    tag: "School Management System",
    shortDesc: "Streamlined school administration, enhanced learning experience.",
    fullDesc: "Arivoo SMS connects school leadership, teachers, parents, and students in one transparent ecosystem. Features automated biometric attendance, digital report cards, bus GPS tracking, fee schedules, and mobile instant notifications.",
    targetAudience: "K-12 Schools, Educational Trusts, Academy Groups",
    keyBenefits: [
      "Daily biometric attendance with instant parent SMS/app alerts",
      "Interactive gradebooks and CBSE/ICSE/IB report card generation",
      "Fleet transport management with real-time GPS tracking",
      "Online fee collection with zero manual reconciliation errors"
    ],
    liveDemoUrl: "https://arivoo.in/arivoo-sms",
    order: 2,
    isPublished: true,
  },
  {
    id: "prd-lms",
    slug: "arivoo-lms",
    name: "Arivoo LMS",
    tag: "Learning Management System",
    shortDesc: "Centralized learning, seamless education, enhanced outcomes.",
    fullDesc: "Arivoo LMS delivers an intuitive, engaging learning environment for academic institutions and enterprise training teams. Supporting video streaming, SCORM modules, interactive quizzes, peer discussions, and automated certifications.",
    targetAudience: "Academic Institutions, Corporate Training Academies, Certification Bodies",
    keyBenefits: [
      "Interactive course builder supporting SCORM and video embeds",
      "Automated quizzes with question banks and anti-cheat timers",
      "Granular learner progress tracking and drop-off analytics",
      "Custom branded certificates with verifiable QR verification"
    ],
    liveDemoUrl: "https://arivoo.in/arivoo-lms",
    order: 3,
    isPublished: true,
  },
  {
    id: "prd-testguard",
    slug: "testguard",
    name: "TestGUARD",
    tag: "Assessment & AI Proctoring Platform",
    shortDesc: "Secure online exams, integrity ensured remotely.",
    fullDesc: "TestGUARD provides bulletproof academic and recruitment assessment integrity. Featuring AI-powered live proctoring (gaze tracking, multi-face detection, background audio monitoring, browser lockdown), automated question randomization, and instant grading.",
    targetAudience: "Certification Authorities, Universities, Corporate Recruitment Teams",
    keyBenefits: [
      "AI webcam gaze tracking and secondary monitor detection",
      "Secure browser lock preventing copy-paste and window switching",
      "Automated grading for objective and code execution questions",
      "Detailed candidate integrity scorecard with video timestamp evidence"
    ],
    liveDemoUrl: "https://arivoo.in/testguard",
    order: 4,
    isPublished: true,
  }
];

export const INITIAL_CASE_STUDIES: InitialCaseStudy[] = [
  {
    id: "cs-ai-security",
    slug: "effortless-security-ai",
    title: "Effortless Security Through AI Facial Recognition",
    clientName: "Enterprise Campus & Business Park",
    industry: "Commercial Infrastructure & Security",
    challenge: "High-density facility faced severe lobby bottleneck delays, card passbacks, and manual visitor registry vulnerabilities during peak shift transitions.",
    solution: "Architected edge AI computer vision nodes with real-time multi-angle facial recognition, automated visitor badge kiosks, and integrated access turnstiles.",
    results: "Reduced entrance latency from 24 seconds to under 0.8 seconds per person while achieving 99.8% biometric verification accuracy and zero unauthorized entries.",
    metrics: [
      { metric: "< 0.8s", label: "Verification Speed" },
      { metric: "99.8%", label: "Biometric Accuracy" },
      { metric: "85%", label: "Throughput Increase" }
    ],
    imageUrl: "/images/case-studies/security-ai.jpg",
    tags: ["AI/ML", "Computer Vision", "Edge Computing", "IoT Security"],
    isFeatured: true,
    order: 1,
    isPublished: true,
  },
  {
    id: "cs-ai-parking",
    slug: "effortless-parking-ai",
    title: "Effortless Parking with AI Intelligence",
    clientName: "Metro Commercial Center",
    industry: "Smart Infrastructure",
    challenge: "Manual ticket dispensing caused long vehicle queues on adjacent main thoroughfares, significant toll leakage, and driver frustration in locating vacant spaces.",
    solution: "Implemented an automated License Plate Recognition (ANPR) system with optical sensor guidance and seamless contactless digital payment checkout.",
    results: "Eliminated entry barrier delays entirely, boosted peak parking throughput by 40%, and achieved 100% auditable revenue capture.",
    metrics: [
      { metric: "40%", label: "Throughput Growth" },
      { metric: "99.4%", label: "Plate Recognition Rate" },
      { metric: "100%", label: "Audited Revenue" }
    ],
    imageUrl: "/images/case-studies/parking-ai.jpg",
    tags: ["AI Intelligence", "Smart Cities", "ANPR", "Automation"],
    isFeatured: true,
    order: 2,
    isPublished: true,
  },
  {
    id: "cs-sap-treasury",
    slug: "sap-treasury-cash-management",
    title: "Boosting Cash Forecasting by 30%",
    clientName: "Multinational Manufacturing & Export Group",
    industry: "Financial Services & Manufacturing",
    challenge: "Treasury teams spent 4 business days manually gathering spreadsheet reports across 14 international bank branches, leaving the firm vulnerable to currency fluctuations.",
    solution: "Integrated SAP S/4HANA Treasury and Cash Management with automated SWIFT/Host-to-Host bank feeds and real-time multi-currency liquidity dashboards.",
    results: "Enabled instant same-day consolidated liquidity reporting, reduced foreign exchange transaction costs, and increased cash forecasting accuracy by 30%.",
    metrics: [
      { metric: "30%", label: "Cash Forecasting Accuracy" },
      { metric: "4 Days → Same Day", label: "Liquidity Visibility" },
      { metric: "14", label: "Banks Harmonized" }
    ],
    imageUrl: "/images/case-studies/cash-forecasting.jpg",
    tags: ["SAP S/4HANA", "Treasury & Risk", "Cash Management", "FinTech"],
    isFeatured: true,
    order: 3,
    isPublished: true,
  },
  {
    id: "cs-sap-analytics",
    slug: "sap-analytics-liquor-manufacturing",
    title: "Reducing Production Cost in Liquor Manufacturing",
    clientName: "Distillery & Beverage Manufacturer",
    industry: "Food & Beverage Manufacturing",
    challenge: "Lack of real-time shop floor visibility led to significant batch raw-material wastage, unplanned equipment downtime, and delayed batch quality certification.",
    solution: "Deployed SAP Analytics Cloud (SAC) unified with shop-floor IoT sensors and production planning modules to provide predictive batch quality indicators.",
    results: "Reduced raw material variance losses by 18% and gave plant managers predictive maintenance alerts that averted an estimated $420k in unplanned stoppages.",
    metrics: [
      { metric: "18%", label: "Variance Reduction" },
      { metric: "$420k+", label: "Downtime Savings" },
      { metric: "Real-time", label: "Shop Floor Ingestion" }
    ],
    imageUrl: "/images/case-studies/manufacturing-analytics.jpg",
    tags: ["SAP Analytics Cloud", "IoT", "Cost Optimization", "Manufacturing"],
    isFeatured: true,
    order: 4,
    isPublished: true,
  }
];

export const INITIAL_INDUSTRIES: InitialIndustry[] = [
  {
    id: "ind-edu",
    slug: "education",
    name: "Education",
    title: "Education Technology Solutions",
    description: "Empower educational institutions with advanced Learning Management Systems (LMS), University Management Systems (UMS), and School Management Systems (SMS). Our solutions streamline operations, enhance student engagement, and support digital learning.",
    iconName: "GraduationCap",
    imageUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/Frame-2482.webp",
    keySolutions: [
      "Arivoo UMS & SMS Campus Management",
      "Open edX Custom LMS Deployment",
      "TestGUARD Secure Examination Proctoring",
      "Automated Student Information Systems (SIS)"
    ],
    order: 1,
    isPublished: true,
  },
  {
    id: "ind-retail",
    slug: "retail",
    name: "Retail",
    title: "Retail and E-Commerce Platforms",
    description: "Drive growth in the retail and e-commerce sector with scalable platforms that support omnichannel storefronts, personalized marketing, automated inventory management, and ERP synchronization.",
    iconName: "ShoppingBag",
    imageUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/Frame-2485.webp",
    keySolutions: [
      "Omnichannel ERP & Warehouse Integration",
      "Automated Order-to-Fulfillment Pipelines",
      "Real-Time Inventory Forecasting",
      "Customer Loyalty & Personalization Engines"
    ],
    order: 2,
    isPublished: true,
  },
  {
    id: "ind-health",
    slug: "healthcare",
    name: "Healthcare",
    title: "Healthcare Management Systems",
    description: "Revolutionize healthcare delivery with robust management systems designed for hospitals, clinics, and healthcare networks, ensuring HIPAA-compliant patient records, scheduling, and analytics.",
    iconName: "Activity",
    imageUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/Frame-2488.webp",
    keySolutions: [
      "Hospital Information Management Systems (HIMS)",
      "Secure Electronic Health Records (EHR)",
      "Automated Patient Consultation Booking",
      "Clinical Diagnostics Data Analytics"
    ],
    order: 3,
    isPublished: true,
  },
  {
    id: "ind-fin",
    slug: "finance",
    name: "Finance",
    title: "Financial Services Automation",
    description: "Optimize financial operations with solutions that streamline processes, improve regulatory compliance, and enhance customer engagement. Includes SAP Treasury, automated workflows, and risk modeling.",
    iconName: "Landmark",
    imageUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/Frame-2497.webp",
    keySolutions: [
      "SAP S/4HANA Treasury & Cash Management",
      "UAE E-Invoicing & Compliance Integration",
      "Automated Multi-Bank Reconciliation",
      "Algorithmic Risk & Fraud Detection"
    ],
    order: 4,
    isPublished: true,
  },
  {
    id: "ind-hosp",
    slug: "hospitality",
    name: "Hospitality",
    title: "Hospitality and Tourism Management",
    description: "Enhance guest experiences and streamline operations with our tailored solutions for the hospitality and tourism industry. Includes direct booking platforms, property management, and automated guest services.",
    iconName: "Hotel",
    imageUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/Frame-2504.webp",
    keySolutions: [
      "Property Management System (PMS) Integrations",
      "Automated Guest Booking Engines",
      "Contactless Check-In with Mobile Key",
      "Dynamic Room Pricing Algorithms"
    ],
    order: 5,
    isPublished: true,
  },
  {
    id: "ind-supply",
    slug: "supply-chain",
    name: "Supply Chain",
    title: "Manufacturing and Supply Chain Optimization",
    description: "Increase efficiency and productivity in manufacturing with solutions that optimize supply chain management, plant maintenance, production planning, and inventory control.",
    iconName: "Truck",
    imageUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/Frame-2517-1.webp",
    keySolutions: [
      "SAP & NetSuite ERP Supply Chain Customization",
      "Predictive Equipment Maintenance with IoT",
      "Automated Warehouse Management (WMS)",
      "Supplier Portal & Procure-to-Pay Automation"
    ],
    order: 6,
    isPublished: true,
  },
  {
    id: "ind-public",
    slug: "public-sector",
    name: "Public Sector",
    title: "Public Sector and Government Solutions",
    description: "Transform public services with digital solutions that enhance transparency, improve citizen engagement, and streamline processes with e-governance platforms and high-trust registries.",
    iconName: "ShieldCheck",
    imageUrl: "https://adamastechconsulting.com/wp-content/uploads/2026/03/PS.webp",
    keySolutions: [
      "Citizen Self-Service Portals",
      "Secure Digital Identity & Access Governance",
      "Statutory Tax & E-Invoicing Engines",
      "Audit-Ready Public Records Infrastructure"
    ],
    order: 7,
    isPublished: true,
  }
];

export const INITIAL_OFFICES = [
  {
    city: "London",
    country: "United Kingdom",
    badge: "UK & Europe HQ",
    address: "Golden Cross House, 8 Duncannon Street, London WC2N 4JF",
    phone: "+44 7768 706988",
    email: "marketing@adamastech.in",
  },
  {
    city: "San Francisco / Palo Alto",
    country: "United States",
    badge: "North America Office",
    address: "530 Lytton Avenue, 2nd Floor, Palo Alto, CA 94301",
    phone: "+1 650 321 0000",
    email: "marketing@adamastech.in",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    badge: "Middle East HQ",
    address: "B-2101, 1601 & 801 Latifa Tower near Trade Centre, Sheikh Zayed Road, Dubai",
    phone: "+971 4 705 6001",
    email: "marketing@adamastech.in",
  },
  {
    city: "Bengaluru",
    country: "India",
    badge: "Tech Delivery Center",
    address: "27th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+91 6296680677",
    email: "marketing@adamastech.in",
  },
  {
    city: "Kolkata",
    country: "India",
    badge: "Corporate Delivery Office",
    address: "Haute Street, Topsia Road, Kolkata, West Bengal 700046",
    phone: "+91 6296680677",
    email: "marketing@adamastech.in",
  }
];

export const INITIAL_PARTNERS = [
  { name: "SAP Partner", category: "Enterprise ERP", logoText: "SAP" },
  { name: "AWS Partner Network", category: "Cloud & AI", logoText: "AWS" },
  { name: "Oracle NetSuite", category: "Cloud ERP", logoText: "Oracle NetSuite" },
  { name: "MigNOW", category: "Migration Automation", logoText: "MigNOW" },
  { name: "techUK", category: "Trade Association", logoText: "techUK" },
  { name: "London Chamber of Commerce", category: "Trade & Commerce", logoText: "LCCI" },
  { name: "Open edX", category: "Education Partner", logoText: "Open edX" }
];

export const VERIFIED_STATS = [
  { value: "22+", label: "Years Experience", description: "Proven enterprise consulting heritage" },
  { value: "950+", label: "Projects Delivered", description: "Across global markets and sectors" },
  { value: "99%", label: "Client Satisfaction", description: "Measured by repeat enterprise retainers" },
  { value: "5 Mins", label: "Consultation Response", description: "Dedicated enterprise response SLA" }
];
