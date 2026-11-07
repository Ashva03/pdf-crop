export interface CropDimension {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PlatformConfig {
  name: string;
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
export const flipkartLabelCropDimensions: CropDimension = { x: 185, y: 456, width: 225, height: 365 };

export const myntraLabelCropDimensions: CropDimension = { x: 150, y: 400, width: 300, height: 400 };

// Function to generate Meesho label crop dimensions for n pages
export const generateLabelCropDimensions = (numPages: number, cropDimension: CropDimension): Record<number, CropDimension> => {
  const dimensions: Record<number, CropDimension> = {};
  for (let i = 1; i <= numPages; i++) {
    dimensions[i] = cropDimension;
  }
  return dimensions;
};

// Calibrated Meesho dimensions (covers full top shipping label half without truncating bottom address/SKU details)
export const meeshoLabelCropDimensions: CropDimension = { x: 10, y: 410, width: 575, height: 425 };

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

export const snapdealLabelCropDimensions: CropDimension = {
  x: 2,
  y: 122,
  width: 270,
  height: 295,
};

export const platformConfigs: Record<string, PlatformConfig> = {
  flipkart: {
    name: "Flipkart",
    defaultCropDimension: flipkartLabelCropDimensions,
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
    defaultCropDimension: myntraLabelCropDimensions,
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
    defaultCropDimension: meeshoLabelCropDimensions,
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
    defaultCropDimension: amazonLabelCropDimensions[1],
    errorMessages: {
      invalidFileType: "Please upload a PDF file",
      fileSizeExceeded: "File size exceeds 10MB limit",
      invalidFileName: 'This page is for Amazon labels only. Please upload a file with "amazon" in the filename.',
      uploadFirst: "Please upload a PDF file first",
      processingError: "An error occurred while cropping the PDF. Please try again."
    },
    successMessage: "Successfully cropped all pages!"
  },
  snapdeal: {
    name: "Snapdeal",
    defaultCropDimension: snapdealLabelCropDimensions,
    errorMessages: {
      invalidFileType: "Please upload a PDF file",
      fileSizeExceeded: "File size exceeds 10MB limit",
      invalidFileName: 'This page is for Snapdeal labels only. Please upload a file with "snapdeal" in the filename.',
      uploadFirst: "Please upload a PDF file first",
      processingError: "An error occurred while cropping the PDF. Please try again."
    },
    successMessage: "Successfully cropped all pages!"
  }
}; 