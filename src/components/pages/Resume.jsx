/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../layout";
import { Box, Flex, Text, Button, Divider } from "@chakra-ui/react";
import banner from "../../assets/banner-bg.png";

const Resume = () => {
  return (
    <Box
      bgImage={banner}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
      minH={"100vh"}
    >
      <Layout>
        <Box
          maxW={"800px"}
          mx={"auto"}
          bg={"white"}
          borderRadius={"md"}
          p={8}
          boxShadow={"lg"}
          mt={{ base: "14%", md: "12%", lg: "5%" }}
          mb={{ base: "5%", md: "2%" }}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Box>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Shekhar Suman
              </Text>
              <Text>shekhar24101995@gmail.com | Bangalore</Text>
              <Text>+91-9122445566</Text>
            </Box>
            <Button
              colorScheme={"blue"}
              onClick={() => window.open("/Shekhar_Suman-Resume.pdf", "_blank")}
            >
              Download Resume
            </Button>
          </Flex>

          <Divider my={6} />

          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"} mb={2}>
              PROFESSIONAL SUMMARY
            </Text>
            <Text>
              I have over 3 years of IT experience in front-end development with
              expertise in JavaScript, ReactJS, React Native, and various other
              technologies. Proficient in designing and developing user
              interfaces with a focus on performance and scalability.
            </Text>
          </Box>

          <Divider my={6} />

          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"} mb={2}>
              Skill Set
            </Text>
            <Text>
              <strong>Languages & Framework:</strong> JavaScript, ReactJS, React
              Native, SQL, Node JS, Github, Html, CSS, TypeScript, Power BI,
              ChakraUI, Bootstrap, Tailwind
            </Text>
            <Text>
              <strong>Packages:</strong> Recharts, Ka-Table, React Selector,
              Formik, React Multiple Tree Selector, Redux Toolkit, Jest, React
              Testing Library
            </Text>
            <Text>
              <strong>Tools:</strong> Git, Jira, Postman, Figma, Sonarqube,
              Eslint
            </Text>
          </Box>

          <Divider my={6} />

          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"} mb={2}>
              Professional Experience
            </Text>
            <Text fontWeight={"bold"}>
              Software Developer at Aritha Consulting Services Pvt. Ltd. (May
              2022 - Present)
            </Text>
            <Text>- Role: Software Engineer, React Js Developer</Text>
            <Text>
              - Developed projects such as SkyShare, Bio Organics, Analytical
              Budget Allocator, etc.
            </Text>
          </Box>

          <Divider my={6} />

          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"} mb={2}>
              Education
            </Text>
            <Text>
              <strong>Amet University, Chennai</strong> — Post Graduate Diploma
              in Marine Engineering (2017-2018)
            </Text>
            <Text>
              <strong>Punjab Technical University, Jalandhar</strong> —
              Bachelor’s in Mechanical Engineering (2013-2017)
            </Text>
          </Box>

          <Divider my={6} />

          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"} mb={3}>
              Projects
            </Text>
            <Box mb={3}>
              <Text fontWeight={"bold"}>
                SkyShare (React.js, Node.js,Chakra UI)
              </Text>
              <Text>
                SkyShare is a PaaS product integrating various stages of cargo
                transportation in the airline industry, enabling data
                aggregation for targeted marketing.
              </Text>
            </Box>
            <Box mb={3}>
              <Text fontWeight={"bold"}>Tracker App (Node.js, Socket.io)</Text>
              <Text>
                A real-time location tracking app built with Node.js and
                Socket.io.
              </Text>
            </Box>
            <Box mb={3}>
              <Text fontWeight={"bold"}>
                React Native Movie Application (React.js, Bootstrap)
              </Text>
              <Text>
                A mobile app providing access to trending, upcoming, and
                detailed movie information using React Native.
              </Text>
            </Box>

            <Box mb={2}>
              <Text fontWeight={"bold"}>
                Bio Organics (React.js, Bootstrap)
              </Text>
              <Text>
                Bio Organics offers a platform for customers to explore products
                and connect with the company
              </Text>
            </Box>
            <Box mb={3}>
              <Text fontWeight={"bold"}>
                Analytical Budget Allocator (React.js,Redux,Chakra UI,Jest)
              </Text>
              <Text>
                An Analytical Dashboard Application for efficient budget
                allocation and analysis.
              </Text>
            </Box>
            <Box mb={3}>
              <Text fontWeight={"bold"}>
                Micro-Frontend Application(React.js,Module Federation,Chakra
                UI,Jest)
              </Text>
              <Text>
                A Micro-Frontend Application aimed at improving modularity and
                scalability by decomposing the app into reusable components
              </Text>
            </Box>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Resume;
