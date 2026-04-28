import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Restaurant', path: '/restaurant' },
  { name: 'Rooms', path: '/rooms' }, 
  { name: 'Services', path: '/services' },
  { name: 'Packages', path: '/events' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile Drawer
  const drawer = (
    <List sx={{ backgroundColor: '#143c69', height: '100%', width: 240 }}>
      {navItems.map((item) => (
        <ListItem key={item.name} disablePadding>
          <ListItemButton
            component={NavLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: '#F8F5F2',
              textTransform: 'uppercase',
              fontWeight: 500,
              letterSpacing: 1,
              '&:hover': {
                backgroundColor: '#D4AF37',
                color: '#4A0E1D',
              },
              '&.active': {
                backgroundColor: '#D4AF37',
                color: '#4A0E1D',
                fontWeight: 'bold',
              },
            }}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: '#143c69',
        }}
      >
        <Toolbar sx={{ position: 'relative', zIndex: 1 }}>
          {/* Logo + Brand */}
          <Box
            component={NavLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#F8F5F2',
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src="/farm-resort/PKFarmLogo.png"
              alt="Company Logo"
              sx={{
                height: 40,
                marginRight: 2,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              P.K. Farm & Resort
            </Typography>
          </Box>

          {/* Desktop Menu */}
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    position: 'relative',
                    color: '#F8F5F2',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    px: 2,
                    transition: 'color 0.3s ease',

                    // Gold underline animation
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: '50%',
                      bottom: 0,
                      width: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #FFD700, #D4AF37)',
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)',
                      borderRadius: '2px',
                    },
                    '&:hover': {
                      color: '#D4AF37',
                    },
                    '&:hover::after': {
                      width: '80%',
                      boxShadow: '0px 2px 6px rgba(0,0,0,0.3)',
                    },
                    '&.active': {
                      color: '#D4AF37',
                      fontWeight: 'bold',
                    },
                    '&.active::after': {
                      width: '80%',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer to push page content below navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
