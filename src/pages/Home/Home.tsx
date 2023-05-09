import { Button, Flex, Text, Box, FlexProps } from "@chakra-ui/react";
import HeaderComponent from "../../components/Header/Header";

import CardDetailsComponent from "../../components/Cards/Card";
import { ImgBook } from "../../assets/img/imgBook";
import Footer from "../../components/Footer/Footer";

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
          <Flex direction="column" gap={8}>
            <Flex gap={8}>
              <CardDetailsComponent
                id={1}
                img={ImgBook.img1}
                title={"O Python do vovô não sobe mais"}
                summary={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
                }
                location={"São Paulo - SP"}
              />
              <CardDetailsComponent
                id={2}
                img={ImgBook.img2}
                title={"Todo mundo null"}
                summary={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
                }
                location={"Florianópolis - SC"}
              />
              <CardDetailsComponent
                id={3}
                img={ImgBook.img3}
                title={"Hoje dou exception"}
                summary={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
                }
                location={"Curitiba - PR"}
              />
            </Flex>
            <Flex gap={8}>
              <CardDetailsComponent
                id={4}
                img={ImgBook.img4}
                title={"Manda Node"}
                summary={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
                }
                location={"Salvador - BA"}
              />
              <CardDetailsComponent
                id={5}
                img={ImgBook.img5}
                title={"Só no back-end"}
                summary={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
                }
                location={"São Paulo - SP"}
              />
              <CardDetailsComponent
                id={6}
                img={ImgBook.img6}
                title={"Esse anel não é de Ruby"}
                summary={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
                }
                location={"São Paulo - SP"}
              />
            </Flex>
            <Flex gap={8}>
              <CardDetailsComponent
                id={7}
                img={ImgBook.img7}
                title={"Typesperando ?"}
                summary={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
                }
                location={"Rio de Janeiro - RJ"}
              />
              <CardDetailsComponent
                id={8}
                img={ImgBook.img8}
                title={"EnCACHE aqui"}
                summary={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
                }
                location={"Porto Alegre - RS"}
              />
              <CardDetailsComponent
                id={9}
                img={ImgBook.img9}
                title={"Não valho nada mas JAVA li"}
                summary={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet"
                }
                location={"São Paulo - SP"}
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
