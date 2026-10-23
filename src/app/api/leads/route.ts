import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createContactLead } from "@/lib/db";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid business email address"),
  phoneNumber: z.string().max(40).optional(),
  country: z.string().max(80).optional(),
  message: z.string().min(10, "Please provide at least 10 characters describing your inquiry").max(3000),
  termsAccepted: z.boolean().refine((val) => val === true, "Terms must be accepted"),
  hp_company: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Anti-spam honeypot detection
    if (body.hp_company && body.hp_company.trim().length > 0) {
      // Bot detected - return fake 200 to neutralize bot retry loops
      return NextResponse.json({ success: true, message: "Inquiry processed" }, { status: 200 });
    }

    // 2. Validate input
    const parseResult = leadSchema.safeParse(body);
    if (!parseResult.success) {
      const errorMsg = parseResult.error.issues[0]?.message || "Validation failed";
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const validData = parseResult.data;

    // 3. Extract IP if available
    const ipAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    // 4. Persist to PostgreSQL / Data layer
    const lead = await createContactLead({
      name: validData.name,
      email: validData.email,
      phoneNumber: validData.phoneNumber,
      country: validData.country,
      message: validData.message,
      termsAccepted: validData.termsAccepted,
      ipAddress,
    });

    // 5. Integration boundary notification log
    console.log(`[LEAD INGESTION] New inquiry from ${validData.name} (${validData.email}), Lead ID: ${lead.id}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been successfully received by Adamas Tech Consulting.",
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API_LEADS_ERROR]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred processing your consultation request." },
      { status: 500 }
    );
  }
}
