import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

const backgroundImage = '/images/hero.webp';  

export default function Hero() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Expand your business globally with RoGa Global Services. Discover new opportunities across the world." />
      </Helmet>
      <Box
        id="home"
        sx={{
          height: '100vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: { xs: 'center', md: 'flex-start' },
          color: 'white',
          px: { xs: 4, md: 8 },
          pt: { xs: 2, md: 6 },
        }}
      >
        {/* Overlay oscuro */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.5)',
            zIndex: 1,
          }}
        />
        
        {/* Contenido de texto */}
        <Box sx={{ position: 'relative', zIndex: 2, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              mb: 2,
              fontSize: '70px',
              color: 'white', // Texto principal blanco
            }}
          >
            Expanding your reach, globally.
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 400,
              fontSize: '40px',
              color: 'white', // Texto secundario también blanco
            }}
          >
            One connection at a time.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
