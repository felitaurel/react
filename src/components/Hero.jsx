import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import hero from "../cosoEcommerce.png"
const HeroBanner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px'
      }}
    >
    
    </Box>
  );
}

export default HeroBanner;