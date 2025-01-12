import { Container, Paper, Typography, Box, Grid, Card } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 3 }}>
          Making a Difference, One Read at a Time
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Welcome to Ads For Charity, where your daily reading habit transforms into meaningful support for charitable causes.
        </Typography>
      </Box>

      {/* How It Works Section */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={0} sx={{ p: 4, height: '100%', borderRadius: 3 }}>
            <Box sx={{ mb: 2 }}>
              <AutoStoriesIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            </Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Daily Content
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our AI-powered system generates fresh, engaging content every day using advanced ChatGPT technology, ensuring there's always something new to discover.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={0} sx={{ p: 4, height: '100%', borderRadius: 3 }}>
            <Box sx={{ mb: 2 }}>
              <MonetizationOnIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            </Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Ad Revenue
            </Typography>
            <Typography variant="body1" color="text.secondary">
              While you enjoy our content, the advertisements you see generate revenue through Google AdSense, turning your attention into charitable contributions.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={0} sx={{ p: 4, height: '100%', borderRadius: 3 }}>
            <Box sx={{ mb: 2 }}>
              <VolunteerActivismIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            </Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Charitable Impact
            </Typography>
            <Typography variant="body1" color="text.secondary">
              100% of the ad revenue is donated to carefully selected charitable organizations, ensuring your time spent reading creates real-world positive change.
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Mission Section */}
      <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, bgcolor: 'primary.main', color: 'white', mb: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9, fontSize: '1.1rem', lineHeight: 1.8 }}>
              We believe in the power of small actions to create significant change. By combining engaging content with purposeful advertising, we've created a platform where everyday reading becomes a force for good. Our commitment to transparency and impact ensures that your time on our platform directly contributes to making the world a better place.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="YOUR-AD-CLIENT-ID"
                data-ad-slot="YOUR-AD-SLOT"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Bottom Ad */}
      <Box sx={{ textAlign: 'center' }}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="YOUR-AD-CLIENT-ID"
          data-ad-slot="YOUR-AD-SLOT"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </Box>
    </Container>
  );
}

export default About; 