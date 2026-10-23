"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  MonitorPlay,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export function SolutionsSpotlightSection() {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: "ums",
      name: "Arivoo UMS",
      tag: "Higher Education ERP",
      headline: "Autonomous University Management Suite",
      description:
        "Comprehensive campus operating system digitizing the entire student lifecycle from AI admissions triage and credit governance to automated faculty appraisal and university finance.",
      mockup: "/images/products/arivoo-ums-mockup-hd.png",
      keyMetrics: ["180k+ Active Students", "99.98% System Uptime", "40+ Campus Modules"],
      features: [
        "Automated Semester Registration & Credit Calculation",
        "Integrated Examination Hall Tickets & Seating AI",
        "Multi-Faculty Workload & Research Grant Governance",
      ],
      icon: GraduationCap,
      accentColor: "#1890D7",
      link: "/products/arivoo-ums",
      badge: "Flagship Higher Ed Suite",
    },
    {
      id: "sms",
      name: "Arivoo SMS",
      tag: "K-12 Multi-Campus OS",
      headline: "Smart Connected School Management System",
      description:
        "Unified school ERP platform connecting administrators, teachers, students, and parents with real-time biometric attendance, automated bus tracking, and instant fee reconciliation.",
      mockup: "/images/products/arivoo-sms-mockup-hd.png",
      keyMetrics: ["65+ K-12 Schools", "Zero Fee Reconcile Delays", "Real-Time Parent App"],
      features: [
        "Omnichannel Parent Portal & Instant Gradebooks",
        "Biometric Bus Geofencing & Parent Notifications",
        "Automated Fee Ledger & Online Banking Integration",
      ],
      icon: BookOpen,
      accentColor: "var(--brand-orange-primary)",
      link: "/products/arivoo-sms",
      badge: "School Cloud OS",
    },
    {
      id: "lms",
      name: "Arivoo LMS",
      tag: "Enterprise & Higher Ed",
      headline: "High-Concurrency Open edX® Learning Cloud",
      description:
        "Scalable digital learning ecosystem serving hundreds of thousands of concurrent learners with real-time telemetry, personalized AI micro-credentials, and interactive virtual classrooms.",
      mockup: "/images/products/arivoo-lms-mockup-hd.png",
      keyMetrics: ["400k+ Active Learners", "Sub-100ms Video Latency", "SCORM & xAPI Native"],
      features: [
        "Adaptive Learning Pathways Powered by AI",
        "Micro-Credentialing & Blockchain Verification",
        "Scalable Containerized Hosting on AWS ECS",
      ],
      icon: MonitorPlay,
      accentColor: "#10B981",
      link: "/products/arivoo-lms",
      badge: "Scalable E-Learning",
    },
    {
      id: "testguard",
      name: "TestGUARD AI",
      tag: "AI & Academic Integrity",
      headline: "Autonomous Remote AI Online Proctoring",
      description:
        "Patented multi-modal artificial intelligence verifying examination integrity through continuous biometric gaze tracking, secondary device acoustic detection, and real-time anomaly alerts.",
      mockup: "/images/products/testguard-mockup-hd.png",
      keyMetrics: ["4.2M Tests Proctored", "99.98% Accuracy", "Zero Bias Algorithmic Model"],
      features: [
        "Continuous 3D Facial Landmark & Gaze Tracking",
        "Secondary Screen & Ambient Noise Detection",
        "Automated Flagging Report for Human Proctors",
      ],
      icon: ShieldCheck,
      accentColor: "#8B5CF6",
      link: "/products/testguard",
      badge: "AI Integrity IP",
    },
  ];

  const current = products[activeProduct];
  const CurrentIcon = current.icon;

  return (
    <section
      className="solutions-spotlight-section"
      style={{
        padding: "6.5rem 0",
        background: "linear-gradient(180deg, #030813 0%, #06162E 50%, #030813 100%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
      }}
    >
      <div className="container">
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
          <div>
            <div className="section-tag orange" style={{ marginBottom: "0.6rem" }}>
              Proprietary Enterprise IP
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
              The Arivoo Suite & AI Software Platforms
            </h2>
            <p
              style={{
                color: "var(--text-light-muted)",
                fontSize: "1.0625rem",
                marginTop: "0.85rem",
                maxWidth: "680px",
                lineHeight: 1.6,
              }}
            >
              Beyond IT consulting, AdamasTech engineers mission-critical software products serving over 950,000 active students and enterprise users worldwide.
            </p>
          </div>

          <div>
            <Link
              href="/products"
              className="btn btn-outline"
              style={{ padding: "0.85rem 1.75rem", fontSize: "0.9375rem" }}
            >
              <span>Explore Product Portfolio</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Product Selector Visual Pills */}
        <div
          style={{
            display: "flex",
            gap: "0.85rem",
            overflowX: "auto",
            paddingBottom: "0.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {products.map((prod, idx) => {
            const Icon = prod.icon;
            const isSelected = idx === activeProduct;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveProduct(idx)}
                style={{
                  background: isSelected ? "rgba(24, 144, 215, 0.2)" : "rgba(255, 255, 255, 0.04)",
                  border: isSelected ? `1px solid ${prod.accentColor}` : "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "14px",
                  padding: "0.85rem 1.5rem",
                  color: isSelected ? "#FFFFFF" : "var(--text-light-med)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "pointer",
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: "0.9375rem",
                  whiteSpace: "nowrap",
                  transition: "all 0.25s ease",
                  boxShadow: isSelected ? `0 6px 20px ${prod.accentColor}25` : "none",
                }}
              >
                <Icon size={18} color={isSelected ? prod.accentColor : "var(--text-light-muted)"} />
                <span>{prod.name}</span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "var(--radius-full)",
                    background: isSelected ? prod.accentColor : "rgba(255, 255, 255, 0.08)",
                    color: "#FFFFFF",
                    fontWeight: 700,
                  }}
                >
                  {prod.tag.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Master Stage: Heroic Product UI Visual Showcase */}
        <div
          className="glass-card"
          style={{
            background: "linear-gradient(135deg, rgba(8, 22, 45, 0.85) 0%, rgba(3, 10, 22, 0.95) 100%)",
            border: `1px solid ${current.accentColor}44`,
            borderRadius: "24px",
            padding: "clamp(2rem, 3.5vw, 3.5rem)",
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "3rem",
            alignItems: "center",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Left: Product Information & Live Features */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                background: `${current.accentColor}18`,
                border: `1px solid ${current.accentColor}44`,
                color: current.accentColor,
                fontSize: "0.8125rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              <CurrentIcon size={15} />
              <span>{current.badge}</span>
            </div>

            <h3
              style={{
                fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: "0.5rem",
              }}
            >
              {current.headline}
            </h3>

            <p
              style={{
                color: "var(--text-light-med)",
                fontSize: "1rem",
                lineHeight: 1.65,
                marginBottom: "1.75rem",
              }}
            >
              {current.description}
            </p>

            {/* Key Metrics Chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.65rem",
                marginBottom: "1.75rem",
              }}
            >
              {current.keyMetrics.map((km, i) => (
                <span
                  key={i}
                  style={{
                    padding: "0.4rem 0.85rem",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#FFFFFF",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                  }}
                >
                  ⚡ {km}
                </span>
              ))}
            </div>

            {/* Feature Highlights */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.65rem",
                marginBottom: "2.25rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {current.features.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                    fontSize: "0.875rem",
                    color: "#E2E8F0",
                  }}
                >
                  <CheckCircle2 size={16} color={current.accentColor} style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href={current.link}
                className="btn btn-primary"
                style={{ padding: "0.85rem 1.8rem", fontSize: "0.9375rem" }}
              >
                <span>View Product Architecture</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="btn btn-glass"
                style={{ padding: "0.85rem 1.5rem", fontSize: "0.9375rem" }}
              >
                <span>Request Live Demo</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right: High-Fidelity Software UI Mockup with Floating Ambient Reflections */}
          <div
            style={{
              position: "relative",
              borderRadius: "18px",
              padding: "1.25rem",
              background: "rgba(4, 12, 26, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: `0 20px 50px rgba(0, 0, 0, 0.7), 0 0 40px ${current.accentColor}25`,
            }}
          >
            {/* Top Browser/Window Chrome Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                marginBottom: "1rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#EF4444", display: "inline-block" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F59E0B", display: "inline-block" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
              <span style={{ marginLeft: "0.75rem", fontSize: "0.75rem", color: "var(--text-light-muted)", fontFamily: "monospace" }}>
                https://cloud.adamastech.in/{current.id}/live-telemetry
              </span>
            </div>

            {/* Real Product HD Mockup Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "360px",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#061324",
              }}
            >
              <Image
                src={current.mockup}
                alt={`${current.name} Software UI Mockup`}
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
