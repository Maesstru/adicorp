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
      paper: '#d32f2f', // Slightly lighter for cards and surfaces
    },

    text: {
      primary: '#ffffff',
      secondary: '#ccc',
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
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 600, fontSize: '2rem' },
    h3: { fontWeight: 600, fontSize: '1.5rem' },
    h4: { fontWeight: 500, fontSize: '1rem' },
    body: {
      fontWeight: 400,
      fontSize: '.8rem',
    },
    link1: {
      fontWeight: 500,
      fontSize: '1rem',
      textDecoration: 'none',
      color: '#fff',
      cursor: 'pointer',
    },
    link2: {
      fontWeight: 600,
      fontSize: '1.5rem',
      textDecoration: 'none',
      color: '#fff',
      cursor: 'pointer',
    },
    button: { textTransform: 'uppercase' },
  },
});

export default theme;
