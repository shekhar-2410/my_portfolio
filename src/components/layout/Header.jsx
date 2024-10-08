/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaLinkedinIn, FaBehance, FaGithub } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../style/Navbar.css";
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
        mx="auto"
        py={6}
        px={{ base: 6, md: 14 }}
      >
        <RouterLink to="/">
          <Image src="/logo.svg" alt="logo" width="42px" />
        </RouterLink>

        <Stack
          direction="row"
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          {/* Desktop buttons */}
          <Button
            color={"#fff"}
            fontSize={"1.2rem"}
            variant="ghost"
            _hover={{ color: "#5EB5FD", transform: "scale(1.1)" }}
          >
            <RouterLink to="/">Home</RouterLink>
          </Button>
          <Button
            color={"gray.300"}
            variant="ghost"
            fontSize={"1.2rem"}
            _hover={{ color: "#5EB5FD", transform: "scale(1.1)" }}
          >
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              activeClass="active-link"
            >
              About
            </ScrollLink>
          </Button>
          <Button
            fontSize={"1.2rem"}
            color={"gray.300"}
            variant="ghost"
            _hover={{ color: "#5EB5FD", transform: "scale(1.1)" }}
          >
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              activeClass="active-link"
            >
              Skills
            </ScrollLink>
          </Button>
          <Button
            fontSize={"1.2rem"}
            color={"gray.300"}
            variant="ghost"
            _hover={{ color: "#5EB5FD", transform: "scale(1.1)" }}
          >
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              activeClass="active-link"
            >
              Project
            </ScrollLink>
          </Button>
          <Button
            fontSize={"1.2rem"}
            color={"white"}
            variant="ghost"
            _hover={{ color: "#5EB5FD", transform: "scale(1.1)" }}
          >
            <RouterLink color="white" to="/resume">
              Resume
            </RouterLink>
          </Button>
          {/* Social icons */}
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
        </Stack>

        {/* Mobile Menu Icon */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          fontSize="20px"
          variant="ghost"
          icon={
            isOpen ? (
              <CloseIcon color={"#fff"} />
            ) : (
              <HamburgerIcon color={"#fff"} />
            )
          }
          _hover={{ bg: "transparent" }}
          onClick={onToggle}
        />
      </Flex>

      {/* Collapse Menu for Mobile */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          background={"transparent"}
          px={4}
          py={4}
          display={{ base: "block", md: "none" }} // This will close when clicking outside the stack
        >
          <Stack spacing={4}>
            {/* Home - Routing Link */}
            <Button className="button_style" onClick={onToggle}>
              <RouterLink to="/"> Home</RouterLink>
            </Button>

            {/* About - Scroll to Section */}
            <Button
              color={"white"}
              variant="ghost"
              _hover={{
                transform: "scale(1)",
                color: "#5EB5FD",
              }}
            >
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                onClick={onToggle} // Close after scroll
              >
                About
              </ScrollLink>
            </Button>

            {/* Skills - Scroll to Section */}
            <Button
              color={"white"}
              variant="ghost"
              _hover={{
                transform: "scale(1)",
                color: "#5EB5FD",
              }}
            >
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                onClick={onToggle} // Close after scroll
              >
                Skills
              </ScrollLink>
            </Button>

            {/* Projects - Scroll to Section */}
            <Button
              color={"white"}
              variant="ghost"
              w="full"
              _hover={{
                transform: "scale(1)",
                color: "#5EB5FD",
              }}
            >
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                onClick={onToggle} // Close after scroll
              >
                Project
              </ScrollLink>
            </Button>

            {/* Resume - Routing Link */}
            <Button
              color={"white"}
              variant="ghost"
              w="full"
              _hover={{
                transform: "scale(1)",
                color: "#5EB5FD",
              }}
              onClick={onToggle}
            >
              <RouterLink to="/resume">Resume</RouterLink>
            </Button>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Header;
