import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const NavigationBar: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TallyFundMe
        </Typography>
        {/* Add your navigation links or other components here */}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
