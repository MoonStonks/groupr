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

import Filter from './Filter'

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

export default function Scout() {
  return (
    <Box>
      <Heading color="white" fontFamily="Roboto" fontSize="80px">
        Scount Individuals
      </Heading>
      <Flex pt='30px'>
        <Filter/>
        <SimpleGrid columns={1} gridGap="20px" mt="45px">
          {teamMembers.map((member) => (
            <MemberCard member={member} />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

const MemberCard = chakra(function ({ member, className }) {
  return (
    <Box backgroundColor="white" rounded="5px">
      <Box p="15px">
        <Box borderBottom="1px solid black">
          <SimpleGrid columns={2}>
            <SimpleGrid columns={2}>
              <HStack h="72px" >
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
            <Flex justifyContent='flex-end'>
            <Button colorScheme='yellow' maxW='90px' bg='#F6DEAF' >
              Invite
            </Button>
            </Flex>
          </SimpleGrid>
        </Box>
        <SimpleGrid columns={2}>
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
        </SimpleGrid>
      </Box>
    </Box>
    );
});
