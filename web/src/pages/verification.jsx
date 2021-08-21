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
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import verifyIcon from "../assets/verifyIcon.svg";
import puzzlePiece from "../assets/puzzlepiece.svg";

const style = {
  transform: "rotate(180deg)",
  transition: "transform 150ms ease", // smooth transition
};

const Verification = () => {
  return (
    <Box h="calc(100vh - 52px)">
      <Box bg="white" h="42px" boxShadow="0px 10px 5px #173D2B">
        <Heading size="md" ml="18px" pt="9px">
          GroupR
        </Heading>
      </Box>
      <Box zIndex={1}>
        <Image
          position="absolute"
          h="100%"
          ml="68%"
          mb="30%"
          src={puzzlePiece}
        />{" "}
      </Box>
      <Box zIndex={1}>
        <Image
          style={style}
          position="absolute"
          h="100%"
          mr="68%"
          mb="31%"
          transform="rotate"
          src={puzzlePiece}
        />{" "}
      </Box>
      <Box
        zIndex={5}
        flexDir={"column"}
        width={"378px"}
        mx="auto"
        bg="white"
        mt="63px"
        rounded="10px"
      >
        <Box p="30px 32px 45px">
          <Image h="120%" src={verifyIcon} mx="auto" />
          <Heading size="md" mt="11px" textAlign="center">
            Verification Code
          </Heading>

          <Text
            fontSize="xs"
            mb="5px"
            mt="23px"
            fontFamily="Roboto"
            textAlign="center"
          >
            Protecting your groups is our top priority. Please confirm your
            group membership by entering the authorization code sent to
            ***-***-2283
          </Text>
          <HStack justifyContent="center" mb="40px">
            <PinInput>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>

          <HStack mt="10px" mb="10px">
            <Text zIndex={5} textAlign="center" fontSize="xs">
              It may take a minute to receive your code. Haven’t received it?{" "}
              <Link color="#3751FF" href="#">
                Resend a new code.
              </Link>
            </Text>
            <Button
              w="full"
              colorScheme="teal"
              bg="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #276749;"
              rounded="10px"
              mt="22px"
            >
              Submit
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Verification;
