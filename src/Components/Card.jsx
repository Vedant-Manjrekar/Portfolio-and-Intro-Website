import React from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import {
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
} from "@chakra-ui/react";

function Card1({ name, info, pic, classs, url, github }) {
  return (
    <Card
      bg={"white"}
      w={{ md: "40vw", base: "70vw" }}
      mr={"3vw"}
      h="max-content"
      className={classs}
      id="project_card"
    >
      <CardBody p={{ base: "1vh" }}>
        <Image src={pic} alt="Project Picture" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size={["sm", "md", "lg"]} p={{ base: "0 2vh" }}>
            {name}{" "}
          </Heading>
          <Text fontSize={["sm", "md", "lg"]} p={{ base: "0 2vh" }}>
            {info}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent={"space-between"}>
        <ButtonGroup size={["sm", "md", "lg"]}>
          <Button variant="solid" colorScheme="blue">
            <a href={url} target="_blank">
              Link
            </a>
          </Button>
          <Button variant="ghost" colorScheme="blue">
            <a href={github} target="_blank">
              GitHub
            </a>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Card1;
