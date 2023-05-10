import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./pages/Home";
import { Theme } from "./assets/theme";
import CardsContextWrapper from "./context/cardsContext";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={Theme}>
        <CardsContextWrapper>
          <HomePage data={undefined} />
        </CardsContextWrapper>
      </ChakraProvider>
    </div>
  );
}

export default App;
