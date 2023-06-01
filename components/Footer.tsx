import React from 'react';
import { Container, Typography, Grid, Box, useTheme, Divider, Button } from '@mui/material';
import { styled, Theme } from '@mui/system';
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer = styled('footer')(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(4),
  marginTop: 'auto',
}));

const SectionTitleTypography = styled(Typography)(({ theme }: { theme: Theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

const SocialIconBox = styled(Box)({
  display: 'flex',
});

const SocialIcon = styled(Box)(({ theme }: { theme: Theme }) => ({
  marginRight: `${theme.spacing(1)}px`,
}));

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <FooterContainer theme={theme}>
      <Container maxWidth="lg">
        <Grid container spacing={4} marginBottom={5}>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <Typography variant="h6">TallyFundMe</Typography>
              <Typography variant="body2" color="textSecondary">
                Mission statement or description
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <SectionTitleTypography variant="h6">About Us</SectionTitleTypography>
              <Typography variant="body2" color="textSecondary">
                <Button href="/AboutUs" size="small" color="secondary">About Us</Button>
                <br />
                <Button href="/TermsOfUse" size="small" color="secondary">Terms of Use</Button>
                <br />
                <Button href="/FAQ" size="small" color="secondary">FAQ</Button>
                <br />
                <Button href="/PrivacyNotice" size="small" color="secondary">Privacy Notice</Button>
                <br />
                <Button href="/Legal" size="small" color="secondary">Legal</Button>
                <br />
                <Button href="/ContactUs" size="small" color="secondary">Contact Us</Button>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <SectionTitleTypography variant="h6">Follow Us</SectionTitleTypography>
              <SocialIconBox>
                <SocialIcon theme={theme}>
                  <TwitterIcon />
                </SocialIcon>
                <SocialIcon theme={theme}>
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon theme={theme}>
                  <InstagramIcon />
                </SocialIcon>
              </SocialIconBox>
            </div>
          </Grid>
        </Grid>
        <Divider variant="middle"/>
        <Box mt={4}>
          <Typography variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} TallyFundMe. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
