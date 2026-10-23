"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Compass,
  Cpu,
  Rocket,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Layers,
  Activity,
  FileCheck,
  Clock,
  Sparkles,
  Zap,
  ChevronRight,
  Workflow,
  BarChart3,
} from "lucide-react";

interface JourneyStage {
  step: string;
  phase: string;
  timeline: string;
  title: string;
  category: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; color?: string; className?: string; style?: React.CSSProperties }>;
  accentColor: string;
  metricLabel: string;
  metricValue: string;
  deliverables: string[];
  keyTools: string[];
  executiveOutcome: string;
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: "01",
    phase: "Phase 1",
    timeline: "Weeks 1 – 2",
    title: "Discovery & Alignment",
    category: "Strategic Diagnostic",
    desc: "Comprehensive technical audit of existing infrastructure, business workflows, tech debt, security bottlenecks, and strategic executive goals.",
    icon: Search,
    accentColor: "#F36F21",
    metricLabel: "Audit Coverage",
    metricValue: "100%",
    deliverables: ["Infrastructure & Tech Debt Audit", "Executive ROI & Value Roadmap", "Security & Compliance Gap Matrix"],
    keyTools: ["Architecture Mapping", "Cost Modeling", "Stakeholder Interviews"],
    executiveOutcome: "Clear baseline diagnosis with quantified business case and zero technical blindspots.",
  },
  {
    step: "02",
    phase: "Phase 2",
    timeline: "Weeks 3 – 4",
    title: "Strategy & Architecture",
    category: "System Blueprint",
    desc: "Designing resilient cloud, ERP, or AI architectures with defined SLAs, zero-trust security frameworks, and cost-optimized pipelines.",
    icon: Compass,
    accentColor: "#38BDF8",
    metricLabel: "Architecture SLA",
    metricValue: "99.99%",
    deliverables: ["Multi-Cloud Target Architecture", "Zero-Trust Security Blueprint", "Data Pipeline & Schema Specs"],
    keyTools: ["AWS / Azure Well-Architected", "Terraform HCL", "C4 Modeling"],
    executiveOutcome: "Board-ready architectural blueprint with transparent TCO and risk mitigation protocols.",
  },
  {
    step: "03",
    phase: "Phase 3",
    timeline: "Weeks 5 – 8",
    title: "Solution Engineering",
    category: "Core Construction",
    desc: "Modular prototype modeling, security threat assessments, microservices development, and enterprise database schema normalization.",
    icon: Cpu,
    accentColor: "#818CF8",
    metricLabel: "Prototyping Velocity",
    metricValue: "3x Faster",
    deliverables: ["Production-Ready Microservices", "Normalized Data Warehouses", "Hardened API Gateways"],
    keyTools: ["Next.js / Node.js", "PostgreSQL / Snowflake", "Docker & Kubernetes"],
    executiveOutcome: "Engineered high-throughput software modules ready for enterprise-scale stress loads.",
  },
  {
    step: "04",
    phase: "Phase 4",
    timeline: "Weeks 9 – 12",
    title: "Agile Implementation",
    category: "Deployment & Migration",
    desc: "Iterative sprints with automated CI/CD deployment, rigorous automated testing, and legacy migration with zero downtime.",
    icon: Rocket,
    accentColor: "#34D399",
    metricLabel: "Downtime Cutover",
    metricValue: "0 min",
    deliverables: ["Automated Canary CI/CD Pipelines", "End-to-End Automated Test Suite", "Zero-Downtime Data Cutover"],
    keyTools: ["GitHub Actions / GitLab CI", "Playwright / Jest", "Kubernetes Ingress"],
    executiveOutcome: "Flawless production go-live with instant fallback mechanisms and zero user interruption.",
  },
  {
    step: "05",
    phase: "Phase 5",
    timeline: "Ongoing",
    title: "Optimization & Support",
    category: "SRE & Evolution",
    desc: "24/7 proactive monitoring, automated anomaly detection, performance tuning, compliance auditing, and continuous architectural upgrades.",
    icon: ShieldCheck,
    accentColor: "#F59E0B",
    metricLabel: "Monitoring SLA",
    metricValue: "24/7/365",
    deliverables: ["Real-Time APM & Telemetry Dashboards", "Quarterly FinOps Cloud Optimization", "Automated Compliance Audits"],
    keyTools: ["Prometheus & Grafana", "Datadog APM", "OpenTelemetry"],
    executiveOutcome: "Sustained architectural resilience, continuous efficiency gains, and predictable cloud expenditure.",
  },
];

