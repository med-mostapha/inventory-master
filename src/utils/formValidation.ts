export const isLengthValide = (data: string, min: number, max: number) => {
  if (data.length < min || data.length > max) return false;

  return true;
};
