import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getIndustryBySlug } from "@/lib/db";
import { ArrowLeft, CheckCircle2, PhoneCall, ShieldCheck, ArrowRight } from "lucide-react";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    return { title: "Industry Vertical Not Found" };
  }

  return {
    title: `${industry.title} | Adamas Tech Consulting`,
    description: industry.description,
    openGraph: {
      title: `${industry.title} | Adamas Tech Consulting`,
      description: industry.description,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <div style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: "2rem" }}>
          <Link
            href="/industries"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.875rem",
              color: "var(--brand-blue-vibrant)",
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Industries</span>
          </Link>
        </div>

        {/* Hero */}
        <div
          className="glass-card"
          style={{
            padding: "3.5rem 3rem",
            marginBottom: "3.5rem",
            background: "linear-gradient(135deg, rgba(10, 37, 72, 0.7) 0%, rgba(4, 12, 24, 0.95) 100%)",
            border: "1px solid rgba(24, 144, 215, 0.3)",
          }}
        >
          <div style={{ maxWidth: "880px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.8125rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--brand-orange-primary)",
                marginBottom: "0.75rem",
              }}
            >
              Industry Vertical &bull; {industry.name}
            </span>
            <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              {industry.title}
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--text-light-med)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              {industry.description}
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: "0.85rem 2rem" }}>
                <PhoneCall size={16} />
                <span>Schedule Sector Advisory</span>
              </Link>
              <Link href="/case-studies" className="btn btn-glass" style={{ padding: "0.85rem 2rem" }}>
                <span>View Relevant Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
          <div className="glass-card" style={{ padding: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem" }}>
              Tailored Architecture Deliverables
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {industry.keySolutions.map((sol, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1rem", color: "#F1F5F9" }}>
                  <CheckCircle2 size={18} color="#F36F21" style={{ flexShrink: 0 }} />
                  <span>{sol}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ padding: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem" }}>
              Enterprise Compliance & Data Sovereignty
            </h2>
            <p style={{ color: "var(--text-light-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Whether operating within strict financial controls, GDPR/UK Data Protection Act requirements, or UAE tax authority frameworks, our solutions are engineered with verified compliance benchmarks.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#38BDF8", fontWeight: 600, fontSize: "0.875rem" }}>
              <ShieldCheck size={18} />
              <span>Certified under ISO 27001 & ISO 9001 governance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
