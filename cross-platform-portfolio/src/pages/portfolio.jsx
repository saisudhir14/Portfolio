import React from 'react';
import { Container, Typography } from '@mui/material';

function Portfolio() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Portfolio
      </Typography>
      <Typography variant="body1">
        This is where you'll be able to view and edit your portfolio.
      </Typography>
    </Container>
  );
}

export default Portfolio;