"use client";

import React from "react";
import { createGlobalStyle } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #4f46e5;
    --secondary-color: #818cf8;
    --background-color: #f9fafb;
    --text-color: #1f2937;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
  }
`;

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  );
}
