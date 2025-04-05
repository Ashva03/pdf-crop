'use client'

import { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { Document, Page, pdfjs } from 'react-pdf'
// import { PDFDocument } from 'pdf-lib'
import CustomCrop from '@/components/CustomCrop'
import * as PDFLib from 'pdf-lib'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
`

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #0070f3 0%, #00a8ff 100%);
  padding: 3rem 0;
  color: white;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`

const UploadSection = styled.div`
  background: white;
  border: 2px dashed #0070f3;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: #00a8ff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

const Select = styled.select`
  padding: 0.75rem;
  margin: 1rem 0;
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
  }
`

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin: 1rem 0;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0051b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

const PDFViewer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .react-pdf__Document {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .react-pdf__Page {
    position: relative;
    margin-bottom: 1rem;
  }

  .react-pdf__Page canvas {
    max-width: 100%;
    height: auto !important;
  }
`

const PageControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
`

const Footer = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 3rem 0;
  margin-top: 4rem;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const FooterSection = styled.div`
  h3 {
    color: #0070f3;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0070f3;
    }
  }
`

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #333;
`

const cropOptions = [
  { value: '', label: 'Select Crop Type' },
  { value: 'flipkart', label: 'Flipkart Invoice' },
  { value: 'myntra', label: 'Myntra Invoice' },
  { value: 'meesho', label: 'Meesho Invoice' },
  { value: 'custom', label: 'Custom Crop' },
]

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [selectedCrop, setSelectedCrop] = useState('')
  const [isCustomCropping, setIsCustomCropping] = useState(false)
  const [customCropBox, setCustomCropBox] = useState<{ x: number; y: number; width: number; height: number } | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Memoize the PDF.js options
  const pdfOptions = useMemo(() => ({
    cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
    cMapPacked: true,
  }), [])

  useEffect(() => {
    // Set up PDF.js worker
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js`
  }, [])

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'application/pdf') {
      setFile(file)
      setCustomCropBox(null)
      setSelectedCrop('')
      setError(null)
    }
  }

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setError(null)
  }

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error)
    setError('Failed to load PDF file. Please try again.')
  }

  const handleCustomCrop = (cropBox: { x: number; y: number; width: number; height: number }) => {
    setCustomCropBox(cropBox)
    setIsCustomCropping(false)
  }

  const handleCrop = async () => {
    if (!file || !customCropBox) return

    try {
      const pdfBytes = await file.arrayBuffer()
      const pdf = await pdfjs.getDocument({ data: pdfBytes }).promise
      const pages = pdf.numPages
      const croppedPdf = await PDFLib.PDFDocument.create()

      for (let i = 1; i <= pages; i++) {
        const page = await pdf.getPage(i)
        const viewport = page.getViewport({ scale: 2 })
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        if (!context) continue

        canvas.width = viewport.width
        canvas.height = viewport.height

        context.imageSmoothingEnabled = true
        context.imageSmoothingQuality = 'high'

        await page.render({
          canvasContext: context,
          viewport: viewport
        }).promise

        const imageData = context.getImageData(
          customCropBox.x * 2,
          customCropBox.y * 2,
          customCropBox.width * 2,
          customCropBox.height * 2
        )

        const croppedCanvas = document.createElement('canvas')
        const croppedContext = croppedCanvas.getContext('2d')
        if (!croppedContext) continue

        croppedCanvas.width = customCropBox.width * 2
        croppedCanvas.height = customCropBox.height * 2

        croppedContext.imageSmoothingEnabled = true
        croppedContext.imageSmoothingQuality = 'high'

        croppedContext.putImageData(imageData, 0, 0)

        const croppedImageBytes = await new Promise<Uint8Array>((resolve) => {
          croppedCanvas.toBlob((blob) => {
            if (blob) {
              const reader = new FileReader()
              reader.onloadend = () => {
                const arrayBuffer = reader.result as ArrayBuffer
                resolve(new Uint8Array(arrayBuffer))
              }
              reader.readAsArrayBuffer(blob)
            }
          }, 'image/png', 1.0)
        })

        const croppedImage = await croppedPdf.embedPng(croppedImageBytes)
        const croppedPage = croppedPdf.addPage([customCropBox.width * 2, customCropBox.height * 2])
        croppedPage.drawImage(croppedImage, {
          x: 0,
          y: 0,
          width: customCropBox.width * 2,
          height: customCropBox.height * 2
        })
      }

      const croppedPdfBytes = await croppedPdf.save()
      const blob = new Blob([croppedPdfBytes], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'cropped.pdf'
      link.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error cropping PDF:', error)
      alert('Error cropping PDF. Please try again.')
    }
  }

  const handlePageChange = (delta: number) => {
    if (!numPages) return
    setPageNumber(prev => {
      const newPage = prev + delta
      return Math.max(1, Math.min(newPage, numPages))
    })
  }

  return (
    <Container>
      <Header>
        <Title>PDF Cropper</Title>
        <Description>
          Crop your PDF documents with precision. Perfect for e-commerce platforms and business documents.
          Select a predefined template or create your own custom crop.
        </Description>
      </Header>

      <MainContent>
        <UploadSection>
          <input
            type="file"
            accept=".pdf"
            onChange={onFileChange}
            style={{ marginBottom: '1rem' }}
          />

          <Select
            value={selectedCrop}
            onChange={(e) => {
              setSelectedCrop(e.target.value)
              if (e.target.value === 'custom') {
                setIsCustomCropping(true)
              }
            }}
            disabled={!file}
          >
            {cropOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>

          <Button
            onClick={handleCrop}
            disabled={!file || !selectedCrop || (selectedCrop === 'custom' && !customCropBox)}
          >
            Crop PDF
          </Button>
        </UploadSection>

        {file && (
          <PDFViewer>
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading PDF...</div>}
              error={
                <div style={{ color: 'red', padding: '2rem', textAlign: 'center' }}>
                  {error || 'Failed to load PDF file. Please try again.'}
                </div>
              }
              options={pdfOptions}
            >
              <div style={{ position: 'relative' }}>
                <Page
                  pageNumber={pageNumber}
                  width={600}
                  renderTextLayer={false}
                />
                {isCustomCropping && (
                  <CustomCrop
                    onCrop={handleCustomCrop}
                    onCancel={() => setIsCustomCropping(false)}
                  />
                )}
              </div>
            </Document>
            {numPages && numPages > 1 && (
              <PageControls>
                <Button onClick={() => handlePageChange(-1)} disabled={pageNumber === 1}>
                  Previous
                </Button>
                <span>Page {pageNumber} of {numPages}</span>
                <Button onClick={() => handlePageChange(1)} disabled={pageNumber === numPages}>
                  Next
                </Button>
              </PageControls>
            )}
          </PDFViewer>
        )}
      </MainContent>

      <Footer>
        <FooterContent>
          <FooterSection>
            <h3>About Us</h3>
            <p>Professional PDF cropping tool designed for e-commerce platforms and business documents.</p>
            <ul>
              <li>Fast and efficient</li>
              <li>Multiple crop templates</li>
              <li>Custom crop options</li>
              <li>Batch processing</li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">GDPR Compliance</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Contact</h3>
            <ul>
              <li>Email: support@pdfcropper.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Business St, Suite 100</li>
            </ul>
          </FooterSection>
        </FooterContent>
        <Copyright>
          <p>&copy; {new Date().getFullYear()} PDF Cropper. All rights reserved.</p>
        </Copyright>
      </Footer>
    </Container>
  )
}
