import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./pages/Home/Home";
import { Theme } from "./assets/theme";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={Theme}>
        <HomePage />
      </ChakraProvider>
    </div>
  );
}

export default App;
