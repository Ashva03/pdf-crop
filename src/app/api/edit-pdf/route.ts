import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("pdf") as File | null;
    const pageOrderString = formData.get("pageOrder") as string | null;

    if (!file) {
      return NextResponse.json(
        { error: "No PDF file uploaded." },
        { status: 400 }
      );
    }
    if (!pageOrderString) {
      return NextResponse.json(
        { error: "Page order information missing." },
        { status: 400 }
      );
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Invalid file type. Please upload a PDF." },
        { status: 400 }
      );
    }

    let pageOrder: number[] = [];
    try {
      pageOrder = JSON.parse(pageOrderString);
      if (
        !Array.isArray(pageOrder) ||
        pageOrder.some((n) => typeof n !== "number" || n < 1)
      ) {
        throw new Error("Invalid page order format.");
      }
    } catch (e) {
      console.error("Error parsing page order:", e);
      return NextResponse.json(
        { error: "Invalid page order data received." },
        { status: 400 }
      );
    }

    const fileBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(fileBuffer, {
      ignoreEncryption: true,
    }); // Ignore encryption for loading
    const totalPages = pdfDoc.getPageCount();

    // Validate page numbers in pageOrder
    if (pageOrder.some((pageNum) => pageNum > totalPages)) {
      return NextResponse.json(
        { error: "Invalid page number requested in order." },
        { status: 400 }
      );
    }

    // Create a new document
    const newPdfDoc = await PDFDocument.create();

    // pdf-lib uses 0-based indexing for copying pages
    const pagesToCopyIndices = pageOrder.map((pageNum) => pageNum - 1);

    // Copy the pages in the specified order
    const copiedPages = await newPdfDoc.copyPages(pdfDoc, pagesToCopyIndices);

    // Add the copied pages to the new document
    copiedPages.forEach((page) => newPdfDoc.addPage(page));

    // Save the new document
    const pdfBytes = await newPdfDoc.save();

    // Return the modified PDF
    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="edited_${file.name}"`, // Suggest filename
      },
    });
  } catch (error) {
    console.error("Error editing PDF:", error);
    let message = "Failed to process PDF.";
    if (error instanceof Error) {
      message = error.message;
      // Could add more specific pdf-lib error checks here if needed
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
