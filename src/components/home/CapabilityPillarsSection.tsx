"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cloud, Layers, Cpu, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export function CapabilityPillarsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const pillars = [
    {
      id: "cloud",
      title: "Cloud Services",
      tagline: "Resilient Multi-Cloud, Sovereign Data & Automated DevOps",
      description:
        "Modernize compute, optimize FinOps cloud spend, and engineer zero-downtime microservices with AWS-certified architects and infrastructure-as-code.",
      highlights: [
        "AWS Well-Architected & FinOps Optimization",
        "Multi-Region Sovereign Data Localization",
        "Automated CI/CD DevOps & Kubernetes Clusters",
      ],
      image: "/images/services/cloud-command-center.jpg",
      ctaText: "Explore Cloud Services",
      ctaLink: "/services/aws-solutions",
      icon: Cloud,
      accentColor: "#1890D7",
      metricBadge: "99.99% Availability SLA",
    },
    {
      id: "transformation",
      title: "Digital Transformation",
      tagline: "SAP S/4HANA Migrations, Oracle NetSuite & Core Modernization",
      description:
        "Decouple legacy technical debt and monolithic architectures into agile, real-time enterprise platforms that drive strategic operational efficiency.",
      highlights: [
        "S/4HANA Greenfield & Brownfield Migrations",
        "Automated Treasury, Cash Management & SAC",
        "UAE E-Invoicing & Peppol Compliance",
      ],
      image: "/images/services/service-sap.jpg",
      ctaText: "Explore Transformation",
      ctaLink: "/services/sap-solution-consulting",
      icon: Layers,
      accentColor: "var(--brand-orange-primary)",
      metricBadge: "45% Lower TCO",
    },
    {
      id: "ai",
      title: "AI & Cognitive Services",
      tagline: "Enterprise GenAI, Computer Vision & Intelligent Automation",
      description:
        "Harness custom foundation models, proprietary document intelligence, and predictive telemetry to automate complex human decisions at machine scale.",
      highlights: [
        "Autonomous Multi-Agent Workflow Pipelines",
        "Computer Vision & Biometric Telemetry",
        "Domain-Trained Enterprise LLMs with RAG",
      ],
      image: "/images/services/service-aiml.jpg",
      ctaText: "Explore AI Services",
      ctaLink: "/services/ai-data-analytics",
      icon: Cpu,
      accentColor: "#38BDF8",
      metricBadge: "+30% Decision Accuracy",
    },
  ];

  return (
    <section
      className="capability-pillars-section"
      style={{
        padding: "6.5rem 0",
        background: "radial-gradient(ellipse at 50% 0%, #06162E 0%, #030813 70%)",
        position: "relative",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "760px", marginBottom: "3.5rem" }}>
          <div className="section-tag orange" style={{ marginBottom: "0.6rem" }}>
            Three Core Capability Pillars
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
            Engineering What&apos;s Next for High-Scale Enterprises
          </h2>
          <p
            style={{
              color: "var(--text-light-muted)",
              fontSize: "1.0625rem",
              marginTop: "0.85rem",
              lineHeight: 1.6,
            }}
          >
            Choose your modernization entry point. Our senior-led engineering teams architect, deliver, and govern outcomes across cloud, core systems, and artificial intelligence.
          </p>
        </div>

        {/* 3 Visual Pillar Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isHovered = hoveredCard === pillar.id;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setHoveredCard(pillar.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: "rgba(8, 20, 40, 0.75)",
                  border: isHovered
                    ? `1px solid ${pillar.accentColor}`
                    : "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "22px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: isHovered
                    ? `0 20px 45px rgba(0, 0, 0, 0.6), 0 0 30px ${pillar.accentColor}25`
                    : "0 10px 30px rgba(0, 0, 0, 0.4)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                }}
              >
                {/* Visual Card Imagery Header */}
                <div
                  style={{
                    position: "relative",
                    height: "220px",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    style={{
                      objectFit: "cover",
                      transform: isHovered ? "scale(1.08)" : "scale(1.0)",
                      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                  {/* Cinematic Dark Gradient Overlays */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(3, 8, 19, 0.2) 0%, rgba(8, 20, 40, 0.95) 100%)",
                    }}
                  />

                  {/* Top Floating Badge & Icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      left: "1.25rem",
                      right: "1.25rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: "rgba(4, 12, 24, 0.85)",
                        border: `1px solid ${pillar.accentColor}66`,
                        backdropFilter: "blur(10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={22} color={pillar.accentColor} />
                    </div>

                    <span
                      style={{
                        padding: "0.35rem 0.85rem",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(4, 12, 24, 0.85)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        color: "#FFFFFF",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {pillar.metricBadge}
                    </span>
                  </div>

                  {/* Title Overlay at bottom of Image */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1.5rem",
                      right: "1.5rem",
                      zIndex: 2,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.55rem",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "-0.015em",
                        lineHeight: 1.2,
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: pillar.accentColor,
                        marginTop: "0.2rem",
                      }}
                    >
                      {pillar.tagline}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: "1.5rem 1.75rem 2rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <p
                      style={{
                        color: "var(--text-light-med)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {pillar.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.6rem",
                        marginBottom: "1.75rem",
                        paddingTop: "1rem",
                        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      {pillar.highlights.map((h, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.55rem",
                            fontSize: "0.84375rem",
                            color: "#E2E8F0",
                          }}
                        >
                          <CheckCircle2
                            size={15}
                            color={pillar.accentColor}
                            style={{ flexShrink: 0, marginTop: "0.2rem" }}
                          />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={pillar.ctaLink}
                      className="btn"
                      style={{
                        width: "100%",
                        justifyContent: "space-between",
                        background: isHovered
                          ? pillar.accentColor
                          : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${pillar.accentColor}88`,
                        color: "#FFFFFF",
                        padding: "0.85rem 1.4rem",
                        borderRadius: "12px",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        transition: "all 0.25s ease",
                      }}
                    >
                      <span>{pillar.ctaText}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
