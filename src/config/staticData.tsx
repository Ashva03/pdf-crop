export interface CropDimension {
  x: number;
  y: number;
  width: number;
  height: number;
}

// Default dimensions for all pages - top-left corner at (10, 20)
export const flipkartLabelCropDimensions: Record<number, CropDimension> = {
  1: { x: 175, y: 450, width: 245, height: 380 },
  2: { x: 175, y: 450, width: 245, height: 380 },
  3: { x: 175, y: 450, width: 245, height: 380 },
  4: { x: 175, y: 450, width: 245, height: 380 },
  5: { x: 175, y: 450, width: 245, height: 380 },
  6: { x: 175, y: 450, width: 245, height: 380 },
  7: { x: 175, y: 450, width: 245, height: 380 },
  8: { x: 175, y: 450, width: 245, height: 380 },
  9: { x: 175, y: 450, width: 245, height: 380 },
  10: { x: 175, y: 450, width: 245, height: 380 },
};

export const defaultCropDimension: CropDimension = {
  x: 175,
  y: 450,
  width: 245,
  height: 380,
}; 