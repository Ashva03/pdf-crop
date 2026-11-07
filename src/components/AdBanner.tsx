"use client";

import React, { useEffect } from "react";
import styled from "styled-components";

const AdContainer = styled.div`
  margin: 2rem auto;
  text-align: center;
  max-width: 1000px;
  width: 100%;
  overflow: hidden;
  padding: 0 1rem;
`;

const AdLabel = styled.span`
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #9ca3af;
  margin-bottom: 0.35rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const AdSlot = styled.div`
  min-height: 90px;
  background-color: #f9fafb;
  border: 1px dashed #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface AdBannerProps {
  slotId?: string;
  format?: "auto" | "rectangle" | "horizontal";
  className?: string;
}

export default function AdBanner({
  slotId = "1234567890",
  format = "auto",
  className,
}: AdBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        // @ts-expect-error Google adsbygoogle queue push
        ((window as unknown).adsbygoogle = (window as unknown).adsbygoogle || []).push({});
      }
    } catch {
      // Ignore in dev mode or with ad blockers
    }
  }, []);

  return (
    <AdContainer className={className}>
      <AdLabel>Advertisement</AdLabel>
      <AdSlot>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%" }}
          data-ad-client="ca-pub-6259586123575519"
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </AdSlot>
    </AdContainer>
  );
}

