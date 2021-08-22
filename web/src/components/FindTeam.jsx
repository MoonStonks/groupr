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

import Filter from './Filter'
import SearchBar from "./SearchBar";
import UserInfoCard from "./UserInfoCard"

const listOfTeams = [
  {
    id: '123',                     
    avatarUrl: 'string'    ,           
    name: 'team1',                   
    createdByUserId: 'string',        
    capacity: 9,              
    eventId: 'string'                 
  },{
    id: '234',                     
    avatarUrl: 'string' ,              
    name: 'team2',                   
    createdByUserId: 'string',        
    capacity: 9,              
    eventId: 'string'                 
  },
];

export default function FindTeam() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <Box>
          <HStack>
      <Heading color="white" fontFamily="Roboto" fontSize="80px">
    Find a Team
  </Heading>
        <Spacer/>
        <SearchBar />
      </HStack>
    <Flex>
       <Filter />
    <Box>
    <VStack><Heading>Recommended Teams</Heading>

      <SimpleGrid rows={{ lg: 2, base: 1 }} gridGap="20px" mt="45px">
        {/* {listOfTeams.map((team) => (
  
        ))} */}
      </SimpleGrid></VStack>
    </Box>
    </Flex>
    </Box>
  );
}

const TeamCard = chakra(function ({className, team}) {
  return (
    <VStack w='300px' h='100px' alignItems='flex-start'>
        <Heading size='md'>
          Team Marley
          </Heading>
          <Text>Looking for 2 members with</Text>
          <HStack spacing='5px'>
          {/* {teams.neededSkills.map((skill) => (
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
              ))} */}
          </HStack>
    </VStack>
  )
}) 


const GroupMembersInfo = chakra(function ({className, teamMembers}) {
  return (
    <Box p='23px'>
      <VStack>
        <Button colorScheme="blue">
          Request to Join
        </Button>
        {teamMembers.map((member) => 
          <UserInfoCard bgColor="#ABDEDE" user={member}/>
        )}
      </VStack>
    </Box>
  )

})
