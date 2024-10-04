import React from "react";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { FaLinkedinIn, FaBehance } from "react-icons/fa6";
import fotter_bg from "../../assets/footer-bg.png";
const Footer = () => {
  return (
    <Box width="100vw" bgImage={fotter_bg} bgRepeat={"no-repeat"} bgSize={"cover"} py={4}>
      <Box
        display={"flex"}
        justifyContent={{ base: "center", md: "space-between" }}
        maxW="1200px"
        mx="auto"
        px={4}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mb={{ base: 4, md: 0 }}>
          <Text color="white">SS</Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} flexDir={"column"}>
          <Box>
            <IconButton
              isRound={true}
              variant="solid"
              background={"black"}
              border={"1px solid white"}
              aria-label="LinkedIn"
              fontSize="20px"
              icon={<FaLinkedinIn color="white" />}
              mr={2}
            />
            <IconButton
              isRound={true}
              variant="solid"
              background={"black"}
              border={"1px solid white"}
              aria-label="Behance"
              fontSize="20px"
              icon={<FaBehance color="white" />}
              mr={2}
            />
          </Box>
          <Box>
            <Text color={"green.200"}>Copyright 2024. All rights reserved</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
