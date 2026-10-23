import { PrismaClient } from "@prisma/client";
import {
  INITIAL_SERVICES,
  INITIAL_PRODUCTS,
  INITIAL_CASE_STUDIES,
  INITIAL_INDUSTRIES,
  InitialService,
  InitialProduct,
  InitialCaseStudy,
  InitialIndustry
} from "./data/initialData";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// In-memory fallbacks for dynamic items when database is unreachable
interface InMemLead {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  country?: string;
  message: string;
  termsAccepted: boolean;
  status: "NEW" | "CONTACTED" | "QUALIFIED" | "ARCHIVED";
  createdAt: Date;
}

const memoryLeads: InMemLead[] = [];
let memoryServices: InitialService[] = [...INITIAL_SERVICES];
let memoryProducts: InitialProduct[] = [...INITIAL_PRODUCTS];
let memoryCaseStudies: InitialCaseStudy[] = [...INITIAL_CASE_STUDIES];
let memoryIndustries: InitialIndustry[] = [...INITIAL_INDUSTRIES];

// Helper to safely execute database queries with automatic verified fallback
export async function getPublishedServices(): Promise<InitialService[]> {
  try {
    const services = await prisma.service.findMany({
      where: { isPublished: true },
      orderBy: { order: "asc" },
    });
    if (services && services.length > 0) {
      return services.map((s) => ({
        id: s.id,
        slug: s.slug,
        title: s.title,
        subtitle: s.subtitle || "",
        shortDesc: s.shortDesc,
        fullDesc: s.fullDesc,
        category: s.category,
        iconName: s.iconName || "Layers",
        bannerUrl: s.bannerUrl || "",
        features: JSON.parse(s.features || "[]"),
        order: s.order,
        isPublished: s.isPublished,
      }));
    }
  } catch {
    // Database offline or unseeded: Return authentic verified fallback
  }
  return memoryServices.filter((s) => s.isPublished);
}

export async function getServiceBySlug(slug: string): Promise<InitialService | null> {
  try {
    const s = await prisma.service.findUnique({
      where: { slug },
    });
    if (s) {
      return {
        id: s.id,
        slug: s.slug,
        title: s.title,
        subtitle: s.subtitle || "",
        shortDesc: s.shortDesc,
        fullDesc: s.fullDesc,
        category: s.category,
        iconName: s.iconName || "Layers",
        bannerUrl: s.bannerUrl || "",
        features: JSON.parse(s.features || "[]"),
        order: s.order,
        isPublished: s.isPublished,
      };
    }
  } catch {
    // Database offline: Fall back to memory
  }
  return memoryServices.find((s) => s.slug === slug) || null;
}

export async function getPublishedProducts(): Promise<InitialProduct[]> {
  try {
    const products = await prisma.product.findMany({
      where: { isPublished: true },
      orderBy: { order: "asc" },
    });
    if (products && products.length > 0) {
      return products.map((p) => ({
        id: p.id,
        slug: p.slug,
        name: p.name,
        tag: p.tag || "",
        shortDesc: p.shortDesc,
        fullDesc: p.fullDesc,
        targetAudience: p.targetAudience || "",
        keyBenefits: JSON.parse(p.keyBenefits || "[]"),
        liveDemoUrl: p.liveDemoUrl || "",
        order: p.order,
        isPublished: p.isPublished,
      }));
    }
  } catch {
    // fallback
  }
  return memoryProducts.filter((p) => p.isPublished);
}

export async function getProductBySlug(slug: string): Promise<InitialProduct | null> {
  try {
    const p = await prisma.product.findUnique({
      where: { slug },
    });
    if (p) {
      return {
        id: p.id,
        slug: p.slug,
        name: p.name,
        tag: p.tag || "",
        shortDesc: p.shortDesc,
        fullDesc: p.fullDesc,
        targetAudience: p.targetAudience || "",
        keyBenefits: JSON.parse(p.keyBenefits || "[]"),
        liveDemoUrl: p.liveDemoUrl || "",
        order: p.order,
        isPublished: p.isPublished,
      };
    }
  } catch {
    // fallback
  }
  return memoryProducts.find((p) => p.slug === slug) || null;
}

