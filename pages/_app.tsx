import React from 'react';
import type { AppProps } from 'next/app';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import { Container } from '@mui/system';
import { Divider } from '@mui/material';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavigationBar />
        <Container sx={{ marginY: 10 }}>
          <Component {...pageProps} />
        </Container>
        <Divider />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default MyApp;
