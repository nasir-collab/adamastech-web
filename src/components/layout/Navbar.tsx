"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdamasLogo } from "../common/AdamasLogo";
import { RegionToggler } from "../common/RegionToggler";
import { ChevronDown, Menu, X, ArrowUpRight, PhoneCall, Sparkles, Search } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setProductsDropdown(false);
  }, [pathname]);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        {/* Brand Logo with Protected Breathing Space */}
        <div className="header-logo-container" style={{ flexShrink: 0, marginRight: "clamp(0.75rem, 1.75vw, 2.25rem)" }}>
          <AdamasLogo variant="colored" customHeight={42} />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main Navigation">
          <div className="nav-item">
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link
              href="/services"
              className={`nav-link ${pathname.startsWith("/services") ? "active" : ""}`}
            >
              Services
              <ChevronDown size={14} />
            </Link>
            {servicesDropdown && (
              <div className="dropdown-menu" style={{ display: "block" }}>
                <Link href="/services/sap-solution-consulting" className="dropdown-item">
                  SAP Solutions & Consulting
                </Link>
                <Link href="/services/aws-solutions" className="dropdown-item">
                  AWS Solutions & Cloud Services
                </Link>
                <Link href="/services/ai-data-analytics" className="dropdown-item">
                  AI/ML & Data Analytics
                </Link>
                <Link href="/services/oracle-netsuite-solutions" className="dropdown-item">
                  Oracle NetSuite ERP
                </Link>
                <Link href="/services/openedx" className="dropdown-item">
                  Open edX® Services
                </Link>
                <Link href="/services/technology-transformation" className="dropdown-item">
                  Technology Transformation
                </Link>
                <Link href="/services/e-invoicing-uae" className="dropdown-item">
                  UAE E-Invoicing & Compliance
                </Link>
                <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", margin: "0.4rem 0" }} />
                <Link href="/services" className="dropdown-item" style={{ color: "var(--brand-orange-primary)", fontWeight: 600 }}>
                  View All Services →
                </Link>
              </div>
            )}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setProductsDropdown(true)}
            onMouseLeave={() => setProductsDropdown(false)}
          >
            <Link
              href="/products"
              className={`nav-link ${pathname.startsWith("/products") ? "active" : ""}`}
            >
              Products
              <ChevronDown size={14} />
            </Link>
            {productsDropdown && (
              <div className="dropdown-menu" style={{ display: "block" }}>
                <Link href="/products/arivoo-ums" className="dropdown-item">
                  Arivoo UMS (University)
                </Link>
                <Link href="/products/arivoo-sms" className="dropdown-item">
                  Arivoo SMS (School)
                </Link>
                <Link href="/products/arivoo-lms" className="dropdown-item">
                  Arivoo LMS (E-Learning)
                </Link>
                <Link href="/products/testguard" className="dropdown-item">
                  TestGUARD (AI Proctoring)
                </Link>
                <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", margin: "0.4rem 0" }} />
                <Link href="/products" className="dropdown-item" style={{ color: "var(--brand-orange-primary)", fontWeight: 600 }}>
                  Explore Product Portfolio →
                </Link>
              </div>
            )}
          </div>

          <div className="nav-item">
            <Link
              href="/industries"
              className={`nav-link ${pathname.startsWith("/industries") ? "active" : ""}`}
            >
              Industries
            </Link>
          </div>

          <div className="nav-item">
            <Link
              href="/case-studies"
              className={`nav-link ${pathname.startsWith("/case-studies") ? "active" : ""}`}
            >
              Success Stories
            </Link>
          </div>

          <div className="nav-item">
            <Link
              href="/consulting"
              className={`nav-link ${pathname === "/consulting" ? "active" : ""}`}
            >
              Consulting
            </Link>
          </div>

          <div className="nav-item">
            <Link
              href="/about-us"
              className={`nav-link ${pathname === "/about-us" ? "active" : ""}`}
            >
              About Us
            </Link>
          </div>
        </nav>

        {/* Header Right Actions - Perfectly Aligned 38px Control Suite */}
        <div className="header-actions" style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexShrink: 0 }}>
          {/* Quick Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="btn-glass"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              cursor: "pointer",
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              flexShrink: 0,
              padding: 0,
              transition: "all 0.2s ease",
            }}
            aria-label="Search AdamasTech Services & Solutions"
          >
            <Search size={16} />
          </button>

          {/* Region / Country Toggler (Matches Screenshot UI/UX) */}
          <RegionToggler variant="header" />

          {/* Solar Orange Call to Action Pill */}
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{
              fontSize: "0.84375rem",
              fontWeight: 700,
              height: "38px",
              padding: "0 1.25rem",
              borderRadius: "9999px",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            <PhoneCall size={14} />
            <span>Talk to an Expert</span>
            <ArrowUpRight size={13} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <AdamasLogo variant="colored" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="btn-glass"
              style={{ padding: "0.5rem", borderRadius: "50%" }}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Region Toggler */}
          <div style={{ marginBottom: "1.5rem", padding: "0.75rem", background: "rgba(255, 255, 255, 0.04)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div style={{ fontSize: "0.75rem", color: "var(--text-light-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem", fontWeight: 600 }}>
              Select Operating Region
            </div>
            <RegionToggler variant="mobile" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "1.125rem", fontWeight: 600 }}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/products" onClick={() => setMobileMenuOpen(false)}>Products & Platforms</Link>
            <Link href="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
            <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)}>Success Stories</Link>
            <Link href="/consulting" onClick={() => setMobileMenuOpen(false)}>Consulting Methodology</Link>
            <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Offices</Link>
            <Link href="/admin/login" onClick={() => setMobileMenuOpen(false)} style={{ color: "var(--brand-orange-primary)", fontSize: "0.9375rem", marginTop: "0.5rem" }}>
              CMS Admin Portal →
            </Link>
          </div>

          <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ width: "100%", textAlign: "center" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      )}

      {/* Global Quick Search Overlay Modal */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(2, 6, 16, 0.85)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            zIndex: 1200,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "6rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
          onClick={() => setSearchOpen(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              background: "#08182F",
              border: "1px solid rgba(24, 144, 215, 0.35)",
              borderRadius: "16px",
              padding: "1.75rem",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", borderBottom: "1px solid rgba(255, 255, 255, 0.12)", paddingBottom: "1rem" }}>
              <Search size={20} color="var(--brand-orange-primary)" />
              <input
                type="text"
                autoFocus
                placeholder="Search solutions, SAP, AWS, Arivoo, case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#FFFFFF",
                  fontSize: "1.0625rem",
                }}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="btn-glass"
                style={{ padding: "0.4rem", borderRadius: "50%" }}
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ marginTop: "1.25rem" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-light-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
                Suggested Destinations
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Link
                  href="/services/sap-solution-consulting"
                  onClick={() => setSearchOpen(false)}
                  style={{ padding: "0.5rem 0.75rem", borderRadius: "8px", background: "rgba(255, 255, 255, 0.03)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.875rem" }}
                >
                  <span style={{ color: "#FFFFFF", fontWeight: 600 }}>SAP S/4HANA & Enterprise ERP</span>
                  <span style={{ color: "var(--brand-orange-primary)", fontSize: "0.75rem" }}>Service →</span>
                </Link>
                <Link
                  href="/services/aws-solutions"
                  onClick={() => setSearchOpen(false)}
                  style={{ padding: "0.5rem 0.75rem", borderRadius: "8px", background: "rgba(255, 255, 255, 0.03)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.875rem" }}
                >
                  <span style={{ color: "#FFFFFF", fontWeight: 600 }}>AWS Cloud & DevOps Engineering</span>
                  <span style={{ color: "#38BDF8", fontSize: "0.75rem" }}>Service →</span>
                </Link>
                <Link
                  href="/products/arivoo-ums"
                  onClick={() => setSearchOpen(false)}
                  style={{ padding: "0.5rem 0.75rem", borderRadius: "8px", background: "rgba(255, 255, 255, 0.03)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.875rem" }}
                >
                  <span style={{ color: "#FFFFFF", fontWeight: 600 }}>Arivoo UMS (University Management Suite)</span>
                  <span style={{ color: "#10B981", fontSize: "0.75rem" }}>Product →</span>
                </Link>
                <Link
                  href="/case-studies"
                  onClick={() => setSearchOpen(false)}
                  style={{ padding: "0.5rem 0.75rem", borderRadius: "8px", background: "rgba(255, 255, 255, 0.03)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.875rem" }}
                >
                  <span style={{ color: "#FFFFFF", fontWeight: 600 }}>Enterprise Case Studies & Benchmarks</span>
                  <span style={{ color: "#8B5CF6", fontSize: "0.75rem" }}>Outcomes →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
