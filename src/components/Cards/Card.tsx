import {
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Text,
  Heading,
  Icon,
  Box,
} from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";

interface props {
  img: any;
  title: string;
  summary: string;
  location: string;
}

export default function CardDetailsComponent({
  img,
  title,
  summary,
  location,
}: props) {
  return (
    <Card w="384px" h="323px">
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
