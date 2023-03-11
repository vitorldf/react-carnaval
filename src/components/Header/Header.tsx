import React from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import top from "../../assets/top.svg";
import bottom from "../../assets/bottom.svg";
import { BiSearchAlt } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

const color = {
  color: " #6246EA",
};

export default function Header() {
  return (
    <Flex
      display="grid"
      alignContent="center"
      justifyContent="center"
      bg="#F8F8FF"
      minHeight="53.2rem"
      position="relative"
      overflow="hidden"
      place-content="center"
    >
      <Image
        position="absolute"
        zIndex={0}
        top={0}
        left={0}
        width="40.7rem"
        height="34.5rem"
        src={top}
      />

      <Flex margin="auto" w="fit-content" textAlign="center" direction="column">
        <Text
          fontWeight={500}
          fontSize="16px"
          line-height="160%"
          color="#E45858"
          textTransform="uppercase"
          fontFamily="Roboto"
        >
          find your block
        </Text>
        <Text fontFamily="Roboto" fontSize="4.0rem" as="b">
          Encontre os{" "}
          <span style={color}>
            {" "}
            melhores blocos <br />
          </span>
          de carnaval de 2023
        </Text>
      </Flex>
      <Flex
        mt="2rem"
        padding="2rem"
        gap="2.4rem"
        w="993px"
        h="128px"
        bg="#FFFFFF"
        border="0.1rem solid #EAEAEA"
        borderRadius="1.5rem"
      >
        <InputGroup>
          <InputLeftElement children={<BiSearchAlt color="#E45858" />} />
          <Input
            size="lg"
            focusBorderColor="pink.200"
            placeholder="Pesquise por nome"
            type="text"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement children={<HiLocationMarker color="#E45858 " />} />
          <Input
            size="lg"
            focusBorderColor="pink.200"
            placeholder="Pesquise por endereço"
            type="text"
          />
        </InputGroup>
      </Flex>

      <Image
        position="absolute"
        width="41.4rem"
        height="33.0rem"
        right={0}
        bottom={0}
        src={bottom}
      />
    </Flex>
  );
}
