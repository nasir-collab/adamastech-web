"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Cloud,
  CheckCircle,
  BarChart3,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function BusinessOutcomesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const outcomes = [
    {
      id: "legacy",
      title: "Legacy Modernisation",
      metric: "45%",
      metricLabel: "Lower Total Cost of Ownership",
      challenge: "Monolithic ERPs & brittle custom code stalling release velocity",
      solution:
        "We decouple mission-critical core systems into event-driven cloud architectures and modern SAP S/4HANA instances with zero operational downtime.",
      businessImpact: [
        "3x acceleration in enterprise feature deployment frequency",
        "Sub-second reporting on enterprise cash & financial ledger data",
        "Zero single points of failure across operational distribution nodes",
      ],
      image: "/images/services/service-sap.jpg",
      icon: Layers,
      accentColor: "var(--brand-orange-primary)",
      ctaText: "See Modernisation Blueprint",
      ctaLink: "/services/sap-solution-consulting",
    },
    {
      id: "automation",
      title: "Intelligent Automation",
      metric: "65%",
      metricLabel: "Reduction in Process Cycle Times",
      challenge: "High error rates & human bottlenecks across multi-entity operations",
      solution:
        "Orchestrate intelligent document processing, robotic data reconciliation, and autonomous compliance verification across global subsidiaries.",
      businessImpact: [
        "100% audit-ready transactional logs and compliance verification",
        "Automated UAE e-invoicing and tax filing without manual touchpoints",
        "Over 12,000 human operator hours saved annually per business unit",
      ],
      image: "/images/case-studies/security-ai.jpg",
      icon: Cpu,
      accentColor: "#10B981",
      ctaText: "See Automation Outcomes",
      ctaLink: "/services/technology-transformation",
    },
    {
      id: "cloud",
      title: "Cloud Resilience",
      metric: "99.99%",
      metricLabel: "Operational Availability SLA",
      challenge: "Vulnerable on-premise servers and costly multi-region outages",
      solution:
        "Architecting sovereign AWS environments with automated multi-zone failovers, automated container orchestration, and continuous security posture monitoring.",
      businessImpact: [
        "Instant disaster recovery failover under 90 seconds (RTO/RPO)",
        "32% cloud bill optimization via automated FinOps compute scaling",
        "Strict adherence to regional data localization and ISO 27001 mandates",
      ],
      image: "/images/services/cloud-command-center.jpg",
      icon: Cloud,
      accentColor: "#1890D7",
      ctaText: "See Cloud Architecture Benchmarks",
      ctaLink: "/services/aws-solutions",
    },
    {
      id: "ai",
      title: "AI-Led Enterprise Growth",
      metric: "+30%",
      metricLabel: "Operational Decision Precision",
      challenge: "Siloed departmental data leading to reactive decision-making",
      solution:
        "Deploying domain-specific predictive models, automated computer vision inspection, and retrieval-augmented enterprise knowledge graphs.",
      businessImpact: [
        "Proactive demand and cash flow forecasting with 94%+ accuracy",
        "Continuous automated examination proctoring via TestGUARD AI",
        "Personalized digital engagement pipelines driving revenue growth",
      ],
      image: "/images/services/service-aiml.jpg",
      icon: Sparkles,
      accentColor: "#38BDF8",
      ctaText: "See AI Enterprise Deployments",
      ctaLink: "/services/ai-data-analytics",
    },
  ];

  const current = outcomes[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section
      className="business-outcomes-section"
      style={{
        padding: "6.5rem 0",
        background: "#030A14",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "760px", marginBottom: "3.5rem" }}>
          <div className="section-tag blue" style={{ marginBottom: "0.6rem" }}>
            Shift From Services to Measurable Value
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
            Problems Solved: Real Enterprise Outcomes
          </h2>
          <p
            style={{
              color: "var(--text-light-muted)",
              fontSize: "1.0625rem",
              marginTop: "0.85rem",
              lineHeight: 1.6,
            }}
          >
            We measure our success not by hours logged, but by the tangible commercial and operational resilience delivered to your bottom line.
          </p>
        </div>

        {/* Outcome Selector Tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0.85rem",
            marginBottom: "2.75rem",
          }}
        >
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            const isActive = idx === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  background: isActive ? "rgba(24, 144, 215, 0.18)" : "rgba(255, 255, 255, 0.03)",
                  border: isActive ? `1px solid ${item.accentColor}` : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "14px",
                  padding: "1.1rem 1.25rem",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  outline: "none",
                  boxShadow: isActive ? `0 8px 24px ${item.accentColor}20` : "none",
                }}
              >
                <div
                  style={{
                    padding: "0.55rem",
                    borderRadius: "10px",
                    background: isActive ? item.accentColor : "rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s ease",
                  }}
                >
                  <Icon size={18} color="#FFFFFF" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: isActive ? "#FFFFFF" : "var(--text-light-med)",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78125rem",
                      color: isActive ? item.accentColor : "var(--text-light-muted)",
                      fontWeight: 700,
                      marginTop: "0.15rem",
                    }}
                  >
                    {item.metric} {item.metricLabel.split(" ")[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Image-Visualized Outcome Showcase */}
        <div
          className="glass-card"
          style={{
            background: "linear-gradient(135deg, rgba(8, 22, 45, 0.9) 0%, rgba(4, 12, 26, 0.95) 100%)",
            border: `1px solid ${current.accentColor}44`,
            borderRadius: "24px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(24, 144, 215, 0.12)",
          }}
        >
          {/* Left Column: Solution Narrative & Deliverables */}
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
                  background: `${current.accentColor}18`,
                  border: `1px solid ${current.accentColor}44`,
                  color: current.accentColor,
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                }}
              >
                <CurrentIcon size={14} />
                <span>{current.title} Impact Blueprint</span>
              </div>

              <div style={{ fontSize: "0.84375rem", color: "#F87171", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.3rem" }}>
                Enterprise Challenge:
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "1.25rem",
                  lineHeight: 1.35,
                }}
              >
                {current.challenge}
              </div>

              <div style={{ fontSize: "0.84375rem", color: "#38BDF8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.3rem" }}>
                AdamasTech Solution:
              </div>
              <p
                style={{
                  color: "var(--text-light-med)",
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  marginBottom: "1.75rem",
                }}
              >
                {current.solution}
              </p>

              {/* Verified Deliverables List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                  marginBottom: "2rem",
                  padding: "1.25rem",
                  borderRadius: "14px",
                  background: "rgba(0, 0, 0, 0.25)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light-muted)", fontWeight: 700 }}>
                  Quantified Production Deliverables:
                </div>
                {current.businessImpact.map((impact, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      fontSize: "0.875rem",
                      color: "#F1F5F9",
                      lineHeight: 1.45,
                    }}
                  >
                    <CheckCircle size={15} color="#10B981" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                    <span>{impact}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link
                href={current.ctaLink}
                className="btn btn-primary"
                style={{ padding: "0.85rem 1.8rem", fontSize: "0.9375rem" }}
              >
                <span>{current.ctaText}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: Cinematic High-Resolution Operational Visual with Glowing HUD Overlay */}
          <div
            style={{
              position: "relative",
              minHeight: "440px",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.5s ease",
              }}
            />
            {/* Ambient Dark Gradient Overlays */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(8, 22, 45, 0.95) 0%, rgba(8, 22, 45, 0.3) 30%, transparent 60%), linear-gradient(180deg, transparent 50%, rgba(4, 12, 26, 0.95) 100%)",
              }}
            />

            {/* Glowing Heroic Metric HUD Card */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                right: "2rem",
                padding: "1.5rem 1.75rem",
                borderRadius: "18px",
                background: "rgba(4, 14, 30, 0.88)",
                border: `1px solid ${current.accentColor}55`,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: `0 14px 35px rgba(0, 0, 0, 0.6), 0 0 30px ${current.accentColor}20`,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
                <span
                  style={{
                    fontSize: "clamp(2.75rem, 4vw, 3.75rem)",
                    fontWeight: 900,
                    color: current.accentColor,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {current.metric}
                </span>
                <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "#FFFFFF" }}>
                  {current.metricLabel}
                </span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)", marginTop: "0.4rem", lineHeight: 1.4 }}>
                Benchmark measured across live production enterprise deployments over an audited 12-month evaluation cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
