import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      fullName,
      email,
      workEmail,
      phone,
      phoneNumber,
      subject,
      brief,
      message,
      projectBrief,
      budget,
      budgetRange,
      company,
      companyName,
      objective,
      scope,
      timeline,
      ndaRequested,
      source,
    } = body;

    const leadName = (fullName || name || "").trim();
    const leadEmail = (workEmail || email || "").trim();
    const leadPhone = (phoneNumber || phone || "").trim();
    const leadMessage = (message || brief || projectBrief || "").trim();
    const leadBudget = (budgetRange || budget || "Flexible / Not specified").trim();

    // Validation
    if (!leadName || !leadEmail) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Lead record construction
    const leadRecord = {
      id: `lead_${Date.now()}`,
      contactName: leadName,
      contactEmail: leadEmail,
      phoneNumber: leadPhone || null,
      companyName: companyName || company || "Direct Client",
      subject: subject || "Project Inquiry",
      budgetRange: leadBudget,
      projectBrief: leadMessage || null,
      ndaRequested: Boolean(ndaRequested),
      objective: objective || "Consultation Request",
      scope: scope || "Not specified",
      timeline: timeline || "Immediate / Flexible",
      source: source || "consultation_modal",
      status: "new",
      createdAt: new Date().toISOString(),
    };

    console.log("[LEAD_CAPTURE] New lead recorded:", leadRecord);

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
