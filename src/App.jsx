import React from 'react';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import { Screen } from "./style/index";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Screen>
        <Flex direction="row" justify="space-between">
          <h1>Hello World</h1>
          <h2>Hello World</h2>
        </Flex>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
