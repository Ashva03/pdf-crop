"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const AdContainer = styled.div`
  margin: 1.5rem auto;
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
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  width: 100%;
`;

interface AdBannerProps {
  slotId?: string;
  format?: "auto" | "rectangle" | "horizontal";
  className?: string;
}

export default function AdBanner({
  slotId = "5308278281",
  format = "auto",
  className,
}: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pushedRef = useRef(false);
  const [isUnfilled, setIsUnfilled] = useState(false);

  useEffect(() => {
    if (pushedRef.current) return;

    try {
      if (typeof window !== "undefined") {
        const insElement = containerRef.current?.querySelector("ins.adsbygoogle");
        if (insElement && !insElement.getAttribute("data-adsbygoogle-status")) {
          // @ts-expect-error Google adsbygoogle queue push
          ((window as unknown).adsbygoogle = (window as unknown).adsbygoogle || []).push({});
          pushedRef.current = true;
        }

        // Auto-collapse if Google AdSense flags this slot as unfilled
        if (insElement) {
          const observer = new MutationObserver(() => {
            if (insElement.getAttribute("data-ad-status") === "unfilled") {
              setIsUnfilled(true);
            }
          });
          observer.observe(insElement, {
            attributes: true,
            attributeFilter: ["data-ad-status"],
          });
          return () => observer.disconnect();
        }
      }
    } catch {
      // Ignore in dev mode or with ad blockers
    }
  }, []);

  if (isUnfilled) {
    return null;
  }

  return (
    <AdContainer ref={containerRef} className={className}>
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
