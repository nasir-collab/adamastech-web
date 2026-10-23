import React from "react";
import type { Metadata } from "next";
import {
  getPublishedServices,
  getPublishedCaseStudies,
  getPublishedIndustries,
} from "@/lib/db";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustProofStrip } from "@/components/home/TrustProofStrip";
import { CapabilityPillarsSection } from "@/components/home/CapabilityPillarsSection";
import { BusinessOutcomesSection } from "@/components/home/BusinessOutcomesSection";
import { SolutionsSpotlightSection } from "@/components/home/SolutionsSpotlightSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { WhyAdamasTechSection } from "@/components/home/WhyAdamasTechSection";
import { EventsSpotlightSection } from "@/components/home/EventsSpotlightSection";
import { FinalCtaBandSection } from "@/components/home/FinalCtaBandSection";

export const metadata: Metadata = {
  title: "Enterprise Web & Cloud Solutions | Adamas Tech Consulting",
  description:
    "Enterprise-grade digital transformation, high-performance cloud architecture, SAP consulting, AI/ML analytics, and next-generation web platforms.",
};

// Incremental Static Regeneration (ISR) interval in seconds
export const revalidate = 60;

export default async function WebPage() {
  const [services, caseStudies, industries] = await Promise.all([
    getPublishedServices(),
    getPublishedCaseStudies(),
    getPublishedIndustries(),
  ]);

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Enterprise Web & Cloud Solutions",
    url: "https://adamastechconsulting.com/web",
    description: "Enterprise IT Consultancy & Digital Transformation Partner",
    publisher: {
      "@type": "Organization",
      name: "Adamas Tech Consulting",
      url: "https://adamastechconsulting.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero: Outcome-Led & Region-Aware */}
      <HeroSection />

      {/* 2. Trust / Proof Strip: De-Risk Early (Stats, Certifications & Clients) */}
      <TrustProofStrip />

      {/* 3. Capability Pillars: 3 Core Pillars (Cloud, Transformation, AI) */}
      <CapabilityPillarsSection />

      {/* 4. Business Outcomes: Shift Services -> Value (Problems Solved & Metrics) */}
      <BusinessOutcomesSection />

      {/* 5. Solutions / Products Spotlight: Arivoo Suite & AI IP */}
      <SolutionsSpotlightSection />

      {/* 6. Industries Strip: Instant Relevance Across Vertical Sectors */}
      <IndustriesSection industries={industries} />

      {/* 7. Case Studies: Metric-Forward Delivery Proof */}
      <CaseStudiesSection caseStudies={caseStudies} />

      {/* 8. Why AdamasTech: RICE Adamas Backing, 4-Country Delivery, Senior-Led */}
      <WhyAdamasTechSection />

      {/* 9. Events Spotlight: House of Lords 26 Nov Executive Summit */}
      <EventsSpotlightSection />

      {/* 10. Final CTA Band: Low-Friction Enquiry Routing & Expert Scoping */}
      <FinalCtaBandSection />
    </>
  );
}
