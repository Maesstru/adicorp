import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Presentation from '../components/Presentation';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Box sx={{ position: 'relative', zIndex: 3 }}>
        <NavBar />
        <HeroSection />
        <Presentation />
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
