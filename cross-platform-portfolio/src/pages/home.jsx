import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Your Portfolio App
      </Typography>
      <Typography variant="body1" paragraph>
        Create and share your professional portfolio with ease.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
}

export default Home;