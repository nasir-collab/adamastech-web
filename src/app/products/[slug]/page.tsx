import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug } from "@/lib/db";
import { ArrowLeft, Check, ExternalLink, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Enterprise Product Portfolio`,
    description: product.shortDesc,
    openGraph: {
      title: `${product.name} | Adamas Tech Consulting`,
      description: product.shortDesc,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: "2rem" }}>
          <Link
            href="/products"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.875rem",
              color: "var(--brand-blue-vibrant)",
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Products & Platforms</span>
          </Link>
        </div>

        {/* Hero */}
        <div
          className="glass-card"
          style={{
            padding: "3.5rem 3rem",
            marginBottom: "3.5rem",
            background: "linear-gradient(135deg, rgba(10, 37, 72, 0.7) 0%, rgba(4, 12, 24, 0.95) 100%)",
            border: "1px solid rgba(243, 111, 33, 0.3)",
          }}
        >
          <div style={{ maxWidth: "840px" }}>
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
              Adamas Proprietary Platform
            </span>
            <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, marginBottom: "0.5rem" }}>
              {product.name}
            </h1>
            <p style={{ fontSize: "1.25rem", color: "#38BDF8", fontWeight: 600, marginBottom: "1.5rem" }}>
              {product.tag}
            </p>
            <p style={{ fontSize: "1.125rem", color: "var(--text-light-med)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              {product.fullDesc}
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: "0.85rem 2rem" }}>
                <PhoneCall size={16} />
                <span>Request Institution Demo</span>
              </Link>
              {product.liveDemoUrl && (
                <a
                  href={product.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-glass"
                  style={{ padding: "0.85rem 2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <span>Launch Official Portal</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Benefits & Technical Highlights */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem" }}>
              Enterprise Features & Strengths
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {product.keyBenefits.map((b, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(243, 111, 33, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Check size={18} color="#F36F21" />
                  </div>
                  <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#FFFFFF" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem" }}>
              Security & Deployment Architecture
            </h2>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                <ShieldCheck size={28} color="#38BDF8" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#FFFFFF" }}>ISO 27001 Data Encryption</h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-light-muted)", marginTop: "0.25rem" }}>
                    AES-256 at rest and TLS 1.3 in transit. Candidate data and academic registries are strictly segregated with role-based permissions.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <Sparkles size={28} color="#F36F21" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#FFFFFF" }}>Dedicated Cloud Hosting on AWS</h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-light-muted)", marginTop: "0.25rem" }}>
                    Autoscaling container clusters designed for zero-lag peak admissions and examination traffic surges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
