import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Input,
  Button,
  HStack,
  Image,
  Link,
  Spacer,
  Flex,
  VStack,
} from "@chakra-ui/react";

const events = [
  {
    bg: "red",
  },
  {
    bg: "blue",
  },
  {
    bg: "green",
  },
  {
    bg: "yellow",
  },
  {
    bg: "gray",
  },
];

const GroupFormation = () => {
  return (
    <Flex h="100vh">
      <VStack w="70px" bg="white">
          <Heading size='xs'>
              GroupR
          </Heading>
      </VStack>
      <VStack w="160px" bg="gray.200"></VStack>
      <Box></Box>
    </Flex>
  );
};

export default GroupFormation;
