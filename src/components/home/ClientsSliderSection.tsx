"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ClientLogo {
  id: string;
  name: string;
  src: string;
  width?: number;
}

const CLIENT_LOGOS: ClientLogo[] = [
  { id: "1", name: "PwC", src: "/images/clients/client-1.webp" },
  { id: "2", name: "Careem", src: "/images/clients/client-2.webp" },
  { id: "3", name: "United Foods", src: "/images/clients/client-3.webp" },
  { id: "4", name: "GRSE", src: "/images/clients/client-4.webp" },
  { id: "5", name: "WorkIndia", src: "/images/clients/client-5.webp" },
  { id: "6", name: "Aldar", src: "/images/clients/client-6.webp" },
  { id: "7", name: "Client 7", src: "/images/clients/client-7.webp" },
  { id: "8", name: "Client 8", src: "/images/clients/client-8.webp" },
  { id: "9", name: "Client 9", src: "/images/clients/client-9.webp" },
  { id: "10", name: "Client 10", src: "/images/clients/client-10.webp" },
  { id: "11", name: "Client 11", src: "/images/clients/client-11.webp" },
  { id: "12", name: "Client 12", src: "/images/clients/client-12.webp" },
  { id: "13", name: "Client 13", src: "/images/clients/client-13.webp" },
  { id: "14", name: "Client 14", src: "/images/clients/client-14.webp" },
  { id: "15", name: "Pi Square Technologies", src: "/images/clients/client-15.webp" },
];

export function ClientsSliderSection() {
  // Duplicate for seamless 50% translation infinite loop
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      className="clients-slider-section"
      id="clients-slider"
      style={{
        background: "#000000",
        padding: "3.75rem 0 3.25rem",
        position: "relative",
        borderTop: "1px solid rgba(255, 255, 255, 0.09)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.09)",
        overflow: "hidden",
      }}
    >
      {/* Subtle Ambient Backlight Beam for Depth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "120px",
          background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(24, 144, 215, 0.09) 0%, transparent 80%)",
          filter: "blur(28px)",
          pointerEvents: "none",
        }}
      />

      {/* Left & Right Edge Gradient Masks for cinematic fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "150px",
          background: "linear-gradient(to right, #000000 35%, transparent 100%)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "150px",
          background: "linear-gradient(to left, #000000 35%, transparent 100%)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* Marquee Track Container */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
        }}
      >
        <div
          className="clients-marquee-track"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5.5rem",
            animation: "clientMarquee 42s linear infinite",
            width: "max-content",
            willChange: "transform",
          }}
        >
          {marqueeLogos.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                height: "84px",
                minWidth: "170px",
                padding: "0.25rem 0.75rem",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                opacity: 0.92,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1.12)";
                const img = e.currentTarget.querySelector("img");
                if (img) {
                  img.style.filter = "brightness(1.4) contrast(1.2) drop-shadow(0 0 16px rgba(255, 255, 255, 0.45))";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.92";
                e.currentTarget.style.transform = "scale(1)";
                const img = e.currentTarget.querySelector("img");
                if (img) {
                  img.style.filter = "brightness(1.22) contrast(1.15)";
                }
              }}
            >
              <img
                src={client.src}
                alt={`${client.name} logo`}
                loading="lazy"
                style={{
                  maxHeight: "68px",
                  maxWidth: "220px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                  filter: "brightness(1.22) contrast(1.15)",
                  userSelect: "none",
                  pointerEvents: "none",
                  transition: "filter 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prominent Centered "View All" Button */}
      <div
        style={{
          textAlign: "center",
          marginTop: "2.25rem",
          position: "relative",
          zIndex: 6,
        }}
      >
        <Link
          href="/case-studies"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            color: "#FFFFFF",
            fontSize: "0.9375rem",
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: "0.03em",
            padding: "0.55rem 1.65rem",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(8px)",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#38BDF8";
            e.currentTarget.style.background = "rgba(56, 189, 248, 0.12)";
            e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.45)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(56, 189, 248, 0.25)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#FFFFFF";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.16)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <span>View All</span>
          <ArrowUpRight size={15} style={{ opacity: 0.9 }} />
        </Link>
      </div>

      {/* Keyframe Animation & Responsive Breakpoints */}
      <style jsx>{`
        @keyframes clientMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .clients-marquee-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .clients-marquee-track {
            gap: 3.25rem !important;
            animation-duration: 28s !important;
          }
          .clients-marquee-track img {
            max-height: 48px !important;
            max-width: 160px !important;
          }
        }
      `}</style>
    </section>
  );
}
