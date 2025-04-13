"use client";

import PDFCropper from "@/components/PDFCropper";
import { platformConfigs } from "@/config/staticData";

export default function MeeshoLabel() {
  return <PDFCropper platformConfig={platformConfigs.meesho} />;
} 