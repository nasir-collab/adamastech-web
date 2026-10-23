import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedCaseStudies } from "@/lib/db";
import { ArrowUpRight } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Client Case Studies & Verified Results",
  description:
    "Explore Adamas Tech Consulting verified case studies: SAP Treasury cash forecasting, SAP Analytics manufacturing cost reduction, AI security and parking systems.",
};

export default async function CaseStudiesListingPage() {
  const caseStudies = await getPublishedCaseStudies();

  return (
    <div style={{ paddingTop: "6.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem" }}>
          <div className="section-tag">Case Studies</div>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Real Engagements. Quantifiable Impact.
          </h1>
          <p style={{ color: "var(--text-light-muted)", fontSize: "1.125rem", lineHeight: 1.7 }}>
            Discover how Adamas Tech Consulting engineers mission-critical enterprise transformations with validated operational improvements and return on investment.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "2.5rem" }}>
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2.5rem",
                borderRadius: "var(--radius-xl)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--brand-orange-primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {study.industry}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-light-muted)" }}>
                  {study.clientName}
                </span>
              </div>

              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem", lineHeight: 1.3 }}>
                {study.title}
              </h2>

              <div style={{ fontSize: "0.875rem", color: "var(--text-light-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                <div style={{ marginBottom: "0.5rem" }}>
                  <strong style={{ color: "#E2E8F0" }}>Challenge:</strong> {study.challenge}
                </div>
                <div>
                  <strong style={{ color: "#E2E8F0" }}>Delivered:</strong> {study.results}
                </div>
              </div>

              {/* Metrics */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${study.metrics.length}, 1fr)`,
                  gap: "0.5rem",
                  background: "rgba(4, 12, 24, 0.6)",
                  padding: "1rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  marginBottom: "1.5rem",
                  marginTop: "auto",
                  textAlign: "center",
                }}
              >
                {study.metrics.map((m, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--brand-orange-primary)" }}>
                      {m.metric}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-light-muted)", marginTop: "2px" }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1.25rem" }}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="btn btn-secondary"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
