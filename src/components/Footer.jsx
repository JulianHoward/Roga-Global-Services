import { Box, Link, Stack, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

// Array de datos para las redes sociales
const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com', icon: InstagramIcon },
  { name: 'Linkedin', href: 'https://www.linkedin.com', icon: LinkedInIcon },
  { name: 'Facebook', href: 'https://www.facebook.com', icon: FacebookIcon },
];

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#10144B',
        p: 4,
        textAlign: 'center',
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener"
            sx={{ display: 'flex', alignItems: 'center', color: '#fff', textDecoration: 'none' }}
            aria-label={`Follow us on ${link.name}`}  // Accesibilidad: Descripción adicional
          >
            <link.icon sx={{ mr: 1, fontSize: '24px' }} />
            <Typography
              sx={{
                fontFamily: 'Open Sans Light, sans-serif',
                fontSize: '18px',
                fontWeight: 300,
              }}
            >
              {link.name}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
