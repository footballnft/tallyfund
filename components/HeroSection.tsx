import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f8f8f8',
        padding: '80px 0',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to TallyFundMe
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        A crowdfunding platform for a cause.
      </Typography>
      <Button variant="contained" color="primary">
        Start Your Campaign
      </Button>
    </Box>
  );
};

export default HeroSection;
