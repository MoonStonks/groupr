import React from "react";
import { Box, Center, Heading, Text, Input, Button, HStack } from "@chakra-ui/react";

export const Login = () => {
  return (
    <Box>
      <Box flexDir={"column"} width={'378px'} mx='auto' >
        <Heading size='md'>
            Log in
        </Heading>
        <Heading size='xs' mt='4px'>
            Username or Email
        </Heading>
        <Input />
        <Heading size='xs' mt='4px'>
            Password
        </Heading>
        <Input />

        
        <Text fontSize="2xl" >
            Forgot Password? Reset your password
        </Text>
        <Button>

            Log In
        </Button>
        <HStack>
            <Box />
            <Text>or</Text>
            <Box />
            <Button>Continue with Google</Button>
        </HStack> 
      </Box>
    </Box>
  );
};
