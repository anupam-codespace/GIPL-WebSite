import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { objective, scope, budget, timeline, name, email, company, phone, brief } = body;

    // Validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    // In a production environment with DB connection:
    // await db.insert(leads).values({ contactName: name, contactEmail: email, companyName: company, ... });

    // Simulated lead processing and notification trigger
    const leadRecord = {
      id: `lead_${Date.now()}`,
      contactName: name,
      contactEmail: email,
      companyName: company,
      phoneNumber: phone || null,
      objective: objective || "Not specified",
      scope: scope || "Not specified",
      budgetRange: budget || "Not specified",
      timeline: timeline || "Not specified",
      projectBrief: brief || null,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: "Lead brief successfully recorded and assigned to Solutions Architect.",
      lead: leadRecord,
    });
  } catch (error) {
    console.error("Failed to process proposal lead:", error);
    return NextResponse.json(
      { error: "Internal server error while processing proposal." },
      { status: 500 }
    );
  }
}
