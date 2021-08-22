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
  PinInputField,Tabs, TabList, TabPanels, Tab, TabPanel 
} from "@chakra-ui/react";
import verifyIcon from "../assets/verifyIcon.svg";
import puzzlePiece from "../assets/puzzlepiece.svg";

const style = {
  transform: "rotate(180deg)",
  transition: "transform 150ms ease", // smooth transition
};


/**
 * This page is for both creating a new event and getting an invite code and joining an event
 * 
 * */ 

const JoinEvent = () => {
  return (
    <Box>
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


        <Box p="30px 32px 45px" >

       
          <Image h="120%" src={verifyIcon} mx="auto" />
          <Heading size="md" mt="11px" textAlign="center">
            Join an Event
          </Heading>

          <Text
            fontSize="14px"
            mb="20px"
            mt="23px"
            fontFamily="Roboto"
            textAlign="center"
          >
           Protecting your groups is our top priority. Please confirm your group membership code below.
          </Text>
          <HStack justifyContent="center" mb="40px" >
            <PinInput  type="alphanumeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>

          <HStack mt="10px" mb="10px" justifyContent="center">
            <Button
              w="42%"
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
  </Box>);
};

export default JoinEvent;
