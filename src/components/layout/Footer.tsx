import React from "react";
import Link from "next/link";
import { AdamasLogo } from "../common/AdamasLogo";
import { Mail, Phone, MapPin, ShieldCheck, Award, ArrowUpRight, Lock } from "lucide-react";
import { INITIAL_OFFICES } from "@/lib/data/initialData";

export function Footer() {
  return (
    <footer style={{ background: "#020710", borderTop: "1px solid rgba(255, 255, 255, 0.08)", marginTop: "auto" }}>
      {/* Top Banner / Consultation Call to Action */}
      <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)", padding: "4rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div className="section-tag orange">Let&apos;s Transform Together</div>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
              Ready to Modernize Your Enterprise Infrastructure?
            </h2>
            <p style={{ color: "var(--text-light-muted)", maxWidth: "600px", marginTop: "0.5rem" }}>
              Our senior consulting architects deliver tangible technological outcomes with verified enterprise benchmarks.
            </p>
          </div>
          <div>
            <Link href="/contact" className="btn btn-primary" style={{ padding: "0.9rem 2.2rem", fontSize: "1rem" }}>
              <span>Book Strategic Consultation</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>



      {/* Main Footer Links & Presence */}
      <div className="container" style={{ padding: "4.5rem 1.5rem 3rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Col 1: Brand & Credentials */}
          <div>
            <AdamasLogo variant="colored" size="md" />
            <p style={{ color: "var(--text-light-muted)", fontSize: "0.9375rem", marginTop: "1.25rem", lineHeight: 1.7 }}>
              Adamas Tech Consulting is a premier enterprise IT consultancy delivering digital transformation, SAP, AWS cloud, AI/ML, and unified management software around the globe.
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.75rem",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <ShieldCheck size={13} color="#1890D7" />
                ISO 9001 / ISO 27001
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.75rem",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <Award size={13} color="#F36F21" />
                CMMI Level 3
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem", letterSpacing: "0.02em" }}>
              Practice Areas
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.875rem", color: "var(--text-light-med)" }}>
              <li><Link href="/services/sap-solution-consulting">SAP Solutions & S/4HANA</Link></li>
              <li><Link href="/services/aws-solutions">AWS Solutions & Cloud DevOps</Link></li>
              <li><Link href="/services/ai-data-analytics">AI/ML & Computer Vision</Link></li>
              <li><Link href="/services/oracle-netsuite-solutions">Oracle NetSuite ERP</Link></li>
              <li><Link href="/services/openedx">Open edX® Platform Services</Link></li>
              <li><Link href="/services/technology-transformation">Technology Transformation</Link></li>
              <li><Link href="/services/e-invoicing-uae">UAE E-Invoicing & Compliance</Link></li>
              <li><Link href="/services/master-data-governance">Master Data Governance</Link></li>
            </ul>
          </div>

          {/* Col 3: Proprietary Platforms */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem", letterSpacing: "0.02em" }}>
              Enterprise Software
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.875rem", color: "var(--text-light-med)" }}>
              <li><Link href="/products/arivoo-ums">Arivoo UMS (University System)</Link></li>
              <li><Link href="/products/arivoo-sms">Arivoo SMS (School Platform)</Link></li>
              <li><Link href="/products/arivoo-lms">Arivoo LMS (Learning Platform)</Link></li>
              <li><Link href="/products/testguard">TestGUARD (Assessment Suite)</Link></li>
              <li style={{ marginTop: "0.75rem" }}><Link href="/case-studies" style={{ color: "var(--brand-orange-primary)", fontWeight: 600 }}>Verified Case Studies →</Link></li>
              <li><Link href="/consulting" style={{ color: "var(--brand-blue-vibrant)", fontWeight: 600 }}>Consulting Methodology →</Link></li>
            </ul>
          </div>

          {/* Col 4: Key Global Hubs */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem", letterSpacing: "0.02em" }}>
              Global Headquarters
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", color: "var(--text-light-med)" }}>
              <div>
                <strong style={{ color: "#FFFFFF", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <MapPin size={14} color="#F36F21" /> London (UK & Europe)
                </strong>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)", marginTop: "2px" }}>
                  Golden Cross House, 8 Duncannon St, WC2N 4JF
                </p>
                <a href="tel:+447768706988" style={{ fontSize: "0.8125rem", color: "var(--brand-blue-vibrant)" }}>
                  +44 7768 706988
                </a>
              </div>
              <div>
                <strong style={{ color: "#FFFFFF", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <MapPin size={14} color="#F36F21" /> Dubai (Middle East)
                </strong>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)", marginTop: "2px" }}>
                  Latifa Tower, Sheikh Zayed Road
                </p>
                <a href="tel:+97147056001" style={{ fontSize: "0.8125rem", color: "var(--brand-blue-vibrant)" }}>
                  +971 4 705 6001
                </a>
              </div>
              <div style={{ paddingTop: "0.5rem" }}>
                <a
                  href="mailto:marketing@adamastech.in"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--brand-orange-primary)",
                    fontWeight: 600,
                  }}
                >
                  <Mail size={15} /> marketing@adamastech.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.8125rem",
            color: "var(--text-light-muted)",
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Adamas Tech Consulting Pvt. Ltd. All Rights Reserved.
          </div>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link href="/terms-of-use" style={{ color: "var(--text-light-muted)" }}>Terms of Use</Link>
            <Link href="/privacy-policy" style={{ color: "var(--text-light-muted)" }}>Privacy Policy</Link>
            <Link
              href="/admin/login"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                color: "var(--brand-orange-primary)",
                fontWeight: 600,
              }}
            >
              <Lock size={12} /> Staff CMS Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
