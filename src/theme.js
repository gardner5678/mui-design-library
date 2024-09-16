import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#123456', // Your primary color
    },
    secondary: {
      main: '#abcdef', // Your secondary color
    },
    error: {
      main: '#f44336',
    },
    // Add more color adjustments as needed
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
    },
    // Override font sizes, weights, etc.
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Custom border-radius
          textTransform: 'none', // Disable uppercase text
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    // Add more component-specific styles as needed
  },
});

export default theme;
