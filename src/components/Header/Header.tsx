import React from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import top from "../../assets/top.svg";
import bottom from "../../assets/bottom.svg";

// bg="#F8F8FF" 

export default function Header() {
  return (
    <Flex w="100%" bg="red.200" minHeight="53.2rem" fontSize="1.6em" position="relative" overflow="hidden">
      <Image position="absolute" zIndex={0} top={0} left={0}   width="40.7rem" height="34.5rem" src={top} />
      <Box  bg="red.400"   w="100%">
        <Flex  bg="green.200" textAlign="center" direction="column" gap={4}>
          <Text>find your block</Text>
          <Text fontSize="4.8rem" as="b">
            Encontre os <span>melhores <br/> blocos</span> de carnaval de 2023
          </Text>
        </Flex>
        {/* <Flex bg="green.600" w="100%" >
          <FormControl>
            <FormLabel>Search Here</FormLabel>
            <Input type="email" />
            <FormErrorMessage>Error</FormErrorMessage>
            <FormHelperText>here pliss</FormHelperText>
          </FormControl>
        </Flex> */}
      </Box>
      <Image   position="absolute" width="41.4rem" height="33.0rem" right={0} bottom={0} src={bottom} />
    </Flex>
  );
}
