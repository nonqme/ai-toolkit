export const isCaptureNameValid = (name: string): true | string => {
  if (!name) {
    return 'Name is required';
  }

  if (typeof name !== 'string') {
    return 'Name must be a string';
  }

  if (name.length < 3) {
    return 'Name must be at least 3 characters long';
  }

  if (name.length > 50) {
    return 'Name must be less than 50 characters long';
  }

  if (!/^[a-zA-Z0-9-_]+$/.test(name)) {
    return 'Name can only contain letters, numbers, dashes, and underscores';
  }

  return true;
};

export const isCaptureWindowValid = (window: string): true | string => {
  if (!window) {
    return 'Window name is required';
  }

  if (typeof window !== 'string') {
    return 'Window name must be a string';
  }

  if (window.length < 3) {
    return 'Window name must be at least 3 characters long';
  }

  if (window.length > 50) {
    return 'Window name must be less than 50 characters long';
  }

  if (!/^[a-zA-Z0-9-_ ]+$/.test(window)) {
    return 'Window name can only contain letters, numbers, dashes, spaces and underscores';
  }

  return true;
};

export const isCaptureFpsValid = (fps: string): true | string => {
  if (!fps) {
    return 'FPS is required';
  }

  const fpsNumber = parseInt(fps, 10);
  if (isNaN(fpsNumber)) {
    return 'FPS must be a number';
  }

  if (fpsNumber < 1) {
    return 'FPS must be at least 1';
  }

  if (fpsNumber > 540) {
    return 'FPS must be less than or equal to 540';
  }

  return true;
};

export const isCaptureOutputValid = (output: string): true | string => {
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
