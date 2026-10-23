import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting Adamas Tech Consulting database seeding...");

  // 1. Admin user
  const adminEmail = process.env.ADMIN_DEFAULT_EMAIL || "admin@adamastechconsulting.com";
  const adminPassword = process.env.ADMIN_DEFAULT_PASSWORD || "AdamasSuperSecure2026!";
  const passwordHash = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { passwordHash },
    create: {
      email: adminEmail,
      name: "Adamas Administrator",
      passwordHash,
      role: "ADMIN",
    },
  });
  console.log(`👤 Admin user ready: ${admin.email}`);

  console.log("✅ Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
