import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        backgroundImage: './src/cosoEcommerce.png', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Our Store
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Discover the Best Deals on Your Favorite Products
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Shop Now
      </Button>
    </Box>
  );
}

export default HeroBanner;