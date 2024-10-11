import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function SharePortfolio({ open, handleClose, portfolioLink }) {
  const handleShare = (platform) => {
    let shareUrl;
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(portfolioLink)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioLink)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=Check out my portfolio&body=${encodeURIComponent(portfolioLink)}`;
        break;
      default:
        shareUrl = portfolioLink;
    }
    window.open(shareUrl, '_blank');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Share Your Portfolio</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          value={portfolioLink}
          margin="dense"
          label="Your Portfolio Link"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleShare('twitter')}>Share on Twitter</Button>
        <Button onClick={() => handleShare('linkedin')}>Share on LinkedIn</Button>
        <Button onClick={() => handleShare('email')}>Share via Email</Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default SharePortfolio;