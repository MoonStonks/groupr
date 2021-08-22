import React, { useEffect, useState } from "react";
import {
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
} from "@chakra-ui/react";
import googleLogo from "../assets/googlelogo.png";
import puzzlePiece from "../assets/puzzlepiece.svg";
import firebase from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserProfile, login } from "redux/actions/userActions";

const style = {
  transform: "rotate(180deg)",
  transition: "transform 150ms ease", // smooth transition
};

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(getUserProfile(user.email));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/join");
    }
  }, [isLoggedIn, history]);

  const handleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      dispatch(login(result.user.email));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box h="calc(100vh - 52px)">
      <Box bg="white" h="42px" boxShadow="0px 10px 5px #173D2B">
        <Heading size="md" ml="18px" pt="9px">
          groupr
        </Heading>
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
      <Box
        flexDir={"column"}
        width={"378px"}
        mx="auto"
        bg="white"
        mt="63px"
        rounded="10px"
      >
        <Box p="30px 60px 45px">
          <Heading size="md" mt="16px" textAlign="center" zIndex={5}>
            Log in
          </Heading>
          <Heading size="xs" mb="5px" mt="21px" zIndex={5}>
            Username or Email
          </Heading>
          <Input />
          <Heading size="xs" mt="10px" mb="5px" zIndex={5}>
            Password
          </Heading>
          <Input />

          <Heading size="xs" mt="12px" zIndex={5}>
            Forgot Password?{" "}
            <Link color="#3751FF" href="#" zIndex={5}>
              Reset your password
            </Link>
          </Heading>
          <Button
            w="full"
            colorScheme="teal"
            bg="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #276749;"
            rounded="4px"
            mt="22px"
            zIndex={5}
          >
            Log In
          </Button>
          <HStack mt="10px" mb="10px">
            <Box height="1.5px" bg="black" w="full" />
            <Text fontWeight="bold" zIndex={5}>
              or
            </Text>
            <Box height="1.5px" bg="black" w="full" />
          </HStack>
          <Button
            w="full"
            borderColor="black"
            variant="outline"
            onClick={handleLogin}
          >
            <HStack>
              <Image h="22px" src={googleLogo} />
              <Spacer />
              <Heading size="xs" zIndex={5}>
                Continue with Google
              </Heading>
            </HStack>
          </Button>
          <Heading size="xs" mt="12px" textAlign="center" mb="20px" zIndex={5}>
            Don't have an account?{" "}
            <Link color="#3751FF" href="#">
              Sign up
            </Link>
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
