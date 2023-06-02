import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom';
import Image from 'next/image';

interface Campaign {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

// Assuming you have campaign data for demonstration
const campaigns: Campaign[] = [
  { id: 1, imageUrl: 'campaign1.jpg', title: 'Campaign 1', description: 'Description 1' },
  { id: 2, imageUrl: 'campaign2.jpg', title: 'Campaign 2', description: 'Description 2' },
  { id: 3, imageUrl: 'campaign3.jpg', title: 'Campaign 3', description: 'Description 3' },
];

const CampaignDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const campaignId = parseInt(id ?? "");

  // Find the campaign with the matching ID
  const campaign = campaigns.find((c) => c.id === campaignId);

  if (!campaign) {
    return (
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Campaign Not Found
        </Typography>
      </Container>
    );
  }

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
