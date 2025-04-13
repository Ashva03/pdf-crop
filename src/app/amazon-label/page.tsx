"use client";

import PDFCropper from "@/components/PDFCropper";
import { platformConfigs } from "@/config/staticData";

export default function AmazonLabel() {
  return <PDFCropper platformConfig={platformConfigs.amazon} />;
} 