import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import GoogleSignIn from '../components/GoogleSignIn';

function Home() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    // Here you would typically send the user data to your backend
    console.log('Logged in user:', userData);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Your Portfolio App
      </Typography>
      {user ? (
        <>
          <Typography variant="body1" paragraph>
            Hello, {user.name}! Create and share your professional portfolio with ease.
          </Typography>
          <Button variant="contained" color="primary" href="/portfolio">
            View Your Portfolio
          </Button>
        </>
      ) : (
        <>
          <Typography variant="body1" paragraph>
            Sign in to create and manage your portfolio.
          </Typography>
          <GoogleSignIn onSuccess={handleLoginSuccess} />
        </>
      )}
    </Container>
  );
}

export default Home;