import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { success: false, error: "Invalid request payload" },
        { status: 400 }
      );
    }

    const { guestName, mobileNumber, checkIn, checkOut, adults, children } = body;

    const trimmedName = typeof guestName === "string" ? guestName.trim() : "";
    const trimmedMobile = typeof mobileNumber === "string" ? mobileNumber.trim() : "";

    if (!trimmedName || !trimmedMobile) {
      return NextResponse.json(
        { success: false, error: "Guest name and mobile number are required" },
        { status: 400 }
      );
    }

    const webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbyg06PQBl5_YNehEC-Nu0eA0dmaJSxZIehK2_zftvy1tQu5LUqFstspo7YKCVq7DSkt/exec";

    // Forward reservation lead to Google Apps Script webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        guestName: trimmedName,
        mobileNumber: trimmedMobile,
        checkIn: checkIn || "",
        checkOut: checkOut || "",
        adults: adults || "",
        children: children || "",
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      }),
      redirect: "follow",
    });

    const responseText = await response.text();

    // Check for Google Apps Script execution errors
    if (!response.ok || responseText.includes("Illegal spreadsheet id") || responseText.includes("Error:")) {
      console.error("[api/reservation] Google Apps Script error:", responseText);

      const isPlaceholderError = responseText.includes("Illegal spreadsheet id") || responseText.includes("PASTE_YOUR_JIANA_SUITES_SHEET_ID_HERE");

      return NextResponse.json(
        {
          success: false,
          error: "Google Sheets Webhook error",
          details: isPlaceholderError
            ? "Google Apps Script line 5 contains placeholder 'PASTE_YOUR_JIANA_SUITES_SHEET_ID_HERE'. Please update it with '1zKtARXNC2m5drDvpZo7EQNbnQ6UwtsP88KvX8UOQvpM'."
            : "Failed to log lead in Google Sheet",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Reservation inquiry received successfully",
    });
  } catch (error) {
    console.error("[api/reservation] Internal error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
