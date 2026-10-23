# Adamas Tech Consulting — Enterprise Redesign & Custom CMS

A cinematic, video-led enterprise technology consulting website and custom headless CMS built for **Adamas Tech Consulting**, combining the visual elevation and motion principles of modern digital leaders with Adamas's authentic brand heritage, certified practice areas (SAP, AWS, AI/ML, NetSuite, Open edX), proprietary products (Arivoo Suite, TestGUARD), and verifiable enterprise case studies.

---

## 1. Technology Stack

| Layer | Technology | Version / Configuration | Purpose |
|---|---|---|---|
| **Frontend Framework** | Next.js | `16.4.2` (App Router, Turbopack, React 19) | Modern React Server Components (RSC) and Client Components |
| **Language** | TypeScript | `5.x` (Strict mode) | Type-safe end-to-end contracts and interfaces |
| **Rendering Strategy** | SSR + ISR | Hybrid (ISR 60s + On-Demand Tag Revalidation) | Sub-second edge delivery with dynamic CMS updates |
| **Styling & Design System** | Vanilla CSS Tokens | `src/app/globals.css` | Zero-runtime CSS variables, dark elevation, WCAG 2.2 AA |
| **Backend & CMS** | Node.js Route Handlers | Next.js API Layer | Modular business logic, validation, audit logs, authentication |
| **ORM** | Prisma | `6.4.1` | Type-safe PostgreSQL schema, migrations, and seeding |
| **Database** | PostgreSQL | `v14+` / Hosted (Supabase, Neon, AWS RDS) | Normalized persistence with memory fallback for standalone dev |
| **Validation** | Zod | `3.24.x` | Runtime validation for lead intake and CMS API contracts |
| **Security & Auth** | JWT + bcryptjs | HTTP-only Cookies | Role-Based Access Control (`ADMIN`, `EDITOR`, `AUTHOR`) |
| **Icons & Motion** | Lucide React + Canvas | Interactive 2D Network Simulation | Visual hierarchy, lightweight interactive animations |

---

## 2. Architecture & Directory Structure

```
Adamastech-Web/
├── prisma/
│   ├── schema.prisma            # Normalized PostgreSQL data model (8 models)
│   └── migrations/              # Prisma migration versions
├── public/
│   ├── images/
│   │   ├── hero-poster.jpg      # Photorealistic 8K datacenter visual fallback
│   │   └── about-consulting.jpg # Enterprise executive boardroom visual
│   └── favicon.ico
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (public pages)
│   │   │   ├── page.tsx         # Homepage with video hero & 10 enterprise sections
│   │   │   ├── about-us/        # Heritage, ISO 9001/27001 & CMMI Level 3
│   │   │   ├── consulting/      # 5-step consulting journey & engagement models
│   │   │   ├── contact/         # Lead capture, global hubs directory & consultation
│   │   │   ├── services/        # 10 verified practice areas (SSR + ISR detail pages)
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── products/        # Arivoo UMS/SMS/LMS & TestGUARD
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── case-studies/    # Quantifiable results (30% cash forecasting, etc.)
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── industries/      # 7 enterprise verticals (Retail, Education, etc.)
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── terms-of-use/    # Enterprise legal terms
│   │   │   └── privacy-policy/  # GDPR & international data compliance
│   │   ├── admin/               # Custom CMS Portal
│   │   │   ├── login/page.tsx   # Secured authentication gateway
│   │   │   └── page.tsx         # Operations dashboard: Leads, Services, Products, ISR
│   │   ├── api/                 # Node.js API Endpoints
│   │   │   ├── auth/            # login, logout, me (JWT HTTP-only cookies)
│   │   │   ├── cms/             # services, products, leads, revalidate (ISR)
│   │   │   └── leads/           # Public intake with anti-spam honeypot
│   │   ├── globals.css          # Design system, CSS tokens, animations
│   │   └── layout.tsx           # Global HTML, Navbar, Footer, SEO JSON-LD
│   ├── components/
│   │   ├── common/              # AdamasLogo SVG, proof badges, buttons
│   │   ├── hero/                # HeroVideoBackground (Video + Canvas + Fallback)
│   │   ├── home/                # Modular homepage section components
│   │   └── layout/              # Navbar (with mobile drawer) and Footer
│   └── lib/
│       ├── auth.ts              # JWT signing, verification, and bcrypt hashing
│       ├── db.ts                # PrismaClient singleton with resilient offline fallback
│       └── data/initialData.ts  # 100% authentic seed dataset from live audit
├── scripts/
│   ├── seed.mjs                 # PostgreSQL database seeder
│   └── test-endpoints.mjs       # Automated end-to-end route & API verification suite
├── .env.example                 # Environment configuration template
└── next.config.ts               # Next.js production build configuration
```

