import { useState, useEffect } from 'react';
import { Typography, Box, Button, CircularProgress } from '@mui/material';
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
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ 
      width: '100vw', 
      height: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: 'white',
      px: 3
    }}>
      <Box sx={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        <Typography variant="h1" sx={{ fontSize: '3rem', color: '#2196f3', mb: 2 }}>
          Ads For Charity
        </Typography>
        
        <Typography sx={{ fontSize: '1.25rem', color: '#666', mb: 6 }}>
          Support charitable causes by reading AI-generated content and watching ads
        </Typography>

        {content ? (
          <Box sx={{ textAlign: 'left', mb: 6 }}>
            <Typography sx={{ fontSize: '2rem', mb: 3, color: '#2c3e50' }}>
              {content.title}
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
              {content.content}
            </Typography>
          </Box>
        ) : (
          <Typography sx={{ color: '#666', mb: 6 }}>
            No content available
          </Typography>
        )}

        <Button
          variant="contained"
          size="large"
          startIcon={<PlayCircleIcon />}
          onClick={handleWatchAd}
          sx={{ 
            bgcolor: '#2196f3',
            fontSize: '1.1rem',
            py: 2,
            px: 4,
            mb: 8,
            '&:hover': {
              bgcolor: '#1976d2'
            }
          }}
        >
          SUPPORT OUR MISSION - WATCH AN AD
        </Button>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          gap: 4,
          maxWidth: '800px',
          mx: 'auto'
        }}>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography sx={{ fontSize: '1.25rem', mb: 1, color: '#2c3e50' }}>Step 1</Typography>
            <Typography sx={{ color: '#666' }}>Read our daily AI-generated content</Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography sx={{ fontSize: '1.25rem', mb: 1, color: '#2c3e50' }}>Step 2</Typography>
            <Typography sx={{ color: '#666' }}>Watch ads to generate revenue</Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography sx={{ fontSize: '1.25rem', mb: 1, color: '#2c3e50' }}>Step 3</Typography>
            <Typography sx={{ color: '#666' }}>All revenue goes to charitable causes</Typography>
          </Box>
        </Box>
      </Box>

      <Box id="propeller-ad-1" sx={{ display: 'none' }} />
      <Box id="propeller-ad-2" sx={{ display: 'none' }} />
    </Box>
  );
}

export default Home; 