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
  Container,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";

import Filter from "./Filter";
import SearchBar from "./SearchBar";
import UserInfoCard from "./UserInfoCard";
import SimpleTag from "./SimpleTag";

const listOfTeams = [
  {
    id: "123",
    avatarUrl: "string",
    name: "Team Toronto",
    createdByUserId: "string",
    capacity: 3,
    eventId: "string",
    skills: ["css", "javascript", "python"],
  },
  {
    id: "234",
    avatarUrl: "string",
    name: "Team Vancouver",
    createdByUserId: "string",
    capacity: 3,
    eventId: "string",
    skills: ["java", "C++"],
  },
  {
    id: "235",
    avatarUrl: "string",
    name: "Team Montreal",
    createdByUserId: "string",
    capacity: 2,
    eventId: "string",
    skills: ["css", " javascript", "html"],
  },
  {
    id: "346",
    avatarUrl: "string",
    name: "Team Beijing",
    createdByUserId: "string",
    capacity: 1,
    eventId: "string",
    skills: ["css", "java", " javascript", "html"],
  },
  {
    id: "457",
    avatarUrl: "string",
    name: "Team Seoul",
    createdByUserId: "string",
    capacity: 9,
    eventId: "string",
    skills: ["css", "java", " javascript", "html"],
  },
];

const teamMembers = [
  {
    id: "1",
    avatarUrl: "https://bit.ly/dan-abramov",
    firstName: "Bob",
    lastName: "Smith",
    email: "bob@helloworld.com",
    skills: ["css", "java", " javascript", "html"],
    interests: ["normie", " boating", "writing"],
    role: "software dev",
    socials: {
      twitter: "twitter",
      facebook: "facebook",
      whatsapp: "whatsapp",
      github: "github",
      linkedin: "linkedin",
    },
    userBio:
      "Hello everyone! I’m an informatics major at the University of Washington and I have experience with python, java, and c++. I can also edit videos and create gaphics",
  },
  {
    id: "2",
    avatarUrl: "https://bit.ly/dan-abramov",
    firstName: "Tom",
    lastName: "Riddle",
    email: "iamVOLDEMORT@helloworld.com",
    skills: ["css", "java", " javascript", "html"],
    interests: ["curses", "charms", "potions"],
    role: "witch dev",
    socials: {
      twitter: "twitter",
      facebook: "facebook",
      whatsapp: "whatsapp",
      github: "github",
      linkedin: "linkedin",
    },
    userBio:
      "I am Lord Voldemort I am Lord Voldemort I am Lord Voldemort I am Lord Voldemort I am Lord Voldemort v I am Lord Voldemort I am Lord Voldemort",
  },
  ,
  {
    id: "3",
    avatarUrl: "https://bit.ly/dan-abramov",
    firstName: "Harry",
    lastName: "Potter",
    email: "numWanQuiditch@helloworld.com",
    skills: ["css", "java", " javascript", "html"],
    interests: ["boyWhoLived", "food", "hogwarts"],
    role: "wizard",
    socials: {
      twitter: "twitter",
      facebook: "facebook",
      whatsapp: "whatsapp",
      github: "github",
      linkedin: "linkedin",
    },
    userBio:
      "I am the boy who lived. I am the boy who lived. I am the boy who lived.I am the boy who lived.",
  },
];

// const UserTeam {
//   userId: string,                 *
//   teamId: string or null,         ?
//   eventId: string                 *
// }

export default function FindTeam() {
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  const handleTeamClick = (teamId) => {
    console.log(teamId + " Clicked");
    setSelectedTeamId(teamId);
  };

  return (
    <Box>
      <HStack>
        <Heading color="white" fontSize="80px">
          Find a Team
        </Heading>
        <Box w="130px" />
        <SearchBar />
      </HStack>
      <Box ml="20px" mt="30px">
        <Flex w="100%">
          <Filter />
          <Box ml="35px" w="100%">
            <Heading size="md" color="white">
              Recommended Teams
            </Heading>
            <Flex w="100%">
              <VStack alignItems="flex-start">
                <SimpleGrid columns={1} gridRowGap="20px" mt="27px">
                  {listOfTeams.map((team) => (
                    <TeamCard
                      team={team}
                      handleTeamClick={handleTeamClick}
                      cardColor={
                        selectedTeamId === team.id ? "#F6DEAF" : "white"
                      }
                    />
                  ))}
                </SimpleGrid>
              </VStack>
              <Box pl="40px">
                {selectedTeamId && (
                  <GroupMembersInfo teamMembers={teamMembers} />
                )}
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

const TeamCard = chakra(function ({
  className,
  team,
  handleTeamClick,
  cardColor,
}) {
  return (
    <VStack
      w="300px"
      h="120px"
      alignItems="flex-start"
      bg={cardColor}
      rounded="5px"
      p="15px"
      _hover={{ cursor: "pointer" }}
      onClick={() => handleTeamClick(team.id)}
    >
      <Heading size="md">{team.name}</Heading>
      <Text>Looking for {team.capacity} members with</Text>
      <HStack spacing="5px">
        {team.skills.map((skill) => (
          <SimpleTag>{skill}</SimpleTag>
        ))}
      </HStack>
    </VStack>
  );
});

const GroupMembersInfo = chakra(function ({ className, teamMembers }) {
  const toast = useToast();
  return (
    <Box
      p="15px"
      bg="white"
      maxH="700px"
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
      <VStack>
        <Button
          colorScheme="yellow"
          bg="#F6DEAF"
          w="full"
          h="60px"
          mb="5px"
          onClick={() =>
            toast({
              title: "Request Sent",
              description: `Successfully sent request to join.`,
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          }
        >
          Request to Join
        </Button>
        {teamMembers.map((member) => (
          <UserInfoCard w="600px" border="1px solid black" user={member} />
        ))}
      </VStack>
    </Box>
  );
});
