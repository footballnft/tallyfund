import React from 'react';
import { styled, StyledEngineProvider } from '@mui/system';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CampaignListing from './CampaignListingPage';
import HowItWorks from './HowItWorks';
import SearchBar from './SearchBar';
import LoginPage from './LoginPage';

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
  const handleSearch = (query: string) => {
    // Implement the search functionality here
    console.log('Search query:', query);
  };

  return (
    <StyledEngineProvider injectFirst>
      <CustomNavigationBar>
        <NavigationBarContent>
          <SiteLogo src="/public/logo.png" alt="Site Logo" />
          <Typography variant="h6">Your Website</Typography>
          <CampaignListing />
          <HowItWorks />
          <SearchBar onSearch={handleSearch} />
          <LoginPage />
        </NavigationBarContent>
      </CustomNavigationBar>
    </StyledEngineProvider>
  );
};

export default NavigationBar;
