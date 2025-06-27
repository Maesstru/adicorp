import { Box, Typography } from '@mui/material';

export default function Presentation() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <Typography variant="h3" component="h1">
        Full Screen Red Section
      </Typography>
    </Box>
  );
}
