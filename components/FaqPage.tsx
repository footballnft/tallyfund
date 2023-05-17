import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Question 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sem ac odio tincidunt consequat.
            Fusce dignissim lacus quis ante gravida semper.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Question 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Duis consequat risus quis velit fringilla finibus. Vestibulum sed purus eu dui dapibus varius vitae in felis.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Question 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Phasellus eu congue orci, in pulvinar mi. Aenean auctor fringilla est, a consequat leo bibendum nec.
            Mauris nec sagittis purus, eget finibus justo.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default FaqPage;
