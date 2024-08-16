'use client';

import React, { useState, useEffect, useMemo, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OpenCard from '../components/OpenCard';
import { Box, IconButton, ThemeProvider, createTheme,useTheme } from '@mui/material';
import { Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@mui/icons-material';
import { purple, grey } from '@mui/material/colors';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.secondary',
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: purple,
          background: {
            paper: '#fff',
            footer: '#9c27b0',
          },
          text: {
            primary: '#000',
            secondary: grey[700],
            white: '#fff',
            grey: grey[700],
            cardP: grey[600],
          },
        }
      : {
          primary: {
            main: purple[500],
          },
          background: {
            paper: '#000',
            footer: '#000',
          },
          text: {
            primary: '#fff',
            secondary: '#fff',
            white: '#fff',
            grey: grey[700],
            cardP: grey[500],
          },
        }),
  },
});

export default function Item({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchItem = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/products/${params.itemSlug}`);
      if (response.ok) {
        const itemElem = await response.json();
        setPost(itemElem[0]);
      }
    } catch (error) {
      console.error('Error fetching item:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <header>
          <Header />
        </header>
        <MyApp />
        <div className="card">
          <h1 className="title">
            {loading ? <div>Loading...</div> : post && <OpenCard itemElem={post} />}
          </h1>
          <div className="div_holder"></div>
        </div>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
