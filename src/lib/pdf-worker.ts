import { pdfjs } from "react-pdf";

export function initializePDFWorker() {
  if (typeof window !== "undefined") {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }
}
