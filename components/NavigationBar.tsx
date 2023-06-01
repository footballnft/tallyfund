import React from 'react';
import { Box, styled, StyledEngineProvider } from '@mui/system';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { Block } from '@mui/icons-material';

const CustomNavigationBar = styled(AppBar)({
  position: 'fixed',
});

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
            <Link href="/">
                <a>
                  <SiteLogo src="/public/Logo.png" alt="Site Logo" />
                </a>
            </Link>
                  <Box justifyContent={'space-between'}>
                      <nav> 
                        <ul role="menubar">
                          
                            <li role="none">
                              <menuitem tabIndex={0} aria-haspopup="true" aria-expanded="false">
                                <Typography variant="h6">TallyFundMe</Typography>
                              </menuitem>
                            </li>
                            
                            <li role="none">
                              <menuitem tabIndex={0} aria-haspopup="true" aria-expanded="false">
                                <Link href="/Campaigns">
                                  <a>Campaigns</a>
                                </Link>
                              </menuitem>
                            </li>

                            <li role="none">
                              <menuitem tabIndex={0} aria-haspopup="true" aria-expanded="false">
                                <Link href="/HowItWorks">
                                  <a>How It Works</a>
                                </Link>
                              </menuitem>
                            </li>
                        </ul>  
                      </nav>
                  </Box> 
                  <Box justifyContent={'space-between'}>
                          <SearchBar onSearch={handleSearch} />
                          <Link href="/Login">
                            <a>Login</a>
                          </Link>
                  </Box>  
        </NavigationBarContent>
      </CustomNavigationBar>
    </StyledEngineProvider>
  );
};

export default NavigationBar;
