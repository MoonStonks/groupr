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
  Avatar,
} from "@chakra-ui/react";

import { FiPlus, FiSettings, FiPower, FiLogOut } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import firebase from "../firebase/firebase";
import YourTeam from "../components/YourTeam";
import FindTeam from "../components/FindTeam";
import Scout from "../components/Scout";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDataLoader } from "hooks/useDataLoader";
import { getEvent } from "redux/actions/eventActions";

const GroupFormation = () => {
  const {
    events = [],
    currentUser,
    fetchingUser,
    fetchingEvents,
    // @ts-ignore
  } = useSelector((state) => state.users);
  // @ts-ignore
  const eventState = useSelector((state) => state.events);
  let history = useHistory();
  const dataLoader = useDataLoader();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser && !fetchingUser && !fetchingEvents) {
      dataLoader();
    }

    if (
      currentUser &&
      !fetchingUser &&
      !fetchingEvents &&
      !eventState.selectedEvent
    ) {
      dispatch(getEvent(events[0].id));
    }
  }, [
    currentUser,
    dataLoader,
    fetchingUser,
    fetchingEvents,
    eventState,
    dispatch,
    events,
  ]);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    history.push("/login");
  };

  return (
    <Flex h="100vh">
      <VStack w="110px" bg="white">
        <Box>
          <Heading
            size="sm"
            textAlign="center"
            mt="30px"
            onClick={() => history.push(`/`)}
          >
            groupr
          </Heading>
          <Circle
            size="60px"
            bg="#D16767"
            mt="30px"
            transition="0.2s ease"
            _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
            onClick={() => history.push(`/group-formation`)}
          >
            <Icon boxSize="40px" color="black" as={MdPersonOutline} />
          </Circle>
          <Box mt="20px" h="2px" w="60px" bg="#BDADAD" />
        </Box>

        <Box
          w="100%"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              visbility: "hidden",
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              visibility: "hidden",
              background: "#3B3E3E",
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              visibility: "hidden",
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
              <Flex justifyContent="flex-start" w="100%" mb="5px">
                <Box
                  bg="green.600"
                  h="70px"
                  w="10px"
                  rounded="5px"
                  mr="10px"
                  visibility={
                    eventState?.selectedEvent?.id === event.id
                      ? "visible"
                      : "hidden"
                  }
                />
                <Avatar
                  _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
                  transition="0.2s ease"
                  size="lg"
                  my="5px"
                  src={event.avatarUrl}
                  name={event.name}
                  onClick={() => {
                    dispatch(getEvent(event.id));
                  }}
                />
              </Flex>
            </Tooltip>
          ))}
        </Box>

        <Spacer />
        <VStack>
          <Circle
            size="60px"
            bg="#1F523A"
            transition="0.2s ease"
            _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
          >
            <Icon
              color="white"
              boxSize="40px"
              as={FiPlus}
              onClick={() => history.push(`/join`)}
            />
          </Circle>
          <Circle
            size="60px"
            bg="#1F523A"
            transition="0.2s ease"
            _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
          >
            <Icon
              color="white"
              boxSize="40px"
              as={FiLogOut}
              onClick={handleLogout}
            />
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
        <Tabs isLazy ml="20px" w="100%" h="100%" pt="30px" pr="30px">
          <TabList textColor="gray.100" maxW="600px" borderColor="transparent">
            <StyledTab>Find a Team</StyledTab>
            <StyledTab>Scout Individuals</StyledTab>
            <StyledTab>Your Team</StyledTab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <FindTeam />
            </TabPanel>
            <TabPanel>
              <Scout />
            </TabPanel>
            <TabPanel>
              <YourTeam />
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
      w="170px"
      px="5px"
      fontFamily="Roboto"
      fontSize="21px"
      fontWeight="bold"
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
