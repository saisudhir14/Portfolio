import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Chip, Input } from '@mui/material';

function Profile() {
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [newLink, setNewLink] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleAddLink = () => {
    if (newLink.trim() !== '') {
      setLinks([...links, newLink.trim()]);
      setNewLink('');
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Here you would typically upload the file to your server
    console.log('File to upload:', file);
  };

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
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="subtitle1">Skills</Typography>
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} sx={{ mr: 1, mb: 1 }} />
          ))}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <TextField
              size="small"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a skill"
            />
            <Button onClick={handleAddSkill} sx={{ ml: 1 }}>Add</Button>
          </Box>
        </Box>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="subtitle1">Links</Typography>
          {links.map((link, index) => (
            <Chip key={index} label={link} sx={{ mr: 1, mb: 1 }} />
          ))}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <TextField
              size="small"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              placeholder="Add a link"
            />
            <Button onClick={handleAddLink} sx={{ ml: 1 }}>Add</Button>
          </Box>
        </Box>
        <TextField
          margin="normal"
          fullWidth
          name="github"
          label="GitHub Profile URL"
          id="github"
        />
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="subtitle1">Resume Upload</Typography>
          <Input
            type="file"
            onChange={handleFileUpload}
            inputProps={{ accept: '.pdf,.docx' }}
          />
        </Box>
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