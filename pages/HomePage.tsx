import React, { useState } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import FeaturedCampaigns from '../components/FeaturedCampaigns';
import PopularCampaigns from '../components/PopularCampaigns';
import Statistics from '../components/Statistics';
import HowItWorks from '../components/HowItWorks';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    router.push(`/search?query=${query}`);
  };

  // Assuming you have data for featured campaigns, popular campaigns, statistics, and how it works
  const featuredCampaigns =  [
    { id: 1, title: 'Campaign 1', imageUrl: 'campaign1.jpg', description: 'Description 1' },
    { id: 2, title: 'Campaign 2', imageUrl: 'campaign2.jpg', description: 'Description 2' },
    { id: 3, title: 'Campaign 3', imageUrl: 'campaign3.jpg', description: 'Description 3' },
  ];

  const popularCampaigns = [
    { id: 1, title: 'Campaign 1', imageUrl: 'campaign1.jpg', description: 'Description 1' },
    { id: 2, title: 'Campaign 2', imageUrl: 'campaign2.jpg', description: 'Description 2' },
    { id: 3, title: 'Campaign 3', imageUrl: 'campaign3.jpg', description: 'Description 3' },
  ];

  const statistics = [
    { label: 'Total Funds Raised', value: '$100,000' },
    { label: 'Active Campaigns', value: '50' },
    { label: 'Successful Campaigns', value: '30' },
  ];

  return (
    <Container maxWidth="lg">
      {/* Navigation Bar */}
       {/* <NavigationBar /> */}
      

      {/* Hero Section */}
      <HeroSection />

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Featured Campaigns Section */}
      <Typography variant="h4" align="center" gutterBottom>
        Featured Campaigns
      </Typography>
      <Grid container spacing={3}>
        {featuredCampaigns.map((campaign) => (
          <Grid item xs={12} sm={6} md={4} key={campaign.id}>
            <FeaturedCampaigns campaigns={featuredCampaigns} />
          </Grid>
        ))}
      </Grid>

      {/* Popular Campaigns Section */}
      <Typography variant="h4" align="center" gutterBottom>
        Popular Campaigns
      </Typography>
      <Grid container spacing={3}>
        {popularCampaigns.map((campaign) => (
          <Grid item xs={12} sm={6} md={4} key={campaign.id}>
            <PopularCampaigns campaigns={[campaign]} />
          </Grid>
        ))}
      </Grid>

      {/* Statistics Section */}
      <Typography variant="h4" align="center" gutterBottom>
        Statistics
      </Typography>
      <Grid container spacing={3}>
        <Statistics data={statistics} />
      </Grid>

      {/* How It Works Section */}
      <Typography variant="h4" align="center" gutterBottom>
        How It Works
      </Typography>
      <Grid container spacing={3}>
        <HowItWorks />
      </Grid>
    </Container>
  );
};

export default HomePage;
