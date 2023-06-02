import React from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Image from 'next/image';

// Assuming you have campaign data fetched from a database
const campaigns = [
  { id: 1, imageUrl: 'campaign1.jpg', title: 'Campaign 1', description: 'Description 1' },
  { id: 2, imageUrl: 'campaign2.jpg', title: 'Campaign 2', description: 'Description 2' },
  { id: 3, imageUrl: 'campaign3.jpg', title: 'Campaign 3', description: 'Description 3' },
];

const Campaigns: React.FC = () => {
  const router = useRouter();

  const handleCampaignClick = (campaignId: number) => {
    // Navigate to the campaign details page using Next.js router
    router.push(`/campaigns/${campaignId}`);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Campaigns
      </Typography>
      <Grid container spacing={3}>
        {campaigns.map((campaign) => (
          <Grid item xs={12} sm={6} md={4} key={campaign.id}>
            <Card onClick={() => handleCampaignClick(campaign.id)} style={{ cursor: 'pointer' }}>
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

export default Campaigns;
