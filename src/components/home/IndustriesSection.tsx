"use client";

import React, { useState } from "react";
import Link from "next/link";
import { InitialIndustry } from "@/lib/data/initialData";
import {
  GraduationCap,
  ShoppingBag,
  Activity,
  Landmark,
  Hotel,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MoreHorizontal,
} from "lucide-react";

interface IndustriesSectionProps {
  industries: InitialIndustry[];
}

function getIndustryIcon(slug: string, isActive: boolean) {
  const size = 17;
  const color = isActive ? "#FFFFFF" : "#64748B";

  switch (slug) {
    case "education":
      return <GraduationCap size={size} color={color} />;
    case "retail":
      return <ShoppingBag size={size} color={color} />;
    case "healthcare":
      return <Activity size={size} color={color} />;
    case "finance":
      return <Landmark size={size} color={color} />;
    case "hospitality":
      return <Hotel size={size} color={color} />;
    case "supply-chain":
      return <Truck size={size} color={color} />;
    case "public-sector":
      return <ShieldCheck size={size} color={color} />;
    default:
      return <Activity size={size} color={color} />;
  }
}

function getIndustryImage(slug: string) {
  switch (slug) {
    case "education":
      return "/images/industries/education.jpg";
    case "retail":
      return "/images/industries/retail.jpg";
    case "healthcare":
      return "/images/services/service-aiml.jpg";
    case "finance":
      return "/images/case-studies/cash-forecasting.jpg";
    case "hospitality":
      return "/images/about-consulting.jpg";
    case "supply-chain":
      return "/images/services/service-tech-transform.jpg";
    case "public-sector":
      return "/images/case-studies/security-ai.jpg";
    default:
      return "/images/industries/education.jpg";
  }
}

export function IndustriesSection({ industries }: IndustriesSectionProps) {
  const [activeSlug, setActiveSlug] = useState<string>(industries[0]?.slug || "education");
  const activeIndustry = industries.find((i) => i.slug === activeSlug) || industries[0];

  return (
    <section
      className="industries-section"
      id="industries"
      style={{
        background: "#F8FAFC",
        padding: "6.5rem 0",
        position: "relative",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "2.75rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              fontSize: "0.8125rem",
              fontWeight: 800,
              color: "#0066B3",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "0.85rem",
            }}
          >
            <span>INDUSTRIES</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.35rem, 4.2vw, 3.4rem)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Empowering growth in diverse industries
          </h2>
        </div>

        {/* Horizontal Pill Tab Bar matching user reference */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom: "2rem",
            marginBottom: "1rem",
          }}
          role="tablist"
        >
          {industries.map((ind) => {
            const isActive = ind.slug === activeSlug;

            return (
              <button
                key={ind.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveSlug(ind.slug)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.75rem 1.4rem",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  borderRadius: "9999px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  border: isActive ? "1px solid #0066B3" : "1px solid #E2E8F0",
                  background: isActive ? "#0066B3" : "#FFFFFF",
                  color: isActive ? "#FFFFFF" : "#475569",
                  boxShadow: isActive
                    ? "0 6px 20px rgba(0, 102, 179, 0.3)"
                    : "0 2px 8px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "#CBD5E1";
                    e.currentTarget.style.background = "#F1F5F9";
                    e.currentTarget.style.color = "#0F172A";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.background = "#FFFFFF";
                    e.currentTarget.style.color = "#475569";
                  }
                }}
              >
                {/* Icon Capsule */}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: isActive ? "rgba(255, 255, 255, 0.2)" : "rgba(100, 116, 139, 0.1)",
                  }}
                >
                  {getIndustryIcon(ind.slug, isActive)}
                </span>
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Content Showcase matching user reference */}
        {activeIndustry && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2.25rem",
              alignItems: "stretch",
            }}
          >
            {/* Left Card: Photographic Visual Frame */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "24px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 12px 35px rgba(0, 0, 0, 0.06)",
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 45px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.06)";
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  minHeight: "360px",
                  borderRadius: "18px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={getIndustryImage(activeIndustry.slug)}
                  alt={`${activeIndustry.name} Industry Visual`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s ease",
                  }}
                />
              </div>
            </div>

            {/* Right Card: Modern macOS / Browser Spec Window */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "24px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 12px 35px rgba(0, 0, 0, 0.06)",
                padding: "2rem 2.25rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Window Header Bar (macOS Traffic Light Dots & Dots Menu) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid #F1F5F9",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#EF4444" }} />
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#F59E0B" }} />
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#10B981" }} />
                </div>
                <MoreHorizontal size={20} color="#94A3B8" />
              </div>

              {/* Title Card Box */}
              <div
                style={{
                  background: "#F1F5F9",
                  borderRadius: "14px",
                  padding: "1.1rem 1.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  marginBottom: "1.25rem",
                  border: "1px solid rgba(0, 0, 0, 0.04)",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "9px",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
                    color: "#0066B3",
                    flexShrink: 0,
                  }}
                >
                  {getIndustryIcon(activeIndustry.slug, false)}
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#0F172A",
                    letterSpacing: "-0.015em",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {activeIndustry.title}
                </h3>
              </div>

              {/* Description Content Box */}
              <div
                style={{
                  background: "#F1F5F9",
                  borderRadius: "16px",
                  padding: "1.6rem 1.75rem",
                  marginBottom: "1.75rem",
                  border: "1px solid rgba(0, 0, 0, 0.04)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.96875rem",
                    lineHeight: 1.68,
                    color: "#334155",
                    margin: 0,
                    fontWeight: 450,
                  }}
                >
                  {activeIndustry.description}
                </p>
              </div>

              {/* Key Solutions List */}
              <div style={{ marginBottom: "2rem", marginTop: "auto" }}>
                <h4
                  style={{
                    fontSize: "0.78125rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#0066B3",
                    marginBottom: "0.85rem",
                  }}
                >
                  Verified Architecture Solutions
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "0.6rem 1rem",
                  }}
                >
                  {activeIndustry.keySolutions.map((sol, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.875rem",
                        color: "#1E293B",
                        fontWeight: 500,
                      }}
                    >
                      <CheckCircle2 size={16} color="#0066B3" style={{ flexShrink: 0 }} />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link Button */}
              <div>
                <Link
                  href={`/industries/${activeIndustry.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "#0066B3",
                    color: "#FFFFFF",
                    padding: "0.85rem 1.85rem",
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(0, 102, 179, 0.3)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#005291";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 102, 179, 0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#0066B3";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 102, 179, 0.3)";
                  }}
                >
                  <span>Consult on {activeIndustry.name} Infrastructure</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
