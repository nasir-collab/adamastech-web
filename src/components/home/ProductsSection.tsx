"use client";

import React from "react";
import Link from "next/link";
import { InitialProduct } from "@/lib/data/initialData";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  School,
  BookOpen,
  Lock,
} from "lucide-react";

interface ProductsSectionProps {
  products: InitialProduct[];
}

function getProductDetails(slug: string) {
  switch (slug) {
    case "arivoo-ums":
      return {
        badge: "CAMPUS ERP • 100K+ STUDENTS",
        badgeColor: "#38BDF8",
        badgeBg: "rgba(56, 189, 248, 0.12)",
        badgeBorder: "rgba(56, 189, 248, 0.3)",
        glowColor: "rgba(0, 102, 179, 0.45)",
        features: ["Paperless Admissions", "Multi-Campus Registrar", "Fee Gateway Sync"],
        mockup: "/images/products/arivoo-ums-mockup-hd.png",
      };
    case "arivoo-sms":
      return {
        badge: "K-12 GOVERNANCE • REAL-TIME GPS",
        badgeColor: "#F36F21",
        badgeBg: "rgba(243, 111, 33, 0.12)",
        badgeBorder: "rgba(243, 111, 33, 0.35)",
        glowColor: "rgba(243, 111, 33, 0.4)",
        features: ["Biometric Attendance", "Instant Parent App Alerts", "Bus GPS Tracking"],
        mockup: "/images/products/arivoo-sms-mockup-hd.png",
      };
    case "arivoo-lms":
      return {
        badge: "DIGITAL LEARNING • SCORM & VIDEO",
        badgeColor: "#38BDF8",
        badgeBg: "rgba(56, 189, 248, 0.12)",
        badgeBorder: "rgba(56, 189, 248, 0.3)",
        glowColor: "rgba(0, 102, 179, 0.45)",
        features: ["Interactive SCORM Courses", "Anti-Cheat Quiz Banks", "QR-Verified Certificates"],
        mockup: "/images/products/arivoo-lms-mockup-hd.png",
      };
    case "testguard":
      return {
        badge: "AI PROCTORING • ISO 27001 AUDITED",
        badgeColor: "#10B981",
        badgeBg: "rgba(16, 185, 129, 0.12)",
        badgeBorder: "rgba(16, 185, 129, 0.35)",
        glowColor: "rgba(16, 185, 129, 0.4)",
        features: ["AI Gaze & Face Tracking", "Browser Lockdown Protocol", "Instant Integrity Score"],
        mockup: "/images/products/testguard-mockup-hd.png",
      };
    default:
      return {
        badge: "PROPRIETARY ENTERPRISE IP",
        badgeColor: "#38BDF8",
        badgeBg: "rgba(56, 189, 248, 0.12)",
        badgeBorder: "rgba(56, 189, 248, 0.3)",
        glowColor: "rgba(0, 102, 179, 0.45)",
        features: ["Cloud Native Architecture", "Zero Data Leaks", "Role-Based Security"],
        mockup: "/images/products/arivoo-ums-mockup-hd.png",
      };
  }
}

