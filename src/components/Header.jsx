import React, { useState, useEffect, useCallback } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  { label: 'Home', id: 'home' },
  { label: 'What We Do', id: 'whatwedo' },
  { label: 'Destinations', id: 'destinations' },
  { label: 'Contact', id: 'contact' },
];

// Estilos de texto reutilizables
const menuTypographyStyles = {
  fontFamily: 'Open Sans, sans-serif',
  fontWeight: 600,
  fontSize: '20px',
  color: 'white'
};

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Función de debounce para el scroll
  const handleScroll = useCallback(() => {
    // Si la última ejecución fue hace menos de 100ms, no hacer nada
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
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        minHeight: '120px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, md: 4 },
          minHeight: '120px',
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', flex: { xs: 1, md: 0.3 } }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: { xs: '22px', md: '26px' },
              color: 'white',
              cursor: 'pointer'
            }}
            onClick={() => handleClick('home')}
          >
            RoGa Global Services LLC
          </Typography>
        </Box>

        {/* Menú en pantallas grandes */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flex: { xs: 0, md: 0.7 }, justifyContent: 'space-around', alignItems: 'center' }}>
          {menuItems.map(({ label, id }) => (
            <Button
              key={id}
              onClick={() => handleClick(id)}
              sx={{
                ...menuTypographyStyles,
                textTransform: 'none',
                fontSize: { xs: '18px', md: '20px' }
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Menú de hamburguesa para móviles */}
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
                  primaryTypographyProps={{...menuTypographyStyles, fontSize: '18px'}} // La corrección está aquí
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}