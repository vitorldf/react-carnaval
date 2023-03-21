import { Button, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import img1 from "../../assets/img/img1.svg";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Flex
        id="content"
        padding="0"
        justify="normal"
        alignItems="flex-start"
        maxWidth="121.6rem"
        h="121.1rem"
        bg="red"
        gap="4.0rem"
        justifyContent="space-between"
      >
        <Text fontSize="3.2rem" as="b">
          Blocos recomendados
        </Text>
        <Flex gap={2} marginTop={4} id="top">
          <Button size="lg" color="white" bg="#6246EA">
            LISTA
          </Button>
          <Button size="lg" color="#6246EA" _hover={{ bg: "#4021EA" }}>
            MAPA
          </Button>
        </Flex>
        <Flex id="cards">
          <Card w="384px" h="323px">
            <CardBody>
              <Image src={img1} />
              
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </div>
  );
}
