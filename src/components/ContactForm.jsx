import { useState } from 'react';
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import { Helmet } from 'react-helmet'; // Importar Helmet
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import emailjs from 'emailjs-com';

// Estilos de los campos de texto refactorizados
const textFieldStyles = {
  borderRadius: '20px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    borderWidth: '4px',
    '&:hover fieldset': {
      borderWidth: '4px',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '4px',
    },
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    country: '',
    company: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      // Usar variables de entorno para las credenciales
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then(() => {  // Se eliminó la variable "response" ya que no la estamos utilizando
        setMessageSent(true);
        setIsSending(false);
        setFormData({ name: '', lastName: '', email: '', country: '', company: '', message: '' });
      })
      .catch(() => {  // Se eliminó la variable "error" ya que no la estamos utilizando
        setIsSending(false);
        alert('Error al enviar el formulario. Intenta nuevamente.');
      });
  };

  return (
    <>
      {/* Agregar Helmet con la meta descripción */}
      <Helmet>
        <meta name="description" content="Get in touch with RoGa Global Services for all your business needs. Let us help you expand globally." />
      </Helmet>

      <Box
        id="contact"
        sx={{
          padding: { xs: 4, md: 8 },
          backgroundColor: '#fff',
          color: '#122665',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: { xs: '48px', md: '72px' },
            color: '#10144B',
            mb: 3,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Let’s Connect
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              maxWidth: 900,
              mx: 'auto',
              p: { xs: 2, md: 4 },
              border: '4px solid #1B4892',
              borderRadius: '20px',
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(2, 1fr)',
                },
              }}
            >
              <Box sx={{ gridColumn: 'span 1' }}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <PersonIcon sx={{ color: '#1B4892', mr: 1 }} />,
                  }}
                  sx={textFieldStyles} // Uso de los estilos refactorizados
                  required
                />
              </Box>
              <Box sx={{ gridColumn: 'span 1' }}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <PersonIcon sx={{ color: '#1B4892', mr: 1 }} />,
                  }}
                  sx={textFieldStyles} // Uso de los estilos refactorizados
                  required
                />
              </Box>

              <Box sx={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center' }}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <EmailIcon sx={{ color: '#1B4892', mr: 1 }} />,
                  }}
                  sx={{ ...textFieldStyles, width: '50%' }} // Uso de los estilos refactorizados
                  required
                />
              </Box>

              <Box sx={{ gridColumn: 'span 1' }}>
                <TextField
                  fullWidth
                  label="Country"
                  variant="outlined"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <PublicIcon sx={{ color: '#1B4892', mr: 1 }} />,
                  }}
                  sx={textFieldStyles} // Uso de los estilos refactorizados
                  required
                />
              </Box>
              <Box sx={{ gridColumn: 'span 1' }}>
                <TextField
                  fullWidth
                  label="Company"
                  variant="outlined"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <BusinessIcon sx={{ color: '#1B4892', mr: 1 }} />,
                  }}
                  sx={textFieldStyles} // Uso de los estilos refactorizados
                  required
                />
              </Box>

              <Box sx={{ gridColumn: '1 / -1' }}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={8}
                  sx={textFieldStyles} // Uso de los estilos refactorizados
                  required
                />
              </Box>

              <Box sx={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    backgroundColor: 'transparent',
                    color: '#1B4892',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    borderRadius: '20px',
                    borderWidth: '4px',
                    borderColor: '#1B4892',
                    '&:hover': {
                      backgroundColor: '#10144B',
                      color: '#fff',
                      borderWidth: '4px',
                    },
                    padding: '10px 20px',
                  }}
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send'}
                </Button>
              </Box>
            </Grid>
          </Box>
        </form>

        {messageSent && (
          <Typography sx={{ color: 'green', mt: 2, textAlign: 'center' }}>
            Message sent successfully!
          </Typography>
        )}
      </Box>
    </>
  );
}
