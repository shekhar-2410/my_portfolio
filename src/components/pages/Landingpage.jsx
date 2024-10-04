import React from "react";
import Layout from "../layout";
import { Box} from "@chakra-ui/react";
import { Aboutsection } from "./Aboutsection";
import Skillsection from "./Skillsection";
import Projectsection from "./Projectsection";
import GetintouchSection from "./GetintouchSection";
import banner from "../../assets/banner-bg.png";
const Landingpage = () => {
  const sectionMarginY = "50px"; 

  return (
    <Box 
      bgImage={banner} 
      bgRepeat={"no-repeat"} 
      bgSize={"cover"} 
      bgPosition={"center"}
    >
      <Layout>
        <Box mt={"11vh"}>
          <Box mb={sectionMarginY}>
            <Aboutsection />
          </Box>
          <Box mb={sectionMarginY}>
            <Skillsection />
          </Box>
          <Box mb={sectionMarginY}>
            <Projectsection />
          </Box>
          <Box >
            <GetintouchSection />
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Landingpage;
