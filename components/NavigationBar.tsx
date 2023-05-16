import React from 'react';
import { styled, StyledEngineProvider } from '@mui/system';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

const CustomNavigationBar = styled(AppBar)(({ theme }: { theme: any }) => ({
  position: 'fixed',
  zIndex: theme.zIndex.drawer + 1,
}));

const NavigationBarContent = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const SiteLogo = styled('img')({
  height: 40, // Adjust the height as per your logo size
});

const NavigationBar: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CustomNavigationBar>
        <NavigationBarContent>
          <Link href="/">
            <a>
              <SiteLogo src="/public/logo.png" alt="Site Logo" />
            </a>
          </Link>
          <Typography variant="h6">TallyFundMe</Typography>
          <Link href="/campaign-listing-page">
            <a>Campaigns</a>
          </Link>
          <Link href="/how-it-works">
            <a>How It Works</a>
          </Link>
          <Link href="/search">
            <a>Search</a>
          </Link>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </NavigationBarContent>
      </CustomNavigationBar>
    </StyledEngineProvider>
  );
};

export default NavigationBar;
