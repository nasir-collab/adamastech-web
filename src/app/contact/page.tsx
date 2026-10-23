import React from "react";
import type { Metadata } from "next";
import { LeadGenerationSection } from "@/components/home/LeadGenerationSection";
import { GlobalPresenceSection } from "@/components/home/GlobalPresenceSection";
import { Mail, Phone, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Global Office Directory & Consultation",
  description:
    "Connect with Adamas Tech Consulting in London, San Francisco, Dubai, Bengaluru, or Kolkata. Book a strategic technical consultation.",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "6.5rem", paddingBottom: "4rem" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          <div className="section-tag orange">Global Advisory</div>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "1rem", lineHeight: 1.2 }}>
            Let&apos;s Connect with Our Practice Leaders
          </h1>
          <p style={{ color: "var(--text-light-muted)", fontSize: "1.125rem", lineHeight: 1.7 }}>
            Our global solution architects are ready to review your project requirements, technical debt, and business roadmap under strict NDA.
          </p>
        </div>

        {/* Lead Form Section */}
        <LeadGenerationSection />

        {/* Global Directory Section */}
        <GlobalPresenceSection />
      </div>
    </div>
  );
}
