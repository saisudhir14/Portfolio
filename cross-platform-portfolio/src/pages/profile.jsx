import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function Profile() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Profile
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          fullWidth
          name="bio"
          label="About Me"
          id="bio"
          multiline
          rows={4}
        />
        <TextField
          margin="normal"
          fullWidth
          name="skills"
          label="Skills (comma separated)"
          id="skills"
        />
        <TextField
          margin="normal"
          fullWidth
          name="github"
          label="GitHub Profile URL"
          id="github"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Save Profile
        </Button>
      </Box>
    </Container>
  );
}

export default Profile;