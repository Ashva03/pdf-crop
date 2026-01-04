import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("pdfs") as File[]; // Expecting an array of files

    // --- Add Logging Here ---
    const receivedFileOrder = files.map((f) => f.name);
    console.log("API received files in order:", receivedFileOrder);
    // ------------------------

    if (!files || files.length < 2) {
      return NextResponse.json(
        { error: "Please upload at least two PDF files to merge." },
        { status: 400 }
      );
    }

    const mergedPdf = await PDFDocument.create();
    let totalPagesMerged = 0;

    for (const file of files) {
      if (file.type !== "application/pdf") {
        console.warn(`Skipping non-PDF file: ${file.name}`);
        // Decide whether to skip or error out on non-PDFs
        // Skipping for now, but could return an error:
        // return NextResponse.json({ error: `File ${file.name} is not a PDF.` }, { status: 400 });
        continue;
      }

      try {
        const fileBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(fileBuffer, {
          ignoreEncryption: true,
        });
        const copiedPages = await mergedPdf.copyPages(
          pdfDoc,
          pdfDoc.getPageIndices()
        );
        copiedPages.forEach((page) => mergedPdf.addPage(page));
        totalPagesMerged += pdfDoc.getPageCount();
      } catch (loadError) {
        console.error(
          `Error loading or copying pages from ${file.name}:`,
          loadError
        );
        // Return a specific error if a file fails to load/copy
        return NextResponse.json(
          {
            error: `Failed to process file: ${file.name}. It might be corrupted or password-protected.`,
          },
          { status: 400 }
        );
      }
    }

    if (totalPagesMerged === 0) {
      return NextResponse.json(
        { error: "No valid PDF pages found in the uploaded files." },
        { status: 400 }
      );
    }

    // Save the merged document
    const pdfBytes: any = await mergedPdf.save();

    // Return the merged PDF
    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="merged_document.pdf"`, // Suggest filename
      },
    });
  } catch (error) {
    console.error("Error merging PDFs:", error);
    let message = "Failed to merge PDFs.";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
