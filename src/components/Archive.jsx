import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
} from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
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
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          width: '100%',
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
          mb: 4
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
            Article Archive
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Explore our collection of articles while supporting charitable causes
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayCircleIcon />}
            onClick={handleWatchAd}
            sx={{
              py: 2,
              px: 4,
              fontSize: '1.1rem',
              bgcolor: '#4CAF50',
              '&:hover': {
                bgcolor: '#388E3C'
              }
            }}
          >
            Watch Ad to Support Charity
          </Button>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', gap: 4, mb: 6 }}>
          {/* Articles List */}
          <Box sx={{ flex: 1 }}>
            <Grid container spacing={3}>
              {contents.map((content) => (
                <Grid item xs={12} key={content._id}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 4,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'grey.200',
                      transition: 'transform 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: 'primary.main'
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
          </Box>

          {/* Sidebar */}
          <Box sx={{ width: 300, display: { xs: 'none', md: 'block' } }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: 'white',
                border: '1px solid',
                borderColor: 'grey.200',
                position: 'sticky',
                top: 24
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Support Our Mission
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Your time reading our content helps generate revenue for charitable causes.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleWatchAd}
                sx={{ mt: 2 }}
              >
                Support Now
              </Button>
            </Paper>
          </Box>
        </Box>
      </Container>

      {/* Hidden Ad Containers */}
      <Box id="propeller-ad-3" sx={{ display: 'none' }} />
      <Box id="propeller-ad-4" sx={{ display: 'none' }} />
    </Box>
  );
}

export default Archive; 