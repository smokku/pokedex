const theme = {
  spacing: (size: number) => `${size * 16}px`,
};

export default theme;

export type ThemeType = typeof theme;
