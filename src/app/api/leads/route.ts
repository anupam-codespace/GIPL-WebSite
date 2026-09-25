import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      fullName,
      email,
      workEmail,
      emailId,
      phone,
      phoneNumber,
      subject,
      brief,
      message,
      notes,
      projectBrief,
      budget,
      budgetBracket,
      budgetRange,
      company,
      companyName,
      objective,
      scope,
      timeline,
      ndaRequested,
      source,
      pageName,
      pageSection,
      leadType,
      freightMode,
      originDestination,
      productCategory,
      orderQuantity,
      tradeDirection,
      commodity,
      volume,
    } = body;

    const leadName = (fullName || name || "").trim();
    const leadEmail = (workEmail || emailId || email || "").trim();
    const leadPhone = (phoneNumber || phone || "").trim();
    const leadMessage = (message || notes || brief || projectBrief || "").trim();
    const leadBudget = (budgetBracket || budgetRange || budget || "Flexible / Not specified").trim();
    const leadCompany = (companyName || company || "Direct Client / Individual").trim();

    // Basic Validation
    if (!leadName || !leadEmail) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Determine target category: "vertical" (Allied Verticals) or "general" (Let's discuss your project / Consultation / Proposal)
    const isVertical =
      leadType === "vertical" ||
      source === "em_fashion_brand_page" ||
      source === "freight_logistics_page" ||
      source === "leather_manufacturing_page" ||
      source === "import_export_page";

    const resolvedLeadType = isVertical ? "vertical" : "general";

    // Format IST Date & Time
    const now = new Date();
    const istTimestamp = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }).format(now);

    // Specific Vertical Details
    const specificDetails =
      freightMode ? `Mode: ${freightMode} | Route: ${originDestination || "N/A"}`
      : productCategory ? `Category: ${productCategory} | Qty: ${orderQuantity || "N/A"}`
      : tradeDirection ? `Direction: ${tradeDirection} | Commodity: ${commodity || "N/A"} | Vol: ${volume || "N/A"}`
      : isVertical ? "Brand Partnership / Venture Advisory"
      : "";

    // Lead Record
    const leadRecord = {
      id: `lead_${Date.now()}`,
      timestamp: istTimestamp,
      leadType: resolvedLeadType,
      targetSheet: isVertical ? "Allied Verticals" : "General Inquiries",
      contactName: leadName,
      contactEmail: leadEmail,
      phoneNumber: leadPhone || "Not provided",
      companyName: leadCompany,
      pageName: pageName || (isVertical ? "Allied Venture Page" : "Globizhub Website"),
      pageSection: pageSection || (isVertical ? "Allied Verticals" : "Let's discuss your project"),
      subject: subject || (isVertical ? "Vertical Inquiry" : "Project Inquiry"),
      specificDetails: specificDetails || "N/A",
      budgetRange: leadBudget,
      message: leadMessage || "No additional message provided.",
      ndaRequested: Boolean(ndaRequested) ? "Yes" : "No",
      source: source || "website_form",
      status: "New",
      createdAt: now.toISOString(),
    };

    console.log(`[LEAD_CAPTURE] New lead received (${leadRecord.targetSheet}):`, leadRecord);

    // Forward to Google Sheet Webhook if configured
    let googleSheetSynced = false;
    let googleSheetError = null;

    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 7000); // 7s timeout

        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadRecord),
          redirect: "follow", // Important for Google Apps Script Web App 302 redirects
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (webhookResponse.ok) {
          googleSheetSynced = true;
          console.log(`[LEAD_CAPTURE] Successfully synced lead to Google Sheet tab: ${leadRecord.targetSheet}`);
        } else {
          const errText = await webhookResponse.text();
          console.warn("[LEAD_CAPTURE] Google Sheet webhook responded with status:", webhookResponse.status, errText);
          googleSheetError = `Webhook status ${webhookResponse.status}`;
        }
      } catch (err: any) {
        console.warn("[LEAD_CAPTURE] Google Sheet webhook dispatch failed (lead still recorded safely):", err?.message || err);
        googleSheetError = err?.message || "Webhook network failure";
      }
    } else {
      console.info("[LEAD_CAPTURE] GOOGLE_SHEETS_WEBHOOK_URL is not set. To sync leads to Google Sheets, configure GOOGLE_SHEETS_WEBHOOK_URL in environment variables.");
    }

    return NextResponse.json({
      success: true,
      message: "Lead inquiry successfully recorded.",
      targetSheet: leadRecord.targetSheet,
      googleSheetSynced,
      googleSheetConfigured: Boolean(webhookUrl),
      googleSheetError,
      lead: leadRecord,
    });
  } catch (error: any) {
    console.error("Failed to process lead inquiry:", error);
    return NextResponse.json(
      { error: "Internal server error while processing inquiry." },
      { status: 500 }
    );
  }
}
