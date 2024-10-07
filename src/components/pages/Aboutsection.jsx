/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Text, Heading, Image } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation"; // Named import
import header_img from "../../assets/header-img.svg";
import "../../style/About.css";
export const Aboutsection = () => {
  return (
    <Box
      id="about"
      py={10}
      px={{ base: 6, md: 16 }}
      textAlign="left"
      display={{ base: "block", md: "flex" }} 
      alignItems="center"
      justifyContent="space-between"
      my={{ base: 0, md: 36 }}
      
    >
      {/* Left Side with Text and Typing Effect */}
      <Box flex="1" mr={{ base: 0, md: 10 }} mb={{ base: 8, md: 0 }}>
        <Heading as="h2" size="xl" mb={4} color={"gray.200"}>
          Hello!
        </Heading>
        <Text fontSize="27px" mb={4} color={"gray.200"}>
          I’m{" "}
          <span style={{ color: "#5EB5FD", fontWeight: "bold" }}>
            Shekhar Suman
          </span>{" "}
          , a passionate
        </Text>

        {/* Typing Effect for Developer and Designer Titles */}
        <TypeAnimation
          sequence={[
            "React Developer", // Type this
            2000, // Wait 2 seconds
            "", // Delete
            1000, // Wait 1 second
            "UI/UX Designer", // Type this
            2000, // Wait 2 seconds
            "", // Delete
            1000, // Wait 1 second
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "29px", color: "#5EB5FD", fontWeight: "bold" }}
        />

        <Text fontSize={{ base: "16px", md: "18px" }} mt={4} color={"#fff"}>
          I have over 3 years of IT experience in front-end development with
          expertise in JavaScript, ReactJS, React Native, and various other
          technologies. Proficient in designing and developing user interfaces
          with a focus on performance and scalability. Strong analytical and
          problem-solving skills with the ability to learn new technologies and
          business processes quickly. Excellent interpersonal skills with the
          ability to forge relationships with individuals at all levels.
        </Text>
      </Box>

      {/* Right Side with Image */}
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Image
          src={header_img}
          alt="Profile Image"
          borderRadius="full"
          boxSize="400px"
          className="image-animation"
        />
      </Box>
    </Box>
  );
};
