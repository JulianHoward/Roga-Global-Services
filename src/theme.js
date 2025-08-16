import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Define la paleta de colores de tu aplicación
  palette: {
    primary: {
      main: '#10144B', // Azul oscuro
    },
    secondary: {
      main: '#1B4892', // Azul intermedio
    },
    text: {
      primary: '#10144B', // Color de texto principal (casi negro)
      secondary: '#8A8BA4', // Color de texto secundario (gris)
    },
    // Añade otros colores si son necesarios
    // background: {
    //   default: '#f4f4f4',
    // },
  },
  // Define las tipografías de tu aplicación
  typography: {
    // Fuentes globales
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    // Variantes de encabezados
    h1: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: '40px',
    },
    h2: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontWeight: 600,
      fontSize: '28px',
    },
    h3: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
      fontWeight: 600,
      fontSize: '20px',
    },
    body1: {
      fontSize: '16px',
    },
    button: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontWeight: 600,
    },
  },
});

export default theme;
