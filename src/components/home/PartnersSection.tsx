"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";

interface PartnerItem {
  name: string;
  category: string;
  img: string;
  alt: string;
  href?: string;
  maxHeight: number;
}

interface CertificationItem {
  name: string;
  standard: string;
  issuer: string;
  img: string;
  alt: string;
  maxHeight: number;
}

const PARTNER_LOGOS: PartnerItem[] = [
  {
    name: "AWS",
    category: "Cloud Partner",
    img: "/images/partners/aws-partner.webp",
    alt: "AWS Partner Advanced Tier",
    href: "/services/aws-cloud-solutions",
    maxHeight: 46,
  },
  {
    name: "SAP",
    category: "ERP Partner",
    img: "/images/partners/sap-partner.webp",
    alt: "SAP PartnerEdge Solutions",
    href: "/services/sap-solution-consulting",
    maxHeight: 46,
  },
  {
    name: "Oracle NetSuite",
    category: "Cloud ERP",
    img: "/images/partners/netsuite-partner.webp",
    alt: "Oracle NetSuite Solution Provider",
    href: "/services/oracle-netsuite-services",
    maxHeight: 48,
  },
  {
    name: "MigNOW",
    category: "S/4HANA Automation",
    img: "/images/partners/mignow-partner.webp",
    alt: "MigNOW Automated S/4HANA Transformation",
    href: "/services/sap-solution-consulting",
    maxHeight: 32,
  },
  {
    name: "Leapwork",
    category: "No-Code Automation",
    img: "/images/partners/leapwork-partner.png",
    alt: "Leapwork Enterprise Test Automation Partner",
    href: "/services",
    maxHeight: 30,
  },
  {
    name: "Flipkart",
    category: "Enterprise Ecosystem",
    img: "/images/partners/flipkart-partner.webp",
    alt: "Flipkart Enterprise Alliance",
    href: "/services",
    maxHeight: 40,
  },
  {
    name: "techUK",
    category: "Technology Trade Org",
    img: "/images/partners/techuk-hd.png",
    alt: "techUK Official Technology Alliance",
    href: "/about-us",
    maxHeight: 48,
  },
  {
    name: "LCCI London Chamber",
    category: "British Chamber of Commerce",
    img: "/images/partners/lcci-hd.png",
    alt: "London Chamber of Commerce & Industry",
    href: "/about-us",
    maxHeight: 52,
  },
  {
    name: "Open edX",
    category: "EdTech Learning Tech",
    img: "/images/partners/openedx-hd.png",
    alt: "Open edX Learning Technologies Partner",
    href: "/services/openedx-learning-technologies",
    maxHeight: 36,
  },
];

const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "ISO 9001:2015",
    standard: "Quality Management System",
    issuer: "BSI Certified",
    img: "/images/certifications/iso-9001.png",
    alt: "BSI ISO 9001:2015 Quality Management System Certification",
    maxHeight: 48,
  },
  {
    name: "ISO/IEC 27001",
    standard: "Information Security Management",
    issuer: "DQS Certified",
    img: "/images/certifications/iso-27001.png",
    alt: "DQS ISO/IEC 27001 Information Security Certified",
    maxHeight: 52,
  },
  {
    name: "CMMI Level 3",
    standard: "Maturity Level 3 Appraised",
    issuer: "CMMI Institute (DEV)",
    img: "/images/certifications/artboard-cmmi.png",
    alt: "CMMI Maturity Level 3 Appraised Dev",
    maxHeight: 44,
  },
];

