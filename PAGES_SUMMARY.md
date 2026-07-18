# PDF Cropper - Pages Summary & Future Improvements

This document lists all the page routes in the repository with a short summary and recommendations for future enhancements and implementation details.

---

## 1. Core Landing Page & Hub

### [Home Page](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/page.tsx)
* **Route:** `/`
* **File Location:** `src/app/page.tsx` (uses `src/components/HomePage.tsx`)
* **Summary:** The main entrance of the application. Details all the primary shipping label cropping services (Flipkart, Amazon, Meesho, Snapdeal, Myntra) and auxiliary PDF tools (Compress, Edit, Merge, JPG conversion). Configured with rich JSON-LD Schema.org metadata to maximize SEO listing performance.
* **Future Improvements:**
  - Add interactive tool-selection wizard (asking a user "Which platform are you printing for?" and directing them automatically).
  - Add stats counter showing cumulative usage metrics (processed client-side or loaded from safe DB) to build trust.
  - Implement dynamic recent files history in local storage for repeat seller visitors.

---

## 2. E-Commerce Shipping Label Croppers (Specialized Pages)

Each seller page isolates shipping labels from standard platform PDF downloads, tailoring boundaries to A6 or thermal labels.

### [Amazon PDF Label Cropper](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/amazon-label/page.tsx)
* **Route:** `/amazon-label`
* **File Location:** `src/app/amazon-label/page.tsx` (uses `src/app/amazon-label/amazonLabel.tsx`)
* **Summary:** Crops Amazon FBA/FBM shipping labels and features an **ASIN/SKU text extractor**. It automatically matches odd pages (shipping label) with even pages (invoices), extracts text from invoice pages client-side using `pdf.js`, processes SKU/ASIN details via regular expressions, and overlays them in a clear, formatted box onto the shipping label itself. It supports removing the invoice pages entirely from the output PDF to save thermal paper.
* **Future Improvements:**
  - Enhance regex parser (`extractSkuInfo`) to adapt to international Amazon invoice formats (e.g. EU, US).
  - Allow customization of SKU overlay style (font size, box size, border styles, position on label).
  - Add manual field mapping overlay if automatic SKU text extraction fails.

### [Flipkart PDF Label Cropper](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/flipkart-label/page.tsx)
* **Route:** `/flipkart-label`
* **File Location:** `src/app/flipkart-label/page.tsx` (uses `src/app/flipkart-label/flipkartLabel.tsx`)
* **Summary:** Crops Flipkart shipping labels generated in Flipkart Seller Hub. Adapts dimensions to Ekart standard A6 shipping boundaries.
* **Future Improvements:**
  - Automatically detect the number of crop regions per A4 page to support multiple labels on a single sheet.
  - Allow customizable templates depending on Flipkart Fulfillment model variations (e.g. Smart Fulfillment vs. Lite).

### [Meesho PDF Label Cropper](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/meesho-label/page.tsx)
* **Route:** `/meesho-label`
* **File Location:** `src/app/meesho-label/page.tsx` (uses `src/app/meesho-label/meeshoLabel.tsx`)
* **Summary:** Crops Meesho e-commerce label documents to standard sizes suitable for thermal stickers.
* **Future Improvements:**
  - Keep crop configurations updated as Meesho frequently optimizes their PDF print template formats.
  - Crop and merge multiple Meesho A6 labels from a bulk PDF into a compact grid page.

### [Myntra PDF Label Cropper](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/myntra-label/page.tsx)
* **Route:** `/myntra-label`
* **File Location:** `src/app/myntra-label/page.tsx` (uses `src/components/PDFCropper.tsx` with Myntra configuration)
* **Summary:** Specifically tailored to Myntra marketplace shipping labels, matching coordinates via `myntraLabelCropDimensions`.
* **Future Improvements:**
  - Integrate a SKU/item catalog details overlay (similar to Amazon SKU overlay) to help packagers match items accurately.

### [Snapdeal PDF Label Cropper](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/snapdeal-label/page.tsx)
* **Route:** `/snapdeal-label`
* **File Location:** `src/app/snapdeal-label/page.tsx` (uses `src/app/snapdeal-label/snapdealLabel.tsx`)
* **Summary:** Standard cropping interface calibrated for Snapdeal A6 dimensions.
* **Future Improvements:**
  - Fine-tune preset crop coordinate offsets (`snapdealLabelCropDimensions`) based on live vendor labels feedback.

---

## 3. General Purpose Utility PDF Tools

