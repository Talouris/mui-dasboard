import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Typography variant="h6" noWrap component="div">
            ANYHR.IO
          </Typography>
          <VerifiedIcon sx={{ marginLeft: 1, marginRight: 2 }} />
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Box>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link href="/api" passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>API</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/ssg" passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>SSG</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/" passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>SSR</a>
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
