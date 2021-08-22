import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Input,
  Button,
  HStack,VStack,
  Image,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import puzzlePiece from "../assets/puzzlepiece.svg";
import crownlogo from "../assets/crownlogo.svg";

const style = {
  transform: "rotate(180deg)",
  transition: "transform 150ms ease", // smooth transition
};


{/* <Button onClick={() => history.push(`/group-123`)}>
Navigate to Group
</Button> */}

/**
 * Home page. Click on logo to navigate to login
*/


const Home = () => {
  let history = useHistory();
  return (
    <Box h="calc(100vh - 52px)" mx="auto" textAlign="center">
<Box zIndex={1}>
        <Image
          style={style}
          position="absolute"
          h="100%"
          mr="68%"
          mb="31%"
          transform="rotate"
          src={puzzlePiece}
        />{" "}
      </Box>
      <Box zIndex={1}>
        <Image
          position="absolute"
          h="100%"
          ml="68%"
          mb="30%"
          src={puzzlePiece}
        />{" "}
      </Box>
      
   
     <VStack  spacing="1px" mt= " 10%" > <Box zIndex={2}>
    
    <Image
      // position="absolute"
      // // h="40%"
      // // ml="39%"
      // // mt="2%"
      // mr="50%"
      
      src={crownlogo}
      onClick={() => history.push(`/login`)}
    />{" "}</Box>

    <Box zIndex={3}>
      <Box mx='auto'>
    <Text onClick={() => history.push(`/login`)}  textAlign="center" fontSize="100px" color="white" fontFamily= "Roboto">groupr</Text></Box>
    </Box>
    </VStack>
      

    </Box>
  );
};

export default Home;
