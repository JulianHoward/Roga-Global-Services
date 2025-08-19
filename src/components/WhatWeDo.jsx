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
          flex: { xs: 1, md: '0 0 55%' }, // ocupa todo en mobile, 55% en desktop
          backgroundImage: 'url(/images/what-section.webp)',
          backgroundSize: 'cover', // siempre cubrir
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: { xs: '100vh', md: '100vh' }, // altura completa en ambos
        }}
      ></Box>

      {/* Columna de texto */}
      <Box
        sx={{
          flex: { xs: 1, md: '0 0 45%' },
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
