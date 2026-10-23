import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, getPublishedServices } from "@/lib/db";
import { ArrowLeft, CheckCircle2, ShieldCheck, ArrowUpRight, PhoneCall, Layers } from "lucide-react";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return { title: "Practice Area Not Found" };
  }

  return {
    title: `${service.title} | Adamas Tech Consulting`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | Adamas Tech Consulting`,
      description: service.shortDesc,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allServices = await getPublishedServices();
  const relatedServices = allServices.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
      <div className="container">
        {/* Back breadcrumb */}
        <div style={{ marginBottom: "2rem" }}>
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.875rem",
              color: "var(--brand-blue-vibrant)",
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Practice Areas</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div
          className="glass-card"
          style={{
            padding: "3.5rem 3rem",
            marginBottom: "3.5rem",
            border: "1px solid rgba(24, 144, 215, 0.3)",
            background: "linear-gradient(135deg, rgba(10, 37, 72, 0.65) 0%, rgba(4, 12, 24, 0.9) 100%)",
          }}
        >
          <div style={{ maxWidth: "880px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.8125rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--brand-orange-primary)",
                marginBottom: "0.75rem",
              }}
            >
              Practice Area &bull; {service.category}
            </span>
            <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, marginBottom: "1rem" }}>
              {service.title}
            </h1>
            <p style={{ fontSize: "1.25rem", color: "#38BDF8", fontWeight: 600, marginBottom: "1.5rem" }}>
              {service.subtitle}
            </p>
            <p style={{ fontSize: "1.125rem", color: "var(--text-light-med)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              {service.fullDesc}
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: "0.85rem 2rem" }}>
                <PhoneCall size={16} />
                <span>Schedule Technical Scoping</span>
              </Link>
              <Link href="/case-studies" className="btn btn-glass" style={{ padding: "0.85rem 2rem" }}>
                <span>Review Verified Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Architecture & Deliverables Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", marginBottom: "4rem" }}>
          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem" }}>
              Key Enterprise Architectural Deliverables
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "rgba(243, 111, 33, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle2 size={18} color="#F36F21" />
                  </div>
                  <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#FFFFFF" }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem" }}>
              Adamas Delivery Standards
            </h2>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <li style={{ display: "flex", gap: "0.75rem" }}>
                  <ShieldCheck size={22} color="#38BDF8" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF" }}>Security & ISO 27001 Alignment</h4>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-light-muted)", marginTop: "0.25rem" }}>
                      All software and cloud topologies adhere strictly to international information security standards and role-based access governance.
                    </p>
                  </div>
                </li>

                <li style={{ display: "flex", gap: "0.75rem" }}>
                  <Layers size={22} color="#F36F21" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF" }}>CMMI Level 3 Process Rigor</h4>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-light-muted)", marginTop: "0.25rem" }}>
                      Predictable sprint cadence, comprehensive integration testing, and zero-downtime cutover orchestration.
                    </p>
                  </div>
                </li>

                <li style={{ display: "flex", gap: "0.75rem" }}>
                  <CheckCircle2 size={22} color="#10B981" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF" }}>Long-Term SLA Maintenance</h4>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-light-muted)", marginTop: "0.25rem" }}>
                      Ongoing post-launch optimization, database index tuning, and 24/7 incident escalation support.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.5rem" }}>
              Related Enterprise Practice Areas
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {relatedServices.map((rel) => (
                <div key={rel.id} className="glass-card" style={{ padding: "1.5rem" }}>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
                    {rel.title}
                  </h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-light-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                    {rel.shortDesc}
                  </p>
                  <Link
                    href={`/services/${rel.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.8125rem",
                      color: "var(--brand-orange-primary)",
                      fontWeight: 700,
                    }}
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
