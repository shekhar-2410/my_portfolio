import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaLinkedinIn, FaBehance } from "react-icons/fa6";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      width="100%"
      zIndex="999"
      bg={navBackground || isOpen ? "black" : "transparent"} 
      transition="0.5s"
      boxShadow={navBackground || isOpen ? "md" : "none"}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        // maxW="7xl"
        mx="auto"
        py={4}
        px={{ base: 6, md: 14 }}
      >
        <Text fontSize="2xl" fontWeight="bold" color="white">
          SS
        </Text>

        <Stack
          direction="row"
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          {/* Desktop buttons */}
          <Button color={"white"} variant="ghost" _hover={{ color: "#5EB5FD", transform: "scale(1.1)" }}>Home</Button>
          <Button color={"white"} variant="ghost" _hover={{ color: "#5EB5FD", transform: "scale(1.1)" }}>Skills</Button>
          <Button color={"white"} variant="ghost" _hover={{ color: "#5EB5FD", transform: "scale(1.1)" }}>Project</Button>
          <Button color={"white"} variant="ghost" _hover={{ color: "#5EB5FD", transform: "scale(1.1)" }}>Resume</Button>
          <IconButton
            isRound={true}
            variant="solid"
            background={"black"}
            border={"1px solid white"}
            aria-label="LinkedIn"
            fontSize="20px"
            icon={<FaLinkedinIn color="white"/>}
            _hover={{ transform: "scale(1.1)", background: "#5EB5FD" }}
          />
          <IconButton
            isRound={true}
            variant="solid"
            background={"black"}
            border={"1px solid white"}
            aria-label="Behance"
            fontSize="20px"
            icon={<FaBehance color="white" />}
            _hover={{ transform: "scale(1.1)", background: "#5EB5FD" }}
          />
          <Button
            background={"none"}
            border={"1px solid white"}
            color={"white"}
            _hover={{ color: "#5EB5FD", transform: "scale(1.1)" }}
          >
            Let's Contact
          </Button>
        </Stack>

        {/* Mobile Menu Icon */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          fontSize="20px"
          variant="ghost"
          icon={isOpen ? <CloseIcon color={"#fff"} /> : <HamburgerIcon color={"#fff"} />}
          _hover={{ bg: "transparent" }}
          onClick={onToggle}
        />
      </Flex>

      {/* Collapse Menu for Mobile */}
      <Collapse in={isOpen} animateOpacity>
        <Box
         background={"transparent"}
          p={4}
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          
        >
          <Stack spacing={4}>
            <Button
              className="button_style"
            >
              Home
            </Button>
            <Button
              color={"white"}
              variant="ghost"
              
              _hover={{
                transform: "scale(1)",
                color: "#5EB5FD",
              }}
            >
              Skills
            </Button>
            <Button
              color={"white"}
              variant="ghost"
              w="full"
              _hover={{
                transform: "scale(1)",
                color: "#5EB5FD",
              }}
            >
              Porject
            </Button>
            <Button
              color={"white"}
              variant="ghost"
              w="full"
              _hover={{
                transform: "scale(1)",
                color: "#5EB5FD",
              }}
            >
             Resume
            </Button>
            <Button
              color={"white"}
              variant="ghost"
              w="full"
              _hover={{
                transform: "scale(1)",
                color: "#5EB5FD",
              }}
            >
             Contact
            </Button>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Header;
