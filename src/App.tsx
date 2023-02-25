import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </div>
  );
}

export default App;
