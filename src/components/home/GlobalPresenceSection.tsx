"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  ExternalLink,
  Building2,
  Navigation,
} from "lucide-react";

interface OfficeLocation {
  city: string;
  country: string;
  badge: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  landmark: string;
  timezone: string;
  mapUrl: string;
}

const GLOBAL_OFFICES: OfficeLocation[] = [
  {
    city: "London",
    country: "United Kingdom",
    badge: "UK & Europe HQ",
    address: "Golden Cross House, 8 Duncannon Street, London WC2N 4JF",
    phone: "+44 7768 706988",
    email: "marketing@adamastech.in",
    image: "/images/locations/london-tower-bridge.jpg",
    landmark: "Tower Bridge & Thames",
    timezone: "GMT (UTC+0)",
    mapUrl:
      "https://maps.google.com/?q=Golden+Cross+House+8+Duncannon+Street+London+WC2N+4JF",
  },
  {
    city: "San Francisco / Palo Alto",
    country: "United States",
    badge: "North America Office",
    address: "530 Lytton Avenue, 2nd Floor, Palo Alto, CA 94301",
    phone: "+1 650 321 0000",
    email: "marketing@adamastech.in",
    image: "/images/locations/san-francisco-golden-gate.jpg",
    landmark: "Golden Gate & Silicon Valley",
    timezone: "PST (UTC-8)",
    mapUrl: "https://maps.google.com/?q=530+Lytton+Avenue+Palo+Alto+CA+94301",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    badge: "Middle East HQ",
    address:
      "B-2101, 1601 & 801 Latifa Tower near Trade Centre, Sheikh Zayed Road, Dubai",
    phone: "+971 4 705 6001",
    email: "marketing@adamastech.in",
    image: "/images/locations/dubai-burj-khalifa.jpg",
    landmark: "Burj Khalifa & Sheikh Zayed Rd",
    timezone: "GST (UTC+4)",
    mapUrl:
      "https://maps.google.com/?q=Latifa+Tower+Sheikh+Zayed+Road+Dubai",
  },
  {
    city: "Bengaluru",
    country: "India",
    badge: "Tech Delivery Center",
    address:
      "27th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+91 6296680677",
    email: "marketing@adamastech.in",
    image: "/images/locations/bengaluru-vidhana-soudha.jpg",
    landmark: "Vidhana Soudha & IT Epicenter",
    timezone: "IST (UTC+5:30)",
    mapUrl:
      "https://maps.google.com/?q=27th+Main+Rd+1st+Sector+HSR+Layout+Bengaluru+Karnataka+560102",
  },
  {
    city: "Kolkata",
    country: "India",
    badge: "Corporate Delivery Office",
    address: "Haute Street, Topsia Road, Kolkata, West Bengal 700046",
    phone: "+91 6296680677",
    email: "marketing@adamastech.in",
    image: "/images/locations/kolkata-victoria.jpg",
    landmark: "Victoria Memorial Heritage",
    timezone: "IST (UTC+5:30)",
    mapUrl:
      "https://maps.google.com/?q=Haute+Street+Topsia+Road+Kolkata+West+Bengal+700046",
  },
];

