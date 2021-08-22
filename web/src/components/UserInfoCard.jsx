import React from "react";
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
import {FiSettings} from "react-icons/fi"
import SimpleTag from "./SimpleTag";

export default chakra(function UserInfoCard({ className, user, cardColor }) {
    return (
    <Box className={className} bg={cardColor? "#F6DEAF" : "white" } rounded="5px">
      <Box p="15px">
        <Box borderBottom="1px solid black">
          <SimpleGrid columns={2}>
            <HStack h="72px">
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                boxSize="50px"
              />
              <Heading size="xs">
                {user.firstName} {user.lastName}
              </Heading>
              <Tag fontSize='10px'>
                <TagLeftIcon as={BsTagFill} />
                {user.role}
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
            <Heading size="sm">
              SKILLS
            </Heading>
            <HStack spacing="5px" mt="5px">
              {user.skills.map((skill) => (
                <SimpleTag>
                  {skill}
                </SimpleTag>
              ))}
            </HStack>
          </Box>

          <Box>
            <Heading size="sm">
              INTERESTS
            </Heading>
            <HStack spacing="5px" mt="5px">
              {user.interests.map((interest) => (
                <SimpleTag>
                  {interest}
                </SimpleTag>
              ))}
            </HStack>
          </Box>
        </SimpleGrid>
        <Box mt="15px">
          <Heading size="sm">
            BIO
          </Heading>
          <Text color="black" fontSize='14px'>{user.userBio}</Text>
        </Box>
      </Box>
    </Box>
    );
  });
  