export function ProductsSection({ products }: ProductsSectionProps) {
  // Ensure the 4 products match the reference order:
  // 1. Arivoo UMS  | 2. Arivoo SMS
  // 3. Arivoo LMS  | 4. TestGUARD
  const orderedProducts = [...products].sort((a, b) => {
    const orderMap: Record<string, number> = {
      "arivoo-ums": 1,
      "arivoo-sms": 2,
      "arivoo-lms": 3,
      "testguard": 4,
    };
    return (orderMap[a.slug] || 99) - (orderMap[b.slug] || 99);
  });

  return (
    <section
      className="products-section"
      id="products"
      style={{
        background: "radial-gradient(circle at 50% 0%, #0A1E38 0%, #050D1A 55%, #030812 100%)",
        padding: "7.5rem 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(56, 189, 248, 0.2)",
        borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
      }}
    >
      {/* Ambient Cybernetic Glowing Orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(0, 102, 179, 0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(243, 111, 33, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Prominent High-Impact Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 4.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.45rem 1.25rem",
              background: "rgba(10, 37, 72, 0.75)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              borderRadius: "var(--radius-full)",
              marginBottom: "1.5rem",
              backdropFilter: "blur(14px)",
              boxShadow: "0 4px 25px rgba(0, 102, 179, 0.3)",
            }}
          >
            <Sparkles size={16} color="#38BDF8" />
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "#F8FAFC",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Proprietary Software Platforms
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.4rem, 4.4vw, 3.6rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              marginBottom: "1.35rem",
              textShadow: "0 4px 30px rgba(0, 0, 0, 0.8)",
            }}
          >
            Software Products{" "}
            <span style={{ color: "#38BDF8", textShadow: "0 0 25px rgba(56, 189, 248, 0.4)" }}>
              Engineered for Enterprise
            </span>{" "}
            <span style={{ color: "#F36F21", textShadow: "0 0 25px rgba(243, 111, 33, 0.4)" }}>
              Scale
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "#CBD5E1",
              maxWidth: "680px",
              margin: "0 auto",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
            }}
          >
            Proven education technology, campus governance, and AI examination proctoring platforms deployed across major universities and enterprise testing centers globally.
          </p>
        </div>

        {/* 2x2 Elevated Heroic Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
            gap: "2.25rem",
            alignItems: "stretch",
          }}
        >
          {orderedProducts.map((product) => {
            const details = getProductDetails(product.slug);

            return (
              <div
                key={product.id}
                style={{
                  background: "rgba(8, 22, 44, 0.7)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  borderRadius: "24px",
                  padding: "2rem",
                  boxShadow: "0 20px 45px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = details.badgeColor;
                  e.currentTarget.style.boxShadow = `0 25px 55px rgba(0, 0, 0, 0.6), 0 0 30px ${details.glowColor}`;
                  const stage = e.currentTarget.querySelector(".device-stage") as HTMLElement;
                  if (stage) {
                    stage.style.transform = "scale(1.04)";
                    stage.style.borderColor = details.badgeColor;
                  }
                  const btn = e.currentTarget.querySelector(".explore-btn") as HTMLElement;
                  if (btn) {
                    btn.style.background = details.badgeColor;
                    btn.style.color = "#000000";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.25)";
                  e.currentTarget.style.boxShadow = "0 20px 45px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.12)";
                  const stage = e.currentTarget.querySelector(".device-stage") as HTMLElement;
                  if (stage) {
                    stage.style.transform = "scale(1)";
                    stage.style.borderColor = "rgba(56, 189, 248, 0.25)";
                  }
                  const btn = e.currentTarget.querySelector(".explore-btn") as HTMLElement;
                  if (btn) {
                    btn.style.background = "rgba(56, 189, 248, 0.15)";
                    btn.style.color = "#FFFFFF";
                  }
                }}
              >
                {/* Left Side: Luminous 3D Device Showcase Stage */}
                <div
                  className="device-stage"
                  style={{
                    flexShrink: 0,
                    width: "230px",
                    height: "155px",
                    background: `radial-gradient(circle at center, ${details.glowColor} 0%, rgba(6, 15, 30, 0.95) 75%)`,
                    borderRadius: "18px",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.75rem",
                    boxShadow: "inset 0 0 25px rgba(0, 0, 0, 0.6)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease",
                  }}
                >
                  <img
                    src={details.mockup}
                    alt={`${product.name} Mockup`}
                    style={{
                      maxWidth: "94%",
                      maxHeight: "94%",
                      objectFit: "contain",
                      display: "block",
                      filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.6))",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>

                {/* Right Side: High-Impact Typography & Metadata */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Eyebrow Pill */}
                  <div
                    style={{
                      display: "inline-block",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "6px",
                      background: details.badgeBg,
                      border: `1px solid ${details.badgeBorder}`,
                      color: details.badgeColor,
                      fontSize: "0.71875rem",
                      fontWeight: 800,
                      letterSpacing: "0.05em",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {details.badge}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      margin: "0 0 0.4rem 0",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.25,
                    }}
                  >
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.55,
                      color: "#94A3B8",
                      margin: "0 0 1rem 0",
                    }}
                  >
                    {product.shortDesc}
                  </p>

                  {/* Key Capabilities Bullet Strip */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      marginBottom: "1.1rem",
                    }}
                  >
                    {details.features.map((feat, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: "0.75rem",
                          color: "#E2E8F0",
                          background: "rgba(255, 255, 255, 0.06)",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "4px",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Bar */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="explore-btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.45rem 1rem",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(56, 189, 248, 0.15)",
                        border: "1px solid rgba(56, 189, 248, 0.35)",
                        color: "#FFFFFF",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <span>Specifications</span>
                      <ArrowRight size={14} />
                    </Link>

                    {product.liveDemoUrl && (
                      <a
                        href={product.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          color: "#94A3B8",
                          fontSize: "0.78125rem",
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#38BDF8")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                      >
                        <span>Live Portal</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
