import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutUsPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque ante a eleifend venenatis.
        Maecenas id varius mi, a finibus purus. Morbi tincidunt auctor varius. Aliquam at est euismod, pharetra
        lectus a, efficitur ipsum. Suspendisse potenti. Morbi quis interdum purus. In hac habitasse platea dictumst.
      </Typography>
      <Typography variant="body1" paragraph>
        Aenean ut ullamcorper odio, sed ullamcorper enim. Maecenas malesuada rutrum est sed iaculis.
        Fusce vehicula dolor non mauris ultrices, non tempus ipsum interdum. Nulla porttitor ante nec
        mauris cursus vestibulum. In hac habitasse platea dictumst. Aliquam pharetra elementum iaculis.
        Quisque sed aliquet risus, et scelerisque turpis. Integer mollis risus et metus vulputate hendrerit.
      </Typography>
      <Typography variant="body1" paragraph>
        Vestibulum dapibus elit ac felis commodo, eget laoreet tortor ultricies. Sed luctus, nisi ut dapibus
        eleifend, dui sem rutrum libero, vitae venenatis libero nisl non nisi. Sed dapibus ligula et ante
        placerat, ac aliquet odio ultrices. Proin fermentum, dui in consequat eleifend, nulla purus aliquet lectus,
        eu porttitor tellus orci nec enim. Mauris pellentesque, lectus in suscipit tincidunt, quam sapien placerat
        mi, vel facilisis urna purus vitae nunc.
      </Typography>
    </Container>
  );
};

export default AboutUsPage;
