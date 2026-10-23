import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Adamas Tech Consulting",
  description: "Privacy policy regarding the collection, handling, and security of corporate inquiries and enterprise data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        <div className="glass-card" style={{ padding: "3rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "1rem" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "var(--brand-orange-primary)", fontWeight: 600, marginBottom: "2rem" }}>
            ISO 27001 Certified & GDPR / Data Protection Compliant &bull; 2026
          </p>

          <div style={{ color: "var(--text-light-med)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <section>
              <h2 style={{ fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>1. Information We Collect</h2>
              <p>
                When you submit a consultation request or contact our practice leads, we collect your name, business email address, corporate telephone number, organization name, country of operation, and project scope details.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>2. How We Use Enterprise Information</h2>
              <p>
                Information collected through our digital interfaces is used solely to evaluate technical inquiries, prepare non-disclosure agreements, schedule architectural scoping sessions, and fulfill enterprise consulting commitments. We never sell or distribute your data to third parties.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>3. Data Security & ISO 27001 Controls</h2>
              <p>
                In compliance with our ISO 27001 information security certification, all transmission of data is protected with TLS 1.3 encryption. At-rest lead registries are stored in hardened database instances with strict role-based access control.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>4. Data Subject Rights & Contact</h2>
              <p>
                You may request access to, rectification of, or deletion of your corporate contact data at any time by contacting our data protection officer at <a href="mailto:marketing@adamastech.in" style={{ color: "var(--brand-blue-vibrant)" }}>marketing@adamastech.in</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
