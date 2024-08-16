'use client'

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { purple, grey} from '@mui/material/colors';
import Header from './components/Header';
import NewTabs from './components/NewTabs';
import Footer from './components/Footer';
import StatSlider from './components/StatSlider';
import AnalyticsDashboard from './components/StatGrid';
import ElementFinder from './components/FindByID';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
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
          // palette values for light mode
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
          // palette values for dark mode
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

export default function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <header>
          <Header/>
          <MyApp />
        </header>
        <main>
          <AnalyticsDashboard/>
          <StatSlider/>
          <NewTabs/>
          <ElementFinder/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}