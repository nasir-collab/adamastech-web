import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedServices } from "@/lib/db";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Enterprise Practice Areas & IT Services",
  description:
    "Explore Adamas Tech Consulting practice areas: SAP S/4HANA Solutions, AWS Cloud DevOps, AI/ML Analytics, Oracle NetSuite, Open edX®, and UAE E-Invoicing.",
};

export default async function ServicesListingPage() {
  const services = await getPublishedServices();

  return (
    <div style={{ paddingTop: "6.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Page Hero */}
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 4rem" }}>
          <div className="section-tag">Practice Areas</div>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Enterprise Capabilities Tailored for Sustainable Growth
          </h1>
          <p style={{ color: "var(--text-light-muted)", fontSize: "1.125rem", lineHeight: 1.7 }}>
            From greenfield ERP modernization to edge AI computer vision and secure multi-region cloud hosting, our practice areas solve high-complexity technology challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          {services.map((service) => (
            <div key={service.id} className="glass-card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "var(--brand-orange-primary)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {service.category}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-light-muted)" }}>
                  Verified Practice
                </span>
              </div>

              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
                {service.title}
              </h2>
              <div style={{ fontSize: "0.875rem", color: "var(--brand-blue-vibrant)", fontWeight: 600, marginBottom: "1rem" }}>
                {service.subtitle}
              </div>

              <p style={{ color: "var(--text-light-muted)", fontSize: "0.9375rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                {service.shortDesc}
              </p>

              <div style={{ marginTop: "auto", marginBottom: "1.75rem" }}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {service.features.map((feat, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "var(--text-light-med)" }}>
                      <CheckCircle2 size={14} color="#38BDF8" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1rem" }}>
                <Link
                  href={`/services/${service.slug}`}
                  className="btn btn-secondary"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <span>Practice Overview & Architecture</span>
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