---

## 3. Brand Identity & Design System

Derived directly from the verified brand guidelines of **Adamas Tech Consulting**:

* **Sapphire Blue (`#0066B3` / `#0A3B74`)**: Primary brand wordmark, corporate authority, and structural chrome.
* **Solar Orange (`#F36F21` / `#FF7A1A`)**: Consulting designation, high-priority interactive conversion CTAs, and active metric highlights.
* **Deep Space Elevation (`#070F1E` / `#0D192E` / `#132238`)**: Cinematic dark backdrop inspired by CodeAegis, delivering superior visual contrast without eye strain.
* **Precision Typography**: Clean, legible modern sans-serif hierarchy with fluid responsive font scales (`clamp(...)`).
* **Accessibility**: Strict WCAG 2.2 AA contrast ratios, visible focus rings, keyboard navigability, and native `prefers-reduced-motion` compliance.

---

## 4. Cinematic 3D Motion Hero Engineering

The Hero Banner serves as the interactive 3D centerpiece of the website:
1. **Interactive 3D Adamas Crystal Polyhedron**: A WebGL 3D faceted diamond core (representing *Adamas* — unbreakable diamond) rendered using Three.js with refractive sapphire blue (`#0A3B74`) materials, glowing outer wireframe lattice (`#38BDF8`), and sparkling solar orange (`#F36F21`) vertices.
2. **Cybernetic Orbital Tech Torus Rings**: Three counter-rotating orbital rings (Sapphire, Solar Orange, and Cyan) operating with independent rotational velocities and spatial inclinations.
3. **Volumetric Deep-Data Particle Cosmos**: 1,400+ 3D depth particles distributed in a spherical volume with depth-of-field fog (`FogExp2`) and gentle orbital drift.
4. **Interactive 3D Mouse Parallax & Spatial Tilt**: Real-time cursor tracking smoothly dampens and tilts the 3D perspective camera (`targetCameraX` / `targetCameraY` with soft lerping) to create an immersive feeling of physical depth.
5. **Interactive HUD Telemetry Badges**: Floating spatial status chips ("AI/ML Intelligent Core", "SAP & AWS Multi-Cloud", "Master Data Governance").
6. **Graceful Fallbacks & Accessibility**:
   - High-definition 8K photorealistic cloud architecture poster fallback if WebGL is unsupported.
   - Accessible **Pause/Resume 3D** control button honoring `prefers-reduced-motion`.
   - Zero layout shifts (`CLS = 0`) during WebGL initialization.

---

## 5. Custom CMS & Security Architecture

### Role-Based Access Control (RBAC)
* **ADMIN**: Full control over CMS configuration, user management, publishing, lead lifecycle, and ISR cache revalidation.
* **EDITOR**: Content authoring, editing practice areas, products, and publishing.
* **AUTHOR**: Draft creation and editing.

### Default Development Credentials
* **Email:** `admin@adamastechconsulting.com`
* **Password:** `AdamasSuperSecure2026!`

