"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { InitialIndustry } from "@/lib/data/initialData";
import {
  GraduationCap,
  ShoppingBag,
  Activity,
  Landmark,
  Hotel,
  Factory,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface IndustriesSectionProps {
  industries?: InitialIndustry[];
}

export function IndustriesSection({ industries }: IndustriesSectionProps) {
  const industryList = [
    {
      slug: "education",
      name: "Education & Universities",
      title: "Digital Campus & High-Concurrency Student ERP",
      description:
        "Digitizing admissions, credit calculations, examination integrity, and multi-campus governance for over 180,000 active students globally.",
      image: "/images/industries/education.jpg",
      icon: GraduationCap,
      accent: "#1890D7",
      metrics: "180k+ Active Students",
      solutions: [
        "Arivoo UMS Full-Lifecycle University ERP",
        "TestGUARD Remote Biometric AI Proctoring",
        "Open edX® Enterprise Concurrency Platform",
      ],
    },
    {
      slug: "bfsi",
      name: "BFSI (Banking & Finance)",
      title: "High-Velocity Treasury & Financial Automation",
      description:
        "Sub-second liquidity forecasting, automated cash reconciliation, SAP Treasury integration, and bank-grade data security.",
      image: "/images/industries/bfsi.jpg",
      icon: Landmark,
      accent: "var(--brand-orange-primary)",
      metrics: "+30% Cash Forecast Accuracy",
      solutions: [
        "SAP S/4HANA Treasury & Cash Management",
        "Automated Multi-Entity Bank Reconciliation",
        "Strict ISO 27001 Financial Data Governance",
      ],
    },
    {
      slug: "healthcare",
      name: "Healthcare & Life Sciences",
      title: "Compliant Clinical Telemetry & Patient Workflows",
      description:
        "Modernizing electronic health records (EHR), supply tracking, and HIPAA-compliant patient communication systems.",
      image: "/images/industries/healthcare.jpg",
      icon: Activity,
      accent: "#10B981",
      metrics: "Zero Patient Data Breaches",
      solutions: [
        "Sovereign Cloud & HIPAA Compliance Architecture",
        "Computer Vision Patient Telemetry & Anomaly Alerts",
        "Clinical Supply Chain & Pharmaceuticals ERP",
      ],
    },
    {
      slug: "manufacturing",
      name: "Smart Manufacturing",
      title: "Industry 4.0 IoT, Robotics & Supply Chain Visibility",
      description:
        "Real-time shop-floor tracking, predictive machinery maintenance, and end-to-end multi-tier logistics orchestration.",
      image: "/images/industries/manufacturing.jpg",
      icon: Factory,
      accent: "#F59E0B",
      metrics: "80% Latency Reduction in Logistics",
      solutions: [
        "SAP S/4HANA Supply Chain & Plant Logistics",
        "Autonomous Robotic Inspection Telemetry",
        "Warehouse Management & Predictive Inventory AI",
      ],
    },
    {
      slug: "retail",
      name: "Retail & E-Commerce",
      title: "Omnichannel Commerce & Real-Time Inventory",
      description:
        "Connecting online digital storefronts with automated warehouse fulfilment, POS terminals, and personalized loyalty AI engines.",
      image: "/images/industries/retail.jpg",
      icon: ShoppingBag,
      accent: "#EC4899",
      metrics: "3x Faster Checkout Scalability",
      solutions: [
        "Oracle NetSuite Multi-Channel Retail ERP",
        "AI Dynamic Pricing & Cart Recovery Automation",
        "Headless Commerce & Microservices Integration",
      ],
    },
    {
      slug: "public-sector",
      name: "Public Sector & Government",
      title: "Sovereign Cloud, Tax E-Invoicing & Citizen Services",
      description:
        "Mission-critical public infrastructure meeting strict sovereign data localization, Peppol standards, and zero-trust cybersecurity.",
      image: "/images/events/house-of-lords-26-nov.jpg",
      icon: ShieldCheck,
      accent: "#8B5CF6",
      metrics: "100% Tax & Legal Compliance",
      solutions: [
        "UAE E-Invoicing & Federal Tax Authority Automation",
        "Sovereign Multi-Zone Cloud Architecture",
        "National Examination Authentication Frameworks",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const current = industryList[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section
      className="industries-section"
      id="industries"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #061833 0%, #020710 100%)",
        padding: "6.5rem 0",
        position: "relative",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "760px", marginBottom: "3.5rem" }}>
          <div className="section-tag blue" style={{ marginBottom: "0.6rem" }}>
            Tailored Industry Practice Groups
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
            }}
          >
            Specialized Domain Architecture
          </h2>
          <p
            style={{
              color: "var(--text-light-muted)",
              fontSize: "1.0625rem",
              marginTop: "0.85rem",
              lineHeight: 1.6,
            }}
          >
            We don&apos;t build one-size-fits-all software. Every engineering engagement is driven by deep regulatory knowledge and industry-tailored solution blueprints.
          </p>
        </div>

        {/* Industry Selector Strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0.75rem",
            marginBottom: "2.75rem",
          }}
        >
          {industryList.map((ind, idx) => {
            const Icon = ind.icon;
            const isSelected = idx === activeTab;
            return (
              <button
                key={ind.slug}
                onClick={() => setActiveTab(idx)}
                style={{
                  background: isSelected ? "rgba(24, 144, 215, 0.2)" : "rgba(255, 255, 255, 0.04)",
                  border: isSelected ? `1px solid ${ind.accent}` : "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "14px",
                  padding: "1rem 1.15rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.25s ease",
                  outline: "none",
                  boxShadow: isSelected ? `0 8px 24px ${ind.accent}25` : "none",
                }}
              >
                <div
                  style={{
                    padding: "0.5rem",
                    borderRadius: "10px",
                    background: isSelected ? ind.accent : "rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="#FFFFFF" />
                </div>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: isSelected ? "#FFFFFF" : "var(--text-light-med)" }}>
                  {ind.name.split(" ")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Image-Visualized Industry Stage */}
        <div
          className="glass-card"
          style={{
            background: "linear-gradient(135deg, rgba(8, 22, 45, 0.9) 0%, rgba(3, 10, 22, 0.95) 100%)",
            border: `1px solid ${current.accent}44`,
            borderRadius: "24px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "0",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Left Column: Solution Detail & Deliverables */}
          <div
            style={{
              padding: "clamp(2rem, 4vw, 3.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "var(--radius-full)",
                  background: `${current.accent}18`,
                  border: `1px solid ${current.accent}44`,
                  color: current.accent,
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                }}
              >
                <CurrentIcon size={15} />
                <span>{current.name} Practice</span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.65rem, 2.5vw, 2.25rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: "0.75rem",
                }}
              >
                {current.title}
              </h3>

              <p
                style={{
                  color: "var(--text-light-med)",
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  marginBottom: "1.75rem",
                }}
              >
                {current.description}
              </p>

              {/* Verified Solutions in this Industry */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2.25rem",
                  padding: "1.25rem",
                  borderRadius: "14px",
                  background: "rgba(0, 0, 0, 0.25)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light-muted)", fontWeight: 700 }}>
                  Proven Enterprise Solutions:
                </div>
                {current.solutions.map((sol, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      fontSize: "0.875rem",
                      color: "#F1F5F9",
                    }}
                  >
                    <CheckCircle2 size={16} color={current.accent} style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link
                href="/industries"
                className="btn btn-primary"
                style={{ padding: "0.85rem 1.8rem", fontSize: "0.9375rem" }}
              >
                <span>Explore {current.name.split(" ")[0]} Architecture</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: Full Cinematic Photograph */}
          <div
            style={{
              position: "relative",
              minHeight: "420px",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src={current.image}
              alt={current.name}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            {/* Ambient Dark Gradient Overlays */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(8, 22, 45, 0.95) 0%, rgba(8, 22, 45, 0.25) 35%, transparent 60%), linear-gradient(180deg, transparent 60%, rgba(3, 10, 22, 0.95) 100%)",
              }}
            />

            {/* Floating Metric Pill on Image */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                right: "2rem",
                padding: "1.25rem 1.5rem",
                borderRadius: "16px",
                background: "rgba(4, 14, 30, 0.88)",
                border: `1px solid ${current.accent}66`,
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: `${current.accent}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CurrentIcon size={22} color={current.accent} />
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light-muted)", fontWeight: 700 }}>
                  Industry Benchmark Result
                </div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#FFFFFF", marginTop: "0.15rem" }}>
                  {current.metrics}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
