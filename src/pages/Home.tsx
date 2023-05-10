import { Button, Flex, Text, Box, FlexProps } from "@chakra-ui/react";
import HeaderComponent from "../components/Header/Header";

import CardDetailsComponent from "../components/Cards/Card";
import ImgBook from "../assets/img";
import Footer from "../components/Footer/Footer";
import { Key, SetStateAction, useCallback, useState } from "react";
import { City, cities } from "../database/cities";

interface Props {
  data: any;
}

export default function HomePage({ data }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cityList, setCityList] = useState<City[]>(cities);

  // const handleSearch = (event: {
  //   target: { value: SetStateAction<string> };
  // }) => {
  //   setSearchTerm(event.target.value);
  // };

  // const filteredCards = data.filter((card: { title: string }) =>
  //   card.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleSearch = useCallback(
    (value: string) => {
      setSearchTerm(value);
      if (value.length > 0) {
        const filteredCityList = cityList.filter((city) => {
          city.location
            .toString()
            .toLowerCase()
            .includes(value.toString().toLowerCase());
        });
        setCityList(filteredCityList);
      } else {
        setCityList(cities);
      }
    },
    [searchTerm]
  );

  return (
    <>
      <HeaderComponent
        searchTerm={searchTerm}
        handleSearch={(e) => handleSearch(e)}
      />
      <Flex pt={8} justifyContent="center" minHeight="53.2rem" w="100%">
        <Box pl={8} w="1216px" h="1121px">
          <Flex justifyContent="space-between">
            <Text fontSize="3.2rem" as="b">
              Blocos recomendados
            </Text>
          </Flex>
          <Flex direction="column" gap={8}>
            <Flex gap={8}>
              {cityList.slice(0, 3).map((item, index) => {
                return (
                  <CardDetailsComponent
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    summary={item.summary}
                    location={item.location}
                  />
                );
              })}
            </Flex>
            <Flex gap={8}>
              {cityList.slice(3, 6).map((item, index) => {
                return (
                  <CardDetailsComponent
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    summary={item.summary}
                    location={item.location}
                  />
                );
              })}
            </Flex>
            <Flex gap={8}>
              {cityList.slice(6, 9).map((item, index) => {
                return (
                  <CardDetailsComponent
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    summary={item.summary}
                    location={item.location}
                  />
                );
              })}
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