### On-Demand Incremental Static Regeneration (ISR)
When an administrator edits a service or product in the CMS and clicks **Save & Publish**, the backend executes:
```typescript
revalidatePath('/services');
revalidatePath(`/services/${slug}`);
```
This purges the static edge cache instantly, providing instant updates to visitors while maintaining maximum cache-hit speed.

### Lead Ingestion & Anti-Spam Protection
Public lead capture includes:
1. **Server-Side Zod Validation**: Validates full name, business email format, country, and inquiry length.
2. **Honeypot Shield (`hp_company`)**: An invisible form field trapped for automated crawlers. If populated, the system silently discards the payload with a synthetic success response, mitigating bot spam without annoying Captchas.
3. **Database Persistence**: Inquiries are saved with timestamp, IP address, and status (`NEW`, `CONTACTED`, `QUALIFIED`, `ARCHIVED`).

---

## 6. Local Setup & Execution Guide

### Prerequisites
* Node.js `v18.17+` (Tested on Node.js `v20+` and `v26+`)
* npm `v9+`
* PostgreSQL `v14+` (Optional for local development; built-in memory fallback ensures 100% uptime if offline)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Environment Configuration
Copy the sample environment file:
```bash
cp .env.example .env
```
Update `.env` with your PostgreSQL connection string and a secure JWT secret:
```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/adamastech_db?schema=public"
JWT_SECRET="your-ultra-secure-jwt-secret-key-at-least-32-chars"
```

### Step 3: Database Migration & Seeding
Generate Prisma Client:
```bash
npx prisma generate
```
Apply migrations:
```bash
npx prisma migrate dev --name init
```
Seed the database with authentic content:
```bash
npm run db:seed
```

### Step 4: Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 5: Run Production Build & Verification Tests
To compile the production build:
```bash
npm run build
```
To run the automated verification test suite:
```bash
node scripts/test-endpoints.mjs
```

---

## 7. Phased Delivery Scope

| Phase | Milestone | Deliverables | Status |
|---|---|---|---|
| **Phase 1** | **Discovery & Brand Architecture** | Audit of live site & CodeAegis reference; content inventory; PostgreSQL schema design; brand tokens (`#0066B3` / `#F36F21`). | **Complete** |
| **Phase 2** | **Full-Stack Core & Data Layer** | Next.js 16 App Router setup; Prisma ORM with 8 normalized models; offline memory fallback; JWT authentication system. | **Complete** |
| **Phase 3** | **Cinematic Hero & Public Experience** | Video hero with interactive canvas particles and accessible controls; 10 homepage sections; dynamic detail pages for all Services, Products, Case Studies, and Industries. | **Complete** |
| **Phase 4** | **Custom CMS & Admin Dashboard** | Headless CMS portal (`/admin`); lead management with status updater; live Service/Product editor; on-demand ISR revalidation engine. | **Complete** |
| **Phase 5** | **Hardening, QA & Handoff** | Production build optimization (`npm run build`); end-to-end API verification suite (`scripts/test-endpoints.mjs`); comprehensive documentation. | **Complete** |

---

## 8. Production Deployment & Handoff Checklist

### Deploying to Vercel
1. Push this repository to GitHub/GitLab.
2. Import the project into Vercel.
3. Configure the following environment variables in Vercel Project Settings:
   - `DATABASE_URL`: Your production PostgreSQL connection pool URL (e.g. Neon, Supabase, AWS RDS).
   - `DIRECT_URL`: Direct PostgreSQL connection string for Prisma migrations.
   - `JWT_SECRET`: High-entropy 64-character secret.
   - `NEXT_PUBLIC_SITE_URL`: `https://adamastechconsulting.com`
4. Deploy. Vercel automatically runs `prisma generate` and `next build`.

### Self-Hosted / Docker Deployment
Run:
```bash
npm run build
npm run start -- -p 3000
```
Or containerize with a multi-stage Dockerfile utilizing `node:20-alpine`.

---

© 2026 Adamas Tech Consulting. All rights reserved. Certified ISO 9001, ISO 27001, CMMI Level 3.
