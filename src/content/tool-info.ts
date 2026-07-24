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

export interface ToolDetails {
  title: string;
  description: string;
  extendedIntro: string;
  whenToUse: string;
  benefits: ToolBenefit[];
  steps: ToolStep[];
  tips: string[];
  faqs: ToolFaq[];
  relatedTools: { title: string; href: string }[];
}

export const toolInfoRegistry: Record<string, ToolDetails> = {
  "flipkart-label": {
    title: "Flipkart Shipping Label Cropper",
    description: "Crop and optimize Flipkart seller shipping labels from standard A4 to A6 sizes for thermal sticker printing.",
    extendedIntro: "As a seller on Flipkart, managing shipping efficiency is vital for maintaining a high seller rating. Standard labels downloaded from the Flipkart Seller Hub are usually generated on an A4 sheet. Printing these directly on thermal sticker paper (A6) leads to scaling issues, blurry barcodes, or wasted paper. Our Flipkart Shipping Label Cropper reads the vector layout of your PDF, isolates the exact boundary coordinates of the shipping label, and crops it to the standard 4x6 inch format, maintaining vector sharpness.",
    whenToUse: "Use this tool whenever you download packaging sheets or bulk label PDFs from the Flipkart Seller Hub. It is particularly useful for sellers using thermal label printers (like TSC, Xprinter, or Zebra) who want to skip the manual task of cutting labels with scissors and tape.",
    benefits: [
      { title: "Crisp Barcodes", description: "Our tool maintains 300+ DPI vector sharpness, ensuring automated scanners in Flipkart hubs read your Ekart barcodes without delays." },
      { title: "Standard A6 Sizing", description: "Perfect output at 101.6mm x 152.4mm, standard dimensions for sticky labels." },
      { title: "No Server Uploads", description: "All PDF parsing is executed client-side in Javascript. Your customer addresses remain private." }
    ],
    steps: [
      { title: "Download PDF", description: "Log in to the Flipkart Seller Portal, navigate to your pending orders, and click Download Labels." },
      { title: "Upload Files", description: "Drag and drop the A4 PDF file into the upload zone above, or browse locally." },
      { title: "Select Configuration", description: "Choose any offset margins to compensate for your printer's borders." },
      { title: "Crop & Export", description: "Click crop and download the instantly resized A6 PDF file, ready for printing." }
    ],
    tips: [
      "Always set your printer margins to 'None' in the print preview dialog box.",
      "Clean your thermal printhead regularly to prevent white lines in barcode areas.",
      "Store your thermal labels in a dry place to prevent fading."
    ],
    faqs: [
      { question: "Why should I crop Flipkart shipping labels?", answer: "Cropping converts standard A4 sheets to A6, allowing you to print directly on thermal stickers without cutting or taping sheets manually." },
      { question: "Will the barcode quality degrade?", answer: "No, our cropper operates on the PDF's vector boundaries rather than rasterizing. This keeps the text and barcodes perfectly sharp." },
      { question: "Is my customer data safe?", answer: "Yes, our tool runs entirely in your web browser. No files or personal customer addresses are uploaded to our servers." },
      { question: "What sizes are supported?", answer: "The output is optimized for 4x6 inches (A6), which is the standard size for marketplace couriers." },
      { question: "Can I crop multiple Flipkart pages at once?", answer: "Yes, our batch cropper processes multi-page PDFs, generating a consolidated A6 label file." },
      { question: "Do I need to install any software?", answer: "No, this is a web utility that runs on any modern desktop or mobile browser." },
      { question: "What thermal printers work with this?", answer: "Any standard thermal sticker printer like TSC, Zebra, Xprinter, Rollo, or Brother." },
      { question: "What happens if my crop looks misaligned?", answer: "Ensure you are uploading the official unmodified PDF export from the Flipkart Hub. If alignment shifted, you can adjust offsets in the custom margin option." }
    ],
    relatedTools: [
      { title: "Amazon Label Cropper", href: "/amazon-label" },
      { title: "Meesho Label Cropper", href: "/meesho-label" },
      { title: "Merge PDF Tool", href: "/merge-pdf" }
    ]
  },
  "amazon-label": {
    title: "Amazon Shipping Label Cropper & SKU Overlay",
    description: "Crop Amazon FBA and FBM labels to A6 format, extract SKU codes, and strip invoices to optimize your packing station.",
    extendedIntro: "Fulfilling Amazon orders demands extreme accuracy. Whether you ship via Easy Ship, Self-Ship (FBM), or send bulk cartons to Amazon Fulfillment Centers (FBA), you need clear labels. Our Amazon PDF Label Cropper isolates shipping labels from standard downloads, extracts ASIN/SKU details using regex matching, and embeds them directly onto the labels' margins. Additionally, it lets you strip out invoice pages automatically to save thermal paper rolls.",
    whenToUse: "Use this tool for Amazon Easy Ship labels, FBM shipping labels, and FBA box/carton labels. It is highly recommended for multi-SKU sellers who want to print product info on the label margins to prevent packagers from pasting the wrong shipping labels.",
    benefits: [
      { title: "SKU/ASIN Overlay", description: "Extracts and prints the product SKU directly onto the label border so packagers know what goes in the box." },
      { title: "Strip Invoices", description: "Separates customer receipts and invoices from shipping labels, printing only the A6 courier barcode labels." },
      { title: "High-DPI Compatibility", description: "Ensures barcodes are fully compatible with high-speed automated sorting scanners at Amazon hubs." }
    ],
    steps: [
      { title: "Download Amazon PDF", description: "Navigate to Seller Central -> Manage Orders, select your shipments, and export the PDF." },
      { title: "Upload PDF", description: "Select the PDF file containing your Easy Ship/FBA labels in the box above." },
      { title: "Set Print Option", description: "Choose to overlay SKU text, strip invoice sheets, or set custom paddings." },
      { title: "Download Result", description: "Process the document and print the sharp, cropped output PDF." }
    ],
    tips: [
      "Use the SKU overlay to prevent fulfillment mix-ups at your packing table.",
      "Check your print preview to ensure the SKU text is placed on the label margins.",
      "Select 'Actual Size' in the printer settings for accurate alignment."
    ],
    faqs: [
      { question: "What is the Amazon SKU extraction feature?", answer: "Our tool extracts SKU/ASIN text from invoice pages client-side using regex patterns, then overlays it onto the corresponding shipping label." },
      { question: "Can I remove invoice pages automatically?", answer: "Yes, you can enable 'Strip Invoices' to isolate and print only the shipping barcodes, saving valuable paper." },
      { question: "Is my transaction pricing kept confidential?", answer: "Yes. All extraction and cropping are executed locally in your browser memory. We never transmit or store invoice details." },
      { question: "Does it support both Easy Ship and FBA carton labels?", answer: "Yes. Our coordinate models adapt to both Easy Ship barcodes and FBA box labels." },
      { question: "What should I do if SKU extraction fails?", answer: "If the text cannot be automatically matched, the tool will fall back to safe default markers, ensuring the crop remains functional." },
      { question: "Can I use this on a Mac or Chromebook?", answer: "Yes. This tool is web-based and runs on any operating system with a modern browser." },
      { question: "Why is the label size set to 4x6?", answer: "4x6 inches is the industry standard for commercial thermal logistics printers." },
      { question: "Does it support bulk order PDFs?", answer: "Yes, you can upload multi-page exports containing dozens of shipping labels." }
    ],
    relatedTools: [
      { title: "Flipkart Label Cropper", href: "/flipkart-label" },
      { title: "Myntra Label Cropper", href: "/myntra-label" },
      { title: "PDF to JPG Converter", href: "/pdf-to-jpg" }
    ]
  },
  "meesho-label": {
    title: "Meesho Shipping Label Cropper",
    description: "Crop and prepare Meesho seller shipping labels to A6 format for quick thermal printing.",
    extendedIntro: "Meesho has grown rapidly as a social commerce platform. However, managing packaging labels from the Meesho Seller Panel can be challenging due to their sheet formats. Printing label sheets as-is results in tiny, unreadable barcodes or massive paper wastage. Our Meesho Shipping Label Cropper extracts the core label vectors, formats them to 4x6 dimensions, and cleans the boundaries for neat thermal printing.",
    whenToUse: "Use this tool whenever you download packaging lists or order sheets from the Meesho Supplier Hub to save paper and speed up order packing.",
    benefits: [
      { title: "Zero Data Leakage", description: "We do not store customer phone numbers or cod values. All scripts execute in your local browser sandbox." },
      { title: "Standard Scaling", description: "Fits Meesho labels to standard A6 dimensions automatically." },
      { title: "No Blurry Lines", description: "Our vector cropping ensures clean fonts and sharp barcodes." }
    ],
    steps: [
      { title: "Download Meesho PDF", description: "Download your order labels from the Meesho Supplier Panel." },
      { title: "Upload document", description: "Import the PDF into the Meesho cropper above." },
      { title: "Preview layout", description: "Check that the label boundaries match your specifications." },
      { title: "Download & Print", description: "Save the processed PDF and print it on your thermal labels." }
    ],
    tips: [
      "Select 'Direct Thermal' in your printer settings rather than 'Thermal Transfer' if using thermal rolls.",
      "Check that your label margins don't clip the COD payment values on Meesho labels.",
      "Confirm that barcodes are placed centrally on the label sheet."
    ],
    faqs: [
      { question: "Why does Meesho require sharp barcodes?", answer: "Meesho shipping partners scan the shipping label multiple times during logistics. Blurry barcodes lead to delays or sorting mistakes." },
      { question: "Can I crop Meesho label files on my phone?", answer: "Yes. Since the processing is client-side, it runs smoothly in mobile web browsers." },
      { question: "Is there a limit on file size?", answer: "No, you can process large PDFs, though processing speed depends on your device's memory." },
      { question: "Are my files secure?", answer: "Absolutely. No document contents are sent to our servers." },
      { question: "What dimensions are generated?", answer: "Optimized for standard A6 dimensions (4 x 6 inches)." },
      { question: "Can I revert to the original PDF?", answer: "Your original files remain untouched on your machine. You can re-download them from Meesho Seller Hub anytime." },
      { question: "Why is the label cropping important?", answer: "It removes unnecessary design elements and white spaces, optimizing the sheet for thermal printers." },
      { question: "How does it compare to manual cropping?", answer: "It is automated and processes multi-page labels in a split second, saving hours of manual cropping." }
    ],
    relatedTools: [
      { title: "Snapdeal Label Cropper", href: "/snapdeal-label" },
      { title: "Myntra Label Cropper", href: "/myntra-label" },
      { title: "Compress PDF Tool", href: "/compress-pdf" }
    ]
  },
  "snapdeal-label": {
    title: "Snapdeal Shipping Label Cropper",
    description: "Crop Snapdeal PDF shipping labels to standard A6 thermal size, keeping barcodes legible.",
    extendedIntro: "Fulfilling orders on Snapdeal requires adherence to packaging regulations. Standard PDF labels downloaded from the Snapdeal Panel often feature a mixture of label content and vendor details. To print these on thermal stickers, you must isolate the shipping coordinates. Our Snapdeal Shipping Label Cropper does this automatically, keeping resolution high and layouts clean.",
    whenToUse: "Use this tool to convert standard Snapdeal order printouts into A6 sticker format, optimizing your packaging station efficiency.",
    benefits: [
      { title: "Accurate Dimensions", description: "Fits Snapdeal's shipping layout coordinates to A6 standards." },
      { title: "High Legibility", description: "Guarantees sharp text rendering for address routes." },
      { title: "Data Privacy", description: "Your shipping information never leaves your browser." }
    ],
    steps: [
      { title: "Get PDF", description: "Log in to the Snapdeal Seller Panel and download your shipping label PDFs." },
      { title: "Upload file", description: "Select the downloaded file in the upload box above." },
      { title: "Check alignment", description: "Inspect the label preview to ensure it's aligned correctly." },
      { title: "Download label", description: "Save the output and print directly to your sticker printer." }
    ],
    tips: [
      "Set your printing orientation to Portrait to fit the A6 output.",
      "Run test prints to ensure your thermal printer's darkness setting is correct.",
      "Check that your shipping barcodes are clear and unscratched."
    ],
    faqs: [
      { question: "Does this tool work for Snapdeal bulk orders?", answer: "Yes, you can upload a combined PDF containing multiple order labels." },
      { question: "Will my client's privacy be protected?", answer: "Yes, our tool does not send files to our servers, keeping buyer addresses private." },
      { question: "Is this tool free?", answer: "Yes, it is completely free with no registration or subscriptions required." },
      { question: "Can I adjust crop margins?", answer: "Yes, you can use the offset adjustments to customize margins for your thermal paper." },
      { question: "Why is the label A6 format best?", answer: "A6 thermal stickers are self-adhesive, eliminating the need for tapes and paper sheet cutting." },
      { question: "What happens if a PDF fails to render?", answer: "Make sure your PDF is not encrypted or password-protected. Password protected files cannot be parsed." },
      { question: "Do I need technical skills to use this?", answer: "No, it's designed with an intuitive drag-and-drop workflow." },
      { question: "How does it handle multiple pages?", answer: "It processes all pages sequentially, generating a cropped multi-page PDF." }
    ],
    relatedTools: [
      { title: "Meesho Label Cropper", href: "/meesho-label" },
      { title: "Amazon Label Cropper", href: "/amazon-label" },
      { title: "Images to PDF", href: "/images-to-pdf" }
    ]
  },
  "myntra-label": {
    title: "Myntra Shipping Label Cropper",
    description: "Crop Myntra marketplace shipping labels to standard A6 thermal size, keeping barcodes legible.",
    extendedIntro: "Myntra is India's leading fashion e-commerce destination, and its packaging standards are notoriously strict. Poorly cropped shipping labels, faint barcodes, or misaligned sheets can lead to warehouse penalties or shipment rejection. Our Myntra Shipping Label Cropper is calibrated to Myntra's exact label layouts, converting A4 files to 4x6 formats with clean borders.",
    whenToUse: "Use this tool to process fashion e-commerce order sheets downloaded from the Myntra Seller Portal, optimizing them for A6 sticker printing.",
    benefits: [
      { title: "Myntra Calibration", description: "Calibrated coordinates to isolate fashion-label formats accurately." },
      { title: "High Resolution", description: "Preserves vector data to keep scan quality high." },
      { title: "Local Security", description: "Processes customer names and items entirely in your browser." }
    ],
    steps: [
      { title: "Export Myntra PDF", description: "Navigate to Myntra Seller Hub and export your shipping label PDFs." },
      { title: "Drag into Cropper", description: "Drop the file into the upload zone above." },
      { title: "Verify preview", description: "Confirm that Myntra barcodes are centered and visible." },
      { title: "Save & Print", description: "Save the processed PDF and print it out." }
    ],
    tips: [
      "Select 'Auto-Rotate' in your printer settings to align portrait/landscape documents.",
      "Regularly check your thermal labels to ensure barcodes are sharp and readable.",
      "Use high-quality self-adhesive sticker labels for fashion shipping."
    ],
    faqs: [
      { question: "Why is Myntra labeling format strict?", answer: "Myntra uses automated sortation conveyor belts. Faint barcodes cause sorting delays, leading to vendor penalties." },
      { question: "Does this cropper save my documents?", answer: "No, all file parsing is processed locally in your browser's memory." },
      { question: "What is the default output format?", answer: "Optimized for standard A6 thermal sticker paper (4x6 inches)." },
      { question: "Can I crop multiple Myntra labels at once?", answer: "Yes, our batch cropping algorithm handles multi-page files." },
      { question: "Do I need to sign up?", answer: "No, all our web utilities are accessible without login or sign-up." },
      { question: "Why is client-side processing safer?", answer: "It guarantees that client information and pricing details are not uploaded to servers." },
      { question: "Does it support custom margin offsets?", answer: "Yes, you can customize margins to fit your printer's specifications." },
      { question: "What should I do if my label crops are cut off?", answer: "Ensure you upload original, unmodified PDFs. Use offset settings to adjust positioning." }
    ],
    relatedTools: [
      { title: "Amazon Label Cropper", href: "/amazon-label" },
      { title: "Flipkart Label Cropper", href: "/flipkart-label" },
      { title: "Edit PDF Tool", href: "/edit-pdf" }
    ]
  },
  "compress-pdf": {
    title: "Online PDF Compressor Utility",
    description: "Compress and reduce PDF file size online while maintaining document quality.",
    extendedIntro: "Large PDF files can slow down administrative operations and complicate online submissions. When uploading invoices, documents, or reports to e-commerce hubs or client portals, file size limits are common. Our PDF Compressor allows you to reduce PDF file size instantly in your browser. By optimizing document structures, removing redundant resources, and adjusting image resolutions, it shrinks files without degrading text outlines.",
    whenToUse: "Use this utility whenever you need to upload tax documents, product catalogs, bulk invoices, or shipping details to portals that have strict file size limits (like 2MB or 5MB limits).",
    benefits: [
      { title: "Custom Compression Levels", description: "Choose between Low, Balanced, or High compression based on your text vs. image priority." },
      { title: "Maintain Text Vectors", description: "Compresses images and metadata without pixelating font definitions or document text outlines." },
      { title: "Local Browser Processing", description: "Processes files entirely in your browser memory, keeping your documents confidential." }
    ],
    steps: [
      { title: "Upload PDF", description: "Select the PDF file you wish to shrink by dragging it into the zone above." },
      { title: "Select Compression Level", description: "Choose Low (High Quality), Medium (Balanced), or High (Smallest Size)." },
      { title: "Process Document", description: "Our tool optimizes the file structure client-side in seconds." },
      { title: "Save Compressed File", description: "Download your compressed PDF, ready for email or web portal upload." }
    ],
    tips: [
      "Select 'Low Compression' if your PDF contains fine drawings or high-resolution product photos.",
      "Check the output file size to ensure it complies with your target portal's limits.",
      "Keep a backup copy of your original uncompressed files on your local drive."
    ],
    faqs: [
      { question: "How does the PDF compressor work?", answer: "It cleans metadata, removes duplicate fonts, and compresses embedded images using client-side JavaScript." },
      { question: "Will my PDF quality degrade?", answer: "Text vectors remain sharp. If using Medium or High compression, embedded image resolutions are scaled to save space." },
      { question: "Can I compress password-protected PDFs?", answer: "No, password-protected files must be decrypted before our tool can parse and compress them." },
      { question: "Is there a limit on upload sizes?", answer: "There is no strict limit, but large files require more browser memory to process." },
      { question: "Why is browser-side compression safer?", answer: "Your documents are processed locally, ensuring sensitive business data is never sent to external servers." },
      { question: "What is the difference between the three compression levels?", answer: "Low optimizes metadata; Medium scales images to 150 DPI; High scales images to 72 DPI for maximum compression." },
      { question: "Will my hyperlinks and bookmarks remain active?", answer: "Yes, our tool preserves structural metadata like links and navigation trees." },
      { question: "Is this compression tool free?", answer: "Yes, all our tools are free to use with no hidden charges." }
    ],
    relatedTools: [
      { title: "Merge PDF Tool", href: "/merge-pdf" },
      { title: "PDF to JPG Converter", href: "/pdf-to-jpg" },
      { title: "Edit PDF Tool", href: "/edit-pdf" }
    ]
  },
  "edit-pdf": {
    title: "Online PDF Editor & Page Organizer",
    description: "Rearrange pages, delete unwanted sheets, and rotate layout orientations in your PDF documents online.",
    extendedIntro: "Often, downloaded PDF files contain extra sheets, customer receipts, or blank pages that are not needed. Navigating and managing these files manually can be tedious. Our client-side PDF Editor provides an interactive drag-and-drop interface to reorganize page sequences, rotate individual pages, or delete unnecessary sheets before saving.",
    whenToUse: "Use this editor to prepare shipping label packages (e.g. removing invoices from Easy Ship prints), combine select pages from reports, or clean up scanned documents before emailing them.",
    benefits: [
      { title: "Interactive Reorganization", description: "Drag and drop thumbnails to re-sequence your document pages instantly." },
      { title: "Rotate & Crop", description: "Fix upside-down pages by rotating individual sheets by 90, 180, or 270 degrees." },
      { title: "Browser-Only Sandboxing", description: "Protects your financial reports and invoices by processing files entirely on your computer." }
    ],
    steps: [
      { title: "Select PDF Document", description: "Drag and drop the PDF you wish to edit into the dropzone above." },
      { title: "Reorder Page Canvas", description: "Drag page thumbnails to reorder them, click rotate icons, or delete unwanted sheets." },
      { title: "Compile Document", description: "Click the Compile button to generate your updated PDF structure." },
      { title: "Download Edited PDF", description: "Save the processed document locally, ready for use." }
    ],
    tips: [
      "Use the delete button on invoice pages to save thermal sticker paper.",
      "Verify page orientations in the preview container before downloading.",
      "Save your work periodically when editing large documents."
    ],
    faqs: [
      { question: "Can I edit the actual text inside the PDF?", answer: "This tool focuses on page management (reordering, deleting, rotating). It does not edit the underlying page text content." },
      { question: "Why is the page preview not loading?", answer: "Ensure the PDF is not password-protected and that your browser supports HTML5 Canvas rendering." },
      { question: "Is my document contents private?", answer: "Yes, all processing is handled locally in your browser memory. We never transmit or store your documents." },
      { question: "How many pages can I organize?", answer: "You can manage dozens of pages, though larger documents require more browser memory." },
      { question: "Does it support PDF rotating?", answer: "Yes, you can rotate pages individually using the rotate buttons on each thumbnail." },
      { question: "Will the resolution decrease?", answer: "No, since we only manipulate page structures and metadata, text and image resolutions are preserved." },
      { question: "Can I merge new pages during editing?", answer: "To merge multiple documents, we recommend using our specialized Merge PDF tool." },
      { question: "Is there a registration required?", answer: "No, this tool is free and accessible without registration." }
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
    extendedIntro: "Handling separate image files (such as photo-receipts, handwritten packing notes, or item listings) can complicate documentation and sharing. Our Images to PDF Converter allows you to convert multiple JPG, PNG, or WebP images into a single, clean PDF file directly in your browser. You can arrange the image order and customize margins for a professional layout.",
    whenToUse: "Use this tool to compile scanned documents, photo-receipts, product designs, or package proofs into a single PDF for easy sharing.",
    benefits: [
      { title: "Format Versatility", description: "Supports JPG, PNG, WebP, and SVG files, converting them into standard PDF pages." },
      { title: "Interactive Sorting", description: "Drag and drop your uploaded images to arrange the page order before compiling." },
      { title: "Safe Processing", description: "Image bytes are processed locally in your browser, protecting your photos and receipts." }
    ],
    steps: [
      { title: "Upload Images", description: "Select multiple image files from your computer and upload them." },
      { title: "Set Page Order", description: "Drag and drop the image thumbnails to arrange their sequence in the PDF." },
      { title: "Choose Options", description: "Select page size parameters (A4, A6, or auto-fit image boundaries)." },
      { title: "Convert & Export", description: "Process the files and download your single PDF document." }
    ],
    tips: [
      "Use high-quality images to ensure text in photos remains legible in the PDF.",
      "Check image orientations before compiling to avoid upside-down pages.",
      "Select A4 format if you plan to print the document on standard printer paper."
    ],
    faqs: [
      { question: "What image formats are supported?", answer: "We support JPG, JPEG, PNG, WebP, and SVG files." },
      { question: "Can I choose the page size?", answer: "Yes, you can select standard A4, A6, or auto-fit page sizes to match the original image dimensions." },
      { question: "Are my photos uploaded to a server?", answer: "No. All conversion is processed in your browser memory, ensuring your photos remain private." },
      { question: "Is there a limit on the number of images?", answer: "No strict limit, though uploading many high-resolution images may require more browser memory." },
      { question: "Will my images lose quality?", answer: "Our tool maintains the original resolution and aspect ratio of your images during conversion." },
      { question: "Can I reorder images after uploading?", answer: "Yes, you can drag and drop thumbnails to arrange the pages in your preferred order." },
      { question: "Is this converter free to use?", answer: "Yes, it is completely free with no restrictions." },
      { question: "How does it help with document scanning?", answer: "You can photograph document pages on your mobile phone and compile them into a single PDF." }
    ],
    relatedTools: [
      { title: "PDF to JPG Converter", href: "/pdf-to-jpg" },
      { title: "Merge PDF Tool", href: "/merge-pdf" },
      { title: "Edit PDF Tool", href: "/edit-pdf" }
    ]
  },
  "merge-pdf": {
    title: "Online PDF Merger Tool",
    description: "Combine and join multiple PDF files into a single document online.",
    extendedIntro: "Managing separate PDF documents (like invoices, tax reports, or platform labels) can make file management challenging. Our PDF Merger allows you to combine multiple PDF files into a single, organized document. With drag-and-drop page sorting, you can arrange the file order to compile a professional, unified document.",
    whenToUse: "Use this utility to combine daily sales reports, join label packages from different marketplaces, or merge client contracts into a single file for archiving.",
    benefits: [
      { title: "Drag-and-Drop Sorting", description: "Organize the order of your PDF files using our drag-and-drop list before merging." },
      { title: "Maintain Document Fidelity", description: "Combines documents without affecting text vectors, hyperlinks, or structural details." },
      { title: "Local Browser Processing", description: "Protects your financial reports by compiling files locally on your computer." }
    ],
    steps: [
      { title: "Upload PDF Files", description: "Select the PDF files you want to combine." },
      { title: "Order Documents", description: "Drag and drop the files in the list to set the merging sequence." },
      { title: "Compile Files", description: "Click the Merge button to compile the files client-side." },
      { title: "Download PDF", description: "Save the merged document to your local downloads folder." }
    ],
    tips: [
      "Confirm the document order in the list before clicking the merge button.",
      "Check that none of the uploaded files are password-protected.",
      "Name the output file clearly to keep your documents organized."
    ],
    faqs: [
      { question: "How many PDFs can I merge at once?", answer: "You can combine multiple files, though merging many large documents may require more browser memory." },
      { question: "Will the text in my PDFs remain searchable?", answer: "Yes, our merger preserves text layers, hyperlinks, and document structures." },
      { question: "Are my files stored on your servers?", answer: "No, the files are combined in your browser, ensuring complete privacy." },
      { question: "Can I select specific page ranges to merge?", answer: "To merge specific pages, we recommend using our Edit PDF tool first to organize your pages." },
      { question: "Does it support password-protected PDFs?", answer: "No, files must be unlocked before they can be merged." },
      { question: "Will the file size increase significantly?", answer: "The output file size will be the sum of the input files. You can use our Compress PDF tool to optimize it." },
      { question: "Is this tool free?", answer: "Yes, it is completely free to use." },
      { question: "Can I use this tool on mobile devices?", answer: "Yes, it is fully compatible with mobile web browsers." }
    ],
    relatedTools: [
      { title: "Compress PDF Tool", href: "/compress-pdf" },
      { title: "Edit PDF Tool", href: "/edit-pdf" },
      { title: "Images to PDF", href: "/images-to-pdf" }
    ]
  },
  "pdf-to-jpg": {
    title: "Online PDF to JPG Converter",
    description: "Convert PDF pages into high-quality JPG image files online in your browser.",
    extendedIntro: "Sometimes you need to convert PDF pages into images for presentations, web publishing, or design projects. Our PDF to JPG Converter renders PDF pages onto high-quality HTML5 Canvases client-side, exporting them as JPG files packaged in a ZIP archive.",
    whenToUse: "Use this tool to extract illustrations, convert report pages into slide images, or share documents with users who cannot open PDF files.",
    benefits: [
      { title: "High-Resolution Render", description: "Converts text and vector layers into clean, high-resolution raster images." },
      { title: "ZIP Package Download", description: "Compiles all converted pages into a single ZIP file for easy downloading." },
      { title: "Safe Processing", description: "Renders and converts pages locally, protecting your document contents." }
    ],
    steps: [
      { title: "Upload PDF", description: "Select the PDF file you want to convert into images." },
      { title: "Render Preview", description: "Our tool renders previews of your pages in the browser canvas." },
      { title: "Process Files", description: "The converter generates high-quality JPG images from each page." },
      { title: "Download ZIP", description: "Save the ZIP archive containing all the page images." }
    ],
    tips: [
      "Use high-quality PDFs to ensure text remains clear when converted to images.",
      "Check your downloads folder for the exported ZIP file.",
      "Extract the ZIP archive to access the individual page images."
    ],
    faqs: [
      { question: "What format does it export?", answer: "It exports high-quality JPG images packaged inside a standard ZIP folder." },
      { question: "Are my documents secure?", answer: "Yes, all processing is handled locally in your browser memory." },
      { question: "Does it support multi-page PDFs?", answer: "Yes, it converts all pages and saves them as numbered JPG files in the ZIP folder." },
      { question: "Can I convert protected PDFs?", answer: "No, password-protected files must be unlocked before they can be parsed." },
      { question: "Will I lose text quality?", answer: "The text will be converted to raster pixels. We use a high resolution to keep the text clear." },
      { question: "Do I need to sign up?", answer: "No registration is required to use our tools." },
      { question: "Does this tool work on tablets?", answer: "Yes, it is compatible with modern mobile and tablet web browsers." },
      { question: "Why is the output saved in a ZIP file?", answer: "Saving as a ZIP file allows you to download all page images in a single click, rather than saving them individually." }
    ],
    relatedTools: [
      { title: "Images to PDF", href: "/images-to-pdf" },
      { title: "Merge PDF Tool", href: "/merge-pdf" },
      { title: "Compress PDF Tool", href: "/compress-pdf" }
    ]
  }
};
