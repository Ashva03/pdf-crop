export interface CropDimension {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PlatformConfig {
  name: string;
  labelCropDimensions: Record<number, CropDimension>;
  defaultCropDimension: CropDimension;
  errorMessages: {
    invalidFileType: string;
    fileSizeExceeded: string;
    invalidFileName: string;
    uploadFirst: string;
    processingError: string;
  };
  successMessage: string;
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

export const myntraLabelCropDimensions: Record<number, CropDimension> = {
  1: { x: 150, y: 400, width: 300, height: 400 },
  2: { x: 150, y: 400, width: 300, height: 400 },
  3: { x: 150, y: 400, width: 300, height: 400 },
  4: { x: 150, y: 400, width: 300, height: 400 },
  5: { x: 150, y: 400, width: 300, height: 400 },
};

export const meeshoLabelCropDimensions: Record<number, CropDimension> = {
  1: { x:0, y: 500, width: 595, height: 337 },
  2: { x: 0, y: 500, width: 595, height: 337 },
  3: { x: 0, y: 500, width: 595, height: 337 },
  4: { x: 0, y: 500, width: 595, height: 337 },
};

export const amazonLabelCropDimensions: Record<number, CropDimension> = {
  1: { x: 180, y: 420, width: 260, height: 390 },
  2: { x: 180, y: 420, width: 260, height: 390 },
  3: { x: 180, y: 420, width: 260, height: 390 },
  4: { x: 180, y: 420, width: 260, height: 390 },
  5: { x: 180, y: 420, width: 260, height: 390 },
  6: { x: 180, y: 420, width: 260, height: 390 },
};

export const defaultCropDimension: CropDimension = {
  x: 175,
  y: 450,
  width: 245,
  height: 380,
};

export const platformConfigs: Record<string, PlatformConfig> = {
  flipkart: {
    name: "Flipkart",
    labelCropDimensions: flipkartLabelCropDimensions,
    defaultCropDimension,
    errorMessages: {
      invalidFileType: "Please upload a PDF file",
      fileSizeExceeded: "File size exceeds 10MB limit",
      invalidFileName: 'This page is for Flipkart labels only. Please upload a file with "flipkart" in the filename.',
      uploadFirst: "Please upload a PDF file first",
      processingError: "An error occurred while cropping the PDF. Please try again."
    },
    successMessage: "Successfully cropped all pages!"
  },
  myntra: {
    name: "Myntra",
    labelCropDimensions: myntraLabelCropDimensions,
    defaultCropDimension,
    errorMessages: {
      invalidFileType: "Please upload a PDF file",
      fileSizeExceeded: "File size exceeds 10MB limit",
      invalidFileName: 'This page is for Myntra labels only. Please upload a file with "myntra" in the filename.',
      uploadFirst: "Please upload a PDF file first",
      processingError: "An error occurred while cropping the PDF. Please try again."
    },
    successMessage: "Successfully cropped all pages!"
  },
  meesho: {
    name: "Meesho",
    labelCropDimensions: meeshoLabelCropDimensions,
    defaultCropDimension,
    errorMessages: {
      invalidFileType: "Please upload a PDF file",
      fileSizeExceeded: "File size exceeds 10MB limit",
      invalidFileName: 'This page is for Meesho labels only. Please upload a file with "meesho" in the filename.',
      uploadFirst: "Please upload a PDF file first",
      processingError: "An error occurred while cropping the PDF. Please try again."
    },
    successMessage: "Successfully cropped all pages!"
  },
  amazon: {
    name: "Amazon",
    labelCropDimensions: amazonLabelCropDimensions,
    defaultCropDimension,
    errorMessages: {
      invalidFileType: "Please upload a PDF file",
      fileSizeExceeded: "File size exceeds 10MB limit",
      invalidFileName: 'This page is for Amazon labels only. Please upload a file with "amazon" in the filename.',
      uploadFirst: "Please upload a PDF file first",
      processingError: "An error occurred while cropping the PDF. Please try again."
    },
    successMessage: "Successfully cropped all pages!"
  }
}; 