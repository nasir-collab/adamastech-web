"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { InitialCaseStudy } from "@/lib/data/initialData";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

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
    const cardWidth = 320; // approximate card + gap
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
    const cardWidth = 320;
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
        background: "#FFFFFF",
        padding: "6.5rem 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <div className="container" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Typography & Action */}
          <div style={{ maxWidth: "420px" }}>
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                fontSize: "0.8125rem",
                fontWeight: 800,
                color: "#0066B3",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              <span>SUCCESS STORIES</span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: "clamp(2.35rem, 4.2vw, 3.4rem)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.14,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              Results- Driven projects that deliver excellence
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "#475569",
                marginBottom: "2.5rem",
                maxWidth: "360px",
              }}
            >
              Discover the remarkable projects that highlight our innovation, expertise, and commitment to delivering excellence.
            </p>

            {/* View All Pill CTA Button */}
            <Link
              href="/case-studies"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                background: "#0066B3",
                color: "#FFFFFF",
                padding: "0.875rem 2rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(0, 102, 179, 0.3)",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#005291";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 28px rgba(0, 102, 179, 0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0066B3";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 102, 179, 0.3)";
              }}
            >
              <span>View All</span>
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
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.92)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 6px 22px rgba(0, 0, 0, 0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 30,
                color: "#0F172A",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
                e.currentTarget.style.boxShadow = "0 8px 26px rgba(0, 0, 0, 0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.92)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 22px rgba(0, 0, 0, 0.16)";
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
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                background: "#FFFFFF",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 30,
                color: "#0F172A",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.18)";
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
                gap: "1.25rem",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                padding: "0.75rem 0.5rem 1.25rem",
              }}
            >
              {orderedStudies.map((study, idx) => (
                <Link
                  key={study.id}
                  href={`/case-studies/${study.slug}`}
                  style={{
                    textDecoration: "none",
                    flex: "0 0 clamp(260px, 25vw, 305px)",
                    scrollSnapAlign: "start",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "450px",
                      borderRadius: "18px",
                      overflow: "hidden",
                      boxShadow: "0 12px 35px rgba(0, 0, 0, 0.14)",
                      border: "1px solid rgba(0, 0, 0, 0.06)",
                      transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow = "0 22px 50px rgba(0, 0, 0, 0.22)";
                      const img = e.currentTarget.querySelector("img");
                      if (img) img.style.transform = "scale(1.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.14)";
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
                        transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />

                    {/* Gradient Overlay for Readability */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(180deg, rgba(15, 23, 42, 0.78) 0%, rgba(15, 23, 42, 0.2) 42%, rgba(15, 23, 42, 0.75) 100%)",
                      }}
                    />

                    {/* Card Content Top: Prominent Title */}
                    <div
                      style={{
                        position: "relative",
                        zIndex: 10,
                        padding: "1.75rem 1.4rem",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.375rem",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          lineHeight: 1.25,
                          letterSpacing: "-0.015em",
                          margin: 0,
                          textShadow: "0 2px 10px rgba(0, 0, 0, 0.6)",
                        }}
                      >
                        {study.title}
                      </h3>
                    </div>

                    {/* Card Content Bottom: Verified Key Metric & Arrow */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 10,
                        padding: "1.25rem 1.4rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 100%)",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "#38BDF8",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            display: "block",
                          }}
                        >
                          {study.industry}
                        </span>
                        {study.metrics && study.metrics[0] && (
                          <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem", marginTop: "2px" }}>
                            <strong style={{ fontSize: "1.1875rem", fontWeight: 800, color: "#FFFFFF" }}>
                              {study.metrics[0].metric}
                            </strong>
                            <span style={{ fontSize: "0.75rem", color: "#CBD5E1" }}>
                              {study.metrics[0].label}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Circular Action Pill */}
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(8px)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#FFFFFF",
                          border: "1px solid rgba(255, 255, 255, 0.4)",
                          transition: "background 0.2s ease, transform 0.2s ease",
                        }}
                      >
                        <ArrowUpRight size={17} />
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
                  background: activeSlide === 0 ? "#0F172A" : "#CBD5E1",
                  transition: "all 0.3s ease",
                }}
              />
              <div
                style={{
                  width: activeSlide === 1 ? "34px" : "14px",
                  height: "4px",
                  borderRadius: "2px",
                  background: activeSlide === 1 ? "#0F172A" : "#CBD5E1",
                  transition: "all 0.3s ease",
                }}
              />
              <div
                style={{
                  width: activeSlide >= 2 ? "34px" : "14px",
                  height: "4px",
                  borderRadius: "2px",
                  background: activeSlide >= 2 ? "#0F172A" : "#CBD5E1",
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
