import { useState, useEffect } from 'react';
import { Container, Paper, Typography, Box, CircularProgress, Button, AppBar } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function Home() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestContent();
  }, []);

  const fetchLatestContent = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/content/latest');
      const data = await response.json();
      setContent(data);
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
            Read & Support Charity
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Every article you read helps generate funds for charitable causes
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
        {content ? (
          <Box sx={{ display: 'flex', gap: 4, mb: 6 }}>
            {/* Article Content */}
            <Box sx={{ flex: 1 }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 3, md: 5 },
                  borderRadius: 2,
                  bgcolor: 'white',
                  border: '1px solid',
                  borderColor: 'grey.200'
                }}
              >
                <Typography 
                  variant="h3" 
                  component="h2" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 700,
                    mb: 4,
                    color: 'text.primary'
                  }}
                >
                  {content.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    whiteSpace: 'pre-wrap',
                    lineHeight: 1.8,
                    color: 'text.secondary',
                    fontSize: '1.1rem'
                  }}
                >
                  {content.content}
                </Typography>
              </Paper>
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
        ) : (
          <Paper elevation={0} sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              No content available
            </Typography>
          </Paper>
        )}
      </Container>

      {/* Hidden Ad Containers */}
      <Box id="propeller-ad-1" sx={{ display: 'none' }} />
      <Box id="propeller-ad-2" sx={{ display: 'none' }} />
    </Box>
  );
}

export default Home; 