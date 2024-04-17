import React from 'react';
import { ThemeProvider } from "styled-components";
import { NavBar } from "./components/navbar";
import { Screen } from "./style/index";
import { darkTheme, lightTheme } from "./style/theme";


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Screen>
        <NavBar />
      </Screen>
    </ThemeProvider>
  );
}

export default App;
