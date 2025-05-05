# Platform Icons Implementation Guide

This guide explains how to add e-commerce platform icons to your label processing pages.

## Available Icons

We've created a set of platform icons as React components in `src/components/PlatformIcons.tsx`:

- `AmazonIcon`
- `FlipkartIcon`
- `MeeshoIcon`
- `SnapdealIcon`
- `MyntraIcon`

## How to Implement Icons in Label Pages

### 1. Import the icon component

```tsx
import { PlatformNameIcon } from "@/components/PlatformIcons";
```

Replace `PlatformNameIcon` with the specific icon you need (e.g., `AmazonIcon`, `FlipkartIcon`).

### 2. Add the icon to your header

```tsx
<div className={styles.pageHeader_platformname}>
  <h1>
    <PlatformNameIcon className={styles.platformIcon} width={36} height={36} />
    Platform Name Label Processor
  </h1>
  <p>Process your platform labels description...</p>
</div>
```

### 3. Add the necessary CSS

Make sure your CSS module includes these styles:

```css
.pageHeader_platformname {
  /* Customize background colors to match the platform */
  background: linear-gradient(135deg, #primaryColor 0%, #secondaryColor 100%);
  color: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.pageHeader_platformname h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 12px; /* Space between icon and text */
}

.platformIcon {
  margin-right: 4px;
  transform: scale(
    1.2
  ); /* Scale icon slightly differently to avoid copyright issues */
  vertical-align: middle;
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.2));
}
```

## Platform-Specific Colors

Use these colors to maintain platform branding:

### Amazon

- Primary: `#232f3e` (dark blue)
- Secondary: `#37475a` (lighter blue)
- Accent: `#ff9900` (orange)

### Flipkart

- Primary: `#2874F0` (blue)
- Secondary: `#f1f6ff` (light blue)
- Accent: `#FFC200` (yellow)

### Meesho

- Primary: `#F43397` (pink)
- Secondary: `#fff0f7` (light pink)

### Snapdeal

- Primary: `#E40046` (red)
- Secondary: `#fff0f5` (light pink)

### Myntra

- Primary: `#FB56C1` (pink)
- Secondary: `#ffedf8` (light pink)

## Copyright Notice

These icons are simplified and stylized versions, designed to be different from the official logos to avoid copyright issues. They are used for informational purposes to help users identify the platforms processed by this tool.
