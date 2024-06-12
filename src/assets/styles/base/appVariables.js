import {
  COLORS as GENERAL_COLORS,
  BORDER_RADIUS as GENERAL_BORDER_RADIUS,
  HEIGHTS as GENERAL_HEIGHTS,
  WIDTHS as GENERAL_WIDTHS,
  SPACINGS as GENERAL_SPACINGS,
} from './generalVariables';

export const COLORS = {
  ...GENERAL_COLORS,
  primary: 'black',
  secondary: 'white',
  'warning-one': '#fcf2f2',
  'warning-two': '#e56964',
  'success-one': '#effcf5',
  'success-two': '#74c59f',
  'theme-one': '#16c5fe',
  'theme-two': '#0392dd',
  'theme-three': '#e2ecf6',
  'gray-bright': '#f1f1f1',
  'gray-dark': '#6a6a6a',
  'off-black': '#28282b',
  'off-white': '#faf9f6',
};

export const SPACINGS = {
  ...GENERAL_SPACINGS,
  'temp-1': 4,
  'temp-2': 8,
  'temp-3': 12,
  'temp-4': 16,
  'temp-5': 20,
  'temp-6': 24,
  'temp-7': 28,
  'temp-8': 32,
  'temp-9': 36,
  'temp-10': 40,
  'temp-11': 44,
  'temp-12': 48,
  'temp-13': 52,
  'temp-14': 56,
  'temp-15': 60,
};

export const BORDER_RADIUS = {
  ...GENERAL_BORDER_RADIUS,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
};

export const HEIGHTS = {
  ...GENERAL_HEIGHTS,
  header: 60,
  'app-header': 60,
};

export const WIDTHS = {
  ...GENERAL_WIDTHS,
  'side-bar-closed': 60,
  'side-bar-opened': 180,
};

export const FONT_TYPES = {
  regular: 'Poppins',
  title: 'Poppins',
};

export const FONT_SIZES = {
  small: '8px',
  regular: '12px',
  large: '14px',
};
