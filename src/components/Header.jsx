import { useState, useEffect, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '/images/logo.webp';

const menuItems = [
  { label: 'Home', id: 'home' },
  { label: 'What We Do', id: 'whatwedo' },
  { label: 'Destinations', id: 'destinations' },
  { label: 'Contact', id: 'contact' },
];

const menuTypographyStyles = {
  fontFamily: 'Open Sans, sans-serif',
  fontWeight: 600,
  fontSize: '20px',
  color: 'white'
};

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    let lastKnownScrollPosition = window.scrollY;
    let ticking = false;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrolled(lastKnownScrollPosition > 50);
        ticking = false;
      });
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -60; // Ajusta según la altura del navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? '#0B0F3F' : '#10144B',
        transition: 'background-color 0.3s ease',
        minHeight: '60px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, md: 4 },
          minHeight: '60px',
        }}
      >
        {/* Logo + Nombre */}
        <Box sx={{ display: 'flex', alignItems: 'center', flex: { xs: 1, md: 0.3 } }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: '120px',
              width: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginRight: '16px',
              cursor: 'pointer'
            }}
            onClick={() => handleClick('home')}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: { xs: '18px', md: '20px' },
              color: 'white',
              cursor: 'pointer'
            }}
            onClick={() => handleClick('home')}
          >
            RoGa Global Services LLC
          </Typography>
        </Box>

        {/* Menú en pantallas grandes */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flex: { xs: 0, md: 0.7 },
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          {menuItems.map(({ label, id }) => (
            <Button
              key={id}
              onClick={() => handleClick(id)}
              sx={{
                ...menuTypographyStyles,
                textTransform: 'none',
                fontSize: { xs: '14px', md: '16px' }
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Menú hamburguesa móvil */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer móvil */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 250, bgcolor: '#10144B', color: 'white' } }}
      >
        <List>
          {menuItems.map(({ label, id }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton onClick={() => handleClick(id)}>
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{ ...menuTypographyStyles, fontSize: '14px' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
