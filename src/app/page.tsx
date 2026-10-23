import React from "react";
import {
  getPublishedServices,
  getPublishedCaseStudies,
  getPublishedIndustries,
} from "@/lib/db";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientsSliderSection } from "@/components/home/ClientsSliderSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ConsultingJourneySection } from "@/components/home/ConsultingJourneySection";
import { TechExcellenceSection } from "@/components/home/TechExcellenceSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { GlobalPresenceSection } from "@/components/home/GlobalPresenceSection";
import { LeadGenerationSection } from "@/components/home/LeadGenerationSection";

// Incremental Static Regeneration (ISR) interval in seconds
export const revalidate = 60;

export default async function HomePage() {
  const [services, caseStudies, industries] = await Promise.all([
    getPublishedServices(),
    getPublishedCaseStudies(),
    getPublishedIndustries(),
  ]);

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Adamas Tech Consulting",
    url: "https://adamastechconsulting.com",
    logo: "https://adamastechconsulting.com/images/hero-poster.jpg",
    description: "Enterprise IT Consultancy & Digital Transformation Partner",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+44 7768 706988",
        contactType: "customer service",
        areaServed: ["GB", "US", "AE", "IN"],
        availableLanguage: ["English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Golden Cross House, 8 Duncannon Street",
      addressLocality: "London",
      postalCode: "WC2N 4JF",
      addressCountry: "GB",
    },
    sameAs: [
      "https://www.linkedin.com/company/adamas-tech-consulting/",
      "https://www.facebook.com/AdamasTechConsulting/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />
      <ClientsSliderSection />
      <ServicesSection services={services} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <PartnersSection />
      <IndustriesSection industries={industries} />
      <ConsultingJourneySection />
      <TechExcellenceSection />
      <GlobalPresenceSection />
      <LeadGenerationSection />
    </>
  );
}
