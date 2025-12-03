"use client";

import dynamic from "next/dynamic";

const AmazonLabel = dynamic(() => import("./amazonLabel"), {
  ssr: false,
  loading: () => <div>Loading Amazon Label Tool...</div>,
});

export default function AmazonLabelClient() {
  return <AmazonLabel />;
}
