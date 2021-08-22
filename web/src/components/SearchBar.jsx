import React, {useState} from "react";
import {
  chakra,
  Box,
  Input,
  InputGroup, InputLeftElement
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default chakra(function SearchBar({ className }) {
    return (
      <Box className={className}>
          <InputGroup>
          <InputLeftElement
      pointerEvents="none"
      children={<FaSearch/>}      
        />
        <Input 
            maxW='400px'
            placeholder="Search Team"
            _focus={{bg: 'white'}}
            bg='gray.300'
        />
        </InputGroup>
      </Box>
    );
  });
  