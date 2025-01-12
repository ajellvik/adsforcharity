import { Box, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Logo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <AutoStoriesIcon 
        sx={{ 
          fontSize: 24,
          color: 'primary.main',
        }} 
      />
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          letterSpacing: '-0.5px',
          fontSize: '1.125rem',
        }}
      >
        AdsForCharity
      </Typography>
    </Box>
  );
}

export default Logo; 