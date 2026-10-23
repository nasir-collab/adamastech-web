import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Adamas Tech Consulting",
  description: "Terms and conditions governing the use of Adamas Tech Consulting services and website.",
};

export default function TermsOfUsePage() {
  return (
    <div style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        <div className="glass-card" style={{ padding: "3rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "1rem" }}>
            Terms of Use
          </h1>
          <p style={{ color: "var(--brand-orange-primary)", fontWeight: 600, marginBottom: "2rem" }}>
            Last Updated: 2026
          </p>

          <div style={{ color: "var(--text-light-med)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <section>
              <h2 style={{ fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not access or use our digital services.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>2. Proprietary Rights & Software Licenses</h2>
              <p>
                All text, graphics, proprietary platforms (including Arivoo UMS, Arivoo SMS, Arivoo LMS, and TestGUARD), design tokens, trademarks, and codebases displayed on this website are the intellectual property of Adamas Tech Consulting Pvt. Ltd. and are protected by applicable intellectual property laws.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>3. Professional Consulting Disclaimers</h2>
              <p>
                The materials and architectural specifications on this website are provided for general informational and demonstration purposes only. Actual enterprise consulting agreements, service-level agreements (SLAs), and project guarantees are governed solely by formally executed statements of work (SOW) and master service agreements (MSA).
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>4. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws applicable in England and Wales, with mutual regard to local jurisdictions where Adamas Tech Consulting maintains registered entities and client contracts.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
