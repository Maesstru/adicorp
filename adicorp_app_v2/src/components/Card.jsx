import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Divider, Stack } from '@mui/material';
import { LocationOn, CalendarToday } from '@mui/icons-material';

import photo from '../assets/download.png';

export default function MyCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={photo}
          alt="green iguana"
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography gutterBottom variant="h3" component="div">
            Lizard
          </Typography>
          <Stack>
            <Typography variant="body">
              <CalendarToday
                fontSize="small"
                sx={{ verticalAlign: 'middle', mr: 0.5 }}
              />
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date())}{' '}
            </Typography>
            <Typography variant="body">
              <LocationOn
                fontSize="small"
                sx={{ verticalAlign: 'middle', mr: 0.5 }}
              />
              San Francisco, CA
            </Typography>
          </Stack>

          <Typography variant="body2">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
