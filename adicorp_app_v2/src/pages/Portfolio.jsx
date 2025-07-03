import NavBar from '../components/NavBar';
import MyCard from '../components/Card';
import Footer from '../components/Footer';
import {
  Box,
  CssBaseline,
  Grid,
  useTheme,
  Stack,
  Typography,
} from '@mui/material';

export default function Portfolio() {
  const theme = useTheme();
  return (
    <div>
      <CssBaseline></CssBaseline>
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
        }}
      >
        <NavBar />

        <Stack sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              pt: 10,
              textAlign: 'center',
            }}
          >
            Aici o sa pui un text despre cum fiecare proiect in parte te-a
            maturizat ca firma si alte deastea.
          </Typography>

          <Grid
            container
            spacing={2}
            sx={{
              padding: 3,
              backgroundColor: theme.palette.background.default,
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <Grid
                item
                key={i}
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <MyCard />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
      <Box id="hatz" sx={{ position: 'relative', zIndex: 1 }}>
        <Footer isSpacer={true} />
      </Box>
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Footer />
      </Box>
    </div>
  );
}
