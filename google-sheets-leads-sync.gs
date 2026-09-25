/**
 * ============================================================================
 * GLOBIZHUB INDIA PRIVATE LIMITED - MASTER LEADS SYNC SCRIPT
 * ============================================================================
 * Instructions:
 * 1. Open your Google Sheet (e.g. named "Globizhub India Leads").
 * 2. Click "Extensions" > "Apps Script" in the top menu.
 * 3. Delete any code in the editor and paste this entire code.
 * 4. Click "Save" (disk icon).
 * 5. Click "Deploy" > "New deployment".
 * 6. Select type: "Web app".
 * 7. Set "Execute as": "Me".
 * 8. Set "Who has access": "Anyone" (allows website webhook to transmit leads).
 * 9. Click "Deploy" and copy the Web App URL (starts with https://script.google.com/macros/s/...).
 * 10. Add the URL to your Vercel Project Settings > Environment Variables as:
 *     GOOGLE_SHEETS_WEBHOOK_URL = <your copied web app url>
 * ============================================================================
 */

function setupSpreadsheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Tab 1: Allied Verticals (E&M Fashion, Freight Forwarding, Leather, Import/Export)
  let verticalSheet = ss.getSheetByName("Allied Verticals");
  if (!verticalSheet) {
    verticalSheet = ss.insertSheet("Allied Verticals");
  }

  const verticalHeaders = [
    "Timestamp (IST)",
    "Contact Name",
    "Phone Number",
    "Email Address",
    "Vertical Page",
    "Specific Mode / Details",
    "Requirements & Notes",
    "Page Section / Origin",
    "Status"
  ];

  verticalSheet.getRange(1, 1, 1, verticalHeaders.length).setValues([verticalHeaders]);
  const vHeaderRange = verticalSheet.getRange(1, 1, 1, verticalHeaders.length);
  vHeaderRange.setFontWeight("bold");
  vHeaderRange.setBackground("#0F172A"); // Slate 900
  vHeaderRange.setFontColor("#FFFFFF");
  verticalSheet.setFrozenRows(1);

  // Tab 2: General Inquiries ("Let's discuss your project", Consultation, Proposal)
  let generalSheet = ss.getSheetByName("General Inquiries");
  if (!generalSheet) {
    generalSheet = ss.insertSheet("General Inquiries");
  }

  const generalHeaders = [
    "Timestamp (IST)",
    "Contact Name",
    "Phone Number",
    "Email Address",
    "Company Name",
    "Project Subject",
    "Budget Range",
    "Project Brief / Message",
    "NDA Requested",
    "Page Section / Source",
    "Status"
  ];

  generalSheet.getRange(1, 1, 1, generalHeaders.length).setValues([generalHeaders]);
  const gHeaderRange = generalSheet.getRange(1, 1, 1, generalHeaders.length);
  gHeaderRange.setFontWeight("bold");
  gHeaderRange.setBackground("#1163FB"); // Globizhub Blue
  gHeaderRange.setFontColor("#FFFFFF");
  generalSheet.setFrozenRows(1);

  // Auto-resize columns
  for (let i = 1; i <= verticalHeaders.length; i++) {
    verticalSheet.autoResizeColumn(i);
  }
  for (let i = 1; i <= generalHeaders.length; i++) {
    generalSheet.autoResizeColumn(i);
  }

  Logger.log("Spreadsheet initialized with 2 tabs: 'Allied Verticals' & 'General Inquiries'");
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: "error", message: "No post data received" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // Ensure tabs exist
    setupSpreadsheet();

    const isVertical =
      data.leadType === "vertical" ||
      data.targetSheet === "Allied Verticals" ||
      (data.source && data.source.includes("_page"));

    const timestamp = data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const name = data.contactName || data.fullName || "N/A";
    const phone = data.phoneNumber || data.phone || "N/A";
    const email = data.contactEmail || data.email || "N/A";
    const status = data.status || "New";

    if (isVertical) {
      const sheet = ss.getSheetByName("Allied Verticals");
      const verticalPage = data.pageName || "Allied Venture";
      const details = data.specificDetails || "N/A";
      const message = data.message || "N/A";
      const section = data.pageSection || data.source || "Allied Verticals";

      sheet.appendRow([
        timestamp,
        name,
        phone,
        email,
        verticalPage,
        details,
        message,
        section,
        status
      ]);

      return ContentService.createTextOutput(
        JSON.stringify({ status: "success", tab: "Allied Verticals", lead: name })
      ).setMimeType(ContentService.MimeType.JSON);
    } else {
      const sheet = ss.getSheetByName("General Inquiries");
      const company = data.companyName || data.company || "Direct Client";
      const subject = data.subject || "Project Inquiry";
      const budget = data.budgetRange || data.budgetBracket || "Flexible";
      const message = data.message || data.projectBrief || "N/A";
      const nda = data.ndaRequested || "No";
      const section = data.pageSection || "Let's discuss your project";

      sheet.appendRow([
        timestamp,
        name,
        phone,
        email,
        company,
        subject,
        budget,
        message,
        nda,
        section,
        status
      ]);

      return ContentService.createTextOutput(
        JSON.stringify({ status: "success", tab: "General Inquiries", lead: name })
      ).setMimeType(ContentService.MimeType.JSON);
    }
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "online",
      message: "Globizhub India Leads Webhook is active and ready to collect leads.",
      tabs: ["Allied Verticals", "General Inquiries"]
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
