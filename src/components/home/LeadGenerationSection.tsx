"use client";

import React, { useState } from "react";
import {
  Lightbulb,
  Users,
  FileCheck2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  RotateCw,
  AlertCircle,
  ArrowRight,
  Send,
} from "lucide-react";

const COUNTRY_CODES = [
  { flag: "🇺🇸", code: "+1", name: "United States" },
  { flag: "🇬🇧", code: "+44", name: "United Kingdom" },
  { flag: "🇮🇳", code: "+91", name: "India" },
  { flag: "🇦🇪", code: "+971", name: "United Arab Emirates" },
  { flag: "🇨🇦", code: "+1", name: "Canada" },
  { flag: "🇦🇺", code: "+61", name: "Australia" },
  { flag: "🇩🇪", code: "+49", name: "Germany" },
  { flag: "🇸🇬", code: "+65", name: "Singapore" },
];

export function LeadGenerationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    countryName: "United States",
    phoneNumber: "",
    message: "",
    linkedin: "",
    requestNda: true,
    captchaAnswer: "",
    hp_company: "",
  });

  const [captchaNum1] = useState(5);
  const [captchaNum2] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = COUNTRY_CODES.find((c) => c.code === e.target.value);
    setFormData((prev) => ({
      ...prev,
      countryCode: e.target.value,
      countryName: selected ? selected.name : "United States",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in your name, email ID, and project details.");
      return;
    }

    // Verify simple captcha
    const parsedCaptcha = parseInt(formData.captchaAnswer.trim(), 10);
    if (isNaN(parsedCaptcha) || parsedCaptcha !== captchaNum1 + captchaNum2) {
      setErrorMessage(`Please answer the security question correctly: ${captchaNum1} + ${captchaNum2} = ${captchaNum1 + captchaNum2}`);
      return;
    }

    setStatus("submitting");

    const fullMessage = formData.linkedin.trim()
      ? `${formData.message.trim()}\n\n[LinkedIn ID: ${formData.linkedin.trim()}]\n[NDA Requested: ${formData.requestNda ? "YES" : "NO"}]`
      : `${formData.message.trim()}\n\n[NDA Requested: ${formData.requestNda ? "YES" : "NO"}]`;

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phoneNumber: `${formData.countryCode} ${formData.phoneNumber.trim()}`,
          country: formData.countryName,
          message: fullMessage,
          termsAccepted: true,
          hp_company: formData.hp_company,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to submit your request. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        countryCode: "+1",
        countryName: "United States",
        phoneNumber: "",
        message: "",
        linkedin: "",
        requestNda: true,
        captchaAnswer: "",
        hp_company: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission error occurred.");
    }
  };

  return (
    <section
      className="lead-generation-section"
      id="contact"
      style={{
        background: "linear-gradient(135deg, #F0F6FD 0%, #FFFFFF 40%, #EDF5FD 100%)",
        padding: "6.5rem 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      {/* Subtle ambient light gradient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-15%",
          left: "5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 102, 179, 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "clamp(2.5rem, 4.5vw, 4.5rem)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Human-Centric Collaboration Narrative & Re-Optimized 3-Step Journey */}
          <div>
            {/* CTA Button Above: "Let's Talk" */}
            <div style={{ marginBottom: "1.25rem" }}>
              <button
                type="button"
                onClick={() => {
                  const input = document.getElementById("lead-ref-name");
                  input?.focus();
                  input?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="consultation-cta-pill"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
                  color: "#FFFFFF",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  letterSpacing: "0.015em",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(2, 132, 199, 0.28)",
                  transition: "all 0.25s ease",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#38BDF8",
                    boxShadow: "0 0 8px #38BDF8",
                  }}
                />
                Let&apos;s Talk
                <ArrowRight size={14} style={{ strokeWidth: 2.5 }} />
              </button>
            </div>

            {/* Main Headline */}
            <h2
              style={{
                fontSize: "clamp(2.3rem, 3.8vw, 3.4rem)",
                fontWeight: 800,
                color: "#0B2545",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                marginBottom: "0.85rem",
              }}
            >
              Lets get in touch
            </h2>

            {/* Subtext with Email Link */}
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                color: "#475569",
                marginBottom: "2rem",
              }}
            >
              You can reach us anytime via{" "}
              <a
                href="mailto:marketing@adamastech.in"
                style={{
                  color: "#0284C7",
                  fontWeight: 600,
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0369A1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#0284C7")}
              >
                marketing@adamastech.in
              </a>
            </p>

            {/* Shortened Section Bridge (from Screenshot 2) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2.5rem",
                padding: "0.65rem 1rem",
                background: "rgba(2, 132, 199, 0.05)",
                borderRadius: "10px",
                borderLeft: "3px solid #0284C7",
                maxWidth: "540px",
              }}
            >
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.5,
                  color: "#334155",
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                <strong style={{ color: "#0B2545", fontWeight: 700 }}>Your All-in-One Digital Partner:</strong> From strategy to delivery, here is our simple 3-step kickoff:
              </p>
            </div>

            {/* 3-Step Connected Illustrated Process Timeline (Re-optimized & Shortened) */}
            <div
              className="consultation-steps-flow"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.25rem",
                position: "relative",
              }}
            >
              {/* Connecting Dashed Line */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "38px",
                  left: "14%",
                  right: "14%",
                  height: "2px",
                  borderTop: "2px dashed #38BDF8",
                  zIndex: 1,
                  opacity: 0.65,
                }}
              />

              {/* Step 01: Share Your Vision */}
              <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    width: "74px",
                    height: "74px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    border: "2px solid #0284C7",
                    boxShadow: "0 8px 24px rgba(2, 132, 199, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.15rem auto",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "2px",
                      left: "-2px",
                      background: "#0284C7",
                      color: "#FFFFFF",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      borderRadius: "9999px",
                      padding: "0.15rem 0.45rem",
                      boxShadow: "0 2px 8px rgba(2, 132, 199, 0.3)",
                    }}
                  >
                    01
                  </span>
                  <Lightbulb size={30} color="#0284C7" strokeWidth={1.8} />
                </div>
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "#0B2545",
                    marginBottom: "0.4rem",
                  }}
                >
                  Share Your Vision
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    lineHeight: 1.5,
                    color: "#64748B",
                    maxWidth: "180px",
                    margin: "0 auto",
                  }}
                >
                  Tell us your project goals under complete NDA confidentiality.
                </p>
              </div>

              {/* Step 02: Get Expert Consultation */}
              <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    width: "74px",
                    height: "74px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    border: "2px solid #0284C7",
                    boxShadow: "0 8px 24px rgba(2, 132, 199, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.15rem auto",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "2px",
                      left: "-2px",
                      background: "#0284C7",
                      color: "#FFFFFF",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      borderRadius: "9999px",
                      padding: "0.15rem 0.45rem",
                      boxShadow: "0 2px 8px rgba(2, 132, 199, 0.3)",
                    }}
                  >
                    02
                  </span>
                  <Users size={30} color="#0284C7" strokeWidth={1.8} />
                </div>
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "#0B2545",
                    marginBottom: "0.4rem",
                  }}
                >
                  Get Consultation
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    lineHeight: 1.5,
                    color: "#64748B",
                    maxWidth: "180px",
                    margin: "0 auto",
                  }}
                >
                  Connect directly with our architects to discuss your technical needs.
                </p>
              </div>

              {/* Step 03: Receive Your Proposal */}
              <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    width: "74px",
                    height: "74px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    border: "2px solid #0284C7",
                    boxShadow: "0 8px 24px rgba(2, 132, 199, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.15rem auto",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "2px",
                      left: "-2px",
                      background: "#0284C7",
                      color: "#FFFFFF",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      borderRadius: "9999px",
                      padding: "0.15rem 0.45rem",
                      boxShadow: "0 2px 8px rgba(2, 132, 199, 0.3)",
                    }}
                  >
                    03
                  </span>
                  <FileCheck2 size={30} color="#0284C7" strokeWidth={1.8} />
                </div>
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "#0B2545",
                    marginBottom: "0.4rem",
                  }}
                >
                  Receive Proposal
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    lineHeight: 1.5,
                    color: "#64748B",
                    maxWidth: "180px",
                    margin: "0 auto",
                  }}
                >
                  Get a clear plan with timeline, scope, and cost — zero strings attached.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Modern Elevated Proposal Form */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "26px",
              padding: "clamp(2rem, 3.2vw, 3rem)",
              boxShadow: "0 25px 65px -12px rgba(11, 37, 69, 0.14), 0 0 1px 1px rgba(11, 37, 69, 0.05)",
              border: "1px solid rgba(226, 232, 240, 0.9)",
              position: "relative",
            }}
          >
            {/* Form Header */}
            <h3
              style={{
                fontSize: "1.65rem",
                fontWeight: 800,
                color: "#0B2545",
                marginBottom: "2rem",
                letterSpacing: "-0.015em",
              }}
            >
              Let&apos;s Bring Your Vision to Life
            </h3>

            {status === "success" ? (
              <div
                style={{
                  padding: "2.5rem 1.5rem",
                  background: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  borderRadius: "16px",
                  textAlign: "center",
                }}
              >
                <CheckCircle2 size={46} color="#10B981" style={{ margin: "0 auto 1rem" }} />
                <h4 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#065F46", marginBottom: "0.5rem" }}>
                  Proposal Request Submitted!
                </h4>
                <p style={{ color: "#047857", fontSize: "0.9375rem", lineHeight: 1.6, maxWidth: "420px", margin: "0 auto" }}>
                  Thank you! An Adamas senior consulting architect is reviewing your vision under NDA and will connect with you within 2 minutes.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn btn-outline"
                  style={{
                    marginTop: "1.5rem",
                    borderColor: "#0284C7",
                    color: "#0284C7",
                    borderRadius: "9999px",
                    padding: "0.6rem 1.4rem",
                    cursor: "pointer",
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot field for anti-spam */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <input
                    type="text"
                    name="hp_company"
                    value={formData.hp_company}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {errorMessage && (
                  <div
                    style={{
                      padding: "0.75rem 1rem",
                      background: "rgba(239, 68, 68, 0.08)",
                      border: "1px solid rgba(239, 68, 68, 0.25)",
                      borderRadius: "10px",
                      color: "#DC2626",
                      fontSize: "0.875rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* 1. Full Name */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <input
                    id="lead-ref-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name*"
                    required
                    style={{
                      width: "100%",
                      border: "none",
                      borderBottom: "1.5px solid #CBD5E1",
                      padding: "0.65rem 0",
                      fontSize: "0.96875rem",
                      color: "#0F172A",
                      background: "transparent",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#0284C7")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "#CBD5E1")}
                  />
                </div>

                {/* 2. E-Mail ID */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <input
                    id="lead-ref-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-Mail ID*"
                    required
                    style={{
                      width: "100%",
                      border: "none",
                      borderBottom: "1.5px solid #CBD5E1",
                      padding: "0.65rem 0",
                      fontSize: "0.96875rem",
                      color: "#0F172A",
                      background: "transparent",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#0284C7")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "#CBD5E1")}
                  />
                </div>

                {/* 3. Contact Number with Country Dropdown */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1.5px solid #CBD5E1",
                      paddingBottom: "0.35rem",
                      transition: "border-color 0.2s ease",
                    }}
                  >
                    <select
                      aria-label="Country Code"
                      value={formData.countryCode}
                      onChange={handleCountryChange}
                      style={{
                        border: "none",
                        background: "transparent",
                        fontSize: "0.96875rem",
                        color: "#0F172A",
                        cursor: "pointer",
                        outline: "none",
                        paddingRight: "0.5rem",
                      }}
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={`${c.code}-${c.name}`} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <span style={{ color: "#94A3B8", marginRight: "0.75rem" }}>|</span>
                    <input
                      id="lead-ref-phone"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Contact Number*"
                      style={{
                        width: "100%",
                        border: "none",
                        fontSize: "0.96875rem",
                        color: "#0F172A",
                        background: "transparent",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                {/* 4. Idea & Project Description */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <input
                    id="lead-ref-message"
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="We'd love to hear your idea in detail to serve you better*"
                    required
                    style={{
                      width: "100%",
                      border: "none",
                      borderBottom: "1.5px solid #CBD5E1",
                      padding: "0.65rem 0",
                      fontSize: "0.96875rem",
                      color: "#0F172A",
                      background: "transparent",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#0284C7")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "#CBD5E1")}
                  />
                </div>

                {/* 5. LinkedIn ID (Optional) */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <input
                    id="lead-ref-linkedin"
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="Share your LinkedIn ID (Help us to know you better)"
                    style={{
                      width: "100%",
                      border: "none",
                      borderBottom: "1.5px solid #CBD5E1",
                      padding: "0.65rem 0",
                      fontSize: "0.96875rem",
                      color: "#0F172A",
                      background: "transparent",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#0284C7")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "#CBD5E1")}
                  />
                </div>

                {/* 6. NDA Checkbox & Math Verification */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginBottom: "2rem",
                  }}
                >
                  <label
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      cursor: "pointer",
                      fontSize: "0.875rem",
                      color: "#334155",
                      fontWeight: 500,
                    }}
                  >
                    <input
                      type="checkbox"
                      name="requestNda"
                      checked={formData.requestNda}
                      onChange={handleChange}
                      style={{
                        width: "18px",
                        height: "18px",
                        accentColor: "#0284C7",
                        cursor: "pointer",
                      }}
                    />
                    <span>Request NDA</span>
                  </label>

                  {/* Math Security Challenge */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div
                      style={{
                        padding: "0.35rem 0.75rem",
                        background: "#F1F5F9",
                        borderRadius: "8px",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#334155",
                        border: "1px solid #E2E8F0",
                      }}
                    >
                      {captchaNum1} + {captchaNum2} =
                    </div>
                    <input
                      type="text"
                      name="captchaAnswer"
                      value={formData.captchaAnswer}
                      onChange={handleChange}
                      placeholder="?"
                      required
                      style={{
                        width: "52px",
                        padding: "0.35rem 0.5rem",
                        textAlign: "center",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        border: "1px solid #CBD5E1",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                {/* 7. Get Proposal Pill Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-get-proposal"
                  style={{
                    width: "100%",
                    padding: "0.9rem",
                    borderRadius: "9999px",
                    background: "#FFFFFF",
                    border: "2px solid #0066B3",
                    color: "#0066B3",
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    transition: "all 0.25s ease",
                    boxShadow: "0 4px 15px rgba(0, 102, 179, 0.1)",
                    marginBottom: "1.75rem",
                  }}
                >
                  {status === "submitting" ? (
                    <span>Generating Your Strategic Proposal...</span>
                  ) : (
                    <span>Get Proposal</span>
                  )}
                </button>

                {/* 8. Trust Guarantee Box */}
                <div
                  style={{
                    background: "rgba(240, 246, 254, 0.85)",
                    border: "1px solid rgba(0, 102, 179, 0.12)",
                    borderRadius: "14px",
                    padding: "0.85rem 1.15rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.45rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", fontSize: "0.8125rem", color: "#334155" }}>
                    <Clock size={16} color="#0284C7" />
                    <span>You&apos;ll receive a reply within 2 minutes.</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", fontSize: "0.8125rem", color: "#334155" }}>
                    <ShieldCheck size={16} color="#0284C7" />
                    <span>Your idea is 100% protected under our NDA.</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Scoped CSS for Hover Micro-Interactions & Responsive Behavior */}
      <style jsx>{`
        .consultation-cta-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(2, 132, 199, 0.4) !important;
          background: linear-gradient(135deg, #0284C7 0%, #026ca7 100%) !important;
        }
        .btn-get-proposal:hover {
          background: #0066B3 !important;
          color: #FFFFFF !important;
          box-shadow: 0 8px 25px rgba(0, 102, 179, 0.35) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .consultation-steps-flow {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .consultation-steps-flow > div:after {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
