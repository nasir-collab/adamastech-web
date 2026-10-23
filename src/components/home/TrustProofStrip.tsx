"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  TrendingUp,
  Users,
  Globe2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  Landmark,
  GraduationCap,
  Activity,
  Cpu,
  Search,
  PhoneCall,
  ChevronDown,
  Layers,
  Award,
  Server,
} from "lucide-react";
import { AdamasLogo } from "../common/AdamasLogo";
import { RegionToggler } from "../common/RegionToggler";

export function TrustProofStrip() {
  const [activeTab, setActiveTab] = useState(0);
  const stats = [
    {
      value: "22+",
      label: "Years Enterprise Heritage",
      sublabel: "Backed by RICE Adamas Group",
      icon: Briefcase,
      color: "var(--brand-orange-primary)",
    },
    {
      value: "950+",
      label: "Enterprise Deployments",
      sublabel: "Across Fortune 500 & Governments",
      icon: TrendingUp,
      color: "#1890D7",
    },
    {
      value: "99%",
      label: "Client Retention & CSAT",
      sublabel: "Senior-Led Account Governance",
      icon: Users,
      color: "#10B981",
    },
    {
      value: "4",
      label: "Global Delivery Hubs",
      sublabel: "London · Dubai · New York · Kolkata",
      icon: Globe2,
      color: "#38BDF8",
    },
  ];

  const accreditations = [
    {
      badgeLabel: "QUALITY & SECURITY STANDARDS",
      name: "ISO 9001 & 27001",
      detail: "Certified Quality Management & Zero-Trust Information Security frameworks.",
      statusText: "BSI & DQS Audited Standard",
      accentColor: "#10B981",
      glowColor: "rgba(16, 185, 129, 0.15)",
      isIsoDual: true,
      logos: [
        { src: "/images/certifications/iso-9001.png", alt: "BSI ISO 9001 Quality Management Certified", maxHeight: 36 },
        { src: "/images/certifications/iso-27001.png", alt: "DQS ISO/IEC 27001 Information Security Certified", maxHeight: 38 },
      ],
    },
    {
      badgeLabel: "HIGH-MATURITY GOVERNANCE",
      name: "CMMI Maturity Level 3",
      detail: "Internationally appraised delivery benchmark for zero-defect software engineering.",
      statusText: "Appraised DEV v2.0 Benchmark",
      accentColor: "var(--brand-orange-primary)",
      glowColor: "rgba(243, 111, 33, 0.15)",
      isIsoDual: false,
      logo: { src: "/images/certifications/artboard-cmmi.png", alt: "CMMI Institute Maturity Level 3 Appraised", maxHeight: 44 },
    },
    {
      badgeLabel: "TIER-1 CLOUD ALLIANCE",
      name: "AWS Advanced Tier",
      detail: "Certified enterprise cloud architects with audited migration & modernization competencies.",
      statusText: "Premier Cloud Architecture Partner",
      accentColor: "#FF9900",
      glowColor: "rgba(255, 153, 0, 0.15)",
      isIsoDual: false,
      logo: { src: "/images/partners/aws-partner.webp", alt: "AWS Partner Advanced Tier", maxHeight: 46 },
    },
    {
      badgeLabel: "ENTERPRISE ERP ALLIANCE",
      name: "SAP Certified Partner",
      detail: "S/4HANA migration, treasury integration, and automated enterprise cloud ecosystems.",
      statusText: "SAP PartnerEdge Gold Certified",
      accentColor: "#0070F2",
      glowColor: "rgba(0, 112, 242, 0.15)",
      isIsoDual: false,
      logo: { src: "/images/partners/sap-partner.webp", alt: "SAP Certified PartnerEdge Solutions", maxHeight: 46 },
    },
  ];

  // Verified Client Logos for Infinite Cinematic Marquee
  const clientLogos = [
    { name: "PwC", src: "/images/clients/client-1.webp" },
    { name: "Careem", src: "/images/clients/client-2.webp" },
    { name: "United Foods", src: "/images/clients/client-3.webp" },
    { name: "GRSE", src: "/images/clients/client-4.webp" },
    { name: "WorkIndia", src: "/images/clients/client-5.webp" },
    { name: "Aldar Properties", src: "/images/clients/client-6.webp" },
    { name: "Pi Square Technologies", src: "/images/clients/client-15.webp" },
    { name: "Apex Logistics", src: "/images/clients/client-7.webp" },
    { name: "Sovereign Infra", src: "/images/clients/client-8.webp" },
    { name: "Global Financial", src: "/images/clients/client-10.webp" },
    { name: "NHS Health AI", src: "/images/clients/client-11.webp" },
    { name: "Tech Corp", src: "/images/clients/client-12.webp" },
  ];

  const marqueeTrack = [...clientLogos, ...clientLogos];

  // Menu-Driven Enterprise Practice Tabs (Directly matching the Navbar menu: Services, Products, Industries, Success Stories, Consulting)
  const menuTabs = [
    {
      id: "services",
      menuLabel: "Services",
      hasDropdown: true,
      icon: Server,
      tag: "TIER-1 CLOUD & SAP CONSULTING",
      title: "Mission-Critical Core Modernization & Scaled Cloud Infrastructure",
      statNumber: "+30%",
      statLabel: "Treasury & Forecast Velocity",
      desc: "End-to-end SAP S/4HANA transformations, AWS advanced cloud architecture, and real-time enterprise AI analytics delivering audited ROI across multinational banking and industrial operations.",
      clientLogo: "/images/clients/client-1.webp",
      clientName: "PwC & Tier-1 Global Banks",
      accentColor: "#38BDF8",
      image: "/images/industries/bfsi.jpg",
      browserUrl: "adamastech.in/services/sap-aws-cloud",
      features: [
        "Certified SAP Gold & AWS Advanced Cloud Architects",
        "Zero-Downtime Host-to-Host SWIFT Reconciliation Across 14 Nodes",
        "AI-Augmented Risk & Predictive Enterprise Liquidity Engine",
      ],
      subItems: [
        { name: "SAP Solutions", href: "/services/sap-solution-consulting" },
        { name: "AWS Cloud", href: "/services/aws-solutions" },
        { name: "AI & Data Analytics", href: "/services/ai-data-analytics" },
        { name: "Oracle NetSuite", href: "/services/oracle-netsuite-solutions" },
      ],
      primaryCta: { label: "Explore Services Practice", href: "/services" },
      secondaryCta: { label: "View SAP Architecture", href: "/services/sap-solution-consulting" },
    },
    {
      id: "products",
      menuLabel: "Products",
      hasDropdown: true,
      icon: Layers,
      tag: "PROPRIETARY SAAS & EDTECH ECOSYSTEM",
      title: "Arivoo UMS/LMS & TestGUARD AI Powering 180,000+ Active Learners",
      statNumber: "180k+",
      statLabel: "Active Students Enrolled",
      desc: "Proprietary campus OS unifying student admissions, exam scheduling, remote AI proctoring, and fee reconciliation for premier university consortiums and global educational institutions.",
      clientLogo: "/images/clients/client-15.webp",
      clientName: "120-Acre Adamas Campus Hub",
      accentColor: "#10B981",
      image: "/images/about-rice-adamas-campus.jpg",
      browserUrl: "adamastech.in/products/arivoo-ums-ecosystem",
      features: [
        "End-to-End University Management System (Arivoo UMS)",
        "AI-Powered Real-Time Remote Exam Proctoring (TestGUARD)",
        "Multi-Campus Microservices Cloud Architecture & Scaled CSAT",
      ],
      subItems: [
        { name: "Arivoo UMS", href: "/products/arivoo-ums" },
        { name: "Arivoo LMS", href: "/products/arivoo-lms" },
        { name: "TestGUARD AI", href: "/products/testguard" },
        { name: "School SMS", href: "/products/arivoo-sms" },
      ],
      primaryCta: { label: "Explore Product Suite", href: "/products" },
      secondaryCta: { label: "Request Arivoo Demo", href: "/contact" },
    },
    {
      id: "industries",
      menuLabel: "Industries",
      hasDropdown: true,
      icon: Landmark,
      tag: "DEFENSE, BFSI & HIGH-REGULATION SECTORS",
      title: "Sovereign-Grade Engineering for Defense, Banking & NHS Healthcare",
      statNumber: "< 0.8s",
      statLabel: "Zero-Trust Biometric Latency",
      desc: "High-assurance technology architectures complying with CMMI Level 3 and ISO 27001 standards, deployed for naval shipbuilders, national health authorities, and tier-1 financial regulators.",
      clientLogo: "/images/clients/client-4.webp",
      clientName: "GRSE Naval & NHS Digital",
      accentColor: "var(--brand-orange-primary)",
      image: "/images/industries/healthcare.jpg",
      browserUrl: "adamastech.in/industries/defense-bfsi-healthcare",
      features: [
        "ISO 27001 Zero-Trust Clinical Infrastructure & Data Governance",
        "Naval Defense C4ISR & Marine Engineering Real-Time Data",
        "Cross-Border Financial Regulatory Compliance & Audited Workflows",
      ],
      subItems: [
        { name: "BFSI & FinTech", href: "/industries/bfsi" },
        { name: "Healthcare & Life Sciences", href: "/industries/healthcare" },
        { name: "Manufacturing & Logistics", href: "/industries/manufacturing" },
        { name: "Public Sector & Defense", href: "/industries" },
      ],
      primaryCta: { label: "Explore Industry Blueprints", href: "/industries" },
      secondaryCta: { label: "View Defense Credentials", href: "/case-studies" },
    },
    {
      id: "success-stories",
      menuLabel: "Success Stories",
      hasDropdown: false,
      icon: Award,
      tag: "AUDITED PRODUCTION CASE STUDIES",
      title: "Proven Scale Across 950+ Enterprise Deployments in 4 Continents",
      statNumber: "99.99%",
      statLabel: "Mission-Critical Production SLA",
      desc: "From accelerating Careem's super-app logistics to automating Aldar's smart city asset management, our senior engineering squads consistently deliver on-time, zero-defect outcomes.",
      clientLogo: "/images/clients/client-6.webp",
      clientName: "Aldar, Careem & United Foods",
      accentColor: "#C084FC",
      image: "/images/industries/manufacturing.jpg",
      browserUrl: "adamastech.in/case-studies/enterprise-benchmarks",
      features: [
        "Zero-Defect CMMI L3 Appraised Delivery & Transparent KPI Governance",
        "Multinational FMCG & Smart City Real-Time IoT Sensor Integration",
        "Audited Infrastructure Cost Reductions & 3.4x Faster Release Cycles",
      ],
      subItems: [
        { name: "Aldar Smart City", href: "/case-studies" },
        { name: "Careem Logistics", href: "/case-studies" },
        { name: "PwC SAP Treasury", href: "/case-studies" },
        { name: "United Foods FMCG", href: "/case-studies" },
      ],
      primaryCta: { label: "View Audited Case Studies", href: "/case-studies" },
      secondaryCta: { label: "Download Executive Dossier", href: "/contact" },
    },
    {
      id: "consulting",
      menuLabel: "Consulting",
      hasDropdown: false,
      icon: Briefcase,
      tag: "STRATEGIC GOVERNANCE & ARCHITECTURE",
      title: "Senior-Led Architecture Governance Backed by RICE Adamas Heritage",
      statNumber: "22+",
      statLabel: "Years Enterprise Legacy",
      desc: "22+ years of institutional stability backed by RICE Adamas Group. We deploy dedicated enterprise architecture squads from global delivery hubs in London, Dubai, New York, and Kolkata.",
      clientLogo: "/images/clients/client-2.webp",
      clientName: "500+ Solution Architects",
      accentColor: "#38BDF8",
      image: "/images/locations/dubai-burj-khalifa.jpg",
      browserUrl: "adamastech.in/consulting/enterprise-architecture",
      features: [
        "C-Level Strategic Technology Roadmapping & Governance",
        "Enterprise Modernization & Cloud Readiness Assessment",
        "Follow-the-Sun Governance Across 4 Continents & Timezones",
      ],
      subItems: [
        { name: "Cloud Migration Strategy", href: "/consulting" },
        { name: "Security Architecture", href: "/consulting" },
        { name: "Enterprise ERP Advisory", href: "/consulting" },
        { name: "Global Delivery Hubs", href: "/about-us" },
      ],
      primaryCta: { label: "Schedule Advisory Session", href: "/consulting" },
      secondaryCta: { label: "Explore Global Hubs", href: "/about-us" },
    },
  ];

  return (
    <section
      className="trust-proof-strip-section"
      style={{
        background: "radial-gradient(ellipse at 50% 15%, #081B38 0%, #040C18 70%)",
        borderTop: "1px solid rgba(24, 144, 215, 0.2)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
        padding: "4.5rem 0 4rem",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Top De-risking Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-tag blue" style={{ marginBottom: "0.6rem" }}>
            Proven Enterprise Provenance
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
            }}
          >
            De-Risking High-Stakes Digital Transformations
          </h2>
          <p
            style={{
              color: "var(--text-light-muted)",
              fontSize: "1rem",
              maxWidth: "680px",
              margin: "0.65rem auto 0",
              lineHeight: 1.6,
            }}
          >
            Institutional scale, certified engineering quality, and predictable outcomes delivered by senior enterprise architects.
          </p>
        </div>

        {/* 4 Key Statistics Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
        >
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                style={{
                  background: "rgba(10, 28, 54, 0.65)",
                  border: "1px solid rgba(24, 144, 215, 0.2)",
                  borderRadius: "16px",
                  padding: "1.65rem 1.4rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.1rem",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.25s ease",
                  boxShadow: "0 8px 26px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: `1px solid ${s.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color={s.color} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "2.35rem",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.96875rem", fontWeight: 700, color: "#F1F5F9", marginTop: "0.25rem" }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)", marginTop: "0.15rem" }}>
                    {s.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Header for Accreditations */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1.75rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.78125rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--brand-orange-primary)",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                marginBottom: "0.25rem",
              }}
            >
              <Sparkles size={14} color="var(--brand-orange-primary)" />
              <span>OFFICIAL ACCREDITATIONS &amp; STRATEGIC ALLIANCES</span>
            </div>
            <h3
              style={{
                fontSize: "clamp(1.35rem, 2vw, 1.75rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.015em",
                margin: 0,
              }}
            >
              Audited Enterprise Standards &amp; Tier-1 Ecosystem
            </h3>
          </div>

          <div
            style={{
              fontSize: "0.8125rem",
              color: "#94A3B8",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", boxShadow: "0 0 10px #10B981" }} />
            <span>100% Active Audited Status · Zero Non-Conformances</span>
          </div>
        </div>

        {/* 4 Prominent Luxury Executive Accreditation Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4.5rem",
          }}
        >
          {accreditations.map((item, idx) => (
            <div
              key={idx}
              className="accreditation-card"
              style={{
                background: "linear-gradient(180deg, rgba(10, 26, 54, 0.8) 0%, rgba(4, 13, 28, 0.95) 100%)",
                border: "1px solid rgba(24, 144, 215, 0.28)",
                borderRadius: "22px",
                padding: "1.75rem 1.6rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: item.glowColor,
                  filter: "blur(40px)",
                  pointerEvents: "none",
                }}
              />

              <div>
                <div
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: item.accentColor,
                    marginBottom: "1.1rem",
                  }}
                >
                  {item.badgeLabel}
                </div>

                <div
                  className="logo-stage"
                  style={{
                    height: "80px",
                    width: "100%",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 #FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    padding: "0.65rem 1.25rem",
                    marginBottom: "1.35rem",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
                  }}
                >
                  {item.isIsoDual && item.logos ? (
                    <>
                      <img
                        src={item.logos[0].src}
                        alt={item.logos[0].alt}
                        style={{
                          maxHeight: `${item.logos[0].maxHeight}px`,
                          maxWidth: "48%",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                      <span
                        style={{
                          width: "1px",
                          height: "30px",
                          background: "#CBD5E1",
                          display: "block",
                        }}
                      />
                      <img
                        src={item.logos[1].src}
                        alt={item.logos[1].alt}
                        style={{
                          maxHeight: `${item.logos[1].maxHeight}px`,
                          maxWidth: "42%",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </>
                  ) : (
                    item.logo && (
                      <img
                        src={item.logo.src}
                        alt={item.logo.alt}
                        style={{
                          maxHeight: `${item.logo.maxHeight}px`,
                          maxWidth: "85%",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    )
                  )}
                </div>

                <h4
                  style={{
                    fontSize: "1.1875rem",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: "-0.015em",
                    lineHeight: 1.25,
                    marginBottom: "0.45rem",
                  }}
                >
                  {item.name}
                </h4>

                <p
                  style={{
                    fontSize: "0.84375rem",
                    color: "#94A3B8",
                    lineHeight: 1.5,
                    margin: 0,
                    marginBottom: "1.35rem",
                  }}
                >
                  {item.detail}
                </p>
              </div>

              <div
                style={{
                  paddingTop: "0.85rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#E2E8F0",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: item.accentColor,
                    boxShadow: `0 0 8px ${item.accentColor}`,
                    display: "inline-block",
                  }}
                />
                <span>{item.statusText}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ULTRA-PREMIUM REDESIGNED CLIENT TRUST STAGE */}
        <div
          className="glass-card"
          style={{
            background: "linear-gradient(135deg, rgba(8, 22, 46, 0.85) 0%, rgba(4, 13, 28, 0.95) 100%)",
            border: "1px solid rgba(24, 144, 215, 0.3)",
            borderRadius: "26px",
            padding: "clamp(2rem, 3.5vw, 3rem)",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ambient Lighting Accents */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-50px",
              left: "20%",
              width: "350px",
              height: "200px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(24, 144, 215, 0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.4rem 1.1rem",
                borderRadius: "9999px",
                background: "rgba(24, 144, 215, 0.15)",
                border: "1px solid rgba(24, 144, 215, 0.4)",
                color: "#38BDF8",
                fontSize: "0.78125rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.85rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#10B981",
                  boxShadow: "0 0 10px #10B981",
                  display: "inline-block",
                }}
              />
              <span>CRITICAL INFRASTRUCTURE &amp; ENTERPRISE SCALE</span>
            </div>

            <h3
              style={{
                fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                lineHeight: 1.25,
                maxWidth: "780px",
                margin: "0 auto",
              }}
            >
              Trusted by Sovereign Entities &amp; Fortune 500 Leaders Across UK, US, UAE &amp; India
            </h3>
            <p
              style={{
                color: "var(--text-light-muted)",
                fontSize: "0.96875rem",
                maxWidth: "640px",
                margin: "0.75rem auto 0",
                lineHeight: 1.6,
              }}
            >
              From core banking and naval defense to multinational FMCG and smart city campuses.
            </p>
          </div>

          {/* Cinematic Client Logo Marquee with Left & Right Gradient Masks */}
          <div
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              marginBottom: "3.5rem",
              padding: "0.5rem 0",
            }}
          >
            {/* Left Edge Mask */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: "120px",
                background: "linear-gradient(to right, rgba(6, 18, 38, 0.98) 15%, transparent 100%)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />
            {/* Right Edge Mask */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                width: "120px",
                background: "linear-gradient(to left, rgba(6, 18, 38, 0.98) 15%, transparent 100%)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />

            {/* Continuous Marquee Track */}
            <div
              className="client-trust-marquee"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.75rem",
                width: "max-content",
                animation: "trustMarquee 38s linear infinite",
              }}
            >
              {marqueeTrack.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="client-logo-tile"
                  title={`${client.name} - Enterprise Client`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "170px",
                    height: "72px",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "14px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(10px)",
                    flexShrink: 0,
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={client.src}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    style={{
                      maxHeight: "44px",
                      maxWidth: "130px",
                      objectFit: "contain",
                      display: "block",
                      filter: "brightness(1.15) contrast(1.1)",
                      transition: "filter 0.25s ease, transform 0.25s ease",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ULTRA-PREMIUM MENU-BASED INTERACTIVE BENCHMARK SHOWCASE */}
          <div style={{ marginTop: "1rem" }}>
            {/* Section Eyebrow & Intro */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1.75rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.78125rem",
                    fontWeight: 800,
                    color: "var(--brand-orange-primary)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    marginBottom: "0.35rem",
                  }}
                >
                  <Sparkles size={14} color="var(--brand-orange-primary)" />
                  <span>INTERACTIVE ENTERPRISE PORTFOLIO</span>
                </div>
                <h4
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.65rem)",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: "-0.015em",
                    margin: 0,
                  }}
                >
                  Practice Benchmarks &amp; Provenance Stage
                </h4>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "0.8125rem",
                  color: "#94A3B8",
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#10B981",
                    boxShadow: "0 0 10px #10B981",
                  }}
                />
                <span>Live Audited Telemetry · Select Practice to Explore</span>
              </div>
            </div>

            {/* FLOATING PILL MENU BAR - DIRECTLY MIRRORS THE NAVBAR DESIGN & UI/UX */}
            <div
              className="benchmark-menu-bar"
              style={{
                background: "rgba(6, 18, 38, 0.88)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "9999px",
                padding: "0.55rem 0.85rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
                marginBottom: "2rem",
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Left Brand Identity */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  paddingLeft: "0.5rem",
                  flexShrink: 0,
                }}
              >
                <AdamasLogo variant="colored" customHeight={32} withLink={false} />
              </div>

              {/* Center Menu Navigation Items (Services, Products, Industries, Success Stories, Consulting) */}
              <nav
                className="benchmark-nav-links"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  padding: "0.2rem 0",
                }}
              >
                {menuTabs.map((tab, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(idx)}
                      type="button"
                      className={`benchmark-nav-item ${isActive ? "active" : ""}`}
                      style={{
                        background: isActive
                          ? "linear-gradient(135deg, rgba(24, 144, 215, 0.25) 0%, rgba(10, 35, 70, 0.45) 100%)"
                          : "transparent",
                        border: isActive
                          ? "1px solid rgba(56, 189, 248, 0.5)"
                          : "1px solid transparent",
                        borderRadius: "9999px",
                        padding: "0.45rem 1rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        color: isActive ? "#FFFFFF" : "#CBD5E1",
                        fontSize: "0.875rem",
                        fontWeight: isActive ? 700 : 500,
                        cursor: "pointer",
                        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                        whiteSpace: "nowrap",
                        boxShadow: isActive ? "0 4px 14px rgba(24, 144, 215, 0.25)" : "none",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: isActive ? "var(--brand-orange-primary)" : "transparent",
                          boxShadow: isActive ? "0 0 8px var(--brand-orange-primary)" : "none",
                          transition: "all 0.2s ease",
                        }}
                      />
                      <span>{tab.menuLabel}</span>
                      {tab.hasDropdown && (
                        <ChevronDown
                          size={13}
                          style={{
                            color: isActive ? "#38BDF8" : "#94A3B8",
                            transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Right Menu Controls Suite (Search, Region Toggler, Talk to Expert CTA) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  flexShrink: 0,
                }}
              >
                {/* Search Quick Button */}
                <Link
                  href="/services"
                  className="btn-glass"
                  title="Search Services & Solutions"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Search size={15} />
                </Link>

                {/* Region Toggler Pill (Matches Screenshot 100%) */}
                <div className="benchmark-region-wrapper">
                  <RegionToggler variant="header" />
                </div>

                {/* Solar Orange Call to Action Pill */}
                <Link
                  href="/contact"
                  className="benchmark-cta-btn"
                  style={{
                    fontSize: "0.84375rem",
                    fontWeight: 700,
                    padding: "0.5rem 1.25rem",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #F36F21 0%, #FF8A3D 100%)",
                    color: "#FFFFFF",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    textDecoration: "none",
                    boxShadow: "0 4px 18px rgba(243, 111, 33, 0.4)",
                    border: "none",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <PhoneCall size={14} />
                  <span>Talk to an Expert</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

            {/* INTERACTIVE BENCHMARK SHOWCASE STAGE */}
            {(() => {
              const current = menuTabs[activeTab];
              return (
                <div
                  className="benchmark-stage-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.1fr 1fr",
                    gap: "2.5rem",
                    alignItems: "center",
                    background: "rgba(5, 16, 35, 0.75)",
                    border: "1px solid rgba(24, 144, 215, 0.25)",
                    borderRadius: "24px",
                    padding: "clamp(1.75rem, 3vw, 2.75rem)",
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                    marginBottom: "2.5rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Subtle Background Radial Accent */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "-60px",
                      left: "-60px",
                      width: "300px",
                      height: "300px",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${current.accentColor}25 0%, transparent 70%)`,
                      filter: "blur(40px)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Left Column: Narrative, Metric & Actions */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    {/* Eyebrow Pill */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.35rem 0.95rem",
                        borderRadius: "9999px",
                        background: "rgba(3, 10, 24, 0.7)",
                        border: `1px solid ${current.accentColor}60`,
                        color: current.accentColor,
                        fontSize: "0.71875rem",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "1rem",
                      }}
                    >
                      <span
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: current.accentColor,
                          boxShadow: `0 0 8px ${current.accentColor}`,
                        }}
                      />
                      <span>{current.tag}</span>
                    </div>

                    {/* Headline */}
                    <h3
                      style={{
                        fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.25,
                        marginBottom: "0.95rem",
                      }}
                    >
                      {current.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: "#94A3B8",
                        fontSize: "0.96875rem",
                        lineHeight: 1.65,
                        marginBottom: "1.75rem",
                      }}
                    >
                      {current.desc}
                    </p>

                    {/* Big Audited Metric Display & Client Logo Plaque */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.75rem",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "16px",
                        padding: "1rem 1.4rem",
                        marginBottom: "1.75rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "2.75rem",
                            fontWeight: 900,
                            color: "#FFFFFF",
                            lineHeight: 1,
                            letterSpacing: "-0.03em",
                            textShadow: `0 0 20px ${current.accentColor}70`,
                          }}
                        >
                          {current.statNumber}
                        </div>
                        <div
                          style={{
                            fontSize: "0.8125rem",
                            fontWeight: 700,
                            color: current.accentColor,
                            marginTop: "0.25rem",
                          }}
                        >
                          {current.statLabel}
                        </div>
                      </div>

                      <div
                        style={{
                          width: "1px",
                          height: "44px",
                          background: "rgba(255, 255, 255, 0.12)",
                          display: "block",
                        }}
                      />

                      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                        <div
                          style={{
                            height: "42px",
                            padding: "0.3rem 0.85rem",
                            borderRadius: "10px",
                            background: "rgba(255, 255, 255, 0.95)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                          }}
                        >
                          <img
                            src={current.clientLogo}
                            alt={current.clientName}
                            style={{
                              maxHeight: "26px",
                              maxWidth: "85px",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                        </div>
                        <div>
                          <div style={{ fontSize: "0.75rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>
                            Validated By
                          </div>
                          <div style={{ fontSize: "0.875rem", color: "#F1F5F9", fontWeight: 700 }}>
                            {current.clientName}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Feature Checkpoints */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                      {current.features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "#CBD5E1" }}>
                          <CheckCircle2 size={16} color={current.accentColor} style={{ flexShrink: 0 }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Dual Action Buttons */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                      <Link
                        href={current.primaryCta.href}
                        className="btn btn-primary"
                        style={{
                          padding: "0.75rem 1.75rem",
                          borderRadius: "9999px",
                          fontSize: "0.9375rem",
                          fontWeight: 700,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          background: "linear-gradient(135deg, #F36F21 0%, #FF8A3D 100%)",
                          boxShadow: "0 6px 20px rgba(243, 111, 33, 0.4)",
                        }}
                      >
                        <span>{current.primaryCta.label}</span>
                        <ArrowUpRight size={15} />
                      </Link>

                      <Link
                        href={current.secondaryCta.href}
                        style={{
                          padding: "0.75rem 1.6rem",
                          borderRadius: "9999px",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          background: "rgba(255, 255, 255, 0.08)",
                          border: "1px solid rgba(255, 255, 255, 0.18)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <span>{current.secondaryCta.label}</span>
                        <ChevronDown size={14} color="#94A3B8" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Cinematic High-Def Visual Browser Terminal */}
                  <div style={{ position: "relative" }}>
                    <div
                      className="browser-terminal-frame"
                      style={{
                        background: "rgba(3, 9, 20, 0.95)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(24, 144, 215, 0.2)",
                        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      {/* Browser Window Header Chrome */}
                      <div
                        style={{
                          height: "40px",
                          background: "rgba(6, 16, 32, 0.95)",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0 1rem",
                        }}
                      >
                        {/* Window Dots */}
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#EF4444", display: "inline-block" }} />
                          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F59E0B", display: "inline-block" }} />
                          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
                        </div>

                        {/* URL Pill */}
                        <div
                          style={{
                            background: "rgba(255, 255, 255, 0.06)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "9999px",
                            padding: "0.2rem 1rem",
                            fontSize: "0.6875rem",
                            color: "#94A3B8",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.45rem",
                            maxWidth: "280px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <span style={{ color: "#10B981" }}>🔒</span>
                          <span>https://{current.browserUrl}</span>
                        </div>

                        {/* Status Tag */}
                        <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#38BDF8" }}>
                          LIVE HUD
                        </div>
                      </div>

                      {/* Visual Photographic Stage */}
                      <div
                        style={{
                          position: "relative",
                          height: "360px",
                          overflow: "hidden",
                          background: "#020712",
                        }}
                      >
                        <img
                          src={current.image}
                          alt={current.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        />

                        {/* Cinematic Vignette */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(180deg, rgba(3, 8, 19, 0.2) 0%, rgba(3, 8, 19, 0.75) 100%)",
                          }}
                        />

                        {/* Floating Top Telemetry Badge */}
                        <div
                          style={{
                            position: "absolute",
                            top: "1rem",
                            right: "1rem",
                            padding: "0.4rem 0.85rem",
                            borderRadius: "10px",
                            background: "rgba(4, 12, 28, 0.85)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(24, 144, 215, 0.4)",
                            color: "#FFFFFF",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            gap: "0.45rem",
                            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          <ShieldCheck size={14} color="#10B981" />
                          <span>ISO 27001 &amp; CMMI L3</span>
                        </div>

                        {/* Floating Bottom Telemetry Badge */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "1rem",
                            left: "1rem",
                            right: "1rem",
                            padding: "0.65rem 1rem",
                            borderRadius: "12px",
                            background: "rgba(4, 12, 28, 0.88)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            boxShadow: "0 10px 28px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", boxShadow: "0 0 10px #10B981" }} />
                            <span style={{ fontSize: "0.78125rem", color: "#F1F5F9", fontWeight: 700 }}>
                              99.9% Audited Reliability SLA
                            </span>
                          </div>
                          <span style={{ fontSize: "0.71875rem", color: "#94A3B8" }}>
                            London · Dubai · NY · Kolkata
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Sub-Navigation Links */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginTop: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        Quick Practices:
                      </span>
                      {current.subItems.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          style={{
                            fontSize: "0.78125rem",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "9999px",
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            color: "#CBD5E1",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {sub.name} →
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Bottom 5-Practice Quick-Select Switcher Carousel */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              {menuTabs.map((tab, idx) => {
                const isActive = activeTab === idx;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    type="button"
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, rgba(10, 32, 68, 0.95) 0%, rgba(5, 18, 40, 0.95) 100%)"
                        : "rgba(6, 18, 38, 0.6)",
                      border: isActive
                        ? "1px solid rgba(56, 189, 248, 0.6)"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "16px",
                      padding: "1rem 1.15rem",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      boxShadow: isActive
                        ? "0 10px 25px rgba(24, 144, 215, 0.25)"
                        : "0 4px 14px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "10px",
                        background: isActive ? "rgba(24, 144, 215, 0.2)" : "rgba(255, 255, 255, 0.04)",
                        border: `1px solid ${isActive ? tab.accentColor : "rgba(255, 255, 255, 0.1)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} color={isActive ? tab.accentColor : "#94A3B8"} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 700,
                          color: isActive ? "#FFFFFF" : "#CBD5E1",
                          lineHeight: 1.2,
                        }}
                      >
                        {tab.menuLabel}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: isActive ? tab.accentColor : "#64748B",
                          marginTop: "0.15rem",
                        }}
                      >
                        {tab.statNumber} {tab.statLabel.split(" ")[0]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Centralized Action Button to Case Studies */}
          <div style={{ textAlign: "center" }}>
            <Link
              href="/case-studies"
              className="btn btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.8rem 2.25rem",
                borderRadius: "9999px",
                borderColor: "rgba(56, 189, 248, 0.45)",
                color: "#FFFFFF",
                fontSize: "0.9375rem",
                fontWeight: 700,
                background: "rgba(24, 144, 215, 0.15)",
                boxShadow: "0 6px 25px rgba(0, 0, 0, 0.4)",
              }}
            >
              <span>Explore Verified Enterprise Case Studies</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scoped Hover Micro-Animations */}
      <style jsx>{`
        @keyframes trustMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .client-trust-marquee:hover {
          animation-play-state: paused;
        }
        .client-logo-tile:hover {
          transform: translateY(-4px) scale(1.05);
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(56, 189, 248, 0.6) !important;
          box-shadow: 0 10px 25px rgba(24, 144, 215, 0.35) !important;
        }
        .client-logo-tile:hover img {
          filter: brightness(1.4) contrast(1.2) drop-shadow(0 0 14px rgba(255, 255, 255, 0.5)) !important;
        }
        .accreditation-card:hover {
          transform: translateY(-6px);
          border-color: rgba(56, 189, 248, 0.55) !important;
          box-shadow: 0 22px 55px rgba(0, 0, 0, 0.6), 0 0 30px rgba(24, 144, 215, 0.25) !important;
        }
        .accreditation-card:hover .logo-stage {
          transform: scale(1.03);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35), 0 0 20px rgba(56, 189, 248, 0.3) !important;
        }
        .benchmark-nav-item:hover {
          color: #FFFFFF !important;
          background: rgba(255, 255, 255, 0.08) !important;
        }
        .benchmark-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(243, 111, 33, 0.55) !important;
          filter: brightness(1.08);
        }
        .browser-terminal-frame:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.7), 0 0 40px rgba(24, 144, 215, 0.3) !important;
        }
        .browser-terminal-frame:hover img {
          transform: scale(1.04);
        }
        @media (max-width: 1024px) {
          .benchmark-stage-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .benchmark-menu-bar {
            border-radius: 20px !important;
            flex-wrap: wrap !important;
            padding: 0.85rem !important;
          }
          .benchmark-nav-links {
            width: 100% !important;
            order: 3 !important;
            padding-top: 0.5rem !important;
            border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
          }
        }
      `}</style>
    </section>
  );
}
