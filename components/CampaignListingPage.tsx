import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Image from 'next/image';

// Assuming you have data for campaigns
const campaigns = [
  { id: 1, imageUrl: 'campaign1.jpg', title: 'Campaign 1', description: 'Description 1' },
  { id: 2, imageUrl: 'campaign2.jpg', title: 'Campaign 2', description: 'Description 2' },
  { id: 3, imageUrl: 'campaign3.jpg', title: 'Campaign 3', description: 'Description 3' },
];

const CampaignListingPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Campaign Listing
      </Typography>
      <Grid container spacing={3}>
        {campaigns.map((campaign) => (
          <Grid item xs={12} sm={6} md={4} key={campaign.id}>
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
        ))}
      </Grid>
    </Container>
  );
};

export default CampaignListingPage;
