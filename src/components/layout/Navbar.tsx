"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdamasLogo } from "../common/AdamasLogo";
import { ChevronDown, Menu, X, ArrowUpRight, PhoneCall, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
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
        {/* Brand Logo */}
        <AdamasLogo variant="colored" size="md" />

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

        {/* Header Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ fontSize: "0.875rem", padding: "0.65rem 1.4rem" }}
          >
            <PhoneCall size={15} />
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={14} />
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
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

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "1.125rem", fontWeight: 600 }}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/products" onClick={() => setMobileMenuOpen(false)}>Products & Platforms</Link>
            <Link href="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
            <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)}>Success Stories</Link>
            <Link href="/consulting" onClick={() => setMobileMenuOpen(false)}>Consulting Methodology</Link>
            <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Offices</Link>
            <Link href="/admin/login" onClick={() => setMobileMenuOpen(false)} style={{ color: "var(--brand-orange-primary)", fontSize: "0.9375rem", marginTop: "1rem" }}>
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
              Schedule Enterprise Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
