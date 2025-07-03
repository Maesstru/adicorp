import {
  Box,
  Grid,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material';

import logo from '../assets/logo_yell.png'; // replace with your actual path

export default function Footer({ isSpacer = false }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: { xs: 2, sm: 6 },
        backgroundColor: theme.palette.background.default,
        visibility: isSpacer ? 'hidden' : 'visible',
        color: theme.palette.text.primary,
        position: !isSpacer ? 'fixed' : 'static',
        bottom: !isSpacer ? 0 : 'auto',
        width: '100dvw',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems={'center'}
        justifyContent="space-between"
      >
        {/* Links Section */}
        <Grid size={12}>
          <Stack
            direction={isMobile ? 'column' : 'row'}
            spacing={isMobile ? 2 : 8}
            justifyContent={'center'}
            alignItems="center"
          >
            <Link href="/" color="inherit" underline="hover">
              <Typography variant="link1">Home</Typography>
            </Link>
            <Link href="/contact" color="inherit" underline="hover">
              <Typography variant="link1">Contact</Typography>
            </Link>
            <Link href="/portfolio" color="inherit" underline="hover">
              <Typography variant="link1">Portfolio</Typography>
            </Link>
          </Stack>
        </Grid>

        {/* Logo Section */}
        <Grid
          size={12}
          sx={{
            display: 'flex',

            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ width: '4rem', mr: '.5rem' }}
          />
          <Typography variant="body2">
            © {new Date().getFullYear()} Adicorp. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
