import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Reflection = () => {
  return (
    <Box
      id="reflection"
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#181818",
        minHeight: "100vh",
        minWidth: "100vw",
        top: -70,
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          <span className="arrows">{"<"}</span>Reflection on My Learning Journey
          <span className="arrows">{"/>"}</span>
        </Typography>
        {/* <Divider sx={{ borderColor: "#ff24d2", marginY: 2 }} /> */}
        <Typography sx={{ margin: 4 }}>
          This class has been pivotal in reshaping my approach to web design and
          development. One of the most valuable lessons I’ve learned is the
          importance of prioritizing accessibility and user experience from the
          very beginning of a project. Before this class, these considerations
          were often an afterthought, addressed only after the main structure
          was in place. Now, I consciously design with inclusivity and user flow
          in mind. Through this class, I also gained hands on experience
          integrating AI into web applications. Not only did this improve my
          technical abilities, but it also pushed me to think deeply about the
          ethical implications of using AI. I’ve learned to approach AI
          implementation with a sense of responsibility, ensuring it adds value
          and serves users in a meaningful and ethical way. Another critical
          skill I developed in this class is the importance of planning through
          wireframes and flowcharts. These tools have completely transformed how
          I approach projects, allowing me to map out the structure and flow
          before development begins. This has made my workflow far more
          efficient and helped me anticipate challenges early in the process,
          resulting in better organized and higher-quality outcomes. This class
          has truly shaped my growth as a web designer. I’m leaving with a
          deeper understanding of how to create accessible, user focused
          websites.
        </Typography>
      </Box>
    </Box>
  );
};

export default Reflection;
