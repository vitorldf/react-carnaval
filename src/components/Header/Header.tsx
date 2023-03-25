import React from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
  Select,
  Button,
  Icon,
} from "@chakra-ui/react";
import top from "../../assets/top.svg";
import bottom from "../../assets/bottom.svg";
import { BiSearchAlt } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

function getFilterElements() {
  const filterElements = document.querySelector("header-input");

  const card = document.querySelectorAll(".card");
}

const color = {
  color: " #6246EA",
};

export default function HeaderComponent() {
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
      fontFamily="Roboto"
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
        >
          find your block
        </Text>
        <Text fontSize="4.0rem" as="b">
          Encontre os{" "}
          <span style={color}>
            {" "}
            melhores blocos <br />
          </span>
          de carnaval de 2024
        </Text>
      </Flex>
      <Flex
        mt="2rem"
        padding="2rem"
        gap="1rem"
        w="993px"
        h="128px"
        bg="#FFFFFF"
        border="0.1rem solid #EAEAEA"
        borderRadius="1.5rem"
        zIndex="9999"
      >
        <InputGroup>
          <InputLeftElement
            children={<BiSearchAlt color="#E45858" size="30px" />}
          />
          <Input
            id="header-input"
            size="lg"
            borderRadius="1.2rem"
            focusBorderColor="pink.200"
            placeholder="Pesquise por nome"
            type="text"
          />
        </InputGroup>
        {/* <InputGroup>
          <InputLeftElement children={<HiLocationMarker color="#E45858 " />} /> */}
        <Select
          borderRadius="1.2rem"
          size="lg"
          placeholder="Selecione uma cidade"
          focusBorderColor="pink.200"
          icon={<HiLocationMarker />}
          iconSize="3.0rem"
          iconColor="#E45858 "
          variant="filled"
        >
          <HiLocationMarker />
          <option value="sao-paulo"> São Paulo</option>
          <option value="rio-de-janeiro"> Rio de Janeiro</option>
          <option value="curitiba"> Curitiba</option>
        </Select>
        <Button
          w="50%"
          borderRadius="1.2rem"
          size="lg"
          color="white"
          bg="#6246EA"
        >
          BUSCAR AGORA
        </Button>
        {/* <Input
            size="lg"
            focusBorderColor="pink.200"
            placeholder="Pesquise por endereço"
            type="text"
          /> */}
        {/* </InputGroup> */}
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