export function ConsultingJourneySection() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const activeStage = JOURNEY_STAGES[activeStageIndex];

  return (
    <section
      className="consulting-journey-section"
      id="consulting-journey"
      style={{
        background: "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(14, 38, 74, 0.7) 0%, #030812 100%)",
        padding: "7.5rem 0 8rem",
        position: "relative",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Tech Grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 102, 179, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "8%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(243, 111, 33, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 4.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 1rem",
              borderRadius: "9999px",
              background: "rgba(24, 144, 215, 0.1)",
              border: "1px solid rgba(24, 144, 215, 0.3)",
              fontSize: "0.78125rem",
              fontWeight: 700,
              color: "#38BDF8",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              backdropFilter: "blur(8px)",
            }}
          >
            <Workflow size={14} color="#38BDF8" />
            <span>Infographic Methodology • 5-Stage Framework</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
            }}
          >
            The Adamas Consulting Journey
          </h2>

          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "#94A3B8",
              margin: 0,
            }}
          >
            A disciplined, milestone-driven transformation pipeline that bridges strategic executive vision with robust, enterprise-grade engineering execution.
          </p>

          {/* Quick Stats Pill Strip */}
          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.75rem",
              marginTop: "2rem",
              padding: "0.85rem 1.75rem",
              borderRadius: "9999px",
              background: "rgba(10, 25, 48, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
              fontSize: "0.8125rem",
              color: "#CBD5E1",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <CheckCircle2 size={15} color="#34D399" /> 100% Architecture Traceability
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <Clock size={15} color="#38BDF8" /> Fixed-Cadence Iterations
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <ShieldCheck size={15} color="#F36F21" /> Zero-Downtime Migration
            </span>
          </div>
        </div>

        {/* =========================================================================
            INFOGRAPHIC ROADMAP PIPELINE (5 INTERCONNECTED STAGE NODES)
            ========================================================================= */}
        <div style={{ position: "relative", marginBottom: "3.5rem" }}>
          {/* Continuous Connecting Highway Rail (Visible on Large Screens) */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "48px",
              left: "6%",
              right: "6%",
              height: "3px",
              background: "linear-gradient(90deg, #F36F21 0%, #38BDF8 25%, #818CF8 50%, #34D399 75%, #F59E0B 100%)",
              opacity: 0.35,
              zIndex: 1,
            }}
          />

          {/* The 5 Interactive Infographic Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "1.25rem",
              position: "relative",
              zIndex: 2,
            }}
          >
            {JOURNEY_STAGES.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              const IconComp = stage.icon;

              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStageIndex(idx)}
                  style={{
                    background: isSelected
                      ? "linear-gradient(180deg, rgba(16, 42, 82, 0.85) 0%, rgba(8, 22, 46, 0.95) 100%)"
                      : "rgba(10, 26, 50, 0.55)",
                    border: isSelected
                      ? `2px solid ${stage.accentColor}`
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "20px",
                    padding: "1.65rem 1.35rem",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    position: "relative",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: isSelected
                      ? `0 12px 35px -8px ${stage.accentColor}33, 0 0 0 1px ${stage.accentColor}44`
                      : "0 8px 24px rgba(0, 0, 0, 0.25)",
                    transform: isSelected ? "translateY(-6px)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.background = "rgba(14, 34, 66, 0.75)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.background = "rgba(10, 26, 50, 0.55)";
                    }
                  }}
                >
                  {/* Top Stage Header: Index & Pulsing Node */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1.1rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono, monospace)",
                          fontSize: "1.75rem",
                          fontWeight: 800,
                          color: isSelected ? stage.accentColor : "rgba(255, 255, 255, 0.85)",
                          lineHeight: 1,
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {stage.step}
                      </span>
                    </div>

                    {/* Circular Icon Node with Holographic Glow */}
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        background: isSelected
                          ? `${stage.accentColor}22`
                          : "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${isSelected ? stage.accentColor : "rgba(255, 255, 255, 0.12)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: isSelected ? `0 0 16px ${stage.accentColor}66` : "none",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <IconComp
                        size={20}
                        color={isSelected ? stage.accentColor : "#94A3B8"}
                      />
                    </div>
                  </div>

                  {/* Phase & Timeline Capsule */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: isSelected ? stage.accentColor : "#94A3B8",
                      marginBottom: "0.65rem",
                    }}
                  >
                    <span>{stage.phase}</span>
                    <span style={{ opacity: 0.4 }}>•</span>
                    <span>{stage.timeline}</span>
                  </div>

                  {/* Stage Title */}
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1.3,
                      marginBottom: "0.65rem",
                    }}
                  >
                    {stage.title}
                  </h3>

                  {/* Stage Summary Description */}
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      lineHeight: 1.58,
                      color: "#94A3B8",
                      marginBottom: "1.25rem",
                      flexGrow: 1,
                    }}
                  >
                    {stage.desc}
                  </p>

                  {/* Infographic Metric Highlight Pill */}
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "0.85rem",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.71875rem",
                        color: "#64748B",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {stage.metricLabel}
                    </span>
                    <span
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 800,
                        color: stage.accentColor,
                        fontFamily: "var(--font-mono, monospace)",
                      }}
                    >
                      {stage.metricValue}
                    </span>
                  </div>

                  {/* Active Indicator Chevron */}
                  {isSelected && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: "-11px",
                        left: "50%",
                        transform: "translateX(-50%) rotate(45deg)",
                        width: "18px",
                        height: "18px",
                        background: "#08162E",
                        borderRight: `2px solid ${stage.accentColor}`,
                        borderBottom: `2px solid ${stage.accentColor}`,
                        zIndex: 3,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            EXPANDED INFOGRAPHIC DEEP-DIVE DASHBOARD PANEL
            ========================================================================= */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(14, 34, 66, 0.8) 0%, rgba(8, 20, 42, 0.95) 100%)",
            borderRadius: "24px",
            border: `1px solid ${activeStage.accentColor}55`,
            padding: "2.75rem 3rem",
            boxShadow: `0 20px 50px -10px rgba(0, 0, 0, 0.6), 0 0 35px ${activeStage.accentColor}18`,
            backdropFilter: "blur(16px)",
            position: "relative",
            overflow: "hidden",
            marginBottom: "3.5rem",
          }}
        >
          {/* Subtle Top Accent Glow Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${activeStage.accentColor}, transparent)`,
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.75rem",
              alignItems: "center",
            }}
          >
            {/* Left Column: Stage Specification & Executive Value */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.78125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: activeStage.accentColor,
                  marginBottom: "0.85rem",
                }}
              >
                <span>{activeStage.phase}</span>
                <span>•</span>
                <span>{activeStage.category}</span>
                <span>•</span>
                <span>{activeStage.timeline}</span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.75rem, 2.8vw, 2.35rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Stage {activeStage.step}: {activeStage.title}
              </h3>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "#CBD5E1",
                  marginBottom: "1.75rem",
                }}
              >
                {activeStage.desc}
              </p>

              {/* Executive Outcome Box */}
              <div
                style={{
                  background: "rgba(3, 12, 26, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "14px",
                  padding: "1.2rem 1.4rem",
                  borderLeft: `4px solid ${activeStage.accentColor}`,
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: activeStage.accentColor,
                    marginBottom: "0.35rem",
                  }}
                >
                  Executive Value Delivery
                </div>
                <div style={{ fontSize: "0.9375rem", color: "#F1F5F9", fontWeight: 500, lineHeight: 1.5 }}>
                  {activeStage.executiveOutcome}
                </div>
              </div>
            </div>

            {/* Right Column: Concrete Artifacts & Tech Stack Checklist */}
            <div
              style={{
                background: "rgba(5, 16, 34, 0.75)",
                borderRadius: "18px",
                padding: "2rem 2.25rem",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {/* Deliverables Section */}
              <div style={{ marginBottom: "1.75rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.78125rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#94A3B8",
                    marginBottom: "1rem",
                  }}
                >
                  <FileCheck size={16} color={activeStage.accentColor} />
                  <span>Verified Phase Deliverables</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {activeStage.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.65rem",
                        fontSize: "0.90625rem",
                        color: "#E2E8F0",
                        fontWeight: 500,
                        lineHeight: 1.45,
                      }}
                    >
                      <CheckCircle2
                        size={17}
                        color={activeStage.accentColor}
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Tooling Section */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.78125rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#94A3B8",
                    marginBottom: "0.85rem",
                  }}
                >
                  <Layers size={16} color={activeStage.accentColor} />
                  <span>Enterprise Tooling & Standards</span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {activeStage.keyTools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        padding: "0.4rem 0.85rem",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        fontSize: "0.8125rem",
                        color: "#CBD5E1",
                        fontWeight: 500,
                      }}
                    >
                      <Sparkles size={12} color={activeStage.accentColor} />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Link & CTA */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            textAlign: "center",
          }}
        >
          <Link
            href="/consulting"
            className="btn btn-primary"
            style={{
              padding: "0.95rem 2.25rem",
              fontSize: "0.96875rem",
              borderRadius: "9999px",
            }}
          >
            <span>Explore Full Delivery & Governance Framework</span>
            <ArrowRight size={17} />
          </Link>

          <Link
            href="/contact"
            className="btn btn-secondary"
            style={{
              padding: "0.95rem 2rem",
              fontSize: "0.96875rem",
              borderRadius: "9999px",
            }}
          >
            <span>Book a Stage 1 Technical Audit</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
