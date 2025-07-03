import { Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Presentation() {
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        width: '100dvw',
        backgroundColor: 'background.default',
        px: 4,
        py: 8,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        gap: 4,
      }}
    >
      <Typography variant="h4">
        Adicorp is a full-service construction company specializing in
        high-quality residential, commercial, and industrial projects. With a
        reputation built on integrity, craftsmanship, and reliability, we turn
        blueprints into bold realities — on time and within budget.<br></br>
        <br />
        From foundation to finish, our team brings decades of experience,
        innovative techniques, and a hands-on approach to every project. Whether
        it’s new construction, renovations, or infrastructure development, we’re
        committed to building strong structures — and even stronger client
        partnerships. At Adicorp, construction is more than our business — it’s
        our passion.
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          navigate('/portfolio');
        }}
      >
        {' '}
        Portfolio{' '}
      </Button>
    </Stack>
  );
}
