"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getRegionFromPath } from "@/lib/regions";
import { Hero3DMotion } from "../hero/Hero3DMotion";
import {
  ArrowRight,
  PhoneCall,
  Sparkles,
  Cloud,
  Layers,
  Cpu,
  ChevronRight,
} from "lucide-react";

export function HeroSection() {
  const pathname = usePathname();
  const currentRegion = getRegionFromPath(pathname);

  // Region-tailored outcome-led content
  const regionContent: Record<string, { eyebrow: string; headlineLead: string; headlineAccent: string; valueProp: string }> = {
    ae: {
      eyebrow: "Middle East & GCC Regional Hub · Dubai Office",
      headlineLead: "Powering Enterprise Excellence",
      headlineAccent: "With Cloud, SAP & AI",
      valueProp: "Accelerating digital sovereignty, automated e-invoicing compliance, and mission-critical cloud modernization for governments and top enterprises across the Middle East.",
    },
    in: {
      eyebrow: "India Engineering Delivery Center · Kolkata & Pan-India",
      headlineLead: "Accelerate Velocity & Scale",
      headlineAccent: "For India's Enterprise Leaders",
      valueProp: "Delivering senior-led SAP S/4HANA migrations, resilient AWS cloud architecture, and high-concurrency campus platforms engineered for unmatched scale.",
    },
    uk: {
      eyebrow: "London Headquarters · Parliamentary Summit 26 Nov",
      headlineLead: "Mission-Critical Cloud Resilience",
      headlineAccent: "For UK & European Enterprises",
      valueProp: "Senior enterprise architects decoupling legacy debt, securing sovereign data residency, and deploying audited AI architectures from our London headquarters.",
    },
    us: {
      eyebrow: "Global Enterprise IT Consultancy & Digital Partner",
      headlineLead: "Engineering Tomorrow's Enterprise",
      headlineAccent: "Through Cloud, Core Systems & AI",
      valueProp: "We partner with visionary enterprises to modernize legacy estates, automate complex operations, and deliver measurable business outcomes with senior-led precision.",
    },
  };

  const activeContent = regionContent[currentRegion.code] || regionContent.us;

  const capabilities = [
    {
      title: "AI/ML Solutions",
      subtitle: "Intelligent Automation & GenAI",
      href: "/services/ai-data-analytics",
      icon: Sparkles,
      color: "#38BDF8",
    },
    {
      title: "AWS Services",
      subtitle: "Resilient Cloud Architecture",
      href: "/services/aws-solutions",
      icon: Cloud,
      color: "#60A5FA",
    },
    {
      title: "SAP Solutions",
      subtitle: "S/4HANA & Enterprise ERP",
      href: "/services/sap-solution-consulting",
      icon: Layers,
      color: "#F36F21",
    },
    {
      title: "Technology Transformation",
      subtitle: "Future-Ready Modernization",
      href: "/services/technology-transformation",
      icon: Cpu,
      color: "#38BDF8",
    },
  ];

  return (
    <section
      className="hero-section"
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        overflow: "hidden",
        paddingTop: "7.5rem",
        paddingBottom: "2.5rem",
      }}
    >
      {/* Entire Hero Background: Full-Bleed 3D Motion Video Layer */}
      <Hero3DMotion />

      {/* Main Left-Aligned Hero Content Stage */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "auto",
          paddingLeft: "1.75rem",
          paddingRight: "1.75rem",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            textAlign: "left",
          }}
        >
          {/* Eyebrow Status Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              padding: "0.4rem 1.1rem",
              borderRadius: "var(--radius-full, 9999px)",
              background: "rgba(6, 20, 42, 0.72)",
              border: "1px solid rgba(56, 189, 248, 0.32)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              marginBottom: "1.25rem",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
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
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {activeContent.eyebrow}
            </span>
          </div>

          {/* Outcome-Led Headline (Region Tailored) */}
          <h1
            className="hero-headline"
            style={{
              fontSize: "clamp(2.4rem, 4.4vw, 3.85rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              color: "#FFFFFF",
              margin: "0 0 1.25rem 0",
              letterSpacing: "-0.025em",
              textShadow: "0 4px 30px rgba(0, 0, 0, 0.85)",
            }}
          >
            {activeContent.headlineLead}
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #38BDF8 0%, #60A5FA 55%, #F36F21 110%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginTop: "0.2rem",
              }}
            >
              {activeContent.headlineAccent}
            </span>
          </h1>

          {/* 1-2 Line Value Proposition */}
          <p
            style={{
              color: "var(--text-light-med)",
              fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
              lineHeight: 1.6,
              marginBottom: "1.75rem",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            {activeContent.valueProp}
          </p>

          {/* Action CTAs: Primary + Secondary */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.1rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                padding: "0.85rem 2rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                borderRadius: "var(--radius-full, 9999px)",
                boxShadow: "0 8px 25px rgba(243, 111, 33, 0.4)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
              }}
            >
              <PhoneCall size={17} />
              <span>Talk to an Expert</span>
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/services"
              className="btn btn-glass"
              style={{
                padding: "0.85rem 1.85rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                borderRadius: "var(--radius-full, 9999px)",
                background: "rgba(6, 18, 38, 0.55)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                color: "#FFFFFF",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
              }}
            >
              <span>Explore Services</span>
            </Link>
          </div>

          {/* Glassmorphic 4-Pillar Capability Matrix */}
          <div
            className="hero-capabilities-matrix"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.85rem",
            }}
          >
            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              return (
                <Link
                  key={cap.title}
                  href={cap.href}
                  className="hero-capability-card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.95rem 1.15rem",
                    borderRadius: "14px",
                    background: "rgba(6, 18, 38, 0.65)",
                    border: "1px solid rgba(56, 189, 248, 0.22)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    textDecoration: "none",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                    transition: "all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "10px",
                        background: "rgba(56, 189, 248, 0.12)",
                        border: "1px solid rgba(56, 189, 248, 0.28)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <IconComp size={19} color={cap.color} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.9375rem",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          lineHeight: 1.25,
                        }}
                      >
                        {cap.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.71875rem",
                          fontWeight: 500,
                          color: "rgba(224, 242, 254, 0.65)",
                          marginTop: "0.15rem",
                        }}
                      >
                        {cap.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={16} color="#38BDF8" style={{ opacity: 0.6 }} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4-Column Bottom Metrics Strip with Vertical Dividers (Exact Reference Match) */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "1.75rem",
          paddingRight: "1.75rem",
          marginTop: "2.5rem",
        }}
      >
        <div
          className="hero-metrics-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            alignItems: "center",
            padding: "1.5rem 0 0.5rem 0",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {/* Stat 1: 99% Client Retention Rate */}
          <div style={{ textAlign: "center", padding: "0 1rem" }}>
            <div
              style={{
                fontSize: "clamp(1.9rem, 3vw, 2.75rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "0.4rem",
                letterSpacing: "-0.02em",
                textShadow: "0 4px 20px rgba(56, 189, 248, 0.35)",
              }}
            >
              99%
            </div>
            <div
              style={{
                fontSize: "0.84375rem",
                color: "rgba(255, 255, 255, 0.78)",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              Client Retention Rate
            </div>
          </div>

          {/* Stat 2: 10+ Years of Experience */}
          <div
            style={{
              textAlign: "center",
              padding: "0 1rem",
              borderLeft: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            <div
              style={{
                fontSize: "clamp(1.9rem, 3vw, 2.75rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "0.4rem",
                letterSpacing: "-0.02em",
                textShadow: "0 4px 20px rgba(56, 189, 248, 0.35)",
              }}
            >
              10+
            </div>
            <div
              style={{
                fontSize: "0.84375rem",
                color: "rgba(255, 255, 255, 0.78)",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              Years of Experience
            </div>
          </div>

          {/* Stat 3: 150+ Digital Solutions Launched */}
          <div
            style={{
              textAlign: "center",
              padding: "0 1rem",
              borderLeft: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            <div
              style={{
                fontSize: "clamp(1.9rem, 3vw, 2.75rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "0.4rem",
                letterSpacing: "-0.02em",
                textShadow: "0 4px 20px rgba(56, 189, 248, 0.35)",
              }}
            >
              150+
            </div>
            <div
              style={{
                fontSize: "0.84375rem",
                color: "rgba(255, 255, 255, 0.78)",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              Digital Solutions Launched
            </div>
          </div>

          {/* Stat 4: 50+ Skilled Professionals */}
          <div
            style={{
              textAlign: "center",
              padding: "0 1rem",
              borderLeft: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            <div
              style={{
                fontSize: "clamp(1.9rem, 3vw, 2.75rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "0.4rem",
                letterSpacing: "-0.02em",
                textShadow: "0 4px 20px rgba(56, 189, 248, 0.35)",
              }}
            >
              50+
            </div>
            <div
              style={{
                fontSize: "0.84375rem",
                color: "rgba(255, 255, 255, 0.78)",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              Skilled Professionals
            </div>
          </div>
        </div>
      </div>

      {/* Scoped Interactive Styles */}
      <style jsx>{`
        .hero-capability-card:hover {
          transform: translateY(-3px) translateX(3px);
          border-color: rgba(56, 189, 248, 0.65) !important;
          background: rgba(10, 28, 56, 0.82) !important;
          box-shadow: 0 12px 30px rgba(0, 102, 179, 0.35) !important;
        }
        @media (max-width: 768px) {
          .hero-capabilities-matrix {
            grid-template-columns: 1fr !important;
          }
          .hero-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem 0;
          }
          .hero-metrics-grid > div:nth-child(3) {
            border-left: none !important;
          }
        }
        @media (max-width: 480px) {
          .hero-metrics-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem 0;
          }
          .hero-metrics-grid > div {
            border-left: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            padding-bottom: 0.75rem;
          }
          .hero-metrics-grid > div:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
