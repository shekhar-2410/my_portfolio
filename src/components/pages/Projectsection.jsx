import React from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Heading,
  Badge,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import analytical from "../../assets/analytical.png";
import bioorganic from "../../assets/biooragnic.png";
import skyshare from "../../assets/skyhare.png";
import microfrontend from "../../assets/microf.png";
import locater from "../../assets/locater.png";
import movie from "../../assets/movie.jpg";
import { FaSquareGithub } from "react-icons/fa6";

const projects = [
  {
    name: "SkyShare",
    role: "Software Engineer",
    description:
      "SkyShare is a PaaS product integrating various stages of cargo transportation in the airline industry, enabling data aggregation for targeted marketing.",
    technology: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Azure",
      "Chakra Ui",
      "Redux Toolkit",
      "Eslint",
      "Axios",
    ],
    image: skyshare,
    isLink: false,
    git: "",
  },
  {
    name: "Tracker_App",
    role: "Software Engineer",
    description:
      "Tracker App is a real-time location tracking application built with Node.js, Express, EJS, and Socket.io. The application allows users to share their live location, which is displayed on a map using the Leaflet.js library.",
    technology: ["Node.js", "Express", " EJS", "Socket.io", "Leaflet.js"],
    image: locater,
    isLink: true,
    git: "https://github.com/shekhar-2410/Tracker_App",
  },
  {
    name: "Bio Organics",
    role: "Software Engineer",
    description:
      "Bio Organics offers a platform for customers to explore products and connect with the company.",
    technology: [
      "React.js",
      "Bootstrap",
      "Pagination",
      "Redux Toolkit",
      "Axios",
      "Eslint",
      "React Table",
      "Formik",
    ],
    image: bioorganic,
    isLink: false,
    git: "",
  },
  {
    name: "Movies Liberary",
    role: "Software Engineer",
    description:
      "This React Native app offers users features like trending movies, latest releases, upcoming films, movie details, cast info, and more, using third-party packages for added functionality.",
    technology: [
      "SnapCarousel",
      "ProgressBar",
      "HeroIcons",
      "LinearGradient",
      "lodash",
      "native wind",
      "Axios",
    ],
    image: movie,
    isLink: true,
    git: "https://github.com/shekhar-2410/Movies",
  },
  {
    name: "Analytical Budget Allocator",
    role: "Software Engineer",
    description:
      "An Analytical Dashboard Application for efficient budget allocation and analysis.",
    technology: [
      "React.js",
      "Redux Toolkit",
      "Formik",
      "Axios",
      "Eslint",
      "Sonarqube",
      "Chart.js",
      "React Table",
      "Rechart",
      "Micro-component",
    ],
    image: analytical,
    isLink: false,
    git: "",
  },
  {
    name: "Micro-Frontend Application",
    role: "Software Engineer",
    description:
      "A Micro-Frontend Application developed for seamless integration of independent modules.",
    technology: [
      "React.js",
      "Redux Toolkit",
      "Formik",
      "Axios",
      "Eslint",
      "Sonarqube",
      "Chart.js",
      "React Table",
      "Rechart",
      "Micro-component",
      "module-federation",
    ],
    image: microfrontend,
    isLink: false,
    git: "",
  },
];

const Projectsection = () => {
  return (
    <Box maxWidth="1200px" mx="auto" p={6}>
      <Heading as="h2" size="xl" textAlign="center" mb={2} color="#fff">
        My Recent Work
      </Heading>
      <Text Text fontSize={{ base: "16px", md: "18px" }} textAlign="center" mb={8} color={"#fff"}>
        Here are some of the projects I have worked on.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {projects.map((project, index) => (
          <Box
            key={index}
            width={{ base: "98%", md: "100%" }}
            bg="gray.800"
            borderRadius="2xl"
            overflow="hidden"
            position="relative"
            _hover={{ transform: "scale(1.05)" }}
            transition="transform 0.3s"
            boxShadow="xl"
            border="1px solid gray"
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.name}
              objectFit="cover"
              width="100%"
              height="220px"
            />

            {/* Overlay for hover effect */}
            <Box
              position="absolute"
              top={0}
              left={0}
              height="100%"
              bg="rgba(0, 0, 0, 0.8)"
              opacity={0}
              transition="opacity 0.3s"
              _hover={{ opacity: 1 }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={4}
              cursor={"grab"}
              width={"100%"}
            >
              {/* Project Name */}
              <HStack>
                <Heading as="h3" size="md" color="white" mb={2}>
                  {project.name}
                </Heading>

                {project.isLink && (
                  <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <IconButton
                    _hover={{ bg: "transparent",border:"none" }}
                    background={"transparent"}
                    aria-label="Open in new tab"
                    icon={<FaSquareGithub color="white" size={21} />}
                  />
                </a>
                )}
              </HStack>

             

              {/* Project Description */}
              <Text color="white" fontSize={"14px"} textAlign="center" mb={2}>
                {project.description}
              </Text>

              {/* Technologies Used */}
              <Box  mb={2}>
                {project.technology.map((tech, i) => (
                  <Badge key={i} fontSize={"10px"} colorScheme="teal" mr={1} >
                    {tech}
                  </Badge>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projectsection;
