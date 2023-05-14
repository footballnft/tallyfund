import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

interface Campaign {
  id: number;
  title: string;
  description: string;
}

// Assuming you have campaign data for demonstration
const campaign: Campaign = {
  id: 1,
  title: 'Campaign Title',
  description: 'Campaign Description',
};

const CampaignDetailsPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Campaign Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {campaign.title}
              </Typography>
              <Typography>{campaign.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CampaignDetailsPage;
