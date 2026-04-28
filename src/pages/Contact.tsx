'use client';
import React, { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from 'emailjs-com';

const MotionBox = motion(Box);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        'service_td7ovmz',
        'template_ti1vt3w',
        formData,
        'cjmN9823RhUbBG_Y3'
      )
      .then(
        (response: any) => {
          setSnackbar({
            open: true,
            message:
              'Thank you for your message. We will get back to you soon!',
            severity: 'success',
          });
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
        },
        (err: any) => {
          setSnackbar({
            open: true,
            message: 'Failed to send message. Please try again later.',
            severity: 'error',
          });
        }
      );
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box>
      {/* Hero Section */}
      <section className="relative h-[30vh] bg-yellow-700 bg-center flex items-center justify-center text-center">
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative z-10 text-white px-6">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Contact Us
          </motion.h2>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or reservations.
          </p>
        </div>
      </section>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
          }}
        >
          {/* Contact Form */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ flex: 2 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                  Send Us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 3,
                    }}
                  >
                    <TextField
                      required
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%' } }}
                    />
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%' } }}
                    />
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%' } }}
                    />
                    <TextField
                      required
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%' } }}
                    />
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      sx={{ flex: '1 1 100%' }}
                    />
                  </Box>
                  <RouterLink
                            to="/reservetable"
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-semibold transition"
                          >
                            Send Message
                          </RouterLink>
                  
                </form>
              </CardContent>
            </Card>
          </MotionBox>

          {/* Contact Information */}
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ flex: 1 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                  Contact Information
                </Typography>
                <Box sx={{ mt: 4 }}>
                  {/* Address */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <a
                      href="https://www.google.com/maps?q=OF+02,+Second+Floor,+Facility+Block,+Sapana+Garden,+Chogm+Rd,+Porvorim,+Goa+403521"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LocationOnIcon
                        color="primary"
                        sx={{ mr: 2, cursor: 'pointer' }}
                      />
                    </a>
                    <Box>
                      <Typography variant="subtitle1" gutterBottom>
                        Address
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        P.K. Farm & Resort,
                        <br />
                        Amthane, Near Amthane Dam,
                        <br />
                        Goa - 403521.
                      </Typography>
                    </Box>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <a href="tel:+919850171156">
                      <PhoneIcon color="primary" sx={{ mr: 2, cursor: 'pointer' }} />
                    </a>
                    <Box>
                      <Typography variant="subtitle1" gutterBottom>
                        Phone
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <a href="tel:+919850171156" style={{ color: 'inherit', textDecoration: 'none' }}>
                          +91 9850171156
                        </a>
                      </Typography>
                    </Box>
                  </Box>

                  {/* Email */}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <a href="mailto:info@rccconsultant.co.in">
                      <EmailIcon color="primary" sx={{ mr: 2, cursor: 'pointer' }} />
                    </a>
                    <Box>
                      <Typography variant="subtitle1" gutterBottom>
                        Email
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <a
                          href="mailto:info@rccconsultant.co.in"
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          info@pkfarmgoa.co.in
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </MotionBox>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
