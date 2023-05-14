import React from 'react';
import { Typography } from '@mui/material';

const ServerError: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        500 - Internal Server Error
      </Typography>
      <Typography variant="body1" align="center">
        An unexpected error occurred. Please try again later.
      </Typography>
    </div>
  );
};

export default ServerError;
