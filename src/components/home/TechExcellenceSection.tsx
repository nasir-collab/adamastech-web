import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, Users, CheckCircle2, Cpu } from "lucide-react";

export function TechExcellenceSection() {
  return (
    <section className="section-wrapper" id="why-adamas" style={{ background: "#061325" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Why Adamas Strengths */}
          <div>
            <div className="section-tag">Tech Excellence</div>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
              Develop Innovations That Propel Your Business Forward
            </h2>
            <p style={{ color: "var(--text-light-muted)", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Adamas Tech Consulting combines technical depth with enterprise rigor. Our engineering teams operate with certified ISO and CMMI maturity standards to guarantee reliability, security, and continuous innovation.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div className="glass-card" style={{ padding: "1.5rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "rgba(24, 144, 215, 0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <Users size={22} color="#38BDF8" />
                </div>
                <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.4rem" }}>
                  Customized Solutions
                </h4>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)", lineHeight: 1.6 }}>
                  A collaborative, client-centric approach delivering custom software engineered for tangible growth.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "1.5rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "rgba(243, 111, 33, 0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <Cpu size={22} color="#F36F21" />
                </div>
                <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.4rem" }}>
                  Proven Expertise
                </h4>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)", lineHeight: 1.6 }}>
                  Extensive delivery experience across global markets, driving measurable performance improvements.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "1.5rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "rgba(243, 111, 33, 0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <ShieldCheck size={22} color="#F36F21" />
                </div>
                <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.4rem" }}>
                  Certified Quality
                </h4>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)", lineHeight: 1.6 }}>
                  ISO 9001, ISO 27001 certified, and CMMI Level 3 appraised for data security and process compliance.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "1.5rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "rgba(24, 144, 215, 0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <Award size={22} color="#38BDF8" />
                </div>
                <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.4rem" }}>
                  Full-Cycle Services
                </h4>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)", lineHeight: 1.6 }}>
                  Comprehensive support from strategy, architectural review, and coding to production SLA maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Enterprise Room */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid rgba(24, 144, 215, 0.25)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
                position: "relative",
              }}
            >
              <img
                src="/images/about-consulting.jpg"
                alt="Adamas Tech Consulting enterprise technology boardroom"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 50%, rgba(4, 12, 24, 0.85) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.75rem",
                  left: "1.75rem",
                  right: "1.75rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--brand-orange-primary)", fontWeight: 700, textTransform: "uppercase" }}>
                    Global Senior Architecture Practice
                  </div>
                  <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "#FFFFFF" }}>
                    London &bull; Dubai &bull; San Francisco &bull; Bengaluru
                  </div>
                </div>
                <Link href="/about-us" className="btn btn-primary" style={{ padding: "0.6rem 1.4rem", fontSize: "0.875rem" }}>
                  About Adamas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
