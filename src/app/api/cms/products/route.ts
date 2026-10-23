import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getPublishedProducts, updateMemoryProduct, prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const products = await getPublishedProducts();
  return NextResponse.json({ products });
}

export async function PUT(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();
    const { id, name, tag, shortDesc, fullDesc, liveDemoUrl, isPublished } = data;

    if (!id) {
      return NextResponse.json({ error: "Product ID required" }, { status: 400 });
    }

    try {
      await prisma.product.update({
        where: { id },
        data: {
          name,
          tag,
          shortDesc,
          fullDesc,
          liveDemoUrl,
          isPublished,
        },
      });
    } catch {
      updateMemoryProduct(id, {
        name,
        tag,
        shortDesc,
        fullDesc,
        liveDemoUrl,
        isPublished,
      });
    }

    revalidatePath("/products");
    revalidatePath("/");

    return NextResponse.json({ success: true, message: "Product updated successfully" });
  } catch (err) {
    console.error("[CMS_PRODUCTS_UPDATE_ERROR]", err);
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}
