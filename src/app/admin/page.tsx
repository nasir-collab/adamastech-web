"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AdamasLogo } from "@/components/common/AdamasLogo";
import {
  Users,
  Layers,
  ShoppingBag,
  FileText,
  RefreshCw,
  LogOut,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Globe,
  ExternalLink,
  ShieldCheck,
  Edit,
  Save,
  X
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  country?: string;
  message: string;
  status: "NEW" | "CONTACTED" | "QUALIFIED" | "ARCHIVED";
  createdAt: string;
}

interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  category: string;
  isPublished: boolean;
  features: string[];
}

interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tag: string;
  shortDesc: string;
  liveDemoUrl: string;
  isPublished: boolean;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "leads" | "services" | "products" | "revalidate">("overview");
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);

  // Data states
  const [leads, setLeads] = useState<Lead[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [revalidatePathInput, setRevalidatePathInput] = useState("/");
  const [revalidateMsg, setRevalidateMsg] = useState("");

  // Editing state for Service
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me");
      if (!res.ok) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setUser(data.user);
    } catch {
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  }, [router]);

  const loadData = useCallback(async () => {
    try {
      const [leadsRes, servicesRes, productsRes] = await Promise.all([
        fetch("/api/cms/leads"),
        fetch("/api/cms/services"),
        fetch("/api/cms/products"),
      ]);

      if (leadsRes.ok) {
        const d = await leadsRes.json();
        setLeads(d.leads || []);
      }
      if (servicesRes.ok) {
        const d = await servicesRes.json();
        setServices(d.services || []);
      }
      if (productsRes.ok) {
        const d = await productsRes.json();
        setProducts(d.products || []);
      }
    } catch (e) {
      console.error("Error loading CMS data:", e);
    }
  }, []);

  useEffect(() => {
    checkAuth();
    loadData();
  }, [checkAuth, loadData]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const handleUpdateLeadStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch("/api/cms/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus as Lead["status"] } : l))
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;

    try {
      const res = await fetch("/api/cms/services", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingService),
      });
      if (res.ok) {
        setServices((prev) =>
          prev.map((s) => (s.id === editingService.id ? editingService : s))
        );
        setEditingService(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleTriggerRevalidate = async (path: string) => {
    setRevalidateMsg("Executing revalidation...");
    try {
      const res = await fetch("/api/cms/revalidate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path }),
      });
      const data = await res.json();
      setRevalidateMsg(data.message || "Cache revalidated.");
    } catch {
      setRevalidateMsg("Revalidation failed.");
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#040C18" }}>
        <div style={{ color: "var(--brand-orange-primary)", fontWeight: 700 }}>Loading CMS Console...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#030A14", color: "#F8FAFC", display: "flex", flexDirection: "column" }}>
      {/* Top Admin Bar */}
      <header
        style={{
          background: "rgba(10, 32, 60, 0.8)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: "blur(12px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <AdamasLogo variant="colored" size="sm" withLink={false} />
          <span
            style={{
              padding: "0.25rem 0.65rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(243, 111, 33, 0.15)",
              color: "var(--brand-orange-primary)",
              fontSize: "0.75rem",
              fontWeight: 700,
            }}
          >
            CMS Portal ({user?.role || "ADMIN"})
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ fontSize: "0.875rem", color: "var(--text-light-med)" }}>
            Signed in as <strong>{user?.name || user?.email}</strong>
          </span>
          <button
            onClick={handleLogout}
            className="btn-glass"
            style={{ padding: "0.45rem 1rem", fontSize: "0.8125rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main CMS Layout */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar Nav */}
        <aside
          style={{
            width: "260px",
            background: "#050F1E",
            borderRight: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "1.5rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <button
            onClick={() => setActiveTab("overview")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-md)",
              border: "none",
              background: activeTab === "overview" ? "rgba(24, 144, 215, 0.2)" : "transparent",
              color: activeTab === "overview" ? "#38BDF8" : "var(--text-light-med)",
              fontWeight: 600,
              fontSize: "0.875rem",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <ShieldCheck size={18} />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab("leads")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-md)",
              border: "none",
              background: activeTab === "leads" ? "rgba(24, 144, 215, 0.2)" : "transparent",
              color: activeTab === "leads" ? "#38BDF8" : "var(--text-light-med)",
              fontWeight: 600,
              fontSize: "0.875rem",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <Users size={18} />
            <span>Client Inquiries ({leads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("services")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-md)",
              border: "none",
              background: activeTab === "services" ? "rgba(24, 144, 215, 0.2)" : "transparent",
              color: activeTab === "services" ? "#38BDF8" : "var(--text-light-med)",
              fontWeight: 600,
              fontSize: "0.875rem",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <Layers size={18} />
            <span>Practice Areas</span>
          </button>

          <button
            onClick={() => setActiveTab("products")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-md)",
              border: "none",
              background: activeTab === "products" ? "rgba(24, 144, 215, 0.2)" : "transparent",
              color: activeTab === "products" ? "#38BDF8" : "var(--text-light-med)",
              fontWeight: 600,
              fontSize: "0.875rem",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <ShoppingBag size={18} />
            <span>Products</span>
          </button>

          <button
            onClick={() => setActiveTab("revalidate")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-md)",
              border: "none",
              background: activeTab === "revalidate" ? "rgba(24, 144, 215, 0.2)" : "transparent",
              color: activeTab === "revalidate" ? "#38BDF8" : "var(--text-light-med)",
              fontWeight: 600,
              fontSize: "0.875rem",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <RefreshCw size={18} />
            <span>ISR Cache Engine</span>
          </button>

          <div style={{ marginTop: "auto", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1rem" }}>
            <a
              href="/"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.8125rem",
                color: "var(--brand-orange-primary)",
                fontWeight: 600,
              }}
            >
              <span>View Live Website</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </aside>

        {/* Dashboard Content */}
        <main style={{ flex: 1, padding: "2.5rem 3rem", overflowY: "auto" }}>
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Enterprise CMS Console
              </h2>
              <p style={{ color: "var(--text-light-muted)", marginBottom: "2rem" }}>
                Manage published consulting practice areas, software platforms, client leads, and real-time ISR revalidations.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "3rem",
                }}
              >
                <div className="glass-card" style={{ padding: "1.5rem" }}>
                  <div style={{ color: "var(--text-light-muted)", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase" }}>
                    Client Inquiries
                  </div>
                  <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "var(--brand-orange-primary)", marginTop: "0.5rem" }}>
                    {leads.length}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-light-muted)", marginTop: "0.25rem" }}>
                    Active leads in database
                  </div>
                </div>

                <div className="glass-card" style={{ padding: "1.5rem" }}>
                  <div style={{ color: "var(--text-light-muted)", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase" }}>
                    Active Services
                  </div>
                  <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "#38BDF8", marginTop: "0.5rem" }}>
                    {services.length}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-light-muted)", marginTop: "0.25rem" }}>
                    Published practice areas
                  </div>
                </div>

                <div className="glass-card" style={{ padding: "1.5rem" }}>
                  <div style={{ color: "var(--text-light-muted)", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase" }}>
                    Proprietary Products
                  </div>
                  <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "#10B981", marginTop: "0.5rem" }}>
                    {products.length}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-light-muted)", marginTop: "0.25rem" }}>
                    Arivoo UMS/SMS/LMS & TestGUARD
                  </div>
                </div>

                <div className="glass-card" style={{ padding: "1.5rem" }}>
                  <div style={{ color: "var(--text-light-muted)", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase" }}>
                    Architecture Engine
                  </div>
                  <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#FFFFFF", marginTop: "0.75rem" }}>
                    Next.js + Prisma
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#38BDF8", marginTop: "0.25rem" }}>
                    PostgreSQL Verified
                  </div>
                </div>
              </div>

              {/* Quick Recent Leads */}
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
                Recent Consultation Requests
              </h3>
              {leads.length === 0 ? (
                <div className="glass-card" style={{ padding: "2rem", textAlign: "center", color: "var(--text-light-muted)" }}>
                  No client inquiries recorded yet. Test the contact form on the homepage!
                </div>
              ) : (
                <div className="glass-card" style={{ padding: "0" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)", background: "rgba(255, 255, 255, 0.03)" }}>
                        <th style={{ padding: "1rem", textAlign: "left" }}>Client</th>
                        <th style={{ padding: "1rem", textAlign: "left" }}>Email & Phone</th>
                        <th style={{ padding: "1rem", textAlign: "left" }}>Inquiry Message</th>
                        <th style={{ padding: "1rem", textAlign: "left" }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.slice(0, 5).map((lead) => (
                        <tr key={lead.id} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                          <td style={{ padding: "1rem", fontWeight: 600 }}>{lead.name}</td>
                          <td style={{ padding: "1rem", color: "var(--text-light-med)" }}>
                            <div>{lead.email}</div>
                            <div style={{ fontSize: "0.75rem", color: "var(--text-light-muted)" }}>{lead.phoneNumber || "No phone"}</div>
                          </td>
                          <td style={{ padding: "1rem", color: "var(--text-light-muted)", maxWidth: "300px" }}>
                            {lead.message.slice(0, 90)}...
                          </td>
                          <td style={{ padding: "1rem" }}>
                            <span
                              style={{
                                padding: "0.25rem 0.65rem",
                                borderRadius: "var(--radius-full)",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                background: lead.status === "NEW" ? "rgba(243, 111, 33, 0.2)" : "rgba(16, 185, 129, 0.2)",
                                color: lead.status === "NEW" ? "var(--brand-orange-primary)" : "#10B981",
                              }}
                            >
                              {lead.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: LEADS */}
          {activeTab === "leads" && (
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Client Leads & Consultations
              </h2>
              <p style={{ color: "var(--text-light-muted)", marginBottom: "2rem" }}>
                Real-time inquiries submitted via enterprise forms across the Adamas website.
              </p>

              {leads.length === 0 ? (
                <div className="glass-card" style={{ padding: "3rem", textAlign: "center" }}>
                  <p style={{ color: "var(--text-light-muted)" }}>No lead inquiries recorded yet.</p>
                </div>
              ) : (
                <div className="glass-card" style={{ padding: "0", overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)", background: "rgba(255, 255, 255, 0.03)" }}>
                        <th style={{ padding: "1rem", textAlign: "left" }}>Client</th>
                        <th style={{ padding: "1rem", textAlign: "left" }}>Contact Details</th>
                        <th style={{ padding: "1rem", textAlign: "left" }}>Country</th>
                        <th style={{ padding: "1rem", textAlign: "left" }}>Inquiry Message</th>
                        <th style={{ padding: "1rem", textAlign: "left" }}>Status Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((l) => (
                        <tr key={l.id} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                          <td style={{ padding: "1rem", fontWeight: 600 }}>{l.name}</td>
                          <td style={{ padding: "1rem" }}>
                            <div>{l.email}</div>
                            {l.phoneNumber && <div style={{ fontSize: "0.75rem", color: "var(--brand-blue-vibrant)" }}>{l.phoneNumber}</div>}
                          </td>
                          <td style={{ padding: "1rem", color: "var(--text-light-muted)" }}>{l.country || "Global"}</td>
                          <td style={{ padding: "1rem", color: "var(--text-light-med)", maxWidth: "340px" }}>
                            {l.message}
                          </td>
                          <td style={{ padding: "1rem" }}>
                            <select
                              value={l.status}
                              onChange={(e) => handleUpdateLeadStatus(l.id, e.target.value)}
                              className="form-select"
                              style={{ padding: "0.4rem 0.75rem", fontSize: "0.8125rem", width: "140px" }}
                            >
                              <option value="NEW">NEW</option>
                              <option value="CONTACTED">CONTACTED</option>
                              <option value="QUALIFIED">QUALIFIED</option>
                              <option value="ARCHIVED">ARCHIVED</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SERVICES */}
          {activeTab === "services" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div>
                  <h2 style={{ fontSize: "1.75rem", fontWeight: 800 }}>Practice Areas Manager</h2>
                  <p style={{ color: "var(--text-light-muted)" }}>
                    Update practice area positioning, feature bullet points, and live publication status.
                  </p>
                </div>
              </div>

              {/* Service Edit Modal / Drawer if editing */}
              {editingService && (
                <div
                  className="glass-card"
                  style={{
                    padding: "2rem",
                    marginBottom: "2rem",
                    border: "1px solid var(--brand-orange-primary)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF" }}>
                      Editing Practice: {editingService.title}
                    </h3>
                    <button
                      onClick={() => setEditingService(null)}
                      className="btn-glass"
                      style={{ padding: "0.35rem 0.65rem" }}
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <form onSubmit={handleSaveService}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div className="form-group">
                        <label className="form-label">Service Title</label>
                        <input
                          type="text"
                          value={editingService.title}
                          onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                          className="form-input"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Subtitle</label>
                        <input
                          type="text"
                          value={editingService.subtitle}
                          onChange={(e) => setEditingService({ ...editingService, subtitle: e.target.value })}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Short Description</label>
                      <textarea
                        rows={3}
                        value={editingService.shortDesc}
                        onChange={(e) => setEditingService({ ...editingService, shortDesc: e.target.value })}
                        className="form-textarea"
                        required
                      />
                    </div>

                    <div className="form-group" style={{ flexDirection: "row", alignItems: "center", gap: "0.75rem" }}>
                      <input
                        type="checkbox"
                        id="service-pub"
                        checked={editingService.isPublished}
                        onChange={(e) => setEditingService({ ...editingService, isPublished: e.target.checked })}
                        style={{ width: "18px", height: "18px", accentColor: "var(--brand-orange-primary)" }}
                      />
                      <label htmlFor="service-pub" style={{ color: "#FFFFFF", cursor: "pointer", fontSize: "0.875rem" }}>
                        Published publicly on live website
                      </label>
                    </div>

                    <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                      <button type="submit" className="btn btn-primary" style={{ padding: "0.75rem 1.75rem" }}>
                        <Save size={16} />
                        <span>Save & Regenerate ISR</span>
                      </button>
                      <button type="button" onClick={() => setEditingService(null)} className="btn btn-outline">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Services List Table */}
              <div className="glass-card" style={{ padding: "0", overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)", background: "rgba(255, 255, 255, 0.03)" }}>
                      <th style={{ padding: "1rem", textAlign: "left" }}>Practice Area</th>
                      <th style={{ padding: "1rem", textAlign: "left" }}>Category</th>
                      <th style={{ padding: "1rem", textAlign: "left" }}>Status</th>
                      <th style={{ padding: "1rem", textAlign: "left" }}>Slug</th>
                      <th style={{ padding: "1rem", textAlign: "right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((s) => (
                      <tr key={s.id} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                        <td style={{ padding: "1rem", fontWeight: 600 }}>{s.title}</td>
                        <td style={{ padding: "1rem", color: "var(--text-light-muted)" }}>{s.category}</td>
                        <td style={{ padding: "1rem" }}>
                          <span
                            style={{
                              padding: "0.2rem 0.55rem",
                              borderRadius: "var(--radius-full)",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              background: s.isPublished ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)",
                              color: s.isPublished ? "#10B981" : "#F87171",
                            }}
                          >
                            {s.isPublished ? "PUBLISHED" : "DRAFT"}
                          </span>
                        </td>
                        <td style={{ padding: "1rem", fontFamily: "var(--font-mono)", color: "var(--brand-blue-vibrant)", fontSize: "0.75rem" }}>
                          /services/{s.slug}
                        </td>
                        <td style={{ padding: "1rem", textAlign: "right" }}>
                          <button
                            onClick={() => setEditingService(s)}
                            className="btn-glass"
                            style={{ padding: "0.35rem 0.75rem", fontSize: "0.75rem", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}
                          >
                            <Edit size={12} />
                            <span>Edit</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: PRODUCTS */}
          {activeTab === "products" && (
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Proprietary Platforms Manager
              </h2>
              <p style={{ color: "var(--text-light-muted)", marginBottom: "2rem" }}>
                Arivoo UMS, Arivoo SMS, Arivoo LMS, and TestGUARD product positioning.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
                {products.map((p) => (
                  <div key={p.id} className="glass-card" style={{ padding: "1.75rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF" }}>{p.name}</h3>
                      <span
                        style={{
                          padding: "0.2rem 0.5rem",
                          borderRadius: "var(--radius-full)",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          background: p.isPublished ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)",
                          color: p.isPublished ? "#10B981" : "#F87171",
                        }}
                      >
                        {p.isPublished ? "ACTIVE" : "HIDDEN"}
                      </span>
                    </div>

                    <div style={{ fontSize: "0.8125rem", color: "var(--brand-orange-primary)", fontWeight: 600, marginBottom: "0.75rem" }}>
                      {p.tag}
                    </div>

                    <p style={{ fontSize: "0.875rem", color: "var(--text-light-muted)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                      {p.shortDesc}
                    </p>

                    <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1rem" }}>
                      <a
                        href={p.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontSize: "0.8125rem",
                          color: "var(--brand-blue-vibrant)",
                        }}
                      >
                        <span>{p.liveDemoUrl}</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: REVALIDATE */}
          {activeTab === "revalidate" && (
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Incremental Static Regeneration (ISR) Engine
              </h2>
              <p style={{ color: "var(--text-light-muted)", marginBottom: "2rem" }}>
                Purge static edge cache and regenerate pages instantaneously without deploying code.
              </p>

              <div className="glass-card" style={{ maxWidth: "600px", padding: "2rem" }}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "1rem" }}>
                  Target Route Revalidation
                </h3>

                <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <input
                    type="text"
                    value={revalidatePathInput}
                    onChange={(e) => setRevalidatePathInput(e.target.value)}
                    placeholder="/services"
                    className="form-input"
                  />
                  <button
                    onClick={() => handleTriggerRevalidate(revalidatePathInput)}
                    className="btn btn-primary"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <RefreshCw size={15} />
                    <span>Revalidate</span>
                  </button>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                  <button onClick={() => handleTriggerRevalidate("/")} className="btn-glass" style={{ fontSize: "0.8125rem", padding: "0.4rem 0.8rem" }}>
                    Revalidate Homepage (/)
                  </button>
                  <button onClick={() => handleTriggerRevalidate("/services")} className="btn-glass" style={{ fontSize: "0.8125rem", padding: "0.4rem 0.8rem" }}>
                    Revalidate Services (/services)
                  </button>
                  <button onClick={() => handleTriggerRevalidate("/products")} className="btn-glass" style={{ fontSize: "0.8125rem", padding: "0.4rem 0.8rem" }}>
                    Revalidate Products (/products)
                  </button>
                  <button onClick={() => handleTriggerRevalidate("/case-studies")} className="btn-glass" style={{ fontSize: "0.8125rem", padding: "0.4rem 0.8rem" }}>
                    Revalidate Case Studies (/case-studies)
                  </button>
                </div>

                {revalidateMsg && (
                  <div
                    style={{
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(24, 144, 215, 0.12)",
                      border: "1px solid rgba(24, 144, 215, 0.3)",
                      color: "#38BDF8",
                      fontSize: "0.875rem",
                    }}
                  >
                    {revalidateMsg}
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
