import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getPublishedServices, updateMemoryService, prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const services = await getPublishedServices();
  return NextResponse.json({ services });
}

export async function PUT(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();
    const { id, title, subtitle, shortDesc, isPublished, features } = data;

    if (!id) {
      return NextResponse.json({ error: "Service ID required" }, { status: 400 });
    }

    // Try DB update
    try {
      await prisma.service.update({
        where: { id },
        data: {
          title,
          subtitle,
          shortDesc,
          isPublished,
          features: typeof features === "string" ? features : JSON.stringify(features),
        },
      });
    } catch {
      // Memory update
      updateMemoryService(id, {
        title,
        subtitle,
        shortDesc,
        isPublished,
        features: Array.isArray(features) ? features : [],
      });
    }

    // Trigger on-demand ISR revalidation for services
    revalidatePath("/services");
    revalidatePath("/");

    return NextResponse.json({ success: true, message: "Service updated successfully" });
  } catch (err) {
    console.error("[CMS_SERVICES_UPDATE_ERROR]", err);
    return NextResponse.json({ error: "Failed to update service" }, { status: 500 });
  }
}
