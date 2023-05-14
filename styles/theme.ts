import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    // Customize your color palette here
    primary: {
      main: '#3f51b5', // Example primary color
    },
    secondary: {
      main: '#f50057', // Example secondary color
    },
  },
  typography: {
    // Customize your typography here
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 14,
  },
  // Add any additional customizations to the theme
});

export default theme;
