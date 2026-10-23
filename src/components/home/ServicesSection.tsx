"use client";

import React from "react";
import Link from "next/link";
import { InitialService } from "@/lib/data/initialData";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServicesSectionProps {
  services: InitialService[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  // Map of verified high-impact images for featured service cards
  const serviceImages: Record<string, string> = {
    "sap-solution-consulting": "/images/services/service-sap.jpg",
    "aws-solutions-cloud": "/images/services/service-aws.jpg",
    "ai-ml-solutions": "/images/services/service-aiml.jpg",
    "oracle-netsuite-services": "/images/services/service-netsuite.jpg",
    "open-edx-services": "/images/services/service-openedx.jpg",
    "technology-transformation": "/images/services/service-tech-transform.jpg",
  };

  return (
    <section
      className="section-wrapper"
      id="services"
      style={{
        backgroundColor: "#070F1E",
        position: "relative",
        paddingTop: "6.5rem",
        paddingBottom: "6.5rem",
      }}
    >
      {/* Background Subtle Tech Ambient Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(0, 102, 179, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(243, 111, 33, 0.08) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header with "View All ↗" Button */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3.25rem",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#38BDF8",
                display: "inline-block",
                marginBottom: "0.75rem",
              }}
            >
              OUR SERVICES
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.25rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.025em",
                lineHeight: 1.18,
                marginBottom: "1rem",
              }}
            >
              Driving Growth Through <br />
              <span style={{ color: "#38BDF8" }}>Innovative Solutions</span>
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                color: "#94A3B8",
                margin: 0,
              }}
            >
              Tailored tech solutions driving growth, efficiency, and reliability with expert, customer-focused, scalable services.
            </p>
          </div>

          <div>
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.75rem 1.6rem",
                borderRadius: "var(--radius-full)",
                backgroundColor: "#0066B3",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 18px rgba(0, 102, 179, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#005291";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#0066B3";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>View All</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TOP ROW: 2 Large Horizontal Featured Cards (SAP & AWS) */}
        {/* ------------------------------------------------------------- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Card 1: SAP Services */}
          <Link
            href="/services/sap-solution-consulting"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="premium-service-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "1.75rem",
                display: "grid",
                gridTemplateColumns: "1.05fr 1.2fr",
                gap: "1.75rem",
                alignItems: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(226, 232, 240, 0.9)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                height: "100%",
                minHeight: "260px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 22px 50px rgba(0, 102, 179, 0.22)";
                e.currentTarget.style.borderColor = "#0066B3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.9)";
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  minHeight: "180px",
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={serviceImages["sap-solution-consulting"]}
                  alt="SAP Services enterprise implementation and consulting"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Content */}
              <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                <div>
                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 800,
                      color: "#0066B3",
                      marginBottom: "0.6rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    SAP Services
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.55,
                      color: "#475569",
                      marginBottom: "1rem",
                    }}
                  >
                    We handle implementation to optimization, aligning your enterprise systems with strategic goals for optimal performance.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "#1E293B", fontWeight: 600 }}>
                      <CheckCircle2 size={16} color="#0066B3" />
                      <span>Streamline Operations</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "#1E293B", fontWeight: 600 }}>
                      <CheckCircle2 size={16} color="#0066B3" />
                      <span>Data Driven Insights</span>
                    </div>
                  </div>
                </div>

                {/* Circular Action Button */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      backgroundColor: "#0066B3",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.25s ease",
                      boxShadow: "0 4px 12px rgba(0, 102, 179, 0.35)",
                    }}
                  >
                    <ArrowUpRight size={19} />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: AWS Services */}
          <Link
            href="/services/aws-solutions-cloud"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="premium-service-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "1.75rem",
                display: "grid",
                gridTemplateColumns: "1.05fr 1.2fr",
                gap: "1.75rem",
                alignItems: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(226, 232, 240, 0.9)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                height: "100%",
                minHeight: "260px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 22px 50px rgba(0, 102, 179, 0.22)";
                e.currentTarget.style.borderColor = "#0066B3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.9)";
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  minHeight: "180px",
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={serviceImages["aws-solutions-cloud"]}
                  alt="AWS Services cloud computing architecture"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Content */}
              <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                <div>
                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 800,
                      color: "#0066B3",
                      marginBottom: "0.6rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    AWS Services
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.55,
                      color: "#475569",
                      marginBottom: "1rem",
                    }}
                  >
                    Harness advanced AWS services in AI, automation, and cloud to drive digital transformation, efficiency, and scalable growth across your business.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "#1E293B", fontWeight: 600 }}>
                      <CheckCircle2 size={16} color="#0066B3" />
                      <span>Eliminate Tech Debt with Q Developer</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "#1E293B", fontWeight: 600 }}>
                      <CheckCircle2 size={16} color="#0066B3" />
                      <span>Scalable Hosting on AWS EC2</span>
                    </div>
                  </div>
                </div>

                {/* Circular Action Button */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      backgroundColor: "#0066B3",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.25s ease",
                      boxShadow: "0 4px 12px rgba(0, 102, 179, 0.35)",
                    }}
                  >
                    <ArrowUpRight size={19} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* BOTTOM ROW: 4 Vertical Cards */}
        {/* ------------------------------------------------------------- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {/* Card 3: AI/ML Services */}
          <Link
            href="/services/ai-ml-solutions"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="premium-service-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(226, 232, 240, 0.9)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                height: "100%",
                minHeight: "360px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 22px 50px rgba(0, 102, 179, 0.22)";
                e.currentTarget.style.borderColor = "#0066B3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.9)";
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "170px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                }}
              >
                <img
                  src={serviceImages["ai-ml-solutions"]}
                  alt="AI/ML Services automation and artificial intelligence"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#0066B3",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                AI/ML Services
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.55,
                  color: "#475569",
                  marginBottom: "1.5rem",
                }}
              >
                Automate processes to enhance efficiency and reduce operational costs.
              </p>

              <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#0066B3",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0, 102, 179, 0.3)",
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </Link>

          {/* Card 4: Oracle NetSuite Services */}
          <Link
            href="/services/oracle-netsuite-services"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="premium-service-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(226, 232, 240, 0.9)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                height: "100%",
                minHeight: "360px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 22px 50px rgba(0, 102, 179, 0.22)";
                e.currentTarget.style.borderColor = "#0066B3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.9)";
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "170px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                }}
              >
                <img
                  src={serviceImages["oracle-netsuite-services"]}
                  alt="Oracle NetSuite Cloud ERP"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#0066B3",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Oracle NetSuite Services
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.55,
                  color: "#475569",
                  marginBottom: "1.5rem",
                }}
              >
                Unified Cloud ERP for Modern Construction and enterprise financial governance.
              </p>

              <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#0066B3",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0, 102, 179, 0.3)",
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </Link>

          {/* Card 5: Open edX services */}
          <Link
            href="/services/open-edx-services"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="premium-service-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(226, 232, 240, 0.9)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                height: "100%",
                minHeight: "360px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 22px 50px rgba(0, 102, 179, 0.22)";
                e.currentTarget.style.borderColor = "#0066B3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.9)";
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "170px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                }}
              >
                <img
                  src={serviceImages["open-edx-services"]}
                  alt="Open edX learning platforms and custom development"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#0066B3",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Open edX services
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.55,
                  color: "#475569",
                  marginBottom: "1.5rem",
                }}
              >
                Custom development and services for scalable and engaging learning experiences.
              </p>

              <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#0066B3",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0, 102, 179, 0.3)",
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </Link>

          {/* Card 6: Technology Transformation */}
          <Link
            href="/services/technology-transformation"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="premium-service-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(226, 232, 240, 0.9)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                height: "100%",
                minHeight: "360px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 22px 50px rgba(0, 102, 179, 0.22)";
                e.currentTarget.style.borderColor = "#0066B3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.9)";
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "170px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                }}
              >
                <img
                  src={serviceImages["technology-transformation"]}
                  alt="Technology Transformation dynamic data streams"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#0066B3",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Technology Transformation
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.55,
                  color: "#475569",
                  marginBottom: "1.5rem",
                }}
              >
                Enhance efficiency, agility, and scalability in operations by optimize, and transform digitally.
              </p>

              <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#0066B3",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0, 102, 179, 0.3)",
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
