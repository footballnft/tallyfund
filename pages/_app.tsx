import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar'; // Import the NavigationBar component here
import { Box } from '@mui/system';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar /> {/* Move the NavigationBar component here */}
      <Box paddingTop="54px"> {/* Adjust the padding value as needed */}
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
