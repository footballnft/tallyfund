import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import CampaignCard from '../components/CampaignCard';
import { useRouter } from 'next/router';

interface SearchResults {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

const SearchResultPage: React.FC<{ query: string }> = ({ query }) => {
  const router = useRouter();

  // Assuming you have a list of search results based on the query
  const searchResults: SearchResults[] = [
    { id: 1, title: 'Campaign 1', imageUrl: 'campaign1.jpg', description: 'Description 1' },
    { id: 2, title: 'Campaign 2', imageUrl: 'campaign2.jpg', description: 'Description 2' },
    { id: 3, title: 'Campaign 3', imageUrl: 'campaign3.jpg', description: 'Description 3' },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Search Results for &quot;{query}&quot;
      </Typography>
      <Grid container spacing={3}>
        {searchResults.map((result) => (
          <Grid item xs={12} sm={6} md={4} key={result.id}>
            <CampaignCard
              id={result.id}
              title={result.title}
              description={result.description}
              imageUrl={result.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SearchResultPage;
