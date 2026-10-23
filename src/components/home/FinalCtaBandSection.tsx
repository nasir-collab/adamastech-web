"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  Cloud,
} from "lucide-react";

export function FinalCtaBandSection() {
  const router = useRouter();
  const [selectedPractice, setSelectedPractice] = useState("cloud");
  const [emailInput, setEmailInput] = useState("");

  const practices = [
    { id: "cloud", label: "Cloud & AWS", icon: Cloud },
    { id: "sap", label: "SAP & S/4HANA", icon: Layers },
    { id: "ai", label: "Enterprise AI & ML", icon: Sparkles },
    { id: "arivoo", label: "Arivoo Platforms", icon: ShieldCheck },
  ];

  const handleStartConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams();
    if (selectedPractice) query.set("practice", selectedPractice);
    if (emailInput) query.set("email", emailInput);
    router.push(`/contact?${query.toString()}`);
  };

  return (
    <section
      className="final-cta-band-section"
      style={{
        padding: "5rem 0",
        background: "linear-gradient(135deg, #020710 0%, #061833 50%, #020710 100%)",
        borderTop: "1px solid rgba(24, 144, 215, 0.25)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          className="glass-card"
          style={{
            background: "rgba(10, 28, 54, 0.75)",
            border: "1px solid rgba(24, 144, 215, 0.35)",
            borderRadius: "24px",
            padding: "clamp(2rem, 4vw, 3.5rem)",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "3rem",
            alignItems: "center",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Left Column: Value Proposition & De-Risking */}
          <div>
            <div className="section-tag orange" style={{ marginBottom: "0.6rem" }}>
              Immediate Architecture Triage
            </div>
            <h2
              style={{
                fontSize: "clamp(1.85rem, 3.2vw, 2.75rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Ready to Accelerate Your Enterprise Roadmap?
            </h2>
            <p
              style={{
                color: "var(--text-light-med)",
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                marginBottom: "1.75rem",
              }}
            >
              Skip the junior sales reps. Schedule a confidential 30-minute scoping session with a senior practice director and enterprise architect.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.65rem",
                fontSize: "0.875rem",
                color: "#E2E8F0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>Zero-obligation architectural roadmap & feasibility assessment</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>Strict non-disclosure (NDA) signed prior to discovery</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Clock size={16} color="var(--brand-orange-primary)" />
                <span>Response guaranteed within 4 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Low-Friction Interactive Enquiry Routing */}
          <div
            style={{
              background: "rgba(6, 18, 38, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "18px",
              padding: "2rem",
            }}
          >
            <div style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--brand-orange-primary)", fontWeight: 700, marginBottom: "0.6rem" }}>
              Fast-Track Routing
            </div>
            <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem" }}>
              Select Focus Area & Connect
            </div>

            {/* Practice Selector Pills */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              {practices.map((p) => {
                const Icon = p.icon;
                const isSelected = selectedPractice === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPractice(p.id)}
                    style={{
                      background: isSelected ? "var(--brand-blue-primary)" : "rgba(255, 255, 255, 0.05)",
                      border: isSelected ? "1px solid #38BDF8" : "1px solid rgba(255, 255, 255, 0.08)",
                      color: isSelected ? "#FFFFFF" : "var(--text-light-med)",
                      borderRadius: "10px",
                      padding: "0.65rem 0.85rem",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <Icon size={14} />
                    <span>{p.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Email & Go Form */}
            <form onSubmit={handleStartConsultation} style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <input
                type="email"
                placeholder="Enter your enterprise work email..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "0.85rem 1.15rem",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#FFFFFF",
                  fontSize: "0.9375rem",
                  outline: "none",
                }}
              />

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  justifyContent: "center",
                  fontSize: "0.95rem",
                  borderRadius: "10px",
                }}
              >
                <PhoneCall size={16} />
                <span>Talk to an Expert Now</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
