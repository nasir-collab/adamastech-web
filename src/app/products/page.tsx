import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedProducts } from "@/lib/db";
import { ArrowRight, ExternalLink, Check, Sparkles, GraduationCap, School, Laptop, Shield } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Proprietary Software Products & Platforms | Arivoo & TestGUARD",
  description:
    "Explore Adamas Tech Consulting proprietary software: Arivoo UMS (University Management), Arivoo SMS (School System), Arivoo LMS, and TestGUARD AI Proctoring.",
};

function getProductIcon(slug: string) {
  switch (slug) {
    case "arivoo-ums":
      return <GraduationCap size={32} color="#F36F21" />;
    case "arivoo-sms":
      return <School size={32} color="#38BDF8" />;
    case "arivoo-lms":
      return <Laptop size={32} color="#F36F21" />;
    case "testguard":
      return <Shield size={32} color="#38BDF8" />;
    default:
      return <Sparkles size={32} color="#F36F21" />;
  }
}

export default async function ProductsListingPage() {
  const products = await getPublishedProducts();

  return (
    <div style={{ paddingTop: "6.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Hero */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem" }}>
          <div className="section-tag orange">Proprietary Software</div>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Modern Educational & Assessment Platforms
          </h1>
          <p style={{ color: "var(--text-light-muted)", fontSize: "1.125rem", lineHeight: 1.7 }}>
            Robust, battle-tested software products developed by Adamas Tech Consulting to digitize universities, schools, training academies, and high-stakes examination bodies.
          </p>
        </div>

        {/* Product Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))", gap: "2.5rem" }}>
          {products.map((product) => (
            <div
              key={product.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2.5rem",
                borderRadius: "var(--radius-xl)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "var(--radius-md)",
                    background: "rgba(24, 144, 215, 0.12)",
                    border: "1px solid rgba(24, 144, 215, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {getProductIcon(product.slug)}
                </div>
                <div>
                  <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#FFFFFF" }}>{product.name}</h2>
                  <div style={{ fontSize: "0.875rem", color: "var(--brand-orange-primary)", fontWeight: 600 }}>
                    {product.tag}
                  </div>
                </div>
              </div>

              <p style={{ color: "var(--text-light-med)", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                {product.fullDesc}
              </p>

              {product.targetAudience && (
                <div
                  style={{
                    fontSize: "0.8125rem",
                    padding: "0.4rem 0.85rem",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(24, 144, 215, 0.1)",
                    border: "1px solid rgba(24, 144, 215, 0.2)",
                    color: "var(--brand-blue-vibrant)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <strong>Target Audience:</strong> {product.targetAudience}
                </div>
              )}

              <div style={{ marginBottom: "2rem", marginTop: "auto" }}>
                <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-light-muted)", marginBottom: "0.75rem" }}>
                  Verified Key Benefits
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {product.keyBenefits.map((benefit, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#F1F5F9" }}>
                      <Check size={16} color="#F36F21" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1.5rem" }}>
                <Link href={`/products/${product.slug}`} className="btn btn-secondary" style={{ flex: 1, minWidth: "160px" }}>
                  <span>Architecture & Feature Matrix</span>
                  <ArrowRight size={15} />
                </Link>

                {product.liveDemoUrl && (
                  <a
                    href={product.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-glass"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
