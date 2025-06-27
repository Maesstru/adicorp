import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import bgImage from '../assets/download.png'; // Adjust the path as necessary

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        minWidth: '100dvw',
        backgroundImage: `url(${bgImage})`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
          Welcome to My Website
        </Typography>
        <Typography variant="h5" component="p" sx={{ mt: 2 }}>
          Beautiful. Simple. Responsive.
        </Typography>
      </Container>
    </Box>
  );
}
