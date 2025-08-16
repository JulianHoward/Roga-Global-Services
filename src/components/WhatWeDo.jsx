import React from 'react';
import { Box, Typography } from '@mui/material';

export default function WhatWeDo() {
  return (
    <Box
      id="whatwedo"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        padding: 0,
        minHeight: '100vh',
        backgroundColor: '#fff',
      }}
    >
      {/* Columna de la imagen */}
      <Box
        sx={{
          flex: '0 0 55%',
          backgroundImage: 'url(/images/what.jpg)', // Se mantiene la imagen original
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '50vh', md: '100vh' }, // Altura ajustada para móviles
        }}
      ></Box>

      {/* Columna de texto */}
      <Box
        sx={{
          flex: '0 0 45%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: { xs: '2rem', md: '4rem' },
          boxSizing: 'border-box',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: { xs: '32px', md: '48px' },
            color: '#10144B',
            mb: 3,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          What We Do
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 400,
            fontSize: { xs: '18px', md: '22px' },
            lineHeight: 1.5,
            maxWidth: { md: '700px' },
            mx: { xs: 'auto', md: '0' },
            textAlign: { xs: 'center', md: 'left' },
            color: '#122665',
          }}
        >
          At RoGa Global Services, we help companies connect and build presence anywhere in the world.
          Our team ensures every step is smooth, trustworthy, and aligned with your global goals.
        </Typography>
      </Box>
    </Box>
  );
}