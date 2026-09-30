---
title: "PDF Size Reduction & Document Optimization for Portal Uploads"
description: "Learn how to compress PDF file sizes for tax reports, invoices, and shipping manifests while preserving text vector quality."
author: "PDF Cropper Technical Team"
date: "2026-09-30"
category: "Document Optimization"
tags: ["pdf-compression", "file-size", "pdf-tools", "seller-tips"]
slug: "shipping-cost-optimization"
icon: "⚡"
---

# PDF Size Reduction & Document Optimization for Portal Uploads

When submitting daily sales manifests, GST reports, or bulk order invoices to e-commerce portals, strict file size limits (such as 2MB or 5MB caps) are common. Large PDF files fail upload validation, causing delays in order dispatch processing.

This guide explains how PDF compression algorithms reduce file sizes while maintaining text vector quality.

---

## How PDF Compression Profiles Function

Our [Online PDF Compressor Utility](/compress-pdf) provides three distinct compression profiles:

1. **Low Compression (High Quality):** Deduplicates font resources, cleans document metadata, and preserves full image resolution.
2. **Medium Compression (Balanced ~150 DPI):** Downsamples embedded high-resolution product images to 150 DPI—ideal for web portal uploads where text legibility and moderate file size are required.
3. **High Compression (Max Reduction ~72 DPI):** Downsamples embedded graphics to 72 DPI for maximum file size reduction.

---

## Vector Text vs. Raster Image Compression Behavior

* **Scanned Image PDFs:** PDFs created by scanner apps contain heavy raster image pixels. These files shrink dramatically (often by 50% to 80%) when processed through compression.
* **Vector Text PDFs:** PDFs exported directly from accounting software (like Tally or Zoho) contain mathematical font vectors. These files are already compact; compression cleans metadata and duplicate fonts without degrading text.

---

## Step-by-Step Compression Guide

1. Open our [Compress PDF Tool](/compress-pdf).
2. Upload your PDF file.
3. Select **Medium Compression** (Recommended).
4. Click **Compress PDF** and download your optimized document.

---

## Recommended Next Steps & Related Tools

* **Tutorial Guide:** Read [Saving & Exporting PDF Documents](/tutorials/saving-exporting).
* **Primary Utility:** Use our [Compress PDF Utility](/compress-pdf).
* **Related Tools:** Combine multiple files using [Merge PDF](/merge-pdf) or manage pages with [Edit PDF Tool](/edit-pdf).
