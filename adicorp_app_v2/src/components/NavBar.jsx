import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useScrollTrigger,
  Slide,
} from '@mui/material';

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
  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Scroll to hide App bar
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
