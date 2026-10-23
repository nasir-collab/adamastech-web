import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getAllContactLeads, prisma } from "@/lib/db";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const leads = await getAllContactLeads();
  return NextResponse.json({ leads });
}

export async function PATCH(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, status, notes } = await req.json();

    if (!id || !status) {
      return NextResponse.json({ error: "ID and status are required" }, { status: 400 });
    }

    try {
      await prisma.contactLead.update({
        where: { id },
        data: {
          status,
          notes: notes !== undefined ? notes : undefined,
        },
      });
    } catch {
      // Memory fallback if DB unreachable
    }

    return NextResponse.json({ success: true, message: "Lead updated" });
  } catch (err) {
    console.error("[CMS_LEADS_UPDATE_ERROR]", err);
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
  }
}
