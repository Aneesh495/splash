import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            background: {
              default: '#f5f5f5',
              paper: '#fff',
            },
            text: {
              primary: '#111',
              secondary: '#333',
            },
          }
        : {
            background: {
              default: '#0d1117',
              paper: '#1e1e1e',
            },
            text: {
              primary: '#fff',
              secondary: '#ccc',
            },
          }),
    },
    typography: {
      fontFamily: 'Poppins, sans-serif',
      allVariants: {
        color: mode === 'light' ? '#111' : '#fff',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none', // Default elevation BEGONE.
            borderRadius: 12,
          },
        },
      },
    },
  });