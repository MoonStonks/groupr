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
  Textarea,
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
import SimpleTag from "./SimpleTag";
import { useSelector } from "react-redux";

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

const user = 
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
  }


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
  const [profileClicked, setProfileClicked] = useState(false);
  const [creatorId, setCreatorId] = useState("1");
  // @ts-ignore
  const { selectedEvent } = useSelector(state => state.events);

  return (
    <Box>
      {profileClicked? <Box> 
        <Heading color="white" fontSize="80px">
          Profile
        </Heading>
        <SimpleGrid columns={2} pr='160px'>
          <VStack alignItems="flex-start">
            <Heading size='xs' color='white' pt='50px'>SKILLS</Heading>
            <Flex flexWrap='wrap'>
              {user.skills.map((skill) => (
                <SimpleTag mr='10px' fontSize='20px' p='5px 10px'>
                  {skill}
                </SimpleTag>
              ))}
            </Flex>

            <Heading size='xs' color='white' pt='50px'>INTERESTS</Heading>
            <Flex flexWrap='wrap'>
              {user.interests.map((skill) => (
                <SimpleTag
                  mr='10px'
                  fontSize='20px' p='5px 10px'
                >
                  {skill}
                </SimpleTag>
              ))}


            </Flex>
            <Heading size='xs' color='white' pt='50px'>SOCIAL MEDIA LINKS</Heading>
            <VStack>
                <Flex alignItems="center">
                  <Icon color='white' boxSize='30px' as={GrTwitter}/> <Input w='280px' ml='20px' bg='gray.100' placeholder={user.socials.twitter? user.socials.twitter : ""} />
                </Flex>
                <Flex alignItems="center">
                  <Icon color='white' boxSize='30px' as={GrFacebook}/> <Input w='280px' ml='20px' bg='gray.100' placeholder={user.socials.facebook? user.socials.facebook : ""}/>
                </Flex>
                <Flex alignItems="center">
                  <Icon color='white' boxSize='30px' as={GrInstagram}/> <Input w='280px' ml='20px' bg='gray.100' placeholder={user.socials.instagram? user.socials.instagram : ""}/>
                </Flex>
                <Flex alignItems="center">
                  <Icon color='white' boxSize='30px' as={GrGithub}/> <Input w='280px' ml='20px' bg='gray.100' placeholder={user.socials.github? user.socials.github : ""}/>
                </Flex>
                <Flex alignItems="center">
                  <Icon color='white' boxSize='30px' as={FaWhatsapp}/> <Input w='280px' ml='20px' bg='gray.100' placeholder={user.socials.whatsapp? user.socials.whatsapp : ""}/>
                </Flex>
                <Flex alignItems="center">
                  <Icon color='white' boxSize='30px' as={GrLinkedin}/> <Input w='280px' ml='20px' bg='gray.100' placeholder={user.socials.linkedin? user.socials.linkedin : ""}/>
                </Flex>
              </VStack>
          </VStack>
          <VStack alignItems="flex-start">
            <Heading size='xs' color='white'>PROFILE IMAGE</Heading>
            <Avatar boxSize="100px" src="https://bit.ly/dan-abramov"/>
            <Button colorScheme='yellow' bg='#F6DEAF'>Upload Picture</Button>

            <Heading size='xs' color='white' pt='30px'>ROLE</Heading>
            <Input bg='gray.100'/>

            <Heading size='xs' color='white' pt='50px'>BIO</Heading>
            <Textarea h='200px' bg='gray.100' />
          </VStack>
        </SimpleGrid>
      </Box> : 
      <Box>
        <HStack>
          <Heading color="white" fontSize="80px">
            {selectedEvent?.name}
          </Heading>
          <Spacer/>
          <Button
            alignSelf="flex-start"
            aria-label="settings"
            bg="null"
            boxSize="50px"
            colorScheme="teal"
            variant="ghost"
            onClick={() => setProfileClicked(true)}
          >
            <Icon boxSize="40px" color="gray.200" as={FiSettings}   />
          </Button>
        </HStack>
        <SimpleGrid columns={{ lg: 2, base: 1 }} gridGap="20px" mt="45px" >
          {teamMembers.map((member) => (
            <UserInfoCard cardColor={member.id === creatorId} user={member}/>
          ))}
        </SimpleGrid>
      </Box>
      }
    </Box>
  );
}
