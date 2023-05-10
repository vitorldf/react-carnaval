import {
  Button,
  CardBody,
  Flex,
  Image,
  Text,
  Heading,
  Icon,
  Box,
  Card,
} from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";

interface props {
  img: any;
  title: string;
  summary: string;
  location: string;
  id: any;
 
}

export default function CardDetailsComponent({
  img,
  title,
  summary,
  location,
  id,
}: props) {
  return (
    <Card
      bg="#F8F8FF"
      w="384px"
      h="323px"
      id={""}
      _hover={{
        transform:" scale(1.1)",
        boxShadow: "0 0 10px 0 rgba(38, 35, 83)",
      }}
    >
      <CardBody>
        <Image src={img} />
        <Heading fontSize="20px" pt="4">
          {title}
        </Heading>
        <Text pt="4">{summary}</Text>
        <Flex alignItems="center" gap="1" pt="4">
          <Icon boxSize="20px" color="#E45858" as={HiLocationMarker} />
          <Text>{location}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
