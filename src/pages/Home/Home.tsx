import { Button, Flex, Text, Box } from "@chakra-ui/react";
import HeaderComponent from "../../components/Header/Header";

import CardDetailsComponent from "../../components/Cards/Card";
import { ImgBook } from "../../assets/img/imgBook";

export default function HomePage() {
  return (
    <>
      <HeaderComponent />
      <Flex pt={8} justifyContent="center" minHeight="53.2rem" w="100%">
        <Box pl={8} w="1216px" h="1121px">
          <Flex justifyContent="space-between">
            <Text fontSize="3.2rem" as="b">
              Blocos recomendados
            </Text>
            <Box pt={3}>
              <Button size="lg" color="white" bg="#6246EA">
                LISTA
              </Button>
              <Button size="lg" color="#6246EA" _hover={{ bg: "#4021EA" }}>
                MAPA
              </Button>
            </Box>
          </Flex>
          <Flex>
            <CardDetailsComponent
              img={ImgBook.img1}
              title={"O Python do vovô não sobe mais"}
              summary={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
              }
              location={"São Paulo - SP"}
            />
            <CardDetailsComponent
              img={ImgBook.img2}
              title={"Todo mundo null"}
              summary={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
              }
              location={"Florianópolis - SC"}
            />
            <CardDetailsComponent
              img={ImgBook.img3}
              title={"Hoje dou exception"}
              summary={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
              }
              location={"Curitiba - PR"}
            />
          </Flex>
          <Flex>
            <CardDetailsComponent
              img={ImgBook.img4}
              title={"O Python do vovô não sobe mais"}
              summary={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
              }
              location={"São Paulo - SP"}
            />
            <CardDetailsComponent
              img={ImgBook.img5}
              title={"Todo mundo null"}
              summary={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
              }
              location={"Florianópolis - SC"}
            />
            <CardDetailsComponent
              img={ImgBook.img6}
              title={"Hoje dou exception"}
              summary={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
              }
              location={"Curitiba - PR"}
            />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
