/* eslint-disable no-unused-vars */
import React from "react";
import { Box, HStack, IconButton, Text, VStack,Image } from "@chakra-ui/react";
import { FaLinkedinIn, FaBehance, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa6";
import fotter_bg from "../../assets/footer-bg.png";

const Footer = () => {
  return (
    <Box
      borderTop="1px solid gray"
      width="100vw"
      bgImage={fotter_bg}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      py={4}
    >
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={12}
        my={4}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box mb={{base:"5%",md:"0%"}}>
       
        <Image src="/logo.svg" alt="logo" width="42px"/>
        </Box>
        <Box textAlign={"center"} paddingLeft={{base:"0%",md:"17%"}}>
        <HStack
        spacing={4}
        mb={{ base: 4, md: 0 }}
        justifyContent="center"
        flexGrow={1} 
        
      >
        <a
          href="https://www.linkedin.com/in/shekhar-suman-11b708127/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            isRound
            variant="solid"
            background="black"
            border="1px solid white"
            aria-label="LinkedIn"
            fontSize="20px"
            icon={<FaLinkedinIn color="white" />}
            _hover={{ transform: "scale(1.1)", background: "#5EB5FD" }}
          />
        </a>

        <a
          href="https://github.com/shekhar-2410"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            isRound
            variant="solid"
            background="black"
            border="1px solid white"
            aria-label="GitHub"
            fontSize="20px"
            icon={<FaGithub color="white" />}
            _hover={{ transform: "scale(1.1)", background: "#5EB5FD" }}
          />
        </a>

        <a
          href="https://www.behance.net/shekharsuman7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            isRound
            variant="solid"
            background="black"
            border="1px solid white"
            aria-label="Behance"
            fontSize="20px"
            icon={<FaBehance color="white" />}
            _hover={{ transform: "scale(1.1)", background: "#5EB5FD" }}
          />
        </a>
      </HStack>
        </Box>
        <Box >
        <VStack align={{ base: "center", md: "flex-start" }} spacing={2}>
        <HStack spacing={2}>
          <FaEnvelope color="white" />
          <Text color="gray.200" fontWeight={"normal"}>Email: shekhar24101995@gmail.com</Text>
        </HStack>
        <HStack spacing={2}>
          <FaPhone color="white" />
          <Text color="gray.200" fontWeight={"normal"}>Phone: +91 9122445566</Text>
        </HStack>
      </VStack>
        </Box>
      </Box>

      {/* Copyright Section */}
      <Box textAlign="center" mt={4}>
        <Text color={"green.200"}>
          Copyright {new Date().getFullYear()}. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
