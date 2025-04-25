import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, PDFImage } from "pdf-lib";

// Helper function to determine image type and embed
async function embedImage(
  pdfDoc: PDFDocument,
  fileBuffer: ArrayBuffer
): Promise<PDFImage | null> {
  // Basic check for JPEG and PNG magic numbers
  const uint8Array = new Uint8Array(fileBuffer);
  try {
    if (
      uint8Array.length > 3 &&
      uint8Array[0] === 0xff &&
      uint8Array[1] === 0xd8 &&
      uint8Array[2] === 0xff
    ) {
      return await pdfDoc.embedJpg(fileBuffer);
    } else if (
      uint8Array.length > 8 &&
      uint8Array[0] === 0x89 &&
      uint8Array[1] === 0x50 &&
      uint8Array[2] === 0x4e &&
      uint8Array[3] === 0x47
    ) {
      return await pdfDoc.embedPng(fileBuffer);
    }
  } catch (e) {
    console.error("Error embedding image:", e);
    return null; // Failed to embed
  }
  console.warn("Unsupported image type detected.");
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("images") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "No images uploaded." },
        { status: 400 }
      );
    }

    const pdfDoc = await PDFDocument.create();
    // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica); // Optional: for text

    let processedImageCount = 0;
    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        console.warn(`Skipping non-image file: ${file.name} (${file.type})`);
        continue; // Skip non-image files
      }

      const fileBuffer = await file.arrayBuffer();
      const pdfImage = await embedImage(pdfDoc, fileBuffer);

      if (!pdfImage) {
        console.warn(`Could not embed image: ${file.name}. Skipping.`);
        continue; // Skip if embedding failed or type unsupported
      }

      processedImageCount++;
      const page = pdfDoc.addPage(); // Add a page for each valid image
      const { width: pageWidth, height: pageHeight } = page.getSize(); // Get page dimensions (default A4)

      // Maintain aspect ratio while fitting the image within the page margins
      const margin = 50; // 25pt margin on each side
      const availableWidth = pageWidth - margin * 2;
      const availableHeight = pageHeight - margin * 2;
      const imageAspectRatio = pdfImage.width / pdfImage.height;
      const availableAspectRatio = availableWidth / availableHeight;

      let renderWidth, renderHeight;
      if (imageAspectRatio > availableAspectRatio) {
        // Image is wider than available space
        renderWidth = availableWidth;
        renderHeight = renderWidth / imageAspectRatio;
      } else {
        // Image is taller than available space
        renderHeight = availableHeight;
        renderWidth = renderHeight * imageAspectRatio;
      }

      page.drawImage(pdfImage, {
        x: (pageWidth - renderWidth) / 2, // Center image horizontally
        y: (pageHeight - renderHeight) / 2, // Center image vertically
        width: renderWidth,
        height: renderHeight,
      });

      // Optional: Add filename text below image
      /*
       page.drawText(file.name, {
         x: 50,
         y: 30, // Position near bottom
         size: 10,
         font: helveticaFont,
         color: rgb(0, 0, 0),
       });
       */
    }

    if (processedImageCount === 0) {
      return NextResponse.json(
        {
          error:
            "No valid images could be processed. Only JPG and PNG are supported.",
        },
        { status: 400 }
      );
    }

    const pdfBytes = await pdfDoc.save();

    // Return the PDF as a response
    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="converted_images.pdf"', // Suggests filename for download
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    let message = "Failed to generate PDF.";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// Ensure no default export exists
// export default {}; // Not needed and can cause issues
