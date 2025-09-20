import { Metadata } from 'next';
import EditPdfClient from './EditPdfClient';

export const metadata: Metadata = {
  title: 'Edit PDF Online - Rearrange & Delete Pages | PDF Crop Tool',
  description: 'Edit PDF files online by rearranging and deleting pages. Upload PDF, drag to reorder pages, delete unwanted pages, and download your edited PDF instantly.',
  keywords: 'edit PDF online, rearrange PDF pages, delete PDF pages, PDF editor, PDF page manager, online PDF editing, PDF manipulation',
  alternates: {
    canonical: 'https://pdfcrop.co.in/edit-pdf',
  },
  openGraph: {
    title: 'Edit PDF Online - Rearrange & Delete Pages | PDF Crop Tool',
    description: 'Edit PDF files online by rearranging and deleting pages. Upload PDF, drag to reorder pages, delete unwanted pages, and download your edited PDF instantly.',
    url: 'https://pdfcrop.co.in/edit-pdf',
    type: 'website',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/pdf-editor-tool.jpg',
        width: 1200,
        height: 630,
        alt: 'PDF Editor Tool - Rearrange and Delete PDF Pages Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edit PDF Online - Rearrange & Delete Pages',
    description: 'Edit PDF files online by rearranging and deleting pages. Upload PDF, drag to reorder pages, and download your edited PDF.',
    images: ['https://pdfcrop.co.in/images/pdf-editor-tool.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function EditPdfPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "PDF Editor Tool",
            "description": "Edit PDF files online by rearranging and deleting pages. Upload PDF, drag to reorder pages, delete unwanted pages, and download your edited PDF instantly.",
            "url": "https://pdfcrop.co.in/edit-pdf",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "creator": {
              "@type": "Organization",
              "name": "PDF Crop Tool",
              "url": "https://pdfcrop.co.in"
            },
            "featureList": [
              "Rearrange PDF pages",
              "Delete PDF pages",
              "Drag and drop interface",
              "Preview thumbnails",
              "Batch processing",
              "Free to use",
              "No registration required",
              "Secure processing"
            ],
            "screenshot": "https://pdfcrop.co.in/images/pdf-editor-tool.jpg",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://pdfcrop.co.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Edit PDF",
                  "item": "https://pdfcrop.co.in/edit-pdf"
                }
              ]
            }
          })
        }}
      />
      <EditPdfClient />
    </>
  );
}