### [Compress PDF](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/compress-pdf/page.tsx)
* **Route:** `/compress-pdf`
* **File Location:** `src/app/compress-pdf/page.tsx` (uses `src/app/compress-pdf/CompressPdfClient.tsx`)
* **Summary:** Re-saves uploaded PDFs using backend API `/api/compress-pdf` with `pdf-lib` stream compression settings to reduce file sizing.
* **Future Improvements:**
  - Current server-side `pdf-lib` saving does not downscale embedded high-res images. Incorporate server-side image compression (e.g. using `sharp` or `pdf-lib` image resampling wrapper libraries).
  - Add resolution toggle controls in UI (e.g. Low, Medium, High compression).

### [Edit PDF](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/edit-pdf/page.tsx)
* **Route:** `/edit-pdf`
* **File Location:** `src/app/edit-pdf/page.tsx` (uses `src/app/edit-pdf/EditPdfClient.tsx`)
* **Summary:** Interactive drag-and-drop client interface to re-arrange pages, rotate them, or strip out unwanted pages, then posts data to `/api/edit-pdf` to rebuild the PDF.
* **Future Improvements:**
  - Port compilation fully client-side using `pdf-lib` to make execution instantaneous and completely private (avoiding upload/download roundtrips to the server).
  - Add individual page text editing or annotations overlay.

### [Images to PDF](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/images-to-pdf/page.tsx)
* **Route:** `/images-to-pdf`
* **File Location:** `src/app/images-to-pdf/page.tsx`
* **Summary:** Converts multiple JPG/PNG images into a single PDF, sizing each page and preserving proportions. Sends processing to `/api/images-to-pdf`.
* **Future Improvements:**
  - Move code client-side using canvas/web workers to generate PDFs without stressing server-side resources.
  - Support setting layout size options (e.g. A4, A6, Auto-detect image size, Letter).

### [Merge PDF](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/merge-pdf/page.tsx)
* **Route:** `/merge-pdf`
* **File Location:** `src/app/merge-pdf/page.tsx`
* **Summary:** Joins multiple PDFs into one unified file. Uses `@dnd-kit/core` and `@dnd-kit/sortable` to drag and drop files in desired order, then uploads files to `/api/merge-pdf` for concatenation.
* **Future Improvements:**
  - Move merging logic entirely client-side using `pdf-lib`'s `copyPages` and `addPage` APIs.
  - Enable choosing specific page ranges per PDF file before merging.

### [PDF to JPG](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/pdf-to-jpg/page.tsx)
* **Route:** `/pdf-to-jpg`
* **File Location:** `src/app/pdf-to-jpg/page.tsx`
* **Summary:** Converts PDF document pages to JPG images in the browser. Uses `pdfjs-dist` to render pages to HTML5 Canvas, extracting JPGs and exporting them in a ZIP bundle using `jszip`.
* **Future Improvements:**
  - Add export options for PNG and WebP formats.
  - Offer resolution adjustment slider (e.g., 72 DPI, 150 DPI, 300 DPI, 600 DPI) for sharper text exports.

---

## 4. Documentation & Educational Pages

These pages offer help, walk-through tutorials, and informational posts to improve user engagement and SEO keyword traffic.

### [Tutorials Hub](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/tutorials/page.tsx)
* **Route:** `/tutorials`
* **File Location:** `src/app/tutorials/page.tsx`
* **Summary:** The main portal displaying step-by-step cropping guides for beginners and advanced sellers.
* **Future Improvements:**
  - Integrate video players or lightweight GIFs demonstrating actions.
  - Add search bar to easily browse tutorials.

### Tutorials Sub-Pages
* **Getting Started:** `/tutorials/getting-started` -> [getting-started/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/tutorials/getting-started/page.tsx)
* **Interface Overview:** `/tutorials/interface-overview` -> [interface-overview/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/tutorials/interface-overview/page.tsx)
* **Basic Cropping:** `/tutorials/basic-cropping` -> [basic-cropping/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/tutorials/basic-cropping/page.tsx)
* **Advanced Cropping:** `/tutorials/advanced-cropping` -> [advanced-cropping/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/tutorials/advanced-cropping/page.tsx)
* **Batch Processing:** `/tutorials/batch-processing` -> [batch-processing/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/tutorials/batch-processing/page.tsx)
* **Custom Templates:** `/tutorials/custom-templates` -> [custom-templates/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/tutorials/custom-templates/page.tsx)
* **Quality Settings:** `/tutorials/quality-settings` -> [quality-settings/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/tutorials/quality-settings/page.tsx)
* **Saving & Exporting:** `/tutorials/saving-exporting` -> [saving-exporting/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/tutorials/saving-exporting/page.tsx)
* **Summary:** Structured step-by-step guides covering settings, custom layout templates, batching, and saving outputs.
* **Future Improvements:**
  - Add user ratings or feedback buttons ("Was this guide helpful?").

