"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  TrendingUp,
  Users,
  Globe2,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Landmark,
  GraduationCap,
  Activity,
  Cpu,
} from "lucide-react";

export function TrustProofStrip() {
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

  // Photographic Sector Provenance Dossiers
  const sectorHighlights = [
    {
      sector: "Banking & Financial Services",
      tag: "BFSI & FINTECH",
      icon: Landmark,
      color: "#38BDF8",
      image: "/images/industries/bfsi.jpg",
      clientLogo: "/images/clients/client-1.webp",
      clientName: "PwC & Tier-1 Private Banks",
      statNumber: "+30%",
      statLabel: "Cash Forecast Velocity",
      title: "Global Financial Services & MENA Leaders",
      desc: "Integrated SAP Treasury, automated host-to-host banking, and multi-currency SWIFT reconciliation across 14 financial nodes.",
      link: "/industries/bfsi",
    },
    {
      sector: "Higher Education & Academics",
      tag: "EDTECH CONSORTIUM",
      icon: GraduationCap,
      color: "#10B981",
      image: "/images/about-rice-adamas-campus.jpg",
      clientLogo: "/images/clients/client-15.webp",
      clientName: "120-Acre Campus Hub",
      statNumber: "180k+",
      statLabel: "Active Students Enrolled",
      title: "Consortium of 180k+ Active Students",
      desc: "Deployed Arivoo UMS/LMS suite across multidisciplinary university campuses, automating admissions, proctoring, and grading.",
      link: "/products/arivoo-ums",
    },
    {
      sector: "Defense & Healthcare",
      tag: "DEFENSE & NHS DIGITAL",
      icon: Activity,
      color: "var(--brand-orange-primary)",
      image: "/images/industries/healthcare.jpg",
      clientLogo: "/images/clients/client-4.webp",
      clientName: "GRSE Naval & NHS Digital",
      statNumber: "< 0.8s",
      statLabel: "Zero-Trust Biometric Latency",
      title: "Naval Shipbuilding & NHS Digital",
      desc: "High-integrity clinical workflow transformations and naval defense engineering governed by strict ISO 27001 zero-trust protocols.",
      link: "/industries/healthcare",
    },
    {
      sector: "Energy, Telecom & Supply Chain",
      tag: "CRITICAL INFRASTRUCTURE",
      icon: Cpu,
      color: "#C084FC",
      image: "/images/industries/manufacturing.jpg",
      clientLogo: "/images/clients/client-6.webp",
      clientName: "Aldar & United Foods",
      statNumber: "99.99%",
      statLabel: "Mission-Critical SLA",
      title: "14 Global Logistics Nodes & Telecom",
      desc: "Real-time edge IoT sensors and SAP Analytics Cloud integration delivering predictive maintenance and zero unplanned outages.",
      link: "/industries/manufacturing",
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

          {/* 4 RE-IMAGINED PHOTOGRAPHIC SECTOR DEPLOYMENT DOSSIER CARDS */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginBottom: "1.5rem",
                paddingBottom: "0.85rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Key Sector Deployment Benchmarks
                </span>
                <span style={{ color: "#64748B", margin: "0 0.5rem" }}>·</span>
                <span style={{ fontSize: "0.78125rem", color: "#94A3B8" }}>
                  Audited Production Case Studies Across Global Operations
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.75rem",
                  color: "var(--brand-orange-primary)",
                  fontWeight: 700,
                }}
              >
                <CheckCircle2 size={13} color="var(--brand-orange-primary)" />
                <span>Audited Enterprise Outcomes</span>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2.5rem",
              }}
            >
              {sectorHighlights.map((sh, idx) => (
                <Link
                  key={idx}
                  href={sh.link}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div
                    className="sector-photographic-card"
                    style={{
                      background: "rgba(7, 20, 42, 0.9)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                      boxShadow: "0 14px 35px rgba(0, 0, 0, 0.4)",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    {/* Top Photographic Visual Header */}
                    <div
                      style={{
                        position: "relative",
                        height: "145px",
                        overflow: "hidden",
                        background: "#030B17",
                      }}
                    >
                      <img
                        src={sh.image}
                        alt={`${sh.title} - AdamasTech Sector Showcase`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `linear-gradient(180deg, rgba(3, 8, 19, 0.35) 0%, rgba(3, 8, 19, 0.88) 100%)`,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "0.85rem",
                          left: "0.85rem",
                          padding: "0.3rem 0.75rem",
                          borderRadius: "9999px",
                          background: "rgba(3, 8, 19, 0.8)",
                          border: `1px solid ${sh.color}60`,
                          color: sh.color,
                          fontSize: "0.6875rem",
                          fontWeight: 800,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          backdropFilter: "blur(10px)",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                        }}
                      >
                        {sh.tag}
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "0.85rem",
                          right: "0.85rem",
                          height: "32px",
                          padding: "0.2rem 0.65rem",
                          borderRadius: "8px",
                          background: "rgba(255, 255, 255, 0.94)",
                          border: "1px solid rgba(255, 255, 255, 0.9)",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={sh.clientLogo}
                          alt={sh.clientName}
                          style={{
                            maxHeight: "22px",
                            maxWidth: "70px",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0.65rem",
                          left: "1rem",
                          right: "1rem",
                          display: "flex",
                          alignItems: "baseline",
                          gap: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "1.75rem",
                            fontWeight: 900,
                            color: "#FFFFFF",
                            lineHeight: 1,
                            letterSpacing: "-0.03em",
                            textShadow: `0 0 16px ${sh.color}`,
                          }}
                        >
                          {sh.statNumber}
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: sh.color,
                            letterSpacing: "0.02em",
                          }}
                        >
                          {sh.statLabel}
                        </span>
                      </div>
                    </div>

                    {/* Card Narrative Content */}
                    <div
                      style={{
                        padding: "1.25rem 1.25rem 1.35rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flex: 1,
                      }}
                    >
                      <div>
                        <h4
                          style={{
                            fontSize: "1.0625rem",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "-0.015em",
                            lineHeight: 1.3,
                            marginBottom: "0.55rem",
                          }}
                        >
                          {sh.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.8125rem",
                            color: "#94A3B8",
                            lineHeight: 1.55,
                            margin: 0,
                            marginBottom: "1.15rem",
                          }}
                        >
                          {sh.desc}
                        </p>
                      </div>

                      <div
                        style={{
                          paddingTop: "0.75rem",
                          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          color: sh.color,
                        }}
                      >
                        <span>View Sector Blueprint</span>
                        <div
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.06)",
                            border: `1px solid ${sh.color}40`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "transform 0.2s ease, background 0.2s ease",
                          }}
                        >
                          <ArrowUpRight size={14} color={sh.color} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
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
                .sector-photographic-card:hover {
          transform: translateY(-6px);
          border-color: rgba(56, 189, 248, 0.55) !important;
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(24, 144, 215, 0.25) !important;
        }
        .sector-photographic-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
