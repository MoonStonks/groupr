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
      <Heading color="white" fontFamily="Roboto" fontSize="80px">
        Team Bonanza
      </Heading>
      <SimpleGrid columns={{ lg: 2, base: 1 }} gridGap="20px" mt="45px">
        {teamMembers.map((member) => (
          <MemberCard member={member} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

const MemberCard = chakra(function ({ member, className }) {
  return (
    <Box backgroundColor="white" rounded="5px">
      <Box p="15px">
        <Box borderBottom="1px solid black">
          <SimpleGrid columns={2}>
            <HStack h="72px" spacing="20px">
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                boxSize="50px"
              />
              <Heading size="sm">
                {member.firstName} {member.lastName}
              </Heading>
              <Tag>
                <TagLeftIcon as={BsTagFill} />
                {member.role}
              </Tag>
            </HStack>
            <HStack spacing="8px">
              <GrTwitter />
              <GrFacebook />
              <GrInstagram />
              <GrGithub />
              <GrLinkedin />
              <FaWhatsapp />
            </HStack>
          </SimpleGrid>
        </Box>
        <SimpleGrid columns={2} alignItems="flex-start" mt="10px">
          <Box>
            <Heading size="sm" fontFamily="Roboto">
              SKILLS
            </Heading>
            <HStack spacing="5px" mt="5px">
              {member.skills.map((skill) => (
                <Tag
                  size="md"
                  key="md"
                  variant="solid"
                  bg="#FCA5A5"
                  color="black"
                  fontFamily="HK Grotesk"
                >
                  {skill}
                </Tag>
              ))}
            </HStack>
          </Box>

          <Box>
            <Heading size="sm" fontFamily="Roboto">
              INTERESTS
            </Heading>
            <HStack spacing="5px" mt="5px">
              {member.interests.map((interest) => (
                <Tag
                  size="md"
                  key="md"
                  variant="solid"
                  bg="#FCA5A5"
                  color="black"
                  fontFamily="HK Grotesk"
                >
                  {interest}
                </Tag>
              ))}
            </HStack>
          </Box>
        </SimpleGrid>
        <Box mt="15px">
          <Heading size="sm" fontFamily="Roboto">
            BIO
          </Heading>
          <Text color="black">{member.userBio}</Text>
        </Box>
      </Box>
    </Box>
  );
});
