import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark' based on preference

    primary: {
      main: '#d32f2f', // Electric red (matches bolt in logos 1 & 2)
      contrastText: '#fff', // White text for buttons/app bar
    },

    secondary: {
      main: '#fbc02d', // Bright yellow (matches bolt in logo 3)
      contrastText: '#000', // Black text for good contrast
    },

    background: {
      default: '#444', // Dark neutral for app background
      paper: '#2c2c2c', // Slightly lighter for cards and surfaces
    },

    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },

    error: {
      main: '#ff5252',
    },

    warning: {
      main: '#ff9800',
    },

    info: {
      main: '#2196f3',
    },

    success: {
      main: '#4caf50',
    },
  },

  typography: {
    fontFamily: `'Roboto', 'Segoe UI', sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    button: { textTransform: 'uppercase' },
  },
});

export default theme;
