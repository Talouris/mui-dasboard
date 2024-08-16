import React from 'react';
import { Box, Typography, Link, Grid, IconButton, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: theme.palette.background.footer,
        color: theme.palette.text.white,
        marginTop: 'auto',
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" color="inherit">
            &copy; 2024 ANYHR.IO
          </Typography>
          <Box mt={2}>
            <Link href="/api" color="inherit" underline="none" sx={{ marginRight: 2 }}>API</Link>
            <Link href="/ssg" color="inherit" underline="none" sx={{ marginRight: 2 }}>SSG</Link>
            <Link href="/" color="inherit" underline="none">SSR</Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' }, mt: { xs: 2, sm: 0 } }}>
          <IconButton color="inherit" href="#">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="#">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="#">
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
