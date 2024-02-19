import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./style/theme"

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Screen>
        <h1>Hello World</h1>
      </Screen>
    </ThemeProvider>
  );
}

export default App;