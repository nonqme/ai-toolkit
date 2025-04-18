export const isLabelInputValid = (input: string): true | string => {
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

export const isLabelOutputValid = (output: string): true | string => {
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
