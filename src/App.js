import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        light: '#33ab9f',
        main: '#009688',
        dark: '#00695f',
        contrastText: '#fff',
      },
      secondary: {
        dark: '#b22a00',
        main: '#ff3d00',
        light: '#ff6333',
        contrastText: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
