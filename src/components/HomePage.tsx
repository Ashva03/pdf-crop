"use client";

import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
import CustomCrop from "@/components/CustomCrop";
import * as PDFLib from "pdf-lib";
import Loading from "@/components/Loading";
import PDFUpload from "@/components/PDFUpload";
import MonetizationLink from "@/components/MonetizationLink";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f2f4f4;
  padding-top: 64px; // Height of the navigation bar
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px 72px;
  width: 100%;
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const Header = styled.header`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 0;
  position: relative;
  overflow: hidden;
`;

const HeroSection = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;

  h2 {
    color: white !important;
  }
`;

const FeaturesGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  @media (max-width: 449px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
  }
`;

const HowItWorks = styled.section`
  padding: 4rem 0;
`;

const StepsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  .step-number {
    background: #4f46e5;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .step-content {
    flex: 1;

    h3 {
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    p {
      color: #4b5563;
      line-height: 1.6;
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-weight: 800;
  letter-spacing: -0.025em;
`;

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1rem 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:disabled {
    background: #e5e7eb;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const PDFViewer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  min-height: 600px;
`;

const PDFContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PDFContent = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const CropButtonContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const CropButton = styled(Button)`
  min-width: 250px;
  font-size: 1.2rem;
  padding: 1.2rem 2.5rem;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:disabled {
    background: #f3f4f6;
    color: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border: 1px solid #e5e7eb;
  }
`;

const ButtonText = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
`;

const PageControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const FAQSection = styled.section`
  padding: 4rem 0;
`;

const FAQContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const FAQHeader = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
  h3 {
    color: #4f46e5;
    margin: 0;
    font-size: 1.25rem;
    transition: color 0.2s ease;
  }

  &:hover h3 {
    color: #7c3aed;
  }
`;

const FAQContent = styled.div<{ $isOpen: boolean }>`
  padding: ${(props) => (props.$isOpen ? "0 2rem 1.5rem" : "0 2rem")};
  max-height: ${(props) => (props.$isOpen ? "1000px" : "0")};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: max-height 0.4s cubic-bezier(0, 1, 0, 1), opacity 0.2s ease,
    visibility 0s ${(props) => (props.$isOpen ? "0s" : "0.4s")},
    padding 0.2s ease;
  overflow: hidden;
  transform-origin: top;
  transform: translateZ(0);
  will-change: max-height, opacity, padding;

  p {
    color: #4b5563;
    line-height: 1.6;
    margin: 0;
    transition: transform 0.2s ease;
    transform: ${(props) =>
        props.$isOpen
            ? "translateY(0) scale(1)"
            : "translateY(-8px) scale(0.98)"};
  }
`;

const FAQIcon = styled.span<{ $isOpen: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  margin-left: 1rem;
  flex-shrink: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: #4f46e5;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::before {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    transform: translateY(-50%);
  }

  &::after {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    transform: translateX(-50%)
      ${(props) =>
        props.$isOpen ? "rotate(-90deg) scale(0)" : "rotate(0) scale(1)"};
  }
`;

const TestimonialsSection = styled.section`
  padding: 4rem 0;
`;

const TestimonialsGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  @media (max-width: 449px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  .quote {
    color: #4f46e5;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .author {
    font-weight: 600;
    color: #1f2937;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ErrorMessage = styled.div`
  color: red;
  padding: 2rem;
  text-align: center;
`;

const FeatureTitle = styled.h3`
  color: #4f46e5;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const FeatureDescription = styled.p`
  color: #4b5563;
  line-height: 1.6;
`;

// Initialize PDF.js worker
if (typeof window !== "undefined") {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}


export default function HomePage() {
    const [file, setFile] = useState<File | null>(null);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isCustomCropping, setIsCustomCropping] = useState(false);
    const [customCropBox, setCustomCropBox] = useState<{
        x: number;
        y: number;
        width: number;
        height: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openFAQs, setOpenFAQs] = useState<{ [key: string]: boolean }>({});

    // Memoize the PDF.js options
    const pdfOptions = useMemo(
        () => ({
            cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/",
            cMapPacked: true,
        }),
        []
    );

    useEffect(() => {
        // Set up PDF.js worker
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    }, []);

    const onFileChange = (file: File) => {
        setFile(file);
        setCustomCropBox(null);
        setIsCustomCropping(true);
        setError(null);
    };

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
        setError(null);
    };

    const onDocumentLoadError = (error: Error) => {
        console.error("Error loading PDF:", error);
        setError("Failed to load PDF file. Please try again.");
    };

    const handleCustomCrop = (cropBox: {
        x: number;
        y: number;
        width: number;
        height: number;
    }) => {
        setCustomCropBox(cropBox);
        setIsCustomCropping(false);
    };

    const handleCrop = async () => {
        if (!file || !customCropBox) return;

        try {
            setIsLoading(true);
            const pdfBytes = await file.arrayBuffer();
            const pdf = await pdfjs.getDocument({ data: pdfBytes }).promise;
            const pages = pdf.numPages;
            const croppedPdf = await PDFLib.PDFDocument.create();

            // --- Reference Page Info & Target Size/Ratios ---
            const displayWidth = 600; // Width used in the <Page> component
            const renderScale = 5; // Scale for high-quality rendering

            // Get reference page (where selection was made)
            const refPage = await pdf.getPage(pageNumber);
            const refNativeViewport = refPage.getViewport({ scale: 1 });

            // Calculate the actual scale used to display the reference page
            const displayScale = displayWidth / refNativeViewport.width;
            // Get the viewport matching the actual display size
            const refDisplayViewport = refPage.getViewport({ scale: displayScale });

            // Calculate crop selection ratios relative to the DISPLAYED reference page dimensions
            // Ensure customCropBox coordinates are clamped to the display dimensions first
            const clampedX = Math.max(
                0,
                Math.min(customCropBox.x, refDisplayViewport.width)
            );
            const clampedY = Math.max(
                0,
                Math.min(customCropBox.y, refDisplayViewport.height)
            );
            const clampedWidth = Math.max(
                0,
                Math.min(customCropBox.width, refDisplayViewport.width - clampedX)
            );
            const clampedHeight = Math.max(
                0,
                Math.min(customCropBox.height, refDisplayViewport.height - clampedY)
            );

            // Calculate ratios based on clamped values and *actual* display dimensions
            // Avoid division by zero if display dimensions are zero for some reason
            const ratioX =
                refDisplayViewport.width > 0 ? clampedX / refDisplayViewport.width : 0;
            const ratioY =
                refDisplayViewport.height > 0
                    ? clampedY / refDisplayViewport.height
                    : 0;
            const ratioWidth =
                refDisplayViewport.width > 0
                    ? clampedWidth / refDisplayViewport.width
                    : 0;
            const ratioHeight =
                refDisplayViewport.height > 0
                    ? clampedHeight / refDisplayViewport.height
                    : 0;

            // Calculate the TARGET dimensions for the final cropped output pages (Fixed Size)
            // Based on ratios applied to the reference page's NATIVE size, scaled up
            const targetCropWidth = Math.max(
                1,
                Math.floor(ratioWidth * refNativeViewport.width * renderScale)
            );
            const targetCropHeight = Math.max(
                1,
                Math.floor(ratioHeight * refNativeViewport.height * renderScale)
            );
            // --- End Reference Info & Target Size/Ratios ---

            // Process each page
            for (let i = 1; i <= pages; i++) {
                try {
                    const page = await pdf.getPage(i);
                    const nativeViewport = page.getViewport({ scale: 1 });

                    // Calculate dimensions for this page when rendered at high quality
                    const currentRenderWidth = nativeViewport.width * renderScale;
                    const currentRenderHeight = nativeViewport.height * renderScale;
                    const renderViewport = page.getViewport({ scale: renderScale });

                    // Check for invalid render dimensions
                    if (currentRenderWidth <= 0 || currentRenderHeight <= 0) {
                        console.warn(`Skipping page ${i}: Invalid rendered dimensions.`);
                        croppedPdf.addPage([targetCropWidth, targetCropHeight]); // Add blank page
                        continue;
                    }

                    const canvas = document.createElement("canvas");
                    canvas.width = currentRenderWidth;
                    canvas.height = currentRenderHeight;
                    const context = canvas.getContext("2d", { alpha: false });
                    if (!context) {
                        console.warn(`Skipping page ${i}: Could not get canvas context.`);
                        croppedPdf.addPage([targetCropWidth, targetCropHeight]); // Add blank page
                        continue;
                    }

                    context.imageSmoothingEnabled = true;
                    context.imageSmoothingQuality = "high";
                    context.fillStyle = "white";
                    context.fillRect(0, 0, canvas.width, canvas.height);

                    // Render the current page at high quality
                    await page.render({
                        canvasContext: context,
                        viewport: renderViewport,
                        background: "white",
                        intent: "print",
                    }).promise;

                    // --- Calculate Source Crop for THIS page using Ratios ---
                    // Apply ratios to the RENDERED dimensions of the CURRENT page
                    const sourceX = ratioX * currentRenderWidth;
                    const sourceY = ratioY * currentRenderHeight;
                    const sourceWidth = ratioWidth * currentRenderWidth;
                    const sourceHeight = ratioHeight * currentRenderHeight;

                    // Determine the safe source rectangle bounds ON THE CURRENT RENDERED page
                    // Ensure coordinates are within the canvas bounds [0, width/height]
                    const safeSourceX = Math.max(
                        0,
                        Math.min(sourceX, currentRenderWidth)
                    );
                    const safeSourceY = Math.max(
                        0,
                        Math.min(sourceY, currentRenderHeight)
                    );
                    // Calculate end coordinates, also clamped within canvas bounds
                    const safeSourceEndX = Math.max(
                        safeSourceX,
                        Math.min(sourceX + sourceWidth, currentRenderWidth)
                    );
                    const safeSourceEndY = Math.max(
                        safeSourceY,
                        Math.min(sourceY + sourceHeight, currentRenderHeight)
                    );

                    // Calculate the actual width/height we can safely copy from the source canvas
                    const safeSourceWidth = Math.max(0, safeSourceEndX - safeSourceX);
                    const safeSourceHeight = Math.max(0, safeSourceEndY - safeSourceY);
                    // --- End Source Crop Calculation ---

                    // Proceed only if there's a valid area to draw
                    if (safeSourceWidth <= 0 || safeSourceHeight <= 0) {
                        console.warn(
                            `Skipping page ${i}: Calculated crop area has no valid dimensions on this page.`
                        );
                        croppedPdf.addPage([targetCropWidth, targetCropHeight]); // Add blank page
                        continue;
                    }

                    try {
                        // Create the target canvas with the FIXED dimensions
                        const croppedCanvas = document.createElement("canvas");
                        croppedCanvas.width = targetCropWidth;
                        croppedCanvas.height = targetCropHeight;

                        const croppedContext = croppedCanvas.getContext("2d", {
                            alpha: false,
                        });
                        if (!croppedContext) {
                            console.warn(
                                `Skipping page ${i}: Could not get cropped canvas context.`
                            );
                            croppedPdf.addPage([targetCropWidth, targetCropHeight]); // Add blank page
                            continue;
                        }

                        croppedContext.imageSmoothingEnabled = true;
                        croppedContext.imageSmoothingQuality = "high";
                        croppedContext.fillStyle = "white";
                        croppedContext.fillRect(
                            0,
                            0,
                            croppedCanvas.width,
                            croppedCanvas.height
                        ); // Fill background

                        // --- Calculate destination dimensions to preserve aspect ratio ---
                        const scale = Math.min(
                            targetCropWidth / safeSourceWidth,
                            targetCropHeight / safeSourceHeight
                        );
                        const destWidth = safeSourceWidth * scale;
                        const destHeight = safeSourceHeight * scale;
                        // Center the image within the target canvas
                        const destX = (targetCropWidth - destWidth) / 2;
                        const destY = (targetCropHeight - destHeight) / 2;
                        // --- End Aspect Ratio Calculation ---

                        // Draw the safe source portion onto the target canvas,
                        // scaling it to fit while preserving aspect ratio and centering.
                        croppedContext.drawImage(
                            canvas, // Source canvas (current page render)
                            safeSourceX, // Source rectangle X
                            safeSourceY, // Source rectangle Y
                            safeSourceWidth, // Source rectangle Width
                            safeSourceHeight, // Source rectangle Height
                            destX, // Destination X (centered)
                            destY, // Destination Y (centered)
                            destWidth, // Destination Width (scaled)
                            destHeight // Destination Height (scaled)
                        );

                        // Convert target canvas to PNG
                        const croppedImageBlob = await new Promise<Blob>((resolve) => {
                            croppedCanvas.toBlob(
                                (blob) => {
                                    resolve(blob || new Blob());
                                },
                                "image/png",
                                1.0
                            );
                        });

                        // Convert blob to bytes for embedding
                        const croppedImageBytes = await croppedImageBlob.arrayBuffer();

                        // Embed the image in the PDF
                        const pngImage = await croppedPdf.embedPng(
                            new Uint8Array(croppedImageBytes)
                        );

                        // Create a new page with the exact TARGET dimensions
                        const newPage = croppedPdf.addPage([
                            targetCropWidth,
                            targetCropHeight,
                        ]);

                        // Draw the image to fill the new page
                        newPage.drawImage(pngImage, {
                            x: 0,
                            y: 0,
                            width: targetCropWidth, // Use target dimensions
                            height: targetCropHeight, // Use target dimensions
                        });
                    } catch (pageError) {
                        console.error(`Error processing page ${i}:`, pageError);
                        croppedPdf.addPage([targetCropWidth, targetCropHeight]); // Add blank page
                        continue;
                    }
                } catch (pageError) {
                    console.error(`Error rendering page ${i}:`, pageError);
                    croppedPdf.addPage([targetCropWidth, targetCropHeight]); // Add blank page
                    continue;
                }
            }

            // Only proceed if we have pages in the document
            if (croppedPdf.getPageCount() > 0) {
                const croppedPdfBytes = await croppedPdf.save();
                const blob = new Blob([croppedPdfBytes], { type: "application/pdf" });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "cropped.pdf";
                link.click();
                URL.revokeObjectURL(url);
            } else {
                setError(
                    "Failed to crop any pages. Please check your selection or the PDF file."
                );
            }
        } catch (error) {
            console.error("Error cropping PDF:", error);
            setError("Error cropping PDF. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handlePageChange = (delta: number) => {
        if (!numPages) return;
        setPageNumber((prev) => {
            const newPage = prev + delta;
            return Math.max(1, Math.min(newPage, numPages));
        });
    };

    const toggleFAQ = (id: string) => {
        setOpenFAQs((prev) => {
            // Create a new object with all FAQs closed
            const allClosed = Object.keys(prev).reduce((acc, key) => {
                acc[key] = false;
                return acc;
            }, {} as { [key: string]: boolean });

            // Toggle the clicked FAQ (if it was open, it will be closed; if it was closed, it will be opened)
            return {
                ...allClosed,
                [id]: !prev[id],
            };
        });
    };

    return (
        <Container>
            {isLoading && (
                <LoadingOverlay>
                    <Loading />
                </LoadingOverlay>
            )}

            <Header>
                <HeroSection>
                    <Title>PDF Cropper</Title>
                    <Description>
                        Crop your PDF documents with precision. Perfect for e-commerce
                        platforms and business documents. Select a predefined template or
                        create your own custom crop.
                    </Description>
                    <MonetizationLink />
                </HeroSection>
            </Header>

            <MainContent>
                <PDFUpload onFileSelect={onFileChange} maxFileSize={100} />

                {file && (
                    <PDFViewer>
                        <PDFContainer>
                            <PDFContent>
                                <div style={{ position: "relative" }}>
                                    <Document
                                        file={file}
                                        onLoadSuccess={onDocumentLoadSuccess}
                                        onLoadError={onDocumentLoadError}
                                        loading={
                                            <div style={{ padding: "2rem", textAlign: "center" }}>
                                                Loading PDF...
                                            </div>
                                        }
                                        error={
                                            <div
                                                style={{
                                                    color: "red",
                                                    padding: "2rem",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {error || "Failed to load PDF file. Please try again."}
                                            </div>
                                        }
                                        options={pdfOptions}
                                    >
                                        <Page
                                            pageNumber={pageNumber}
                                            width={600}
                                            renderTextLayer={false}
                                        />
                                    </Document>
                                    {isCustomCropping && (
                                        <CustomCrop
                                            onCrop={handleCustomCrop}
                                            onCancel={() => setIsCustomCropping(false)}
                                        />
                                    )}
                                </div>
                            </PDFContent>
                            {numPages && numPages > 1 && (
                                <PageControls>
                                    <Button
                                        onClick={() => handlePageChange(-1)}
                                        disabled={pageNumber === 1}
                                    >
                                        Previous
                                    </Button>
                                    <span>
                                        Page {pageNumber} of {numPages}
                                    </span>
                                    <Button
                                        onClick={() => handlePageChange(1)}
                                        disabled={pageNumber === numPages}
                                    >
                                        Next
                                    </Button>
                                </PageControls>
                            )}
                            <CropButtonContainer>
                                <CropButton
                                    onClick={handleCrop}
                                    disabled={!file || !customCropBox}
                                >
                                    <ButtonText>
                                        {customCropBox ? (
                                            <>
                                                <ButtonIcon>📥</ButtonIcon>
                                                Download Cropped PDF
                                            </>
                                        ) : (
                                            <>
                                                <ButtonIcon>✏️</ButtonIcon>
                                                Select Area to Crop
                                            </>
                                        )}
                                    </ButtonText>
                                </CropButton>
                            </CropButtonContainer>
                        </PDFContainer>
                    </PDFViewer>
                )}

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <FeaturesSection id="features">
                    <h2
                        style={{
                            textAlign: "center",
                            marginBottom: "3rem",
                            fontSize: "2.5rem",
                            color: "#1f2937",
                        }}
                    >
                        Powerful Features
                    </h2>
                    <FeaturesGrid>
                        <FeatureCard>
                            <FeatureTitle>Precise Cropping</FeatureTitle>
                            <FeatureDescription>
                                Crop your PDFs with pixel-perfect precision. Our advanced tools
                                ensure accurate results every time.
                            </FeatureDescription>
                        </FeatureCard>
                        <FeatureCard>
                            <FeatureTitle>Multiple Templates</FeatureTitle>
                            <FeatureDescription>
                                Choose from a variety of predefined templates or create your own
                                custom crop settings.
                            </FeatureDescription>
                        </FeatureCard>
                        <FeatureCard>
                            <FeatureTitle>Batch Processing</FeatureTitle>
                            <FeatureDescription>
                                Process multiple PDFs at once with our efficient batch cropping
                                feature.
                            </FeatureDescription>
                        </FeatureCard>
                        <FeatureCard>
                            <FeatureTitle>Secure Processing</FeatureTitle>
                            <FeatureDescription>
                                Your documents are processed securely in your browser. No data
                                leaves your device.
                            </FeatureDescription>
                        </FeatureCard>
                    </FeaturesGrid>
                </FeaturesSection>

                <HowItWorks id="how-it-works">
                    <h2
                        style={{
                            textAlign: "center",
                            marginBottom: "3rem",
                            fontSize: "2.5rem",
                            color: "#1f2937",
                        }}
                    >
                        How It Works
                    </h2>
                    <StepsContainer>
                        <Step>
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Upload Your PDF</h3>
                                <p>
                                    Simply drag and drop your PDF file or click to browse. We
                                    support all standard PDF formats.
                                </p>
                            </div>
                        </Step>
                        <Step>
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Select Crop Area</h3>
                                <p>
                                    Use our intuitive interface to draw the exact area you want to
                                    crop. Preview your selection in real-time.
                                </p>
                            </div>
                        </Step>
                        <Step>
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Download Your Cropped PDF</h3>
                                <p>
                                    Get your perfectly cropped PDF instantly. Your document is
                                    ready to use right away.
                                </p>
                            </div>
                        </Step>
                    </StepsContainer>
                </HowItWorks>

                <FAQSection>
                    <h2
                        style={{
                            textAlign: "center",
                            marginBottom: "3rem",
                            fontSize: "2.5rem",
                            color: "#1f2937",
                        }}
                    >
                        Frequently Asked Questions
                    </h2>
                    <FAQContainer>
                        <FAQItem>
                            <FAQHeader onClick={() => toggleFAQ("faq1")}>
                                <h3>What types of PDFs can I crop?</h3>
                                <FAQIcon $isOpen={openFAQs["faq1"]} />
                            </FAQHeader>
                            <FAQContent $isOpen={openFAQs["faq1"]}>
                                <p>
                                    Our PDF cropping tool supports all standard PDF formats,
                                    including scanned documents, digital PDFs, and multi-page
                                    documents. Whether you&apos;re working with invoices,
                                    receipts, contracts, or any other PDF document, our tool can
                                    help you extract the exact content you need.
                                </p>
                            </FAQContent>
                        </FAQItem>
                        <FAQItem>
                            <FAQHeader onClick={() => toggleFAQ("faq2")}>
                                <h3>Is my data secure?</h3>
                                <FAQIcon $isOpen={openFAQs["faq2"]} />
                            </FAQHeader>
                            <FAQContent $isOpen={openFAQs["faq2"]}>
                                <p>
                                    Yes, your data security is our top priority. All PDF
                                    processing is done locally in your browser, and we don&apos;t
                                    store any of your documents on our servers. Your files remain
                                    completely private and secure throughout the cropping process.
                                </p>
                            </FAQContent>
                        </FAQItem>
                        <FAQItem>
                            <FAQHeader onClick={() => toggleFAQ("faq3")}>
                                <h3>Can I crop multiple pages at once?</h3>
                                <FAQIcon $isOpen={openFAQs["faq3"]} />
                            </FAQHeader>
                            <FAQContent $isOpen={openFAQs["faq3"]}>
                                <p>
                                    Absolutely! Our tool supports multi-page PDF cropping. You can
                                    apply the same crop area to multiple pages or use different
                                    crop areas for different pages, giving you complete control
                                    over your document editing process.
                                </p>
                            </FAQContent>
                        </FAQItem>
                    </FAQContainer>
                </FAQSection>

                <TestimonialsSection>
                    <h2
                        style={{
                            textAlign: "center",
                            marginBottom: "3rem",
                            fontSize: "2.5rem",
                            color: "#1f2937",
                        }}
                    >
                        What Our Users Say
                    </h2>
                    <TestimonialsGrid>
                        <TestimonialCard>
                            <div className="quote">&ldquo;</div>
                            <p>
                                This PDF cropping tool has revolutionized how we handle our
                                document processing. The precision and ease of use are
                                unmatched.
                            </p>
                            <div className="author">- Sarah Johnson, Document Manager</div>
                        </TestimonialCard>
                        <TestimonialCard>
                            <div className="quote">&ldquo;</div>
                            <p>
                                As a small business owner, this tool has saved me countless
                                hours of manual document editing. Highly recommended!
                            </p>
                            <div className="author">- Michael Chen, Business Owner</div>
                        </TestimonialCard>
                        <TestimonialCard>
                            <div className="quote">&ldquo;</div>
                            <p>
                                The quality of the cropped PDFs is exceptional. It&apos;s become
                                an essential tool in our daily workflow.
                            </p>
                            <div className="author">
                                - Emily Rodriguez, Office Administrator
                            </div>
                        </TestimonialCard>
                    </TestimonialsGrid>
                </TestimonialsSection>
            </MainContent>
        </Container>
    );
}
