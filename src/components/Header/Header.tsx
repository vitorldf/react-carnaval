import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box alignContent="center"  w="100%" bg="red" h="550px">
      <Box textAlign="center" pt={8}>
        <p>find your block</p>
        <Text>
          Encontre os <span>melhores blocos</span> de carnaval de 2023
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
