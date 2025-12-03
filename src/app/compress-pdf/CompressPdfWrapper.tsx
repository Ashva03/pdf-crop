"use client";

import dynamic from "next/dynamic";

const CompressPdfClient = dynamic(() => import("./CompressPdfClient"), {
  ssr: false,
  loading: () => <div>Loading PDF Compressor...</div>,
});

export default function CompressPdfWrapper() {
  return <CompressPdfClient />;
}
