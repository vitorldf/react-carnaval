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

// const [filterCard, setFilterCard] = useState("");
// const [filterCardLocation, setFilterCardLocation] = useState("");

// const handleLocationFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setFilterCardLocation(e.target.value);
// };
// const handleCardFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setFilterCard(e.target.value);
// };

const color = {
  color: " #6246EA",
};

export default function HeaderComponent() {
  return (
    <Flex bg="#F8F8FF" fontFamily="Roboto">
      <Grid w={"100%"} templateColumns="repeat(10, 1fr)">
        <GridItem
          maxH={"1000px"}
          textAlign="center"
          colSpan={{ base: 12, md: 8, lg: 10 }}
        >
          <HStack  justifyContent={"flex-start"} gap={"14.0rem"} direction="column">
          <Image src={top} w="550px" />
            <Flex direction="column" id="tittle">
              <Text
                fontWeight={500}
                fontSize="1.5rem"
                line-height="160%"
                color="#E45858"
                textTransform="uppercase"
              >
                find your block
              </Text>
              <Text fontSize="5.0rem" as="b">
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
          <HStack w="100%" justifyContent="center" mb={"4.0rem"}>
            <Flex
              align="center"
              gap={2}
              w="993px"
              h="128px"
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
                  size="lg"
                  borderRadius="1.2rem"
                  focusBorderColor="pink.200"
                  placeholder="Pesquise por nome"
                  type="text"
                  value={""}
                  //  onChange={(event) => setTitleFilter(event.target.value)}
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
                size="lg"
                color="white"
                bg="#6246EA"
              >
                BUSCAR AGORA
              </Button>
            </Flex>
          </HStack>
        </GridItem>
        {/* <GridItem
          bg="red.200"
          colSpan={{ base: 4, md: 4, lg: 8 }}
          gap="1rem"
          w="993px"
          h="128px"
          // bg="#FFFFFF"
          border="0.1rem solid #EAEAEA"
          borderRadius="1.5rem"
        ></GridItem> */}
      </Grid>
    </Flex>
  );
}