export function PartnersSection() {
  return (
    <section
      className="partners-section"
      id="partners"
      style={{
        background: `
          radial-gradient(ellipse at 85% 20%, rgba(0, 102, 179, 0.22) 0%, transparent 60%),
          radial-gradient(ellipse at 15% 80%, rgba(243, 111, 33, 0.12) 0%, transparent 55%),
          #040D21
        `,
        padding: "6.5rem 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(56, 189, 248, 0.18)",
        borderBottom: "1px solid rgba(56, 189, 248, 0.18)",
      }}
    >
      {/* High-Tech Cybernetic Perspective Grid Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Narrative & Enterprise Authority */}
          <div style={{ maxWidth: "520px" }}>
            {/* Tracking Eyebrow Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.4rem 1.05rem",
                borderRadius: "var(--radius-full, 9999px)",
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                marginBottom: "1.35rem",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#38BDF8",
                  boxShadow: "0 0 10px #38BDF8",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "0.78125rem",
                  fontWeight: 700,
                  color: "#E0F2FE",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Global Credibility &amp; Governance
              </span>
            </div>

            {/* Main Headline */}
            <h2
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.25rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                marginBottom: "1.25rem",
                textShadow: "0 4px 25px rgba(0, 0, 0, 0.7)",
              }}
            >
              World-Class Alliances.{" "}
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #38BDF8 0%, #60A5FA 50%, #F36F21 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginTop: "0.2rem",
                }}
              >
                Certified Enterprise Trust.
              </span>
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "rgba(224, 242, 254, 0.82)",
                marginBottom: "2rem",
              }}
            >
              Adamas Tech Consulting collaborates with tier-1 cloud and enterprise ERP leaders, backed by rigorous ISO and CMMI Level 3 audited compliance standards for mission-critical digital execution.
            </p>

            {/* Value Highlights Pill List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.95rem",
                marginBottom: "2.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.65rem 1rem",
                  background: "rgba(6, 20, 44, 0.6)",
                  borderRadius: "12px",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <CheckCircle2 size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: "0.90625rem",
                    color: "#F8FAFC",
                    fontWeight: 600,
                  }}
                >
                  Tier-1 Cloud &amp; ERP Alliances (AWS, SAP, Oracle NetSuite)
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.65rem 1rem",
                  background: "rgba(6, 20, 44, 0.6)",
                  borderRadius: "12px",
                  border: "1px solid rgba(243, 111, 33, 0.25)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <CheckCircle2 size={18} color="#F36F21" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: "0.90625rem",
                    color: "#F8FAFC",
                    fontWeight: 600,
                  }}
                >
                  Audited ISO 9001 (Quality) &amp; ISO/IEC 27001 (Security)
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.65rem 1rem",
                  background: "rgba(6, 20, 44, 0.6)",
                  borderRadius: "12px",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <CheckCircle2 size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: "0.90625rem",
                    color: "#F8FAFC",
                    fontWeight: 600,
                  }}
                >
                  CMMI Maturity Level 3 Appraised Engineering Framework
                </span>
              </div>
            </div>

            {/* Learn More Link */}
            <Link
              href="/about-us"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                fontSize: "0.9375rem",
                fontWeight: 700,
                color: "#38BDF8",
                textDecoration: "none",
                transition: "gap 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F36F21";
                e.currentTarget.style.gap = "0.75rem";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#38BDF8";
                e.currentTarget.style.gap = "0.55rem";
              }}
            >
              <span>Explore our enterprise governance &amp; standards</span>
              <ExternalLink size={15} />
            </Link>
          </div>

          {/* Right Column: Ultra-Premium Glassmorphic Showcase Showcase */}
          <div
            style={{
              background: "rgba(7, 21, 48, 0.75)",
              borderRadius: "26px",
              padding: "clamp(1.75rem, 3vw, 2.5rem)",
              boxShadow:
                "0 25px 60px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 35px rgba(0, 102, 179, 0.15)",
              border: "1px solid rgba(56, 189, 248, 0.32)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Header Telemetry Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.35rem",
                paddingBottom: "0.85rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#38BDF8",
                    boxShadow: "0 0 12px #38BDF8",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Strategic Ecosystem Alliances
                </span>
              </div>

              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "#38BDF8",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "6px",
                  background: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.28)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Tier-1 Certified
              </span>
            </div>

            {/* Top 3x3 Partner Logos Grid on Pure White Glowing Tiles */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.95rem",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              {PARTNER_LOGOS.map((partner) => {
                const content = (
                  <div
                    className="partner-card-tile"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "72px",
                      padding: "0.6rem 0.85rem",
                      borderRadius: "14px",
                      background: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid rgba(255, 255, 255, 0.85)",
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      cursor: partner.href ? "pointer" : "default",
                    }}
                  >
                    <img
                      src={partner.img}
                      alt={partner.alt}
                      style={{
                        maxWidth: "100%",
                        maxHeight: `${partner.maxHeight}px`,
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                );

                return partner.href ? (
                  <Link
                    key={partner.name}
                    href={partner.href}
                    title={partner.alt}
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      display: "block",
                    }}
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={partner.name} style={{ width: "100%" }}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Luminous Divider with Section Marker */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                margin: "1.75rem 0 1.35rem 0",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "50% 0 auto 0",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.35) 25%, rgba(243, 111, 33, 0.35) 75%, transparent)",
                }}
              />
              <span
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "0.3rem 0.85rem",
                  borderRadius: "9999px",
                  background: "#081A3C",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  fontSize: "0.6875rem",
                  fontWeight: 800,
                  color: "#E2E8F0",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                }}
              >
                Audited Standards &amp; Certifications
              </span>
            </div>

            {/* Bottom 3-Column Certifications Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.95rem",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="cert-card-tile"
                  title={`${cert.name} - ${cert.standard} (${cert.issuer})`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "76px",
                    padding: "0.6rem 0.85rem",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(241, 245, 249, 0.94) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.28)",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "default",
                  }}
                >
                  <img
                    src={cert.img}
                    alt={cert.alt}
                    style={{
                      maxWidth: "100%",
                      maxHeight: `${cert.maxHeight}px`,
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scoped Hover Micro-Animations */}
      <style jsx>{`
        .partner-card-tile:hover {
          transform: translateY(-4px) scale(1.04);
          background: #FFFFFF !important;
          border-color: #38BDF8 !important;
          box-shadow: 0 12px 28px rgba(56, 189, 248, 0.35) !important;
        }
        .cert-card-tile:hover {
          transform: translateY(-4px) scale(1.04);
          background: #FFFFFF !important;
          border-color: #F36F21 !important;
          box-shadow: 0 12px 28px rgba(243, 111, 33, 0.35) !important;
        }
      `}</style>
    </section>
  );
}
