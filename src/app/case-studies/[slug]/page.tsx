import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCaseStudyBySlug } from "@/lib/db";
import { ArrowLeft, CheckCircle2, TrendingUp, PhoneCall, Building2 } from "lucide-react";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.challenge,
    openGraph: {
      title: `${study.title} | Adamas Tech Consulting`,
      description: study.challenge,
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <div style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: "2rem" }}>
          <Link
            href="/case-studies"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.875rem",
              color: "var(--brand-blue-vibrant)",
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Case Studies</span>
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
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--brand-orange-primary)",
                }}
              >
                {study.industry}
              </span>
              <span style={{ color: "var(--text-light-muted)", fontSize: "0.875rem" }}>&bull;</span>
              <span style={{ fontSize: "0.875rem", color: "var(--text-light-med)" }}>
                Client Context: {study.clientName}
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, marginBottom: "2rem" }}>
              {study.title}
            </h1>

            {/* Metrics Ribbon */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${study.metrics.length}, 1fr)`,
                gap: "1.5rem",
                background: "rgba(4, 12, 24, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem",
                marginBottom: "2.5rem",
                textAlign: "center",
              }}
            >
              {study.metrics.map((m, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--brand-orange-primary)" }}>
                    {m.metric}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-light-high)", fontWeight: 600, marginTop: "0.25rem" }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: "0.85rem 2rem" }}>
                <PhoneCall size={16} />
                <span>Discuss a Similar Architecture</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Narrative Deep Dive */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
          <div className="glass-card" style={{ padding: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
              The Business & Technical Challenge
            </h2>
            <p style={{ color: "var(--text-light-med)", fontSize: "1rem", lineHeight: 1.7 }}>
              {study.challenge}
            </p>
          </div>

          <div className="glass-card" style={{ padding: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
              The Architectural Solution
            </h2>
            <p style={{ color: "var(--text-light-med)", fontSize: "1rem", lineHeight: 1.7 }}>
              {study.solution}
            </p>
          </div>

          <div className="glass-card" style={{ padding: "2.5rem", gridColumn: "1 / -1" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
              Verified Measurable Outcomes
            </h2>
            <p style={{ color: "var(--text-light-med)", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              {study.results}
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {study.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "0.3rem 0.75rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(24, 144, 215, 0.15)",
                    border: "1px solid rgba(24, 144, 215, 0.3)",
                    color: "var(--brand-blue-vibrant)",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
