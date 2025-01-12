import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  CircularProgress,
  Grid,
} from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Archive() {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllContent();
  }, []);

  const fetchAllContent = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/content/all');
      const data = await response.json();
      setContents(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching content:', error);
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="calc(100vh - 70px)">
        <CircularProgress />
      </Box>
    );
  }

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
            Article Archive
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
            Explore our collection of articles while supporting charitable causes
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: -4,
          position: 'relative',
          zIndex: 2,
          mb: 8
        }}
      >
        <Grid container spacing={4}>
          {/* Articles List */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {contents.map((content) => (
                <Grid item xs={12} key={content._id}>
                  <Paper 
                    elevation={2} 
                    sx={{ 
                      p: 4,
                      borderRadius: 2,
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                      {content.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {content.content.substring(0, 300)}...
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="subtitle2" color="text.secondary">
                        {new Date(content.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ 
                          borderRadius: 2,
                          px: 3
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 2,
                position: 'sticky',
                top: 100
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <FavoriteIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  Support Our Mission
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Your time reading our content helps generate revenue for charitable causes.
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleWatchAd}
                  startIcon={<PlayCircleIcon />}
                  sx={{ mt: 2 }}
                >
                  Support Now
                </Button>
              </Box>

              {/* Hidden Ad Containers */}
              <Box id="propeller-ad-3" sx={{ display: 'none' }} />
              <Box id="propeller-ad-4" sx={{ display: 'none' }} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Archive; 