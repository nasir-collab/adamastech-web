"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { InitialCaseStudy } from "@/lib/data/initialData";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

interface CaseStudiesSectionProps {
  caseStudies: InitialCaseStudy[];
}

export function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Curated order matching the reference design:
  // 1. Security AI Recognition
  // 2. Parking with AI Intelligence
  // 3. Boosting Cash Forecasting by 30%
  // 4. Reducing Production Cost in Liquor Manufacturing
  const orderedStudies = [...caseStudies].sort((a, b) => {
    const orderMap: Record<string, number> = {
      "effortless-security-ai": 1,
      "effortless-parking-ai": 2,
      "sap-treasury-cash-management": 3,
      "sap-analytics-liquor-manufacturing": 4,
    };
    return (orderMap[a.slug] || 99) - (orderMap[b.slug] || 99);
  });

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 340;
    const currentScroll = scrollRef.current.scrollLeft;
    const targetScroll =
      direction === "left"
        ? Math.max(0, currentScroll - cardWidth)
        : currentScroll + cardWidth;

    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    const newIndex = direction === "left" ? Math.max(0, activeSlide - 1) : Math.min(orderedStudies.length - 1, activeSlide + 1);
    setActiveSlide(newIndex);
  };

  const handleScrollListener = () => {
    if (!scrollRef.current) return;
    const cardWidth = 340;
    const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
    if (index !== activeSlide && index >= 0 && index < orderedStudies.length) {
      setActiveSlide(index);
    }
  };

  return (
    <section
      className="case-studies-section"
      id="case-studies"
      style={{
        background: "radial-gradient(ellipse at 50% 10%, #071E40 0%, #030813 70%)",
        padding: "6.5rem 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(24, 144, 215, 0.2)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Ambient background glow accents */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(24, 144, 215, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(243, 111, 33, 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Typography, Impact Metrics & CTA */}
          <div style={{ maxWidth: "440px" }}>
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1.1rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(24, 144, 215, 0.15)",
                border: "1px solid rgba(24, 144, 215, 0.45)",
                color: "#38BDF8",
                fontSize: "0.8125rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              <Sparkles size={14} color="#38BDF8" />
              <span>MEASURABLE SUCCESS STORIES</span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: "clamp(2.35rem, 4.2vw, 3.4rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}
            >
              Results-Driven Projects Delivering Excellence
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "var(--text-light-muted)",
                marginBottom: "2rem",
              }}
            >
              Real production transformations with audited operational benchmarks across global enterprises in UK, UAE, US, and India.
            </p>

            {/* Key Outcomes Summary Box */}
            <div
              style={{
                background: "rgba(10, 28, 54, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "1.25rem 1.5rem",
                marginBottom: "2.25rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
              }}
            >
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#38BDF8", lineHeight: 1 }}>
                  30%
                </div>
                <div style={{ fontSize: "0.78125rem", color: "#CBD5E1", marginTop: "0.25rem", fontWeight: 500 }}>
                  Cash Forecast Accuracy
                </div>
              </div>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--brand-orange-primary)", lineHeight: 1 }}>
                  &lt;0.8s
                </div>
                <div style={{ fontSize: "0.78125rem", color: "#CBD5E1", marginTop: "0.25rem", fontWeight: 500 }}>
                  AI Verification Latency
                </div>
              </div>
            </div>

            {/* View All Pill CTA Button */}
            <Link
              href="/case-studies"
              className="btn btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.875rem 2.25rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "1rem",
                boxShadow: "0 6px 24px rgba(24, 144, 215, 0.4)",
              }}
            >
              <span>Explore All Case Studies</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Right Column: Carousel Track & Navigation */}
          <div style={{ position: "relative", minWidth: 0 }}>
            {/* Carousel Navigation Buttons */}
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous case study"
              style={{
                position: "absolute",
                left: "-18px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(10, 28, 56, 0.9)",
                border: "1px solid rgba(24, 144, 215, 0.4)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 30,
                color: "#FFFFFF",
                backdropFilter: "blur(12px)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--brand-blue-primary)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                e.currentTarget.style.borderColor = "#38BDF8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(10, 28, 56, 0.9)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                e.currentTarget.style.borderColor = "rgba(24, 144, 215, 0.4)";
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => handleScroll("right")}
              aria-label="Next case study"
              style={{
                position: "absolute",
                right: "-18px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(10, 28, 56, 0.9)",
                border: "1px solid rgba(24, 144, 215, 0.4)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 30,
                color: "#FFFFFF",
                backdropFilter: "blur(12px)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--brand-blue-primary)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                e.currentTarget.style.borderColor = "#38BDF8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(10, 28, 56, 0.9)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                e.currentTarget.style.borderColor = "rgba(24, 144, 215, 0.4)";
              }}
            >
              <ChevronRight size={22} />
            </button>

            {/* Horizontal Scroll Track */}
            <div
              ref={scrollRef}
              onScroll={handleScrollListener}
              style={{
                display: "flex",
                gap: "1.5rem",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                padding: "0.75rem 0.5rem 1.25rem",
              }}
            >
              {orderedStudies.map((study) => (
                <Link
                  key={study.id}
                  href={`/case-studies/${study.slug}`}
                  style={{
                    textDecoration: "none",
                    flex: "0 0 clamp(280px, 28vw, 325px)",
                    scrollSnapAlign: "start",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "460px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease",
                      cursor: "pointer",
                      background: "#051124",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow = "0 25px 60px rgba(24, 144, 215, 0.35)";
                      e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.6)";
                      const img = e.currentTarget.querySelector("img");
                      if (img) img.style.transform = "scale(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.4)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                      const img = e.currentTarget.querySelector("img");
                      if (img) img.style.transform = "scale(1)";
                    }}
                  >
                    {/* Background Photographic Image */}
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />

                    {/* Gradient Overlay for Readability */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(3, 8, 19, 0.82) 0%, rgba(3, 8, 19, 0.25) 45%, rgba(3, 8, 19, 0.92) 100%)",
                      }}
                    />

                    {/* Card Content Top: Industry Badge & Prominent Title */}
                    <div
                      style={{
                        position: "relative",
                        zIndex: 10,
                        padding: "1.75rem 1.4rem",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "0.71875rem",
                          fontWeight: 700,
                          color: "#38BDF8",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: "0.6rem",
                          background: "rgba(24, 144, 215, 0.2)",
                          border: "1px solid rgba(56, 189, 248, 0.3)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "6px",
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        {study.industry}
                      </span>

                      <h3
                        style={{
                          fontSize: "1.375rem",
                          fontWeight: 800,
                          color: "#FFFFFF",
                          lineHeight: 1.25,
                          letterSpacing: "-0.015em",
                          margin: 0,
                          textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)",
                        }}
                      >
                        {study.title}
                      </h3>
                    </div>

                    {/* Card Content Bottom: Verified Key Metric & Circular Action Pill */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 10,
                        padding: "1.5rem 1.4rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "linear-gradient(to top, rgba(3, 8, 19, 0.98) 0%, rgba(3, 8, 19, 0.75) 60%, transparent 100%)",
                      }}
                    >
                      <div>
                        {study.metrics && study.metrics[0] && (
                          <div>
                            <div
                              style={{
                                fontSize: "1.5rem",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                textShadow: "0 0 12px rgba(56, 189, 248, 0.5)",
                              }}
                            >
                              {study.metrics[0].metric}
                            </div>
                            <div
                              style={{
                                fontSize: "0.78125rem",
                                color: "#94A3B8",
                                marginTop: "2px",
                                fontWeight: 500,
                              }}
                            >
                              {study.metrics[0].label}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Circular Action Pill */}
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "rgba(24, 144, 215, 0.25)",
                          backdropFilter: "blur(8px)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#FFFFFF",
                          border: "1px solid rgba(56, 189, 248, 0.5)",
                          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Pagination Bar Indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "0.5rem",
                paddingRight: "1rem",
                marginTop: "1.25rem",
              }}
            >
              <div
                style={{
                  width: activeSlide === 0 ? "34px" : "14px",
                  height: "4px",
                  borderRadius: "2px",
                  background: activeSlide === 0 ? "var(--brand-orange-primary)" : "rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease",
                }}
              />
              <div
                style={{
                  width: activeSlide === 1 ? "34px" : "14px",
                  height: "4px",
                  borderRadius: "2px",
                  background: activeSlide === 1 ? "var(--brand-orange-primary)" : "rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease",
                }}
              />
              <div
                style={{
                  width: activeSlide >= 2 ? "34px" : "14px",
                  height: "4px",
                  borderRadius: "2px",
                  background: activeSlide >= 2 ? "var(--brand-orange-primary)" : "rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
