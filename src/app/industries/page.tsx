import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedIndustries } from "@/lib/db";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Industry Verticals & Domain Solutions",
  description:
    "Explore Adamas Tech Consulting specialized industry architectures: Education, Retail & E-Commerce, Healthcare, Financial Services, Hospitality, Supply Chain, and Public Sector.",
};

export default async function IndustriesListingPage() {
  const industries = await getPublishedIndustries();

  return (
    <div style={{ paddingTop: "6.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem" }}>
          <div className="section-tag orange">Industry Verticals</div>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Empowering Growth Across Diverse Global Sectors
          </h1>
          <p style={{ color: "var(--text-light-muted)", fontSize: "1.125rem", lineHeight: 1.7 }}>
            Domain-specific IT consulting that pairs industry regulatory understanding with agile cloud and enterprise software design.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.25rem" }}>
          {industries.map((ind) => (
            <div key={ind.id} className="glass-card" style={{ display: "flex", flexDirection: "column", padding: "2.25rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--brand-orange-primary)", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                Sector Practice
              </span>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
                {ind.title}
              </h2>
              <p style={{ color: "var(--text-light-muted)", fontSize: "0.9375rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                {ind.description}
              </p>

              <div style={{ marginBottom: "1.75rem", marginTop: "auto" }}>
                <h4 style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-light-muted)", marginBottom: "0.75rem" }}>
                  Key Architectural Solutions
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {ind.keySolutions.map((sol, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "#F1F5F9" }}>
                      <CheckCircle2 size={14} color="#38BDF8" style={{ flexShrink: 0 }} />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1.25rem" }}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="btn btn-secondary"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <span>Explore {ind.name} Capabilities</span>
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
