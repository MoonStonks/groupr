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
} from "@chakra-ui/react";
import googleLogo from "../assets/googlelogo.png";
export const Login = () => {
  return (
    <Box>
      <Box bg="white" h="42px">
        <Heading size="md" ml="18px" pt="9px">
          GroupR
        </Heading>
      </Box>
      <Box
        flexDir={"column"}
        width={"378px"}
        mx="auto"
        bg="white"
        mt="63px"
        rounded="10px"
      >
        <Box p="30px 60px 45px">
          <Heading size="md" mt="16px" textAlign="center">
            Log in
          </Heading>
          <Heading size="xs" mb="5px" mt="21px">
            Username or Email
          </Heading>
          <Input />
          <Heading size="xs" mt="10px" mb="5px">
            Password
          </Heading>
          <Input />

          <Heading size="xs" mt="12px">
            Forgot Password?{" "}
            <Link color="#3751FF" href="#">
              Reset your password
            </Link>
          </Heading>
          <Button
            w="full"
            colorScheme="teal"
            bg="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #276749;"
            rounded="4px"
            mt="22px"
          >
            Log In
          </Button>
          <HStack mt="10px" mb="10px">
            <Box height="1.5px" bg="black" w="full" />
            <Text fontWeight="bold">or</Text>
            <Box height="1.5px" bg="black" w="full" />
          </HStack>
          <Button w="full" borderColor="black" variant="outline">
            <Image h="22px" src={googleLogo} /> Continue with Google
          </Button>
          <Heading size="xs" mt="12px" textAlign="center" mb="20px">
            Don't have an account?{" "}
            <Link color="#3751FF" href="#">
              Sign up
            </Link>
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};
