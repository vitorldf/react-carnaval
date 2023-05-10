import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  FlexProps,
  Input,
  InputLeftElement,
  InputGroup,
  Select,
  Button,
  Icon,
  Grid,
  GridItem,
  HStack,
  VStack,
} from "@chakra-ui/react";
import top from "../../assets/top.svg";
import bottom from "../../assets/bottom.svg";
import { BiSearchAlt } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

interface headerProps {
  searchTerm: any;
  handleSearch(value: string): void;
}

const color = {
  color: " #6246EA",
};

export default function HeaderComponent({
  searchTerm,
  handleSearch,
}: headerProps) {
  return (
    <Flex bg="#F8F8FF" fontFamily="Roboto">
      <Grid w={"100%"} templateColumns="repeat(10, 1fr)">
        <GridItem
          maxH={"1000px"}
          textAlign="center"
          colSpan={{ base: 10, md: 12, lg: 10 }}
        >
          <HStack gap={{ base: 0, md: 0, lg: "14.0rem" }}>
            <Image
              src={top}
              w={{ md: "150px", lg: "550px" }}
              mb="20"
              display={{ base: "none", md: "block", lg: "block" }}
            />
            <Flex
              direction="column"
              pl={{ base: 10, md: 8, lg: 0 }}
              id="tittle"
            >
              <Text
                pt={4}
                fontWeight={500}
                fontSize={{ base: "0.8rem", md: "1.0rem", lg: "1.5rem" }}
                line-height="160%"
                color="#E45858"
                textTransform="uppercase"
              >
                find your block
              </Text>
              <Text
                fontSize={{ base: "1.4rem", md: "2rem", lg: "5.0rem" }}
                as="b"
              >
                Encontre os{" "}
                <span style={color}>
                  {" "}
                  melhores blocos <br />
                </span>
                de carnaval de 2024
              </Text>
            </Flex>
            {/* <Image width="41.4rem" height="34.8rem" src={bottom} pt={"20.0rem"} /> */}
          </HStack>
          <form>
          <HStack w="100%" justifyContent="center" mb={"4.0rem"}>
            <Flex
              direction={{ base: "column", md: "row", lg: "row" }}
              align="center"
              gap={2}
              w={{ base: "310px", md: "693px", lg: "993px" }}
              maxH="128px"
              bg="#FFFFFF"
              border="0.1rem solid #EAEAEA"
              borderRadius="1.5rem"
              padding={4}
            >
              <InputGroup>
                <InputLeftElement
                  children={<BiSearchAlt color="#E45858" size="30px" />}
                />
                <Input
                  id="header-input"
                  size={"lg"}
                  borderRadius="1.2rem"
                  focusBorderColor="pink.200"
                  placeholder="Pesquise por nome"
                  type="text"
                  value={searchTerm}
                  onChange={(event) => handleSearch(event.target.value)}
                />
              </InputGroup>

              <Select
                borderRadius="1.2rem"
                size="lg"
                placeholder="Selecione uma cidade"
                focusBorderColor="pink.200"
                icon={<HiLocationMarker />}
                iconSize="3.0rem"
                iconColor="#E45858 "
                variant="filled"
                value={"filterCardLocation"}
              >
                <HiLocationMarker />
                <option value="sao-paulo"> São Paulo</option>
                <option value="rio-de-janeiro"> Rio de Janeiro</option>
                <option value="curitiba"> Curitiba</option>
              </Select>
              <Button
                w="50%"
                borderRadius="1.2rem"
                size={{ base: "sm", md: "lg", lg: "lg" }}
                color="white"
                _hover={{ bg: " #262353" }}
                bg="#6246EA"
              >
                BUSCAR AGORA
              </Button>
            </Flex>
          </HStack>
          </form>
        </GridItem>
      </Grid>
    </Flex>
  );
}
