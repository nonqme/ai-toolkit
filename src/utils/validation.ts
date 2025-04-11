import path from 'node:path';

export const validateName = (name: string) => {
  name.trim();
  if (!name) {
    return 'Name is required';
  }
  if (!/^[a-zA-Z0-9-_]+$/.test(name)) {
    return 'Name can only contain letters, numbers, dashes and underscores';
  }
  if (name.length < 3) {
    return 'Name must be at least 3 characters';
  }
  if (name.length > 20) {
    return 'Name must be less than 20 characters';
  }
  return true;
};

export const validateWindowName = (windowName: string) => {
  windowName = windowName.trim();

  if (!windowName) {
    return 'Window name is required';
  }
  if (!/^[a-zA-Z0-9-_ ]+$/.test(windowName)) {
    return 'Window name can only contain letters, numbers, spaces, dashes, and underscores';
  }
  if (windowName.length < 3) {
    return 'Window name must be at least 3 characters';
  }
  if (windowName.length > 50) {
    return 'Window name must be less than 50 characters';
  }
  return true;
};

export const validateFps = (fps: number) => {
  if (!fps) {
    return 'FPS is required';
  }
  if (isNaN(fps)) {
    return 'FPS must be a number';
  }
  if (fps < 1) {
    return 'FPS must be at least 1';
  }
  return true;
};

export const validateOutput = (output: string) => {
  output = output.trim();

  if (!output) {
    return 'Output directory is required';
  }
  if (!path.isAbsolute(path.resolve(output))) {
    return 'Output directory must be a valid path';
  }
  return true;
};
