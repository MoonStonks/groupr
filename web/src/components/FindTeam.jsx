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
/**
 * This component is for a user info box containing user info such as
 * skills, name, about, interests, what they are looking for, status,
 * current role  position
 */

export default function FindTeam() {
  return (
    <Box>
      <Heading color="white" fontFamily="Roboto" fontSize="80px">
        Find a Team
      </Heading>
      <SimpleGrid columns={{ lg: 2, base: 1 }} gridGap="20px" mt="45px">
        {/* {teamMembers.map((member) => (
          <MemberCard member={member} />
        ))} */}
      </SimpleGrid>
    </Box>
  );
}
