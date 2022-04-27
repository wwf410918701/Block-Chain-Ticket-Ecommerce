import React from 'react';
import { Routes } from 'react-router-dom';

import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';

import './App.css';
import { main_components_routes } from './routers/index';
import Header from './components/header/header';
import Container from '@mui/material/Container/Container';
import { SpeedDialSupport } from './components/speed-dial-support/speed-dial-support';
import { Footer } from './components/footer/footer';
import Box from '@mui/material/Box/Box';



function App() {
  //获取用户当前系统是否为暗黑模式
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  //根据用户系统是否暗黑模式生成对应的主题
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'light' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', minWidth: '100%'}}>
      <Header />
      <Routes>
        {
          Object.keys(main_components_routes).map(main_route => main_components_routes[main_route])
        }
      </Routes>
      <SpeedDialSupport/>
      </Box>
      <Footer/>
  </ThemeProvider>
  );
}

export default App;
