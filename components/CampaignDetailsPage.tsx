import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Image from 'next/image';

interface Campaign {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

// Assuming you have campaign data for demonstration
const campaign: Campaign = {
  id: 1,
  imageUrl:'Campaign imageUrl',
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
              <Image src={campaign.imageUrl} alt={campaign.title} width={500} height={300} />
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
