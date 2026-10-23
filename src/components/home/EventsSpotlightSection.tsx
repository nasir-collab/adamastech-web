"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Users,
} from "lucide-react";

export function EventsSpotlightSection() {
  return (
    <section
      className="events-spotlight-section"
      style={{
        padding: "6rem 0",
        background: "radial-gradient(ellipse at 50% 50%, #061833 0%, #030813 100%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "760px", marginBottom: "3rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              padding: "0.4rem 1.1rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(243, 111, 33, 0.15)",
              border: "1px solid rgba(243, 111, 33, 0.45)",
              color: "var(--brand-orange-primary)",
              fontSize: "0.78125rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.85rem",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--brand-orange-primary)",
                boxShadow: "0 0 10px var(--brand-orange-primary)",
                display: "inline-block",
              }}
            />
            <span>Time-Critical Executive Briefing</span>
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
            Upcoming Global Leadership Spotlight
          </h2>
          <p
            style={{
              color: "var(--text-light-muted)",
              fontSize: "1.0625rem",
              marginTop: "0.85rem",
              lineHeight: 1.6,
            }}
          >
            Convening enterprise leaders, policymakers, and technical pioneers at the world’s most prestigious institutions.
          </p>
        </div>

        {/* Featured House of Lords Event Card */}
        <div
          className="glass-card"
          style={{
            background: "linear-gradient(135deg, rgba(10, 28, 56, 0.85) 0%, rgba(4, 14, 28, 0.95) 100%)",
            border: "1px solid rgba(24, 144, 215, 0.35)",
            borderRadius: "24px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "0",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(24, 144, 215, 0.15)",
          }}
        >
          {/* Left Column: Event Details & Content */}
          <div
            style={{
              padding: "clamp(2rem, 4vw, 3.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Event Meta Badges */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(24, 144, 215, 0.2)",
                    border: "1px solid rgba(24, 144, 215, 0.4)",
                    color: "#38BDF8",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                  }}
                >
                  <Calendar size={14} />
                  26 November 2026
                </span>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#F1F5F9",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                  }}
                >
                  <MapPin size={14} color="#F36F21" />
                  House of Lords, London
                </span>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(16, 185, 129, 0.12)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    color: "#34D399",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                  }}
                >
                  <Clock size={14} />
                  14:00 – 19:30 GMT
                </span>
              </div>

              {/* Event Title */}
              <h3
                style={{
                  fontSize: "clamp(1.6rem, 2.5vw, 2.25rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: "0.75rem",
                }}
              >
                Parliamentary Executive Summit: AI Governance & Enterprise Digital Sovereignty
              </h3>

              <p
                style={{
                  color: "var(--text-light-med)",
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  marginBottom: "1.75rem",
                }}
              >
                Convened at the historic Palace of Westminster, this exclusive Chatham House Rule symposium brings together C-suite technology executives, academic researchers, and UK parliamentary policymakers to define the operational frameworks for sovereign enterprise cloud and trustworthy enterprise AI.
              </p>

              {/* Agenda Highlights */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "0.85rem",
                  marginBottom: "2.25rem",
                  padding: "1.25rem",
                  borderRadius: "14px",
                  background: "rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--brand-orange-primary)", fontWeight: 700 }}>
                    Session 01
                  </div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF", marginTop: "0.15rem" }}>
                    Sovereign Cloud & Data Residency
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "#38BDF8", fontWeight: 700 }}>
                    Session 02
                  </div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF", marginTop: "0.15rem" }}>
                    Enterprise AI Safety & Auditability
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "#10B981", fontWeight: 700 }}>
                    Evening Reception
                  </div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF", marginTop: "0.15rem" }}>
                    Thames River Terrace Networking
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <Link
                href="/contact?event=house-of-lords-26-nov"
                className="btn btn-primary"
                style={{ padding: "0.85rem 1.8rem", fontSize: "0.9375rem" }}
              >
                <span>Request VIP Delegation Seat</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/about-us"
                className="btn btn-outline"
                style={{ padding: "0.85rem 1.4rem", fontSize: "0.9375rem" }}
              >
                <span>View Global Events Calendar</span>
                <ExternalLink size={15} />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Imagery of House of Lords Westminster */}
          <div
            style={{
              position: "relative",
              minHeight: "360px",
              background: "#051226",
            }}
          >
            <Image
              src="/images/events/house-of-lords-26-nov.jpg"
              alt="House of Lords, Palace of Westminster, London at Twilight - AdamasTech Global Executive Summit"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            {/* Subtle Gradient Overlays */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, rgba(4, 14, 28, 0.8) 0%, transparent 40%), linear-gradient(180deg, transparent 60%, rgba(4, 14, 28, 0.9) 100%)",
                pointerEvents: "none",
              }}
            />
            {/* Westminster Location Overlay Pill */}
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                right: "1.5rem",
                padding: "1rem 1.25rem",
                borderRadius: "14px",
                background: "rgba(4, 12, 24, 0.85)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                color: "#FFFFFF",
              }}
            >
              <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--brand-orange-primary)", fontWeight: 700 }}>
                Venue Spotlight
              </div>
              <div style={{ fontSize: "0.9375rem", fontWeight: 700, marginTop: "0.2rem" }}>
                Palace of Westminster, London SW1A 0PW
              </div>
              <div style={{ fontSize: "0.78125rem", color: "var(--text-light-muted)", marginTop: "0.15rem" }}>
                Strict security clearance · Invitation only
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
