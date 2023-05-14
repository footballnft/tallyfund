import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

interface UserProfile {
  id: number;
  name: string;
  email: string;
  biography: string;
}

// Assuming you have user profile data for demonstration
const userProfile: UserProfile = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit....',
};

const UserProfilePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        User Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Name: {userProfile.name}
              </Typography>
              <Typography>Email: {userProfile.email}</Typography>
              <Typography>Biography: {userProfile.biography}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfilePage;
