export const isNormalizeInputValid = (input: string): true | string => {
  if (!input) {
    return 'Input path is required';
  }

  if (typeof input !== 'string') {
    return 'Input path must be a string';
  }

  if (input.length < 3) {
    return 'Input path must be at least 3 characters long';
  }

  if (input.length > 255) {
    return 'Input path must be less than 255 characters long';
  }

  return true;
};

export const isNormalizeOutputValid = (output: string): true | string => {
  if (!output) {
    return 'Output path is required';
  }

  if (typeof output !== 'string') {
    return 'Output path must be a string';
  }

  if (output.length < 3) {
    return 'Output path must be at least 3 characters long';
  }

  if (output.length > 255) {
    return 'Output path must be less than 255 characters long';
  }

  return true;
};

export const isNormalizeWidthValid = (width: string): true | string => {
  if (!width) {
    return 'Width is required';
  }

  const widthNumber = parseInt(width, 10);
  if (isNaN(widthNumber)) {
    return 'Width must be a number';
  }

  if (widthNumber < 1) {
    return 'Width must be at least 1';
  }

  if (widthNumber > 3840) {
    return 'Width must be less than or equal to 3840';
  }

  return true;
};

export const isNormalizeHeightValid = (height: string): true | string => {
  if (!height) {
    return 'Height is required';
  }

  const heightNumber = parseInt(height, 10);
  if (isNaN(heightNumber)) {
    return 'Height must be a number';
  }

  if (heightNumber < 1) {
    return 'Height must be at least 1';
  }

  if (heightNumber > 2160) {
    return 'Height must be less than or equal to 2160';
  }

  return true;
};
