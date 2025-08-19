import React from 'react';
import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const destinations = [
  { name: 'UNITED STATES', img: '/images/us.webp' },
  { name: 'BOLIVIA', img: '/images/bolivia.webp' },
  { name: 'SPAIN', img: '/images/spain.webp' },
  { name: 'CHINA', img: '/images/china.webp' },
  { name: 'BRAZIL', img: '/images/brazil.webp' },
  { name: 'ARGENTINA', img: '/images/argentina.webp' },
];

export default function Destinations() {
  return (
    <Box
      id="destinations"
      sx={{
        padding: { xs: 4, md: 8 },
        minHeight: '100vh',
        backgroundColor: '#fff',
        color: '#122665',
        backgroundImage: 'url(/images/destinations-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Overlay oscuro */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1,
        }}
      />

      {/* Título */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          fontSize: { xs: '32px', md: '48px' },
          color: '#fff',
          mb: 3,
          textAlign: 'center',
        }}
      >
        Our Top Destinations
      </Typography>

      {/* Texto introductorio */}
      <Typography
        sx={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: { xs: '18px', md: '22px' },
          lineHeight: 1.5,
          mb: 4,
          maxWidth: { md: '900px' },
          mx: 'auto',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        From the Americas to Europe and Asia, we’ve helped businesses expand, connect, and operate
        across borders. Our presence in these key regions reflects our commitment to global access — wherever
        opportunity takes you.
      </Typography>

      {/* Contenedor de destinos */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 2,
          maxWidth: 900,
          mx: 'auto',
        }}
      >
        {destinations.map(({ name, img }) => (
          <Box
            key={name}
            sx={{
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              minHeight: 200,
              backgroundColor: '#333',
            }}
          >
            <LazyLoadImage
              src={img}
              alt={name}
              effect="blur"
              height={200}
              width="100%"
              style={{
                display: 'block',
                objectFit: 'cover',
                filter: 'brightness(0.6)',
              }}
            />
            <Typography
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                textTransform: 'uppercase',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                userSelect: 'none',
                pointerEvents: 'none',
                textAlign: 'center',
              }}
            >
              {name}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Texto final */}
      <Typography
        sx={{
          fontFamily: 'Open Sans, sans-serif',
          fontStyle: 'italic',
          fontSize: { xs: '18px', md: '20px' },
          color: '#fff', // Se cambió a blanco
          mt: 4,
          textAlign: 'center',
        }}
      >
        And this is just the beginning. No matter where you are, we help you get there.
      </Typography>
    </Box>
  );
}