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
export const flipkartLabelCropDimensions: CropDimension = { x: 175, y: 450, width: 245, height: 380 }

export const myntraLabelCropDimensions: CropDimension = { x: 150, y: 400, width: 300, height: 400 }


// Function to generate Meesho label crop dimensions for n pages
export const generateLabelCropDimensions = (numPages: number, cropDimension: CropDimension): Record<number, CropDimension> => {
  const dimensions: Record<number, CropDimension> = {};
  for (let i = 1; i <= numPages; i++) {
    dimensions[i] = cropDimension;
  }
  return dimensions;
};

// Default Meesho dimensions with 4 pages
export const meeshoLabelCropDimensions: CropDimension = { x: 0, y: 495, width: 595, height: 345 };

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