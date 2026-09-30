export interface ToolBenefit {
  title: string;
  description: string;
}

export interface ToolStep {
  title: string;
  description: string;
}

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface TechnicalInfo {
  processingType: string;
  supportedInputs: string;
  outputFormat: string;
  limitations: string;
}

export interface ToolDetails {
  title: string;
  description: string;
  extendedIntro: string;
  whenToUse: string;
  technicalInfo: TechnicalInfo;
  benefits: ToolBenefit[];
  steps: ToolStep[];
  tips: string[];
  faqs: ToolFaq[];
  relatedTools: { title: string; href: string }[];
}

export const toolInfoRegistry: Record<string, ToolDetails> = {
  "flipkart-label": {
    title: "Flipkart PDF Shipping Label Cropper",
    description: "Crop and resize Flipkart seller shipping labels from standard A4 PDF downloads to A6 format for thermal sticker printing.",
    extendedIntro: "As a Flipkart seller, downloaded shipping labels from the Flipkart Seller Hub usually come formatted on full A4 sheets (often 2-up per sheet or accompanied by tax invoices). Printing these directly onto thermal sticker rolls (A6 format) causes scaling distortion, clipped Ekart barcodes, or wasted adhesive paper. Our Flipkart Shipping Label Cropper reads PDF vector boundaries, isolates the exact label coordinates, and resizes the file to standard A6 format (101.6mm x 152.4mm / 4x6 inches) while preserving 100% vector sharpness for fast scanning at logistics hubs.",
    whenToUse: "Use this tool whenever you download packaging sheets or bulk shipping labels from the Flipkart Seller Hub and want to print them directly on 4x6 inch thermal sticker printers (such as Zebra, TSC, Rollo, or Xprinter) without manual cutting or taping.",
    technicalInfo: {
      processingType: "100% Client-Side (Processed locally in browser memory via pdf-lib)",
      supportedInputs: "Flipkart Seller Hub A4 multi-page shipping PDFs",
      outputFormat: "Cropped A6 PDF (4x6 inches / 101.6mm x 152.4mm)",
      limitations: "Password-protected PDFs must be decrypted prior to uploading; modified non-standard layouts may require custom offset margin adjustments."
    },
    benefits: [
      { title: "Crisp Barcode Vector Quality", description: "Operates directly on PDF vector boundaries, maintaining clear 300+ DPI text and Ekart barcode lines for hub scanners." },
      { title: "Standard A6 Thermal Sizing", description: "Outputs perfectly sized 4x6 inch PDF sheets designed for standard self-adhesive thermal rolls." },
      { title: "Zero Server File Uploads", description: "All PDF parsing happens in your local web browser sandbox. Customer shipping addresses and order values remain confidential." }
    ],
    steps: [
      { title: "Download PDF Labels", description: "Log in to the Flipkart Seller Portal, navigate to pending orders, and export your label PDF." },
      { title: "Select PDF File", description: "Upload or drag-and-drop the Flipkart A4 PDF into the cropper tool above." },
      { title: "Adjust Offset Margins (Optional)", description: "If your thermal printer has unique unprintable margins, adjust the offset sliders as needed." },
      { title: "Crop and Download", description: "Click crop to instantly process all pages and save your ready-to-print A6 label document." }
    ],
    tips: [
      "Set your thermal printer software scale to '100%' or 'Actual Size' in the print preview dialog.",
      "Ensure your thermal printhead is clean to avoid white streaks across Ekart tracking barcodes.",
      "Store thermal paper rolls away from direct heat to prevent print fading during transit."
    ],
    faqs: [
      { question: "Why should I crop Flipkart shipping labels?", answer: "Cropping converts multi-page A4 sheets into standard 4x6 inch (A6) label files, allowing direct printing on self-adhesive thermal rolls without cutting or taping paper manually." },
      { question: "Will the barcode scanning quality degrade?", answer: "No. The cropper crops the vector layer of the PDF instead of converting pages to low-res pixels, keeping text and barcodes razor sharp." },
      { question: "Is customer data uploaded to external servers?", answer: "No. All cropping calculations execute client-side in your web browser memory. Your customer addresses never leave your computer." },
      { question: "Can I process multi-page Flipkart bulk orders at once?", answer: "Yes. The cropper processes multi-page PDFs page by page, compiling all cropped labels into a single download." },
      { question: "What printers are compatible with this tool?", answer: "Any direct thermal or thermal transfer printer supporting 4x6 inch paper rolls (TSC, Zebra, Rollo, Xprinter, TVS, Brother, etc.)." },
      { question: "What should I do if the label print appears misaligned?", answer: "Make sure you uploaded an unmodified original export from Flipkart. If minor offsets occur due to printer hardware, use the built-in offset sliders to fine-tune placement." }
    ],
    relatedTools: [
      { title: "Amazon Label Cropper", href: "/amazon-label" },
      { title: "Meesho Label Cropper", href: "/meesho-label" },
      { title: "Merge PDF Tool", href: "/merge-pdf" }
    ]
  },
  "amazon-label": {
    title: "Amazon Shipping Label Cropper & SKU Overlay",
    description: "Crop Amazon Easy Ship and FBA labels to A6 format, extract SKU details, and strip invoice pages for efficient packing.",
    extendedIntro: "Fulfilling Amazon orders requires speed and accuracy. Amazon Seller Central exports Easy Ship, FBM, and FBA shipment downloads on full-size A4 sheets that include both shipping labels and tax invoice pages. Printing these as-is wastes thermal sticker paper and leads to fulfillment mix-ups. Our Amazon PDF Label Cropper isolates shipping labels to A6 (4x6 inch) dimensions, extracts ASIN/SKU details via client-side regex matching to overlay them on label margins, and provides an option to strip out tax invoice pages.",
    whenToUse: "Use this tool when handling Amazon Easy Ship orders, Self-Ship (FBM) labels, or FBA carton labels. It is especially useful for multi-SKU sellers who want SKU numbers printed directly on label margins so packaging staff can match products without opening separate invoices.",
    technicalInfo: {
      processingType: "100% Client-Side (Browser memory execution)",
      supportedInputs: "Amazon Seller Central Easy Ship, FBA, and FBM A4 PDF label exports",
      outputFormat: "A6 PDF (4x6 inches) with optional SKU margin overlay",
      limitations: "Text extraction requires standard text layers in the Amazon PDF; encrypted PDFs must be decrypted prior to processing."
    },
    benefits: [
      { title: "Client-Side SKU Overlay", description: "Extracts product SKU/ASIN text from invoice details and prints it along the label margin so packagers pick the correct item." },
      { title: "Invoice Page Stripping", description: "Allows isolating and exporting courier barcode labels while ignoring tax receipts, saving paper rolls." },
      { title: "High-DPI Barcode Preserving", description: "Preserves vector barcode definitions for seamless scanning at Amazon fulfillment centers." }
    ],
    steps: [
      { title: "Export Amazon PDF", description: "Download your Easy Ship or FBA label PDFs from Amazon Seller Central -> Manage Orders." },
      { title: "Upload to Cropper", description: "Import the PDF file into the upload zone above." },
      { title: "Configure Options", description: "Toggle SKU overlay or invoice page stripping based on your warehouse packing requirements." },
      { title: "Export & Print", description: "Process the document and print the resulting A6 PDF on your thermal printer." }
    ],
    tips: [
      "Use SKU overlay mode to verify item selection right at your thermal label application station.",
      "Select 'Actual Size' (no scaling) in your PDF viewer before hitting print.",
      "Verify that SKU overlay text appears on margin space outside the core Amazon shipping barcode zone."
    ],
    faqs: [
      { question: "How does the Amazon SKU extraction feature work?", answer: "Our client-side script parses text objects in the PDF to identify ASIN/SKU strings, then renders that text onto the printable margin of the cropped A6 label." },
      { question: "Can I remove customer invoice pages from the PDF?", answer: "Yes. You can select 'Strip Invoices' to filter out invoice pages and output only the shipping labels." },
      { question: "Is sensitive customer order pricing kept private?", answer: "Yes. File processing occurs entirely in your browser's local sandbox; zero order or pricing data is transmitted to external servers." },
      { question: "Does this support both Easy Ship and FBA box labels?", answer: "Yes. Our coordinate cropping profiles support Easy Ship shipping labels as well as FBA carton labels." },
      { question: "What happens if SKU text cannot be automatically parsed?", answer: "If text parsing cannot identify an ASIN/SKU string, the tool falls back to safe cropping without SKU text, ensuring the label renders cleanly." }
    ],
    relatedTools: [
      { title: "Flipkart Label Cropper", href: "/flipkart-label" },
      { title: "Myntra Label Cropper", href: "/myntra-label" },
      { title: "PDF to JPG Converter", href: "/pdf-to-jpg" }
    ]
  },
  "meesho-label": {
    title: "Meesho PDF Shipping Label Cropper",
    description: "Crop and optimize Meesho seller shipping labels to standard A6 format for direct thermal printing.",
    extendedIntro: "Managing order labels from the Meesho Supplier Panel often involves downloading multi-page A4 PDF sheets that bundle shipping barcodes with order summaries. Printing full A4 sheets on 4x6 inch thermal sticker rolls leads to faint text, misaligned borders, or excessive paper waste. Our Meesho Shipping Label Cropper extracts the core label section, formats it to standard A6 (4x6 inch) dimensions, and maintains barcode sharpness for seamless courier handovers.",
    whenToUse: "Use this tool whenever you export shipping labels from the Meesho Supplier Panel to prepare clean, self-adhesive thermal labels for your daily dispatched orders.",
    technicalInfo: {
      processingType: "100% Client-Side (In-browser JavaScript processing)",
      supportedInputs: "Meesho Supplier Panel PDF order exports",
      outputFormat: "Cropped A6 PDF (4x6 inches)",
      limitations: "Requires original unmodified PDF exports from Meesho; encrypted files are not supported."
    },
    benefits: [
      { title: "Protected Customer Privacy", description: "Processes customer names, phone numbers, and COD values entirely in local browser memory without server uploads." },
      { title: "Standard A6 Output", description: "Fits Meesho shipping label coordinates directly to 4x6 inch sticker dimensions." },
      { title: "Clear Barcode Lines", description: "Maintains original PDF vector geometry to ensure 300+ DPI barcode readability." }
    ],
    steps: [
      { title: "Download Order PDF", description: "Export your shipping label file from the Meesho Supplier Panel." },
      { title: "Upload PDF File", description: "Drag and drop the PDF into the Meesho cropper upload area." },
      { title: "Check Preview", description: "Verify that the label boundaries and COD indicators align properly in the preview." },
      { title: "Download & Print", description: "Save the processed PDF and print it directly onto 4x6 thermal stickers." }
    ],
    tips: [
      "Select 'Direct Thermal' mode in your printer driver settings when printing on adhesive rolls.",
      "Check that your crop boundaries do not clip COD amount text on Meesho labels.",
      "Keep printer darkness settings balanced to avoid thermal ink bleeding across barcode spaces."
    ],
    faqs: [
      { question: "Why is sharp barcode printing critical for Meesho orders?", answer: "Logistics partners (such as Delhivery, Shadowfax, and Xpressbees) scan Meesho barcodes at multiple hubs. Blurry barcodes cause sorting delays or delivery failures." },
      { question: "Can I crop Meesho label files on mobile devices?", answer: "Yes. Because processing runs in client-side JavaScript, the tool functions on modern mobile and tablet web browsers." },
      { question: "Is there a limit on how many Meesho pages I can crop?", answer: "There is no page count cap. The tool processes multi-page PDFs sequential in browser memory." },
      { question: "Are my Meesho order details stored on your server?", answer: "No. Your documents never touch our servers; all operations happen locally on your device." }
    ],
    relatedTools: [
      { title: "Snapdeal Label Cropper", href: "/snapdeal-label" },
      { title: "Myntra Label Cropper", href: "/myntra-label" },
      { title: "Compress PDF Tool", href: "/compress-pdf" }
    ]
  },
  "snapdeal-label": {
    title: "Snapdeal PDF Shipping Label Cropper",
    description: "Crop Snapdeal PDF shipping labels to standard A6 thermal size while preserving courier barcode readability.",
    extendedIntro: "Fulfilling orders on Snapdeal requires clear, legible packaging labels that adhere to courier standards. Standard label downloads from the Snapdeal Seller Panel pair shipping address blocks with dispatch documentation on single A4 sheets. Our Snapdeal Shipping Label Cropper isolates the active shipping label coordinates, resizing the layout to standard 4x6 inch (A6) dimensions for printing on self-adhesive thermal rolls.",
    whenToUse: "Use this tool to convert Snapdeal order PDF downloads into A6 sticker format, saving paper and eliminating manual scissor cutting at your packing table.",
    technicalInfo: {
      processingType: "100% Client-Side (Local browser sandbox execution)",
      supportedInputs: "Snapdeal Seller Panel A4 PDF order exports",
      outputFormat: "Cropped A6 PDF (4x6 inches)",
      limitations: "Password-protected PDFs must be decrypted prior to uploading."
    },
    benefits: [
      { title: "Calibrated Coordinates", description: "Specifically aligned to isolate Snapdeal's shipping label boundaries accurately." },
      { title: "Sharp Vector Text", description: "Preserves font outlines and barcode lines for clear scanning." },
      { title: "Complete Data Safety", description: "Processes files locally in your browser so customer information stays private." }
    ],
    steps: [
      { title: "Download Snapdeal PDF", description: "Log in to the Snapdeal Seller Panel and export your order label PDF." },
      { title: "Upload File", description: "Select or drag the downloaded PDF into the upload box above." },
      { title: "Preview Crop", description: "Confirm label alignment in the preview container." },
      { title: "Save and Print", description: "Download the cropped PDF and output it to your 4x6 thermal printer." }
    ],
    tips: [
      "Set page orientation to Portrait in your PDF reader before sending to the thermal printer.",
      "Perform a test print on plain paper first if you are using new margin offset settings.",
      "Ensure the courier tracking barcode has clear white margins around its borders."
    ],
    faqs: [
      { question: "Does this tool handle bulk Snapdeal order exports?", answer: "Yes. You can upload multi-page PDF files containing dozens of order labels, and all pages will be cropped sequentially." },
      { question: "Is my customer data secure?", answer: "Yes. No PDF data or customer address information is transmitted to external servers." },
      { question: "Why is A6 format recommended for Snapdeal shipping?", answer: "A6 (4x6 inch) thermal stickers adhere directly to parcels, eliminating sheet cutting and clear tape coverage." }
    ],
    relatedTools: [
      { title: "Meesho Label Cropper", href: "/meesho-label" },
      { title: "Amazon Label Cropper", href: "/amazon-label" },
      { title: "Images to PDF", href: "/images-to-pdf" }
    ]
  },
  "myntra-label": {
    title: "Myntra Shipping Label PDF Cropper",
    description: "Crop Myntra marketplace shipping labels to standard A6 thermal size while preserving barcode scan quality.",
    extendedIntro: "Myntra operates strict fashion e-commerce logistics standards across its PPMP and Omni-channel fulfillment networks. Misaligned shipping labels, clipped barcodes, or poor contrast can lead to sorting hub rejections or vendor penalties. Our Myntra Shipping Label Cropper isolates Myntra's label layouts from A4 downloads, re-scaling them to 4x6 inches (A6) with sharp vector outlines for thermal sticker printing.",
    whenToUse: "Use this tool to process fashion order sheets downloaded from the Myntra Seller Portal (PPMP / Omni), converting them into ready-to-print A6 thermal stickers.",
    technicalInfo: {
      processingType: "100% Client-Side (Browser memory execution)",
      supportedInputs: "Myntra Seller Hub PPMP & Omni A4 PDF exports",
      outputFormat: "Cropped A6 PDF (4x6 inches / 101.6mm x 152.4mm)",
      limitations: "Requires original unmodified Myntra PDF exports; password-protected files cannot be parsed."
    },
    benefits: [
      { title: "Myntra Layout Calibration", description: "Calibrated coordinate parameters to extract fashion shipping label blocks accurately." },
      { title: "High-Resolution Vectoring", description: "Keeps 1D/2D barcodes sharp for high-speed automated sorters at Myntra logistics hubs." },
      { title: "Local Browser Sandbox", description: "Guarantees customer names and item details are never transmitted over the network." }
    ],
    steps: [
      { title: "Export Myntra PDF", description: "Download your order PDF package from the Myntra Seller Hub." },
      { title: "Upload PDF", description: "Drag and drop the file into the Myntra cropper zone above." },
      { title: "Verify Output Preview", description: "Ensure barcodes and address details are clearly centered." },
      { title: "Download & Print", description: "Save the processed PDF file and print it on your 4x6 thermal sticker rolls." }
    ],
    tips: [
      "Select 'Fit to Printable Area' or '100% Scale' in your thermal printer preferences.",
      "Check thermal print density settings to maintain deep black barcode lines without smudging.",
      "Use high-tack thermal adhesive labels for poly-bag fashion shipments."
    ],
    faqs: [
      { question: "Why is barcode resolution critical for Myntra sellers?", answer: "Myntra warehouses use automated conveyor sorters. Low-contrast or pixelated barcodes fail automated scans, delaying order dispatches." },
      { question: "Does this cropper store uploaded documents?", answer: "No. All PDF coordinate processing is performed locally within your browser's temporary memory." },
      { question: "Can I crop multi-page Myntra label batches?", answer: "Yes. Our batch processing engine handles multi-page PDF files, outputting a consolidated A6 document." }
    ],
    relatedTools: [
      { title: "Amazon Label Cropper", href: "/amazon-label" },
      { title: "Flipkart Label Cropper", href: "/flipkart-label" },
      { title: "Edit PDF Tool", href: "/edit-pdf" }
    ]
  },
  "compress-pdf": {
    title: "Online PDF Compressor Utility",
    description: "Compress and reduce PDF file sizes online while maintaining text legibility and document structure.",
    extendedIntro: "Large PDF files complicate email attachments and often fail on web portals that enforce strict upload limits (such as 2MB or 5MB). Our PDF Compressor allows you to reduce PDF file size efficiently. You can select between Low, Medium, or High compression levels depending on whether your priority is maximum visual quality or minimal file size. The underlying service optimizes file structures and downsamples embedded images while preserving text vector outlines.",
    whenToUse: "Use this tool to compress tax documents, invoices, scanned reports, product catalogs, or administrative files before uploading them to government or marketplace portals.",
    technicalInfo: {
      processingType: "Stateless Server API Endpoint (/api/compress-pdf)",
      supportedInputs: "Standard PDF documents (up to available upload memory)",
      outputFormat: "Compressed PDF file",
      limitations: "Compression ratios depend on file content. PDFs with high-res raster images shrink significantly; text-only vector PDFs show minimal size reduction. Password-protected files must be decrypted first."
    },
    benefits: [
      { title: "3 Compression Levels", description: "Low (High Quality), Medium (Balanced ~150 DPI), and High (Max Compression ~72 DPI) profiles." },
      { title: "Preserves Text Vector Outlines", description: "Downsamples embedded images while keeping text fonts sharp and readable." },
      { title: "Stateless & Temporary Processing", description: "Files are processed in temporary memory for your request session and immediately discarded without permanent storage." }
    ],
    steps: [
      { title: "Select PDF File", description: "Upload or drag your PDF document into the compression dropzone above." },
      { title: "Choose Compression Profile", description: "Select Low, Medium (Recommended), or High compression depending on your needs." },
      { title: "Compress Document", description: "Click Compress PDF to process your file." },
      { title: "Download Optimized PDF", description: "Review the original vs. compressed file size stats and download your smaller PDF." }
    ],
    tips: [
      "Select 'Low Compression' if your document contains detailed technical blueprints or high-res photos.",
      "If a file size does not decrease significantly, it means your PDF is already composed of optimized vector text.",
      "Always keep a local backup of your original uncompressed document."
    ],
    faqs: [
      { question: "How does the PDF compression algorithm work?", answer: "It removes redundant structural metadata, deduplicates font resources, and downsamples embedded raster images based on your selected compression profile." },
      { question: "Will compressing a text-only PDF reduce its size drastically?", answer: "No. Text-only vector PDFs already have small file footprints because fonts are stored as mathematical curves rather than pixels." },
      { question: "Can I compress password-protected PDF files?", answer: "No. You must remove the password protection before uploading the file for compression." },
      { question: "Are my compressed files stored permanently on the server?", answer: "No. All server processing is stateless; files exist only in memory during your active request and are discarded immediately." }
    ],
    relatedTools: [
      { title: "Merge PDF Tool", href: "/merge-pdf" },
      { title: "PDF to JPG Converter", href: "/pdf-to-jpg" },
      { title: "Edit PDF Tool", href: "/edit-pdf" }
    ]
  },
  "edit-pdf": {
    title: "Online PDF Editor & Page Organizer",
    description: "Rearrange, rotate, and delete pages from your PDF documents online with a visual drag-and-drop interface.",
    extendedIntro: "PDF files downloaded from online portals often contain superfluous pages, upside-down scans, or out-of-order sheets. Our client-side PDF Editor provides an interactive drag-and-drop canvas to reorganize page sequences, rotate individual pages by 90/180/270 degrees, or delete unwanted pages before compiling a clean output file.",
    whenToUse: "Use this tool to remove extra invoice pages from shipping manifests, re-sequence multi-page reports, or fix upside-down scanned pages before sharing.",
    technicalInfo: {
      processingType: "100% Client-Side (Browser memory execution via pdf-lib)",
      supportedInputs: "Standard multi-page PDF documents",
      outputFormat: "Reorganized PDF document",
      limitations: "Edits page-level structures and layouts; does not modify or rewrite internal body text strings."
    },
    benefits: [
      { title: "Drag-and-Drop Page Reordering", description: "Visually reorder page thumbnails to customize your document layout." },
      { title: "Page Rotation & Removal", description: "Fix upside-down pages or delete unnecessary sheets with one click." },
      { title: "In-Browser Execution", description: "All page manipulation occurs locally in your web browser memory for absolute privacy." }
    ],
    steps: [
      { title: "Upload PDF File", description: "Drag and drop the PDF you wish to edit into the workspace above." },
      { title: "Organize Pages", description: "Drag thumbnails to reorder, click rotate buttons to fix orientation, or click delete to remove pages." },
      { title: "Compile Changes", description: "Click Save & Compile to assemble the new PDF document structure." },
      { title: "Download Edited File", description: "Save the processed PDF directly to your computer." }
    ],
    tips: [
      "Delete unnecessary cover or receipt pages to save paper before printing.",
      "Check page orientations in the thumbnail preview panel before saving.",
      "Use this tool before merging if you need to extract specific page ranges from a document."
    ],
    faqs: [
      { question: "Can I edit text words or replace images inside the PDF pages?", answer: "This tool focuses on page-level management (reordering, deleting, and rotating pages). It does not edit the underlying text strings or inline image content." },
      { question: "Why are some page thumbnails slow to load?", answer: "Thumbnails are rendered in your browser using HTML5 Canvas. Very large files with high-resolution graphics may take a moment to render." },
      { question: "Is my document data private?", answer: "Yes. Page editing runs entirely in your local browser sandbox; no document data is sent to external servers." },
      { question: "Can I rotate individual pages without rotating the whole document?", answer: "Yes. Each page thumbnail has independent rotation controls (90°, 180°, 270°)." }
    ],
    relatedTools: [
      { title: "Merge PDF Tool", href: "/merge-pdf" },
      { title: "Compress PDF Tool", href: "/compress-pdf" },
      { title: "Images to PDF", href: "/images-to-pdf" }
    ]
  },
  "images-to-pdf": {
    title: "Online Images to PDF Converter",
    description: "Convert JPG, PNG, and WebP images into a single formatted PDF document online.",
    extendedIntro: "Sharing multiple standalone image files (like photo receipts, handwritten notes, or scanned documents) can be cumbersome. Our Images to PDF Converter allows you to compile multiple JPG, PNG, or WebP images into a single clean PDF document. Upload your images, drag to reorder page sequences, and generate a standardized PDF file.",
    whenToUse: "Use this tool to compile photo-receipts, document scans, artwork proofs, or product photos into a single PDF document for easy emailing or archiving.",
    technicalInfo: {
      processingType: "Stateless Server API Endpoint (/api/images-to-pdf)",
      supportedInputs: "JPG, JPEG, PNG, WebP image formats",
      outputFormat: "Single multi-page PDF document",
      limitations: "Corrupt image files or unsupported formats will be skipped during processing."
    },
    benefits: [
      { title: "Multi-Format Support", description: "Converts JPG, PNG, WebP, and JPEG files into standard PDF pages." },
      { title: "Visual Page Sorting", description: "Drag and drop image thumbnails to arrange page sequence prior to conversion." },
      { title: "Clean Document Output", description: "Creates a single PDF file that opens reliably across all desktop and mobile PDF readers." }
    ],
    steps: [
      { title: "Upload Image Files", description: "Select or drop your image files into the upload container above." },
      { title: "Reorder Thumbnails", description: "Drag and drop image previews to set their sequence in the output PDF." },
      { title: "Generate PDF", description: "Click Generate PDF to convert the image batch." },
      { title: "Preview and Download", description: "Review the output PDF in the embedded preview box and download your file." }
    ],
    tips: [
      "Ensure images are well-lit and oriented upright before uploading.",
      "Group related document scans together to create organized multi-page PDFs.",
      "Use PNG or high-quality JPG files for text document photographs."
    ],
    faqs: [
      { question: "What image formats are supported?", answer: "We support JPG, JPEG, PNG, and WebP image files." },
      { question: "Can I change the order of images after uploading?", answer: "Yes. You can drag and drop image thumbnails to arrange their page order before generating the PDF." },
      { question: "Are my uploaded photos stored on your servers?", answer: "No. Conversion requests are processed statelessly in temporary memory and discarded immediately after returning your PDF." },
      { question: "Is there a limit on how many images I can convert at once?", answer: "You can convert multiple images in a single batch, though extremely large batches may depend on your device memory and internet connection." }
    ],
    relatedTools: [
      { title: "PDF to JPG Converter", href: "/pdf-to-jpg" },
      { title: "Merge PDF Tool", href: "/merge-pdf" },
      { title: "Edit PDF Tool", href: "/edit-pdf" }
    ]
  },
  "merge-pdf": {
    title: "Online PDF Merger Tool",
    description: "Combine and join multiple PDF files into a single consolidated document online.",
    extendedIntro: "Managing separate PDF documents (such as individual invoices, monthly sales reports, or contract appendixes) makes document archiving difficult. Our PDF Merger allows you to combine multiple PDF files into a single organized document. Use the interactive `@dnd-kit` drag-and-drop list to set the exact document order before compiling.",
    whenToUse: "Use this tool to join daily shipping manifests, combine monthly invoices, merge contract attachments, or compile multi-part reports into a single file.",
    technicalInfo: {
      processingType: "Stateless Server API Endpoint (/api/merge-pdf)",
      supportedInputs: "Multiple PDF documents (Requires at least 2 files)",
      outputFormat: "Single merged PDF document",
      limitations: "Requires at least 2 valid PDF files; password-protected or encrypted PDFs must be decrypted before merging."
    },
    benefits: [
      { title: "Interactive File Sorting", description: "Drag and drop file cards using @dnd-kit to set the precise merging order." },
      { title: "Preserves Document Fidelity", description: "Combines documents while maintaining original font vectors, text layers, and embedded graphics." },
      { title: "Stateless & Confidential", description: "Files are processed statelessly in server memory for your session only and never permanently stored." }
    ],
    steps: [
      { title: "Upload PDF Files", description: "Select or drop two or more PDF files into the upload area above." },
      { title: "Arrange File Order", description: "Drag file cards up or down to set the document sequence." },
      { title: "Merge Files", description: "Click Merge PDFs to combine the uploaded documents." },
      { title: "Preview and Save", description: "Inspect the output in the PDF preview window and download your merged document." }
    ],
    tips: [
      "Double-check file order in the list before initiating the merge process.",
      "Ensure none of the selected files are password-encrypted.",
      "Combine related documents into single files to simplify digital archiving."
    ],
    faqs: [
      { question: "How many PDF files can I merge together?", answer: "You can combine multiple PDF files in a single batch. We recommend merging under 20 files at a time for optimal performance." },
      { question: "Will text remain searchable in the merged PDF?", answer: "Yes. Merging preserves vector font structures and searchable text layers." },
      { question: "Can I merge password-protected PDFs?", answer: "No. Password-protected files must be unlocked prior to uploading." },
      { question: "Are my files stored on your server?", answer: "No. Server-assisted processing operates statelessly in temporary memory and deletes file data immediately upon completion." }
    ],
    relatedTools: [
      { title: "Compress PDF Tool", href: "/compress-pdf" },
      { title: "Edit PDF Tool", href: "/edit-pdf" },
      { title: "Images to PDF", href: "/images-to-pdf" }
    ]
  },
  "pdf-to-jpg": {
    title: "Online PDF to JPG Converter",
    description: "Convert PDF pages into high-resolution JPG images client-side in your web browser.",
    extendedIntro: "Converting PDF pages into image files is often necessary for web publishing, presentations, or sharing documents with users who cannot open PDF files. Our PDF to JPG Converter renders PDF pages to HTML5 Canvas elements at 1.5x resolution directly in your web browser using `pdfjs-dist`, saving pages as high-quality JPG image files packaged in a ZIP archive.",
    whenToUse: "Use this tool to convert report pages into presentation slides, extract document illustrations, or turn PDF forms into image files for web sharing.",
    technicalInfo: {
      processingType: "100% Client-Side (Browser rendering via pdfjs-dist & Canvas)",
      supportedInputs: "Standard PDF documents",
      outputFormat: "JPG images / ZIP archive for multi-page documents",
      limitations: "Renders vector text into pixel graphics (JPG); password-protected files must be unlocked first."
    },
    benefits: [
      { title: "100% Browser Local Processing", description: "Renders PDF pages directly in browser memory without sending document content across the internet." },
      { title: "High-Resolution Output", description: "Uses 1.5x canvas scaling to ensure text remain legible in JPG format." },
      { title: "One-Click ZIP Archive Download", description: "Packages all converted page images into a single downloadable ZIP archive." }
    ],
    steps: [
      { title: "Upload PDF File", description: "Select the PDF file you wish to convert into image format." },
      { title: "Convert Pages", description: "Click Convert to JPG to render the PDF pages client-side." },
      { title: "Preview Converted Images", description: "Inspect the generated page thumbnails." },
      { title: "Download Images", description: "Download individual page images or grab all pages in a single ZIP file." }
    ],
    tips: [
      "Use original vector PDFs for the clearest text rendering results.",
      "Check your downloads folder for the output ZIP archive when converting multi-page PDFs.",
      "Extract the ZIP file on your computer to view individual JPG page files."
    ],
    faqs: [
      { question: "Does this PDF to JPG converter send my document to a server?", answer: "No. Rendering is performed 100% locally in your web browser using JavaScript and HTML5 Canvas technology." },
      { question: "What file format is generated?", answer: "Page images are generated as standard JPG files. Multi-page PDFs are packaged into a single downloadable ZIP file." },
      { question: "Can I convert password-protected PDFs?", answer: "No. Password-protected files must be unlocked before uploading." },
      { question: "Will converted images look clear on mobile screens?", answer: "Yes. Pages are rendered at 1.5x scale to preserve font crispness." }
    ],
    relatedTools: [
      { title: "Images to PDF", href: "/images-to-pdf" },
      { title: "Merge PDF Tool", href: "/merge-pdf" },
      { title: "Compress PDF Tool", href: "/compress-pdf" }
    ]
  }
};
