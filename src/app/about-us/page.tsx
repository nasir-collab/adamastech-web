import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Award, Users, CheckCircle2, Globe, ArrowRight, PhoneCall } from "lucide-react";
import { VERIFIED_STATS, INITIAL_OFFICES } from "@/lib/data/initialData";

export const metadata: Metadata = {
  title: "About Us | Enterprise IT Heritage & Credentials",
  description:
    "Learn about Adamas Tech Consulting: 22+ years of field experience, 950+ enterprise projects, ISO 9001, ISO 27001, CMMI Level 3, and global offices across UK, US, UAE, and India.",
};

export default function AboutUsPage() {
  return (
    <div style={{ paddingTop: "6.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Hero */}
        <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 4rem" }}>
          <div className="section-tag orange">Our Enterprise Heritage</div>
          <h1 style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "1.25rem", lineHeight: 1.15 }}>
            Driving Technological Excellence & Transformation Since 1995
          </h1>
          <p style={{ color: "var(--text-light-muted)", fontSize: "1.125rem", lineHeight: 1.7 }}>
            Adamas Tech Consulting partners with global enterprises, institutions, and high-growth innovators to modernize infrastructure, automate mission-critical operations, and engineer bespoke software.
          </p>
        </div>

        {/* Boardroom & Story Banner */}
        <div
          className="glass-card"
          style={{
            padding: "0",
            overflow: "hidden",
            marginBottom: "4.5rem",
            border: "1px solid rgba(24, 144, 215, 0.25)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", alignItems: "center" }}>
            <div style={{ padding: "3rem" }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--brand-orange-primary)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Our Mission & Philosophy
              </span>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#FFFFFF", marginTop: "0.5rem", marginBottom: "1.25rem" }}>
                Precision Consulting Grounded in Measurable Business Value
              </h2>
              <p style={{ color: "var(--text-light-med)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                In an era of relentless technological flux, companies do not need generic advisory—they require seasoned engineers and certified solution architects who can deconstruct complex problems and deliver resilient architectures.
              </p>
              <p style={{ color: "var(--text-light-med)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                From automating financial liquidity through SAP S/4HANA to deploying high-concurrency campus management systems and edge AI recognition platforms, we stand behind our deliverables with stringent SLA commitments.
              </p>

              <div style={{ display: "flex", gap: "1rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  <PhoneCall size={16} />
                  <span>Connect With Our Practice Leaders</span>
                </Link>
              </div>
            </div>

            <div style={{ position: "relative", minHeight: "420px" }}>
              <img
                src="/images/about-consulting.jpg"
                alt="Adamas Tech Consulting leadership and global architects"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Verified Stats */}
        <div style={{ marginBottom: "5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {VERIFIED_STATS.map((stat, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "2rem 1.5rem" }}>
                <div style={{ fontSize: "2.75rem", fontWeight: 800, color: "var(--brand-orange-primary)", lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#FFFFFF", marginTop: "0.5rem" }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)", marginTop: "0.25rem" }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Certifications Detail */}
        <div className="glass-card" style={{ padding: "3rem", marginBottom: "4rem" }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 2.5rem" }}>
            <div className="section-tag">Quality Frameworks</div>
            <h3 style={{ fontSize: "1.875rem", fontWeight: 800, color: "#FFFFFF" }}>
              Internationally Certified Standards & Compliance
            </h3>
            <p style={{ color: "var(--text-light-muted)", fontSize: "0.95rem", marginTop: "0.5rem" }}>
              We adhere strictly to certified maturity models to ensure that our software engineering and consulting practices satisfy international regulatory requirements.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            <div style={{ padding: "1.5rem", background: "rgba(4, 12, 24, 0.6)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <ShieldCheck size={32} color="#38BDF8" style={{ marginBottom: "1rem" }} />
              <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
                ISO 9001:2015
              </h4>
              <p style={{ color: "var(--text-light-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                Certified Quality Management Systems ensuring rigorous testing, continuous process audits, and verifiable client satisfaction across all project lifecycles.
              </p>
            </div>

            <div style={{ padding: "1.5rem", background: "rgba(4, 12, 24, 0.6)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <ShieldCheck size={32} color="#38BDF8" style={{ marginBottom: "1rem" }} />
              <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
                ISO 27001:2013
              </h4>
              <p style={{ color: "var(--text-light-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                Comprehensive Information Security Management certifying multi-layered data protection, encryption, intellectual property custody, and vulnerability defense.
              </p>
            </div>

            <div style={{ padding: "1.5rem", background: "rgba(4, 12, 24, 0.6)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <Award size={32} color="#F36F21" style={{ marginBottom: "1rem" }} />
              <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
                CMMI Level 3
              </h4>
              <p style={{ color: "var(--text-light-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                Capability Maturity Model Integration (Level 3) appraisal demonstrating standardized, defined, and repeatable software engineering methodologies.
              </p>
            </div>
          </div>
        </div>

        {/* Global Locations List */}
        <div>
          <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#FFFFFF", textAlign: "center", marginBottom: "2rem" }}>
            Serving Enterprises Across Key Global Hubs
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {INITIAL_OFFICES.map((off, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "1.75rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--brand-orange-primary)", textTransform: "uppercase" }}>
                  {off.badge}
                </span>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", margin: "0.35rem 0" }}>
                  {off.city}
                </h4>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)", marginBottom: "0.75rem", lineHeight: 1.6 }}>
                  {off.address}
                </p>
                <div style={{ fontSize: "0.8125rem", color: "var(--brand-blue-vibrant)", fontWeight: 600 }}>
                  {off.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
