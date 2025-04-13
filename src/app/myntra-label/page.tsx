"use client";

import PDFCropper from "@/components/PDFCropper";
import { platformConfigs } from "@/config/staticData";

export default function MyntraLabel() {
  return <PDFCropper platformConfig={platformConfigs.myntra} />;
} 