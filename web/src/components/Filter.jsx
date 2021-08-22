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
  Checkbox,
} from "@chakra-ui/react";
import { BsTagFill } from "react-icons/bs";
const specialities = [
  "Fullstack developer",
  "Backend developer",
  "Frontend developer",
  "Business",
  "Data Scientist",
  "Designer",
  "Mobile Developer",
  "Product Manager",
  "Devops",
  "Hardware Engineer",
];
const skills = [
  "python",
  "javascript",
  "html5",
  "react",
  "css3",
  "figma",
  "excel",
  "ui/ux design",
  "unity",
  "c++",
  "unreal",
  "sql",
  "mongodb",
];

export default function Filter() {
  return (
    <Box  h='500px' w = "200px" overflowY="auto"
    
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
      <VStack spacing="5px" alignItems="flex-start">
        <Heading color="white" fontFamily="Roboto" fontSize="20" mb="12px">
          Filters
        </Heading>

        <HStack color="white">
          <BsTagFill />{" "}
          <Heading color="white" fontFamily="Roboto" fontSize="16px">
            Specialties
          </Heading>
        </HStack>
        {specialities.map((role) => (
          <Box>
            <Checkbox color="white" colorScheme="grey">
              {role}
            </Checkbox>
          </Box>
        ))}

        <Box >
        <HStack color="white" mt='10px'>
          <BsTagFill />{" "}
          <Heading color="white" fontFamily="Roboto" fontSize="16px">
            Skills
          </Heading>
        </HStack>
        </Box>
        {skills.map((skill) => (
          <Box>
            <Checkbox color="white" colorScheme="grey">
              {skill}
            </Checkbox>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
