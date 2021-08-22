import React from "react";
import {
  chakra,
  Tag,
} from "@chakra-ui/react";

export default chakra(function SimpleTag({ className, children }) {
    return (
      <Tag className={className}
      size="md"
      key="md"
      variant="solid"
      bg="#521F37"
      color="white"
      fontSize='12px'
      fontFamily="HK Grotesk"
      >
          {children}
      </Tag>
    );
  });