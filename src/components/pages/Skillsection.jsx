import React, { useState } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Heading,
  IconButton,
  Image,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import meter1 from "../../assets/meter1.svg";
import { FaGithub, FaFigma, FaJira } from "react-icons/fa6";
import {
  SiMicrosoftazure,
  SiEslint,
  SiSonarqube,
  SiRedux,
  SiJest,
  SiFormik,
  SiFirebase
} from "react-icons/si";

const skills = [
  { name: "JavaScript", image: meter1, percent: "65%" },
  { name: "ReactJS", image: meter1, percent: "70%" },
  { name: "HTML", image: meter1, percent: "80%" },
  { name: "CSS", image: meter1, percent: "75%" },
  { name: "TypeScript", image: meter1, percent: "70%" },
  { name: "Node JS", image: meter1, percent: "45%" },
  { name: "React Native", image: meter1, percent: "45%" },
  { name: "SQL", image: meter1, percent: "40%" },
  { name: "Power BI", image: meter1, percent: "50%" },
  { name: "ChakraUI", image: meter1, percent: "80%" },
  { name: "Bootstrap", image: meter1, percent: "80%" },
  { name: "Tailwind", image: meter1, percent: "70%" },
];
const tool = [
  { name: "Git", icon: <FaGithub size={40} />, colorScheme: "purple" },
  { name: "Figma", icon: <FaFigma size={40} />, colorScheme: "pink" },
  { name: "Sonarqube", icon: <SiSonarqube size={40} />, colorScheme: "blue" },
  { name: "Jira", icon: <FaJira size={40} />, colorScheme: "teal" },
  { name: "Eslint", icon: <SiEslint size={40} />, colorScheme: "red" },
  { name: "Formic", icon: <SiFormik size={40} />, colorScheme: "cyan" },
  {
    name: "Redux Tool Kit",
    icon: <SiRedux size={40} />,
    colorScheme: "yellow",
  },
  { name: "Jest", icon: <SiJest size={40} />, colorScheme: "blue" },
  {
    name: "Azure",
    icon: <SiMicrosoftazure size={40} />,
    colorScheme: "orange",
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={40} />,
    colorScheme: "green",
  },
];

const Skillsection = () => {
  const [index, setIndex] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const itemsPerPage = isMobile ? 1 : 3;
  const handleNext = () => {
    if (index + itemsPerPage < skills.length) {
      setIndex((index + itemsPerPage) % skills.length);
    }
  };

  const handlePrevious = () => {
    if (index - itemsPerPage >= 0) {
      setIndex(index - itemsPerPage);
    }
  };

  return (
    <Box width={"100%"} mx="auto" mt={{ base: "-12%", md: 0 }}>
      {/* skillset */}
      <Box  maxWidth="1200px" mx="auto" p={6} my={{ base: 0, md: 12 }}>
        <Heading as="h2" size="xl" textAlign="center" mb={4} color="#fff">
          My Skills
        </Heading>
        <Text
          fontSize={{ base: "16px", md: "18px" }}
          textAlign="center"
          color="#fff"
          mb={12}
        >
          Here are some of the technologies I have been working with.
        </Text>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"row"}
          // padding={"100px"}
          marginTop={"-50px"}
        >
          <IconButton
            isRound={true}
            variant="outline"
            border={"2px solid white"}
            aria-label="Done"
            fontSize="20px"
            icon={<ChevronLeftIcon color={"white"} />}
            onClick={handlePrevious}
            disabled={index === 0}
            _hover={{ bg: "transparent" }}
          />

          <Box flex={1} px={2}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {skills.slice(index, index + itemsPerPage).map((skill) => (
                <Box
                  key={skill.name}
                  bg="transparent"
                  color="white"
                  borderRadius="md"
                  textAlign="center"
                  boxShadow="lg"
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.05)" }}
                  p={5}
                >
                  <Box
                    position="relative"
                    width={{ base: "120px", md: "170px" }}
                    mx="auto"
                  >
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      boxSize={{ base: "120px", md: "170px" }}
                      objectFit="cover"
                    />
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      width="100%"
                      height="100%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="#fff"
                      textAlign="center"
                    >
                      <VStack>
                        <Text
                          fontSize={{ base: "14px", md: "16px" }}
                          fontWeight="bold"
                        >
                          {skill.name}
                        </Text>
                        <Text
                          fontWeight="bold"
                          fontSize={{ base: "14px", md: "16px" }}
                        >
                          {skill.percent}
                        </Text>
                      </VStack>
                    </Box>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <IconButton
            isRound={true}
            variant="outline"
            aria-label="Done"
            fontSize="20px"
            icon={<ChevronRightIcon color={"white"} />}
            onClick={handleNext}
            disabled={index + itemsPerPage >= skills.length}
            _hover={{ bg: "transparent" }}
            border={"2px solid white"}
          />
        </Box>
      </Box>
      {/* Tool&packages */}
      <Box maxWidth="1200px" mx="auto" p={6} my={{ base: 0, md: 12 }}>
        <Heading as="h2" size="xl" textAlign="center" mb={12} color="#fff">
          Tools and Packages
        </Heading>
        <Box flex={1} >
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={5}>
            {tool.map((skill) => (
              <Box
                key={skill.name}
                bg={`${skill.colorScheme}.600`}
                color="white"
                borderRadius="md"
                textAlign="center"
                boxShadow="lg"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)" }}
                p={5}
              >
                {skill.icon}
                <Text fontSize="lg" fontWeight="bold" mt={3}>
                  {skill.name}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Skillsection;
