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

import Filter from "./Filter";
import SimpleTag from "./SimpleTag";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedEvent } from "redux/actions/eventActions";

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
  // @ts-ignore
  const { members } = useSelector(state => state.events);

  return (
    <Box>
      <Heading color="white" fontSize="80px">
        Scout Individuals
      </Heading>
      <Flex pt="30px" pl="15px">
        <Filter />
        <VStack columns={1} gridGap="20px" pt="45px" px="40px" alignItems='center'>
          {members?.map((member) => (
            <MemberCard member={member} />
          ))}
        </VStack>
      </Flex>
    </Box>
  );
}

const MemberCard = chakra(function ({ member, className }) {
  const toast = useToast();
  return (
    <Box backgroundColor="white" rounded="5px" w='100%'>
      <Box p="15px">
        <Box borderBottom="1px solid black">
          <SimpleGrid columns={2}>
            <SimpleGrid columns={2}>
              <HStack h="72px">
                <Avatar
                  name="Dan Abrahmov"
                  src={member.avatarUrl}
                  boxSize="50px"
                />
                <Heading size="xs">
                  {member.firstName} {member.lastName}
                </Heading>
                <Tag fontSize="10px">
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
            <Flex justifyContent="flex-end">
              <Button
                colorScheme="yellow"
                maxW="90px"
                bg="#F6DEAF"
                onClick={() =>
                  toast({
                    title: "Invite Sent",
                    description: `We've sent ${member.firstName} ${member.lastName} an invite to join your team.`,
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })
                }
              >
                Invite
              </Button>
            </Flex>
          </SimpleGrid>
        </Box>
        <SimpleGrid columns={2}>
          <SimpleGrid columns={2} alignItems="flex-start" mt="10px">
            <Box>
              <Heading size="sm">SKILLS</Heading>
              <HStack spacing="5px" mt="5px">
                {member.skills.map((skill) => (
                  <SimpleTag>{skill}</SimpleTag>
                ))}
              </HStack>
            </Box>

            <Box>
              <Heading size="sm">INTERESTS</Heading>
              <HStack spacing="5px" mt="5px">
                {member.interests.map((interest) => (
                  <SimpleTag>{interest}</SimpleTag>
                ))}
              </HStack>
            </Box>
          </SimpleGrid>
          <Box mt="15px">
            <Heading size="sm">BIO</Heading>
            <Text color="black" fontSize="14px">
              {member.userBio}
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
});