---

## 5. Blog Section (SEO Content & E-commerce Strategy)

Guides to drive traffic to the site by answering common seller problems related to shipping, inventory, and logistics.

### [Blog Hub](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/blog/page.tsx)
* **Route:** `/blog`
* **File Location:** `src/app/blog/page.tsx`
* **Summary:** Landing page showing summaries of ecommerce logistics articles, linking to details.
* **Future Improvements:**
  - Migrate static routes to dynamic MDX parsing, so new posts can be loaded from markdown files without code changes.

### Blog Post Sub-Pages
* **Customer Service:** `/blog/customer-service-ecommerce` -> [customer-service-ecommerce/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/blog/customer-service-ecommerce/page.tsx)
* **Inventory Management:** `/blog/inventory-management-ecommerce` -> [inventory-management-ecommerce/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/blog/inventory-management-ecommerce/page.tsx)
* **Scaling Shipping:** `/blog/scaling-shipping-operations` -> [scaling-shipping-operations/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/blog/scaling-shipping-operations/page.tsx)
* **Shipping Carriers India:** `/blog/shipping-carrier-options-india` -> [shipping-carrier-options-india/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/blog/shipping-carrier-options-india/page.tsx)
* **Shipping Cost Optimization:** `/blog/shipping-cost-optimization` -> [shipping-cost-optimization/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/blog/shipping-cost-optimization/page.tsx)
* **Label Best Practices:** `/blog/shipping-label-best-practices` -> [shipping-label-best-practices/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/blog/shipping-label-best-practices/page.tsx)
* **Label Standards:** `/blog/shipping-label-standards` -> [shipping-label-standards/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/blog/shipping-label-standards/page.tsx)
* **Troubleshooting:** `/blog/shipping-label-troubleshooting` -> [shipping-label-troubleshooting/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/blog/shipping-label-troubleshooting/page.tsx)
* **Summary:** Concrete strategic guides detailing shipping, packaging regulations, and business tips.
* **Future Improvements:**
  - Add search bar, category filters, and an email newsletter subscription box.

---

## 6. Static Information & Legal Pages

Pages outlining service details, privacy policies, terms, and contacts.

* **About Us:** `/about` -> [about/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/about/page.tsx)
  - Detail: Describes tool safety and security features (purely browser-based processing, data privacy).
* **Contact:** `/contact` -> [contact/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/contact/page.tsx)
  - Detail: User inquiry form.
* **Support:** `/support` -> [support/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/support/page.tsx)
  - Detail: Help center ticketing UI page.
* **FAQ:** `/faq` -> [faq/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/faq/page.tsx)
  - Detail: Comprehensive answers regarding billing, sizes, browser compatibility.
* **Features:** `/features` -> [features/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/features/page.tsx)
  - Detail: Outlines the benefits of PDF Cropper (resolution quality, batch mode, speed).
* **How It Works:** `/how-it-works` -> [how-it-works/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/how-it-works/page.tsx)
  - Detail: Step-by-step user instructions for cropping labels.
* **Documentation:** `/documentation` -> [documentation/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/documentation/page.tsx)
  - Detail: Standard software usage docs.
* **Case Studies:** `/case-studies` -> [case-studies/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/case-studies/page.tsx)
  - Detail: Outlines customer success stories.
* **Privacy Policy:** `/privacy-policy` -> [privacy-policy/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/privacy-policy/page.tsx)
  - Detail: Explains data security and privacy protocols.
* **Cookie Policy:** `/cookie-policy` -> [cookie-policy/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/cookie-policy/page.tsx)
  - Detail: Cookies and analytics tracking configuration information.
* **Terms & Conditions:** `/terms` -> [terms/page.tsx](file:///c:/Users/anike/OneDrive/Documents/GitHub/pdf-crop/src/app/terms/page.tsx)
  - Detail: Legal agreement regarding usage rules.

### Future Improvements for Static/Legal Pages:
- Unify CSS styles under a shared module or Tailwind layout rather than duplicating inline styled-components across multiple files.
- Enable dynamically populated FAQs from a JSON file.
