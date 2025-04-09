import kleur from 'kleur';

export const inputTransformer = (
  value: string,
  { isFinal }: { isFinal: boolean }
) => {
  if (isFinal) {
    return kleur.green(value);
  }
  return value;
};

export const inputTheme = {
  prefix: '',
};
