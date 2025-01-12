import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function About() {
  const handleWatchAd = () => {
    if (window.propellerads) {
      window.propellerads.push({
        onComplete: function(e) {
          console.log("Ad completed");
        },
        onClosed: function(e) {
          console.log("Ad closed");
        }
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
          color: 'white',
          pt: { xs: 6, md: 8 },
          pb: { xs: 8, md: 10 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800,
              mb: 2,
              textAlign: 'center'
            }}
          >
            About Our Mission
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4, 
              opacity: 0.9,
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            We're transforming passive reading into active charitable support
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: -4, mb: 8, position: 'relative', zIndex: 2 }}>
        {/* How It Works Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                height: '100%',
                textAlign: 'center',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <AutoStoriesIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Daily Content
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our AI-powered system generates fresh, engaging content every day using advanced ChatGPT technology, ensuring there's always something new to discover.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                height: '100%',
                textAlign: 'center',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <MonetizationOnIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Ad Revenue
              </Typography>
              <Typography variant="body1" color="text.secondary">
                While you enjoy our content, the advertisements you see generate revenue through our ad partners, turning your attention into charitable contributions.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                height: '100%',
                textAlign: 'center',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <VolunteerActivismIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Charitable Impact
              </Typography>
              <Typography variant="body1" color="text.secondary">
                100% of the ad revenue is donated to carefully selected charitable organizations, ensuring your time spent reading creates real-world positive change.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Mission Statement */}
        <Paper 
          elevation={2} 
          sx={{ 
            p: { xs: 4, md: 6 },
            borderRadius: 2,
            bgcolor: 'primary.main',
            color: 'white',
            textAlign: 'center',
            mb: 6
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Our Impact
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', mb: 4, opacity: 0.9 }}>
            We believe in the power of small actions to create significant change. By combining engaging content with purposeful advertising, we've created a platform where everyday reading becomes a force for good.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<PlayCircleIcon />}
            onClick={handleWatchAd}
            sx={{
              py: 2,
              px: 4,
              fontSize: '1.1rem',
            }}
          >
            Support Our Mission
          </Button>
        </Paper>

        {/* Hidden Ad Containers */}
        <Box id="propeller-ad-5" sx={{ display: 'none' }} />
        <Box id="propeller-ad-6" sx={{ display: 'none' }} />
      </Container>
    </>
  );
}

export default About; 