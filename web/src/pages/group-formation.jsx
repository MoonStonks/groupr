import React, { useState, useEffect, useContext } from "react";
import {
  chakra,
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
  Icon,
  IconButton,
  Circle,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tooltip,
} from "@chakra-ui/react";

import { FiPlus, FiSettings, FiPower } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import {HiLogout} from "react-icons/hi";
import YourTeam from "../components/YourTeam";
import FindTeam from "../components/FindTeam";
import Scout from "../components/Scout";

const events = [
  {
    id: "123",
    avatarURL: "red.300",
    name: "Hackathon1",
    maxTeamSize: 5,
  },
  {
    id: "string",
    avatarURL: "blue.300",
    name: "CPSC110 Assignment",
    maxTeamSize: 4,
  },
  {
    id: "string",
    avatarURL: "green.300",
    name: "Math Contest Team",
    maxTeamSize: 3,
  },
  {
    id: "string",
    avatarURL: "yellow.400",
    name: "Case Comp at Google",
    maxTeamSize: 2,
  },
  {
    id: "string",
    avatarURL: "gray",
    name: "Varsity Soccer",
    maxTeamSize: 4,
  },
  {
    id: "1233",
    avatarURL: "red.300",
    name: "Hackathon2",
    maxTeamSize: 5,
  },
  {
    id: "string",
    avatarURL: "blue.300",
    name: "rando Assignment",
    maxTeamSize: 4,
  },
  {
    id: "string",
    avatarURL: "green.300",
    name: "Physics Contest Team",
    maxTeamSize: 6,
  },
  {
    id: "string",
    avatarURL: "yellow.400",
    name: "Case Comp at FAcebook",
    maxTeamSize: 4,
  },
  {
    id: "string",
    avatarURL: "gray",
    name: "Varsity Baseball",
    maxTeamSize: 30,
  },
];

const GroupFormation = () => {
  const [selectedEvent, setSelectedEvent] = useState("123");

  return (
    <Flex h="100vh">
      <VStack w="110px" bg="white" >
        <Box>
          <Heading size="sm" textAlign="center" mt="30px">
          groupr
          </Heading>
          <Circle size="60px" bg="#D16767" mt="30px">
            <Icon boxSize="40px" color="black" as={MdPersonOutline} />
          </Circle>
          <Box mt="20px" h="2px" w="60px" bg="#BDADAD" />
        </Box>

        <Box
          w="100%"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#3B3E3E",
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#9BA09F",
              opacity: "12",
              borderRadius: "24px",
            },
          }}
        >
          {events.map((event) => (
            <Tooltip
              label={event.name}
              aria-label={`${event.name} tooltip`}
              placement="right"
            >
              <Flex justifyContent="flex-start" w="100%" mb="5px" >
                <Box
                  bg="green.600"
                  h="60px"
                  w="10px"
                  rounded="5px"
                  mr="10px"
                  visibility={selectedEvent === event.id ? "visible" : "hidden"}
                />
                <Circle _hover={{cursor: 'pointer'}} size="60px" bg={event.avatarURL} />
              </Flex>
            </Tooltip>
          ))}
        </Box>

        <Spacer />
        <VStack >
          <Circle size="60px" bg="#1F523A">
            <Icon color="white" boxSize="40px" as={FiPlus} />
          </Circle>
          <Circle size="60px" bg="#1F523A">
            <Icon color="white" boxSize="40px" as={FiPower} />
          </Circle>
          <Box h="10px"></Box>
        </VStack>
      </VStack>
      <Box
        w="100%"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#3B3E3E",
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#9BA09F",
            opacity: "12",
            borderRadius: "24px",
          },
        }}
      >
          <Tabs isLazy ml="20px" w='100%' h="100%" pt='30px' pr='30px'>
            <TabList
              textColor="gray.100"
              maxW="500px"
              borderColor="transparent"
            >
              <StyledTab>Your Team</StyledTab>
              <StyledTab>Find a Team</StyledTab>
              <StyledTab>Scout Individuals</StyledTab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <YourTeam />
              </TabPanel>
              <TabPanel>
                <FindTeam />
              </TabPanel>
              <TabPanel>
                <Scout />
              </TabPanel>
            </TabPanels>
          </Tabs>
      </Box>
    </Flex>
  );
};

const StyledTab = chakra(function ({ className, children, isDisabled }) {
  return (
    <Tab
      className={className}
      borderBottomColor="transparent"
      px='30px'
      _selected={{
        borderColor: "white",
        textColor: "white",
        fontWeight: "bold",
      }}
    >
      {children}
    </Tab>
  );
});

export default GroupFormation;
