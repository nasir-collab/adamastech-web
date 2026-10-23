"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AdamasLogo } from "@/components/common/AdamasLogo";
import { Lock, Mail, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@adamastechconsulting.com");
  const [password, setPassword] = useState("AdamasSuperSecure2026!");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 50% 20%, #0A2548 0%, #040C18 70%)",
        padding: "1.5rem",
      }}
    >
      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "460px",
          padding: "2.75rem 2.25rem",
          borderRadius: "var(--radius-xl)",
          border: "1px solid rgba(24, 144, 215, 0.3)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <AdamasLogo variant="colored" size="md" />
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.3rem 0.8rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(243, 111, 33, 0.12)",
              color: "var(--brand-orange-primary)",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginTop: "1.25rem",
            }}
          >
            <ShieldCheck size={14} />
            Enterprise CMS Portal
          </div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginTop: "0.75rem" }}>
            Sign in to Administration
          </h1>
          <p style={{ fontSize: "0.875rem", color: "var(--text-light-muted)", marginTop: "0.25rem" }}>
            Authorized Adamas Tech personnel only
          </p>
        </div>

        {error && (
          <div
            style={{
              padding: "0.75rem 1rem",
              background: "rgba(239, 68, 68, 0.12)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              borderRadius: "var(--radius-md)",
              color: "#FCA5A5",
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label" htmlFor="admin-email">Staff Email</label>
            <div style={{ position: "relative" }}>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                style={{ paddingLeft: "2.5rem" }}
                required
              />
              <Mail
                size={18}
                color="var(--text-light-muted)"
                style={{ position: "absolute", left: "0.85rem", top: "50%", transform: "translateY(-50%)" }}
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: "2rem" }}>
            <label className="form-label" htmlFor="admin-pass">Password</label>
            <div style={{ position: "relative" }}>
              <input
                id="admin-pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                style={{ paddingLeft: "2.5rem" }}
                required
              />
              <Lock
                size={18}
                color="var(--text-light-muted)"
                style={{ position: "absolute", left: "0.85rem", top: "50%", transform: "translateY(-50%)" }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: "100%", padding: "0.95rem" }}
          >
            {loading ? "Authenticating..." : "Access CMS Console"}
            <ArrowRight size={16} />
          </button>
        </form>

        <div style={{ marginTop: "1.75rem", textAlign: "center" }}>
          <a href="/" style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)" }}>
            ← Return to Public Website
          </a>
        </div>
      </div>
    </div>
  );
}