export function GlobalPresenceSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      className="section-wrapper"
      id="global-presence"
      style={{
        background: "linear-gradient(180deg, #030914 0%, #06152B 50%, #030A14 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "7rem 0 7.5rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Background radial glowing ambient light pools */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 102, 179, 0.15) 0%, transparent 70%)",
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
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(243, 111, 33, 0.12) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: "4rem", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.45rem 1.15rem",
              borderRadius: "9999px",
              background: "rgba(243, 111, 33, 0.12)",
              border: "1px solid rgba(243, 111, 33, 0.35)",
              marginBottom: "1.25rem",
              boxShadow: "0 0 20px rgba(243, 111, 33, 0.15)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#F36F21",
                boxShadow: "0 0 10px #F36F21",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 800,
                color: "#F36F21",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Worldwide Footprint &amp; Delivery Hubs
            </span>
          </div>

          <h2
            className="section-title"
            style={{
              fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
            }}
          >
            Our Global{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #38BDF8 0%, #0066B3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Presence
            </span>
          </h2>

          <p
            className="section-desc"
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#94A3B8",
            }}
          >
            With strategically positioned corporate centers and engineering hubs across the United Kingdom, North America, the Middle East, and India, our follow-the-sun architecture delivers round-the-clock enterprise reliability and strategic local delivery.
          </p>
        </div>

        {/* Global Hubs Grid - Responsive 5 Cards Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2.25rem",
          }}
        >
          {GLOBAL_OFFICES.map((office, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={office.city}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  borderRadius: "22px",
                  background: isHovered
                    ? "rgba(10, 32, 65, 0.72)"
                    : "rgba(7, 24, 49, 0.52)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: isHovered
                    ? "1px solid rgba(56, 189, 248, 0.48)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: isHovered
                    ? "0 25px 60px -10px rgba(0, 0, 0, 0.65), 0 0 30px rgba(56, 189, 248, 0.2)"
                    : "0 15px 35px rgba(0, 0, 0, 0.4)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                }}
              >
                {/* Visual Landmark Banner Image */}
                <div
                  style={{
                    position: "relative",
                    height: "195px",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={office.image}
                    alt={`${office.city} iconic landmark - ${office.landmark}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                    }}
                  />

                  {/* Gradient atmospheric blend overlay */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(6, 18, 38, 0.4) 0%, rgba(6, 18, 38, 0.1) 40%, rgba(6, 18, 38, 0.95) 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Floating Region Role Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      padding: "0.35rem 0.85rem",
                      borderRadius: "9999px",
                      background: "rgba(6, 18, 38, 0.82)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(243, 111, 33, 0.45)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                    }}
                  >
                    <Building2 size={13} color="#F36F21" />
                    <span
                      style={{
                        fontSize: "0.71875rem",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {office.badge}
                    </span>
                  </div>

                  {/* Floating Timezone Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      padding: "0.32rem 0.75rem",
                      borderRadius: "9999px",
                      background: "rgba(6, 18, 38, 0.82)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(56, 189, 248, 0.4)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <Clock size={12} color="#38BDF8" />
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        color: "#E2E8F0",
                      }}
                    >
                      {office.timezone}
                    </span>
                  </div>

                  {/* Landmark Caption on Image */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0.85rem",
                      left: "1.25rem",
                      right: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#CBD5E1",
                        background: "rgba(0, 0, 0, 0.55)",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "6px",
                        backdropFilter: "blur(6px)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                      }}
                    >
                      📍 {office.landmark}
                    </span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div
                  style={{
                    padding: "1.65rem 1.65rem 1.45rem",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  {/* City & Country */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      marginBottom: "0.85rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "-0.02em",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {office.city}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "#38BDF8",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {office.country}
                    </span>
                  </div>

                  {/* Physical Address */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      marginBottom: "1.35rem",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: "#94A3B8",
                      minHeight: "44px",
                    }}
                  >
                    <MapPin
                      size={17}
                      color="#F36F21"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <span>{office.address}</span>
                  </div>

                  {/* Actions & Contact Details */}
                  <div
                    style={{
                      marginTop: "auto",
                      borderTop: "1px solid rgba(255, 255, 255, 0.09)",
                      paddingTop: "1.1rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.65rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {/* Phone link */}
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                        title={`Call ${office.city} office`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          color: "#38BDF8",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#FFFFFF")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#38BDF8")
                        }
                      >
                        <Phone size={13} />
                        <span>{office.phone}</span>
                      </a>

                      {/* View on Map Link */}
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View ${office.city} office on Google Maps`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#CBD5E1",
                          textDecoration: "none",
                          padding: "0.25rem 0.6rem",
                          borderRadius: "6px",
                          background: "rgba(255, 255, 255, 0.06)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(56, 189, 248, 0.18)";
                          e.currentTarget.style.borderColor =
                            "rgba(56, 189, 248, 0.4)";
                          e.currentTarget.style.color = "#FFFFFF";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.06)";
                          e.currentTarget.style.borderColor =
                            "rgba(255, 255, 255, 0.12)";
                          e.currentTarget.style.color = "#CBD5E1";
                        }}
                      >
                        <Navigation size={11} color="#38BDF8" />
                        <span>View Map</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>

                    {/* Email Link */}
                    <a
                      href={`mailto:${office.email}?subject=Inquiry from Adamas Tech Website - ${office.city}`}
                      title={`Email ${office.city} office`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        color: "#94A3B8",
                        fontSize: "0.78125rem",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#F36F21")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#94A3B8")
                      }
                    >
                      <Mail size={13} />
                      <span>{office.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
