interface RgbColor {
  red: number;
  blue: number;
  green: number;
}

export const hexToRgb = (hex: string) => {
  return {
    red: parseInt(hex.substr(1, 2), 16),
    green: parseInt(hex.substr(3, 2), 16),
    blue: parseInt(hex.substr(5, 2), 16),
  } as RgbColor;
};
