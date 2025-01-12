import { AppBar, Toolbar, Container, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 64, justifyContent: 'space-between' }}>
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              display: 'flex', 
              alignItems: 'center',
              color: 'inherit'
            }}
          >
            <Logo />
          </Link>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: isActive('/') ? 'primary.main' : 'text.primary',
                fontWeight: isActive('/') ? 600 : 500,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'primary.main',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/archive"
              sx={{
                color: isActive('/archive') ? 'primary.main' : 'text.primary',
                fontWeight: isActive('/archive') ? 600 : 500,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'primary.main',
                },
              }}
            >
              Archive
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="contained"
              color="primary"
              size="small"
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 