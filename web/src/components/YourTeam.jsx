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
} from "@chakra-ui/react";

// https://react-icons.github.io/react-icons/search?q=linkedin
import { BsTagFill } from "react-icons/bs";
import {
  GrFacebook,
  GrTwitter,
  GrInstagram,
  GrGithub,
  GrLinkedin,
} from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import {FiSettings} from "react-icons/fi";

import UserInfoCard from "./UserInfoCard";

/**
 * This component is for a user info box containing user info such as
 * skills, name, about, interests, what they are looking for, status,
 * current role  position
 */

const events = [
  {
    id: "123",
    avatarURL: "red.300",
    name: "Hackathon1",
    maxTeamSize: 5,
  },
  {
    id: "1234",
    avatarURL: "blue.300",
    name: "CPSC110 Assignment",
    maxTeamSize: 4,
  },
  {
    id: "12345",
    avatarURL: "green.300",
    name: "Math Contest Team",
    maxTeamSize: 3,
  },
];

// localhost:5000/teams/members
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

export default function YourTeam() {
  return (
    <Box>
      <HStack>
        <Heading color="white" fontFamily="Roboto" fontSize="80px">
          Team Bonanza
        </Heading>
        <Spacer/>
        <Button
          alignSelf="flex-start"
          aria-label="settings"
          bg="null"
          boxSize="50px"
          colorScheme="teal"
          variant="ghost"
        >
          <Icon boxSize="40px" color="gray.200" as={FiSettings} />
        </Button>
      </HStack>
      <SimpleGrid columns={{ lg: 2, base: 1 }} gridGap="20px" mt="45px">
        {teamMembers.map((member) => (
          <UserInfoCard user={member}/>
        ))}
      </SimpleGrid>
    </Box>
  );
}