export async function getPublishedCaseStudies(): Promise<InitialCaseStudy[]> {
  try {
    const studies = await prisma.caseStudy.findMany({
      where: { isPublished: true },
      orderBy: { order: "asc" },
    });
    if (studies && studies.length > 0) {
      return studies.map((c) => ({
        id: c.id,
        slug: c.slug,
        title: c.title,
        clientName: c.clientName,
        industry: c.industry,
        challenge: c.challenge,
        solution: c.solution,
        results: c.results,
        metrics: JSON.parse(c.metrics || "[]"),
        imageUrl: c.imageUrl || "",
        tags: c.tags.split(",").map((t) => t.trim()),
        isFeatured: c.isFeatured,
        order: c.order,
        isPublished: c.isPublished,
      }));
    }
  } catch {
    // fallback
  }
  return memoryCaseStudies.filter((c) => c.isPublished);
}

export async function getCaseStudyBySlug(slug: string): Promise<InitialCaseStudy | null> {
  try {
    const c = await prisma.caseStudy.findUnique({
      where: { slug },
    });
    if (c) {
      return {
        id: c.id,
        slug: c.slug,
        title: c.title,
        clientName: c.clientName,
        industry: c.industry,
        challenge: c.challenge,
        solution: c.solution,
        results: c.results,
        metrics: JSON.parse(c.metrics || "[]"),
        imageUrl: c.imageUrl || "",
        tags: c.tags.split(",").map((t) => t.trim()),
        isFeatured: c.isFeatured,
        order: c.order,
        isPublished: c.isPublished,
      };
    }
  } catch {
    // fallback
  }
  return memoryCaseStudies.find((c) => c.slug === slug) || null;
}

export async function getPublishedIndustries(): Promise<InitialIndustry[]> {
  try {
    const industries = await prisma.industry.findMany({
      where: { isPublished: true },
      orderBy: { order: "asc" },
    });
    if (industries && industries.length > 0) {
      return industries.map((i) => ({
        id: i.id,
        slug: i.slug,
        name: i.name,
        title: i.title,
        description: i.description,
        iconName: i.iconName || "Activity",
        imageUrl: i.imageUrl || "",
        keySolutions: JSON.parse(i.keySolutions || "[]"),
        order: i.order,
        isPublished: i.isPublished,
      }));
    }
  } catch {
    // fallback
  }
  return memoryIndustries.filter((i) => i.isPublished);
}

export async function getIndustryBySlug(slug: string): Promise<InitialIndustry | null> {
  try {
    const i = await prisma.industry.findUnique({
      where: { slug },
    });
    if (i) {
      return {
        id: i.id,
        slug: i.slug,
        name: i.name,
        title: i.title,
        description: i.description,
        iconName: i.iconName || "Activity",
        imageUrl: i.imageUrl || "",
        keySolutions: JSON.parse(i.keySolutions || "[]"),
        order: i.order,
        isPublished: i.isPublished,
      };
    }
  } catch {
    // fallback
  }
  return memoryIndustries.find((i) => i.slug === slug) || null;
}

// Contact leads workflow
export async function createContactLead(data: {
  name: string;
  email: string;
  phoneNumber?: string;
  country?: string;
  message: string;
  termsAccepted: boolean;
  ipAddress?: string;
}) {
  try {
    const lead = await prisma.contactLead.create({
      data: {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber || null,
        country: data.country || null,
        message: data.message,
        termsAccepted: data.termsAccepted,
        ipAddress: data.ipAddress || null,
      },
    });
    return lead;
  } catch {
    // Save to memory store if database not active
    const memLead: InMemLead = {
      id: "lead-" + Date.now(),
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      country: data.country,
      message: data.message,
      termsAccepted: data.termsAccepted,
      status: "NEW",
      createdAt: new Date(),
    };
    memoryLeads.unshift(memLead);
    return memLead;
  }
}

export async function getAllContactLeads() {
  try {
    const leads = await prisma.contactLead.findMany({
      orderBy: { createdAt: "desc" },
    });
    if (leads && leads.length > 0) return leads;
  } catch {
    // fallback
  }
  return memoryLeads;
}

// Memory mutators for CMS operations when DB is in memory mode
export function updateMemoryService(id: string, updated: Partial<InitialService>) {
  memoryServices = memoryServices.map((s) => (s.id === id ? { ...s, ...updated } : s));
  return memoryServices.find((s) => s.id === id);
}

export function updateMemoryProduct(id: string, updated: Partial<InitialProduct>) {
  memoryProducts = memoryProducts.map((p) => (p.id === id ? { ...p, ...updated } : p));
  return memoryProducts.find((p) => p.id === id);
}

export function updateMemoryCaseStudy(id: string, updated: Partial<InitialCaseStudy>) {
  memoryCaseStudies = memoryCaseStudies.map((c) => (c.id === id ? { ...c, ...updated } : c));
  return memoryCaseStudies.find((c) => c.id === id);
}
