import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import CampaignCard from './CampaignCard';

interface Campaign {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

interface Props {
  userCampaigns: Campaign[]; // Assuming user's campaigns are passed as props
}

const DashboardPage: React.FC<Props> = ({ userCampaigns }) => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {userCampaigns.map((campaign) => (
          <Grid item xs={12} sm={6} md={4} key={campaign.id}>
            <CampaignCard campaign={campaign} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardPage;
