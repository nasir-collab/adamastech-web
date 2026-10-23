"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdamasLogo } from "../common/AdamasLogo";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Award,
  ArrowUpRight,
  Lock,
  Send,
  CheckCircle,
  Globe,
} from "lucide-react";
import { getRegionFromPath } from "@/lib/regions";

export function Footer() {
  const pathname = usePathname();
  const currentRegion = getRegionFromPath(pathname);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  const offices = [
    {
      code: "uk",
      city: "London",
      country: "United Kingdom",
      tag: "UK & Europe Headquarters",
      address: "Golden Cross House, 8 Duncannon Street, London WC2N 4JF",
      phone: "+44 7768 706988",
      email: "london@adamastech.in",
    },
    {
      code: "ae",
      city: "Dubai",
      country: "United Arab Emirates",
      tag: "Middle East Regional Office",
      address: "Latifa Tower, Sheikh Zayed Road, Trade Centre 1, Dubai",
      phone: "+971 4 705 6001",
      email: "dubai@adamastech.in",
    },
    {
      code: "in",
      city: "Kolkata",
      country: "India",
      tag: "Global Engineering Delivery Hub",
      address: "Adamas Knowledge City, Barasat-Barrackpore Road, Kolkata 700126",
      phone: "+91 83369 44340",
      email: "kolkata@adamastech.in",
    },
    {
      code: "us",
      city: "New York",
      country: "United States",
      tag: "Americas Client Hub",
      address: "140 Broadway, 46th Floor, New York, NY 10005",
      phone: "+1 212 555 0198",
      email: "usa@adamastech.in",
    },
  ];

  return (
    <footer style={{ background: "#020710", borderTop: "1px solid rgba(255, 255, 255, 0.08)", marginTop: "auto" }}>
      {/* Newsletter Subscription Strip */}
      <div
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          background: "linear-gradient(90deg, #051329 0%, #081B38 50%, #051329 100%)",
          padding: "3rem 0",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ maxWidth: "560px" }}>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brand-orange-primary)", fontWeight: 700, marginBottom: "0.35rem" }}>
              AdamasTech Insights Briefing
            </div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.015em" }}>
              Enterprise Cloud, SAP S/4HANA & AI Governance Intelligence
            </h3>
            <p style={{ color: "var(--text-light-muted)", fontSize: "0.875rem", marginTop: "0.35rem" }}>
              Bi-weekly technical dispatches read by 14,000+ CIOs, technical architects, and enterprise transformation directors.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", width: "100%", maxWidth: "460px" }}>
            <input
              type="email"
              placeholder="Enter your enterprise work email..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              style={{
                flex: "1 1 240px",
                padding: "0.8rem 1.1rem",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                fontSize: "0.875rem",
                outline: "none",
              }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: "0.8rem 1.5rem", fontSize: "0.875rem", flexShrink: 0 }}
            >
              {subscribed ? (
                <>
                  <CheckCircle size={15} />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send size={14} />
                </>
              )}
            </button>
          </form>
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
              Adamas Tech Consulting is a premier enterprise IT consultancy delivering digital transformation, SAP, AWS cloud, AI/ML, and campus management software backed by the RICE Adamas Group.
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

            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
              <a
                href="https://www.linkedin.com/company/adamas-tech-consulting/"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.71 1.71 0 1 0 0-3.42 1.71 1.71 0 0 0 0 3.42m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/AdamasTechConsulting/"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
                aria-label="Facebook"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services / Capabilities */}
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
            </ul>
          </div>

          {/* Col 3: Proprietary Platforms & Solutions */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem", letterSpacing: "0.02em" }}>
              Enterprise Solutions
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.875rem", color: "var(--text-light-med)" }}>
              <li><Link href="/products/arivoo-ums">Arivoo UMS (University System)</Link></li>
              <li><Link href="/products/arivoo-sms">Arivoo SMS (School Platform)</Link></li>
              <li><Link href="/products/arivoo-lms">Arivoo LMS (Learning Platform)</Link></li>
              <li><Link href="/products/testguard">TestGUARD (AI Proctoring)</Link></li>
              <li style={{ marginTop: "0.75rem" }}><Link href="/case-studies" style={{ color: "var(--brand-orange-primary)", fontWeight: 600 }}>Verified Case Studies →</Link></li>
              <li><Link href="/consulting" style={{ color: "var(--brand-blue-vibrant)", fontWeight: 600 }}>Consulting Methodology →</Link></li>
              <li><Link href="/about-us" style={{ color: "#38BDF8", fontWeight: 600 }}>About RICE Adamas Group →</Link></li>
            </ul>
          </div>

          {/* Col 4: Region-Aware Global Offices Block */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <Globe size={16} color="var(--brand-orange-primary)" />
              <h4 style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.02em" }}>
                Offices ({currentRegion.label})
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem" }}>
              {offices.map((office) => {
                const isSelected = office.code === currentRegion.code;
                return (
                  <div
                    key={office.code}
                    style={{
                      padding: isSelected ? "0.85rem" : "0.5rem 0",
                      borderRadius: isSelected ? "10px" : "0",
                      background: isSelected ? "rgba(24, 144, 215, 0.12)" : "transparent",
                      border: isSelected ? "1px solid rgba(24, 144, 215, 0.35)" : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <strong style={{ color: isSelected ? "#38BDF8" : "#FFFFFF", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <MapPin size={14} color={isSelected ? "#38BDF8" : "#F36F21"} />
                        {office.city} ({office.country})
                      </strong>
                      {isSelected && (
                        <span style={{ fontSize: "0.6875rem", background: "var(--brand-blue-primary)", color: "#FFFFFF", padding: "0.15rem 0.45rem", borderRadius: "4px", fontWeight: 700 }}>
                          Your Region
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)", marginTop: "3px", lineHeight: 1.4 }}>
                      {office.address}
                    </p>
                    <div style={{ marginTop: "0.25rem", display: "flex", gap: "1rem", fontSize: "0.8125rem" }}>
                      <a href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`} style={{ color: "var(--brand-blue-vibrant)" }}>
                        {office.phone}
                      </a>
                    </div>
                  </div>
                );
              })}

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
