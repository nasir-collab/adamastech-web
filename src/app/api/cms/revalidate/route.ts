import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { path } = await req.json();
    const targetPath = path || "/";

    revalidatePath(targetPath);
    console.log(`[ISR_REVALIDATE] Path ${targetPath} purged and queued for regeneration by ${user.name}`);

    return NextResponse.json({
      success: true,
      message: `Path ${targetPath} revalidated successfully via Incremental Static Regeneration.`,
    });
  } catch (err) {
    console.error("[ISR_REVALIDATE_ERROR]", err);
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}
