"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Globe2,
  ShieldCheck,
  UserCheck,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
} from "lucide-react";

export function WhyAdamasTechSection() {
  const [activeHub, setActiveHub] = useState<number>(0);

  const globalHubs = [
    {
      city: "London",
      country: "United Kingdom",
      region: "UK & Europe Hub",
      address: "Golden Cross House, 8 Duncannon St",
      image: "/images/locations/london-tower-bridge.jpg",
      timeZone: "Europe/London",
      role: "Strategic C-Suite Advisory & UK Delivery",
      focus: "Sovereign Cloud, Financial Services, NHS Digital",
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      region: "Middle East Hub",
      address: "Business Bay, Dubai",
      image: "/images/locations/dubai-burj-khalifa.jpg",
      timeZone: "Asia/Dubai",
      role: "MENA Enterprise & Sovereign Modernization",
      focus: "FTA E-Invoicing, Smart Infrastructure, SAP S/4HANA",
    },
    {
      city: "New York / SF",
      country: "United States",
      region: "Americas Hub",
      address: "San Francisco Bay Area & NY",
      image: "/images/locations/san-francisco-golden-gate.jpg",
      timeZone: "America/New_York",
      role: "High-Growth Scale & AWS Cloud Architecture",
      focus: "Enterprise AI, Cloud Migration, Edge Computer Vision",
    },
    {
      city: "Kolkata",
      country: "India",
      region: "Global Engineering Center",
      address: "RICE Adamas Knowledge City & Salt Lake Tech Center",
      image: "/images/locations/kolkata-victoria.jpg",
      timeZone: "Asia/Kolkata",
      role: "24/7 Follow-the-Sun Engineering Hub",
      focus: "Full-Stack Platforms, 950+ Engineers, QA & Security",
    },
  ];

  const differentiators = [
    {
      title: "RICE Adamas Heritage",
      desc: "40+ years conglomerate foundation providing institutional longevity rarely found in boutique consultancies.",
      metric: "40+ Years Provenance",
      icon: Building2,
      color: "var(--brand-orange-primary)",
    },
    {
      title: "24/7 Follow-The-Sun",
      desc: "Co-located senior delivery teams across 4 countries for continuous velocity and zero latency.",
      metric: "4 Global Delivery Hubs",
      icon: Globe2,
      color: "#1890D7",
    },
    {
      title: "Certified Governance",
      desc: "Strict adherence to ISO 9001, ISO 27001 zero-trust security, and CMMI Level 3 quality audit frameworks.",
      metric: "Zero-Defect Standard",
      icon: ShieldCheck,
      color: "#10B981",
    },
    {
      title: "Direct Principal Access",
      desc: "Direct access to veteran SAP architects, cloud directors, and AI researchers from day zero.",
      metric: "Avg 15+ Yrs Seniority",
      icon: UserCheck,
      color: "#8B5CF6",
    },
  ];

  return (
    <section
      className="why-adamastech-section"
      id="about"
      style={{
        padding: "6.5rem 0",
        background: "radial-gradient(circle at 80% 20%, rgba(24, 144, 215, 0.12) 0%, #030813 60%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3.5rem",
          }}
        >
          <div style={{ maxWidth: "700px" }}>
            <div className="section-tag orange" style={{ marginBottom: "0.6rem" }}>
              The AdamasTech Differentiator
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
              }}
            >
              Enterprise Provenance & 4-Country Engineering Scale
            </h2>
            <p
              style={{
                color: "var(--text-light-muted)",
                fontSize: "1.0625rem",
                marginTop: "0.85rem",
                lineHeight: 1.6,
              }}
            >
              Combining the high-touch agility of senior enterprise architects with the 4-decade balance sheet and research backing of the RICE Adamas conglomerate.
            </p>
          </div>

          <div>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ padding: "0.85rem 1.75rem", fontSize: "0.9375rem" }}
            >
              <PhoneCall size={16} />
              <span>Talk to an Expert</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Feature 1: Large Visual Showcase Banner (RICE Adamas Conglomerate Campus) */}
        <div
          className="glass-card"
          style={{
            background: "linear-gradient(135deg, rgba(8, 20, 39, 0.85) 0%, rgba(4, 12, 24, 0.95) 100%)",
            border: "1px solid rgba(24, 144, 215, 0.35)",
            borderRadius: "24px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "0",
            marginBottom: "3rem",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(24, 144, 215, 0.12)",
          }}
        >
          {/* Photographic Campus View */}
          <div
            style={{
              position: "relative",
              minHeight: "420px",
              background: "#030B17",
            }}
          >
            <Image
              src="/images/about-rice-adamas-campus.jpg"
              alt="RICE Adamas Group Conglomerate Campus, Technology Park and Research University"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            {/* Cinematic Gradient Vignette */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, transparent 50%, rgba(4, 12, 24, 0.95) 100%), linear-gradient(180deg, rgba(3, 8, 19, 0.4) 0%, rgba(3, 8, 19, 0.85) 100%)",
              }}
            />

            {/* Floating HUD Badge Over Image */}
            <div
              style={{
                position: "absolute",
                bottom: "1.75rem",
                left: "1.75rem",
                padding: "1rem 1.4rem",
                borderRadius: "14px",
                background: "rgba(3, 8, 19, 0.85)",
                border: "1px solid rgba(24, 144, 215, 0.4)",
                backdropFilter: "blur(14px)",
                color: "#FFFFFF",
                maxWidth: "420px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "var(--brand-orange-primary)",
                  letterSpacing: "0.08em",
                }}
              >
                <Sparkles size={13} />
                <span>Conglomerate Provenance · Founded 1985</span>
              </div>
              <div style={{ fontSize: "1.0625rem", fontWeight: 700, marginTop: "0.3rem" }}>
                RICE Adamas University &amp; Technology Park
              </div>
              <div style={{ fontSize: "0.8125rem", color: "#CBD5E1", marginTop: "0.2rem", lineHeight: 1.4 }}>
                120-Acre multidisciplinary research hub powering advanced AI labs and enterprise talent.
              </div>
            </div>
          </div>

          {/* Narrative & Institutional Stability Pillars */}
          <div
            style={{
              padding: "clamp(2rem, 3.5vw, 3rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#38BDF8",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Institutional Scale
              </div>
              <h3
                style={{
                  fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  marginBottom: "1rem",
                }}
              >
                The Backing of the RICE Adamas Conglomerate
              </h3>
              <p
                style={{
                  color: "var(--text-light-med)",
                  fontSize: "0.96875rem",
                  lineHeight: 1.65,
                  marginBottom: "1.75rem",
                }}
              >
                Adamas Tech Consulting operates as the advanced enterprise technology wing of the renowned RICE Adamas conglomerate. Encompassing universities, research institutes, and multinational enterprises, this pedigree guarantees zero insolvency risk and infinite talent continuity.
              </p>

              {/* Conglomerate Metrics Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "12px",
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--brand-orange-primary)", lineHeight: 1 }}>
                    40+ Yrs
                  </div>
                  <div style={{ fontSize: "0.78125rem", color: "#CBD5E1", marginTop: "0.25rem" }}>
                    Conglomerate Heritage
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "12px",
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#38BDF8", lineHeight: 1 }}>
                    3,500+
                  </div>
                  <div style={{ fontSize: "0.78125rem", color: "#CBD5E1", marginTop: "0.25rem" }}>
                    Engineers &amp; Academics
                  </div>
                </div>
              </div>

              {/* Certified Seals */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  fontSize: "0.8125rem",
                  color: "#94A3B8",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#FFFFFF", fontWeight: 600 }}>
                  <Award size={16} color="#10B981" />
                  <span>ISO 9001 / 27001 Certified</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#FFFFFF", fontWeight: 600 }}>
                  <ShieldCheck size={16} color="var(--brand-orange-primary)" />
                  <span>CMMI Level 3 Maturity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: 4-Country Global Delivery Hubs Photographic Cards */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.015em",
              }}
            >
              Continuous Follow-The-Sun Engineering Across 4 Strategic Hubs
            </h3>
            <p
              style={{
                color: "var(--text-light-muted)",
                fontSize: "0.9375rem",
                maxWidth: "640px",
                margin: "0.4rem auto 0",
              }}
            >
              Local executive proximity in key financial capitals paired with high-velocity 24/7 technical delivery centers.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {globalHubs.map((hub, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  background: "rgba(8, 20, 39, 0.75)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "18px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "rgba(24, 144, 215, 0.5)";
                  e.currentTarget.style.boxShadow = "0 18px 45px rgba(24, 144, 215, 0.25)";
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.35)";
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                {/* Hub City Landmark Photo */}
                <div
                  style={{
                    position: "relative",
                    height: "170px",
                    overflow: "hidden",
                    background: "#051124",
                  }}
                >
                  <img
                    src={hub.image}
                    alt={`${hub.city}, ${hub.country} Office - AdamasTech Global Hub`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(3, 8, 19, 0.3) 0%, rgba(3, 8, 19, 0.85) 100%)",
                    }}
                  />

                  {/* Region Badge Pill */}
                  <div
                    style={{
                      position: "absolute",
                      top: "0.85rem",
                      left: "0.85rem",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "6px",
                      background: "rgba(3, 8, 19, 0.75)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(8px)",
                      fontSize: "0.71875rem",
                      fontWeight: 700,
                      color: "#38BDF8",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {hub.region}
                  </div>

                  {/* City Title */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0.85rem",
                      left: "1rem",
                      right: "1rem",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        margin: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {hub.city}
                    </h4>
                    <div style={{ fontSize: "0.78125rem", color: "#CBD5E1" }}>
                      {hub.country}
                    </div>
                  </div>
                </div>

                {/* Hub Details */}
                <div
                  style={{
                    padding: "1.25rem 1.25rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.84375rem",
                        fontWeight: 700,
                        color: "var(--brand-orange-primary)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {hub.role}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--text-light-muted)",
                        lineHeight: 1.5,
                        marginBottom: "1rem",
                      }}
                    >
                      {hub.focus}
                    </div>
                  </div>

                  <div
                    style={{
                      paddingTop: "0.75rem",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "0.75rem",
                      color: "#94A3B8",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <Clock size={13} color="#38BDF8" />
                      <span>{hub.timeZone}</span>
                    </span>
                    <span style={{ color: "#34D399", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981" }} />
                      Active Node
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
