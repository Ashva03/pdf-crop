import { NextRequest, NextResponse } from "next/server";

// Simple API route that just acknowledges receipt of the file
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("pdfFile") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No PDF file uploaded." },
        { status: 400 }
      );
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Invalid file type. Please upload a PDF." },
        { status: 400 }
      );
    }

    console.log(`PDF file received: ${file.name}, size: ${file.size} bytes`);

    // For now, just return success since we'll handle conversion in the client
    return NextResponse.json({
      success: true,
      message:
        "File received successfully. Processing will happen client-side.",
    });
  } catch (error) {
    console.error("API Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Server error.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
