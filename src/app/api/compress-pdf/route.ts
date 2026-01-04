import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("pdf") as File | null;
    // const _compressionLevel = formData.get('level') as string || 'medium'; // Example level (currently unused by pdf-lib re-save)

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

    const fileBuffer = await file.arrayBuffer();

    // Load the PDF
    const pdfDoc = await PDFDocument.load(fileBuffer, {
      // Preserve original objects as much as possible unless modified
      // Note: pdf-lib doesn't offer direct lossy compression controls like Ghostscript
      // This load/save cycle might optimize structure but won't aggressively compress images/fonts.
      updateMetadata: false, // Avoid changing metadata unless intended
    });

    // Re-save the PDF. This is where pdf-lib might optimize the structure.
    // Advanced compression (image resampling, font subsetting) isn't directly controlled here.
    const pdfBytes = await pdfDoc.save({
      useObjectStreams: true, // Often helps reduce size by grouping objects
      // addDefaultFont: false // Avoid adding default font if not needed (can slightly increase size)
    });

    // Convert Uint8Array to Buffer for NextResponse
    const pdfBuffer: any = Buffer.from(pdfBytes.buffer);

    // Return the potentially compressed PDF
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="compressed_${file.name}"`,
        "X-Original-Size": file.size.toString(),
        "X-Compressed-Size": pdfBytes.byteLength.toString(),
      },
    });
  } catch (error) {
    console.error("Error compressing PDF:", error);
    let message = "Failed to process PDF.";
    if (error instanceof Error) {
      // Check for common pdf-lib load errors
      if (
        error.message.includes("Not a PDF document") ||
        error.message.includes("Invalid PDF structure")
      ) {
        message = "Invalid or corrupted PDF file.";
      } else {
        message = error.message;
      }
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
