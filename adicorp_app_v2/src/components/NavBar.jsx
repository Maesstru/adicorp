import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Paper,
  useScrollTrigger,
  Slide,
  IconButton,
  Collapse,
  Container,
  Stack,
  Grid,
  Button,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';

import logo from '../assets/logo_transp.png';
import Services from './Services';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function NavBar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo, navs and Title for Desktop */}
            <Grid
              container
              sx={{
                display: { xs: 'none', md: 'flex' },
                width: '100%',
              }}
            >
              <Grid
                size={2.5}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Logo"
                  onClick={() => {
                    navigate('/');
                  }}
                  sx={{
                    width: '4rem',
                    mr: '.5rem',
                    display: { xs: 'none', md: 'flex' },
                    cursor: 'pointer',
                  }}
                />
                <Typography
                  variant="link2"
                  noWrap
                  onClick={() => {
                    navigate('/');
                  }}
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    textDecoration: 'none',
                    color: '#fff',
                  }}
                >
                  Adicorp
                </Typography>
              </Grid>
              <Grid
                size={9}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <Stack
                  position={'relative'}
                  direction="row"
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      visibility: 'hidden',
                      zIndex: -1,
                    }}
                  >
                    <Services />
                  </Box>
                  <Box
                    variant="outlined"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      borderRadius: 0.5,
                      backgroundColor: 'white',
                      color: 'background.default',
                    }}
                  >
                    <Services />
                  </Box>
                  <Typography
                    variant="link1"
                    onClick={() => navigate('/portfolio')}
                  >
                    Portfolio
                  </Typography>
                  <Typography
                    variant="link1"
                    onClick={() => navigate('/contact')}
                  >
                    Contact
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            {/* Desktop end for logo and name */}

            {/* Mobile menu icon and logo */}
            <Grid
              container
              sx={{
                display: { md: 'none', width: '100%' },
              }}
            >
              <Grid
                size={2}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleMobileMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>

              {/* Mobile logo and title */}
              <Grid
                size={8}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Stack direction={'row'} alignItems="center">
                  <Box
                    component="img"
                    src={logo}
                    alt="Logo"
                    onClick={() => {
                      navigate('/');
                    }}
                    sx={{
                      width: '4rem',
                      mr: '.5rem',
                      display: { xs: 'flex', md: 'none' },
                      cursor: 'pointer',
                    }}
                  />
                  <Typography
                    variant="link2"
                    noWrap
                    onClick={() => {
                      navigate('/');
                    }}
                    sx={{
                      mr: 2,
                      display: { xs: 'flex', md: 'none' },
                      textDecoration: 'none',
                      color: '#fff',
                    }}
                  >
                    Adicorp
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            {/* Mobile logo and title */}

            {/*  Desktop navigations */}
          </Toolbar>
          <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'column',
                bgcolor: 'primary.main',
                px: 2,
                py: 2,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <Services />
              <Typography
                variant="link1"
                onClick={() => navigate('/contact')}
                sx={{ py: 0.5, px: 1 }}
              >
                Contact
              </Typography>
              <Typography
                variant="link1"
                onClick={() => navigate('/portfolio')}
                sx={{ py: 0.5, px: 1 }}
              >
                Portfolio
              </Typography>
            </Box>
          </Collapse>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
