import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Compass, CheckCircle2, ShieldCheck, ArrowRight, PhoneCall, Code, Layers, Zap } from "lucide-react";
import { ConsultingJourneySection } from "@/components/home/ConsultingJourneySection";

export const metadata: Metadata = {
  title: "Consulting Methodology & Engagement Models",
  description:
    "Explore Adamas Tech Consulting advisory and delivery framework: 5-stage transformation pipeline, engagement models, and architectural governance.",
};

const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated Architecture Squad",
    subtitle: "High-Velocity Continuous Modernization",
    desc: "A fully dedicated squad of certified solution architects, senior full-stack engineers, and QA leads aligned directly with your internal leadership to deliver complex roadmaps.",
    bestFor: "Large-scale enterprise platform overhauls, multi-quarter S/4HANA migrations, and continuous digital transformation.",
    badge: "Most Comprehensive",
  },
  {
    title: "Fixed-Scope Modernization",
    subtitle: "Turnkey Milestones & Guaranteed Deliverables",
    desc: "Defined scope of work with milestone-based sign-offs and fixed delivery schedules. Ideal for targeted migrations, e-invoicing compliance, or custom platform deployments.",
    bestFor: "Well-specified projects such as UAE E-invoicing, Open edX deployments, and targeted legacy microservice decoupling.",
    badge: "Predictable Cost",
  },
  {
    title: "Strategic Advisory & Audits",
    subtitle: "Executive Architecture & Tech Due Diligence",
    desc: "Senior principal architects conduct code reviews, cloud cost audits, security threat modeling, and ERP strategy roadmaps to derisk high-stakes technological investments.",
    bestFor: "CTO advisory, M&A technological due diligence, and pre-migration architectural blueprints.",
    badge: "High-Level Insight",
  },
];

export default function ConsultingPage() {
  return (
    <div style={{ paddingTop: "6.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 4rem" }}>
          <div className="section-tag orange">Advisory & Governance</div>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Engineering-Led Technology Consulting
          </h1>
          <p style={{ color: "var(--text-light-muted)", fontSize: "1.125rem", lineHeight: 1.7 }}>
            We do not deliver theoretical decks that sit on a shelf. Our consulting frameworks are engineered by practitioners who design, build, deploy, and maintain mission-critical enterprise systems.
          </p>
        </div>

        {/* 5-Step Pipeline */}
        <ConsultingJourneySection />

        {/* Engagement Models */}
        <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
            <div className="section-tag">Flexible Collaboration</div>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#FFFFFF" }}>
              Enterprise Engagement Models
            </h2>
            <p style={{ color: "var(--text-light-muted)", fontSize: "1rem", marginTop: "0.5rem" }}>
              Designed to adapt flexibly to your internal engineering maturity, governance requirements, and budget constraints.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <div key={idx} className="glass-card" style={{ display: "flex", flexDirection: "column", padding: "2.25rem" }}>
                <span
                  style={{
                    alignSelf: "flex-start",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--brand-orange-primary)",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(243, 111, 33, 0.12)",
                    marginBottom: "1rem",
                  }}
                >
                  {model.badge}
                </span>

                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.25rem" }}>
                  {model.title}
                </h3>
                <div style={{ fontSize: "0.875rem", color: "#38BDF8", fontWeight: 600, marginBottom: "1.25rem" }}>
                  {model.subtitle}
                </div>

                <p style={{ color: "var(--text-light-med)", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                  {model.desc}
                </p>

                <div
                  style={{
                    background: "rgba(4, 12, 24, 0.6)",
                    padding: "1rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    fontSize: "0.8125rem",
                    color: "var(--text-light-muted)",
                    marginTop: "auto",
                    marginBottom: "1.5rem",
                  }}
                >
                  <strong style={{ color: "#E2E8F0" }}>Ideal for:</strong> {model.bestFor}
                </div>

                <Link href="/contact" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                  <span>Initiate Discussion</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
