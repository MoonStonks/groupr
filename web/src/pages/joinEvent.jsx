import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Input,
  Button,
  HStack,
  VStack,
  Image,
  Link,
  Spacer,
  PinInput,
  PinInputField,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
  useClipboard,
  FormControl,
} from "@chakra-ui/react";
import verifyIcon from "../assets/verifyIcon.svg";
import puzzlePiece from "../assets/puzzlepiece.svg";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, registerMember } from "redux/actions/eventActions";
import firebase from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import { getEventsByUserId } from "redux/actions/userActions";

const style = {
  transform: "rotate(180deg)",
  transition: "transform 150ms ease", // smooth transition
};

/**
 * This page is for both creating a new event and getting an invite code and joining an event
 *
 * */

const JoinEvent = () => {
  const [isEventCreated, setIsEventCreated] = useState(false);
  const [eventCode, setEventCode] = React.useState("");
  const [userCode, setUserCode] = useState("");
  const { hasCopied, onCopy } = useClipboard(eventCode);
  const toast = useToast();
  const dispatch = useDispatch();
  // @ts-ignore
  const events = useSelector((state) => state.events);
  // @ts-ignore
  const users = useSelector((state) => state.users);
  const history = useHistory();

  const [eventDetails, setEventDetails] = useState({
    avatarUrl: "",
    name: "",
    maxTeamSize: "",
  });

  useEffect(() => {
    if (events.newEvent) {
      toast({
        title: "Event Created",
        description:
          "We've created your event and generated an invite code for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setIsEventCreated(true);
      setEventCode(events.newEvent.inviteCode);
    }
  }, [events.newEvent, toast]);

  useEffect(() => {
    if (events.selectedEvent) {
      history.push("/group-formation");
    }
  }, [events.selectedEvent, history])

  const handleSubmit = () => {
    dispatch(createEvent(eventDetails));
  };

  const handleJoinEvent = () => {
    dispatch(registerMember(userCode, users.currentUser.id));
    dispatch(getEventsByUserId(users.currentUserId));
  };

  return (
    <Box>
      <Box h="calc(100vh - 52px)">
        <Box bg="white" h="42px" boxShadow="0px 10px 5px #173D2B">
          <Heading size="md" ml="18px" pt="9px">
            groupr
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
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Create Event</Tab>
                <Tab>Join Event</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {isEventCreated ? (
                    <Box>
                      {" "}
                      <Image h="120%" src={verifyIcon} mx="auto" />
                      <Heading size="md" mt="11px" textAlign="center">
                        Create an Event
                      </Heading>
                      <Text
                        fontSize="14px"
                        mb="20px"
                        mt="23px"
                        textAlign="center"
                      >
                        Protecting your events is our top priority. Feel free to
                        send this code to event attendees to start the team
                        formation process.
                      </Text>
                      <HStack justifyContent="center" mb="40px">
                        <Input
                          value={eventCode}
                          isReadOnly
                          placeholder="Event Code"
                        />
                      </HStack>
                      <HStack mt="10px" mb="10px" justifyContent="center">
                        <Button
                          w="42%"
                          colorScheme="teal"
                          bg="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #276749;"
                          rounded="10px"
                          mt="22px"
                          onClick={onCopy}
                        >
                          {hasCopied ? "Copied" : "Copy Code"}
                        </Button>
                      </HStack>
                    </Box>
                  ) : (
                    <Box>
                      <Image h="120%" src={verifyIcon} mx="auto" />
                      <Heading size="md" mt="11px" textAlign="center">
                        Create an Event
                      </Heading>

                      <HStack>
                        <VStack
                          justifyContent="center"
                          mb="40px"
                          alignItems="flex-start"
                          mt="28px"
                        >
                          <HStack>
                            <Text width="200px">Avatar</Text>
                            <Input
                              size="sm"
                              _focus={{ bg: "white" }}
                              bg="gray.100"
                              onChange={(event) => {
                                console.log(event.target.value);
                                setEventDetails({
                                  ...eventDetails,
                                  avatarUrl: event.target.value,
                                });
                              }}
                              //
                            />
                          </HStack>
                          <HStack>
                            {" "}
                            <Text width="200px">Event Name</Text>{" "}
                            <Input
                              size="sm"
                              onChange={(event) =>
                                setEventDetails({
                                  ...eventDetails,
                                  name: event.target.value,
                                })
                              }
                              _focus={{ bg: "white" }}
                              bg="gray.100"
                            />
                          </HStack>
                          <HStack>
                            {" "}
                            <Text width="200px">Max Team Size</Text>{" "}
                            <Input
                              size="sm"
                              onChange={(event) =>
                                setEventDetails({
                                  ...eventDetails,
                                  maxTeamSize: event.target.value,
                                })
                              }
                              _focus={{ bg: "white" }}
                              bg="gray.100"
                            />{" "}
                          </HStack>
                        </VStack>
                      </HStack>

                      <HStack mt="10px" mb="10px" justifyContent="center">
                        <Button
                          
                          colorScheme="teal"
                          bg="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #276749;"
                          rounded="10px"
                          mt="22px"
                          px='20px'
                          onClick={handleSubmit}
                        >
                          Generate Code
                        </Button>
                      </HStack>
                      {/* <HStack>
                        <Button
                          w="42%"
                          colorScheme="teal"
                          bg="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #276749;"
                          rounded="10px"
                          mt="22px"
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </HStack> */}
                    </Box>
                  )}
                </TabPanel>

                <TabPanel>
                  <Image h="120%" src={verifyIcon} mx="auto" />
                  <Heading size="md" mt="11px" textAlign="center">
                    Join an Event
                  </Heading>

                  <Text
                    fontSize="14px"
                    mb="20px"
                    mt="23px"
                    textAlign="center"
                  >
                    Protecting your events is our top priority. Please confirm
                    your group membership code below.
                  </Text>
                  <HStack justifyContent="center" mb="40px">
                    {/*  https://chakra-ui.com/docs/form/pin-input */}
                    <PinInput
                      type="alphanumeric"
                      onComplete={(val) => {
                        if (val) {
                          setUserCode(val);
                        }
                      }}
                    >
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
                      onClick={handleJoinEvent}
                    >
                      Submit
                    </Button>
                  </HStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinEvent;
