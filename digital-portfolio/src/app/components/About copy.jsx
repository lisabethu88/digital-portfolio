import { Box, Typography, Divider } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#181818",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        height: "fit-content",
      }}
      id={"about"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
          margin: 5,
        }}
      >
        <Box
          component="img"
          src="/mecartoon6.png"
          data-aos="zoom-in-right"
          sx={{
            maxWidth: 500,
            width: "100%",
            margin: 2,
            backgroundColor: "#534a7a",
            borderRadius: 5,
          }}
        ></Box>
        <Box data-aos="zoom-in-left">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              width: "fit-content",
              color: "#7ed463 !important",
              fontSize: { xs: "2.5rem", md: "3rem" },
            }}
          >
            About Me
            {/* <Divider sx={{ width: "100%" }} /> */}
          </Typography>
          <Divider sx={{ borderColor: "#ff24d2", marginY: 2, maxWidth: 400 }} />
          <Divider sx={{ borderColor: "#7767ba", marginY: 2, maxWidth: 300 }} />
          <Divider sx={{ borderColor: "#678fb3", marginY: 2, maxWidth: 200 }} />

          <Typography
            variant="body1"
            fontFamily={"Lato"}
            fontWeight={600}
            sx={{ maxWidth: 500, color: "white" }}
          >
            Hi, I’m Lisa Utsett—a passionate front-end developer with a knack
            for creating user-friendly, visually engaging web experiences. My
            journey into coding began in high school, designing custom MySpace
            pages, and has since evolved into a career that combines my love for
            art and technology. I hold an Associate's degree in Computer Science
            and am a graduate of the Ada Developers Academy bootcamp. I’ve
            collaborated on impactful projects like Hype HQ, a gamified social
            media platform empowering women and non-binary folks to amplify each
            other’s achievements. My expertise spans React, TypeScript,
            Firebase, and MUI, with a growing foundation in Python and Flask for
            backend development. Beyond coding, I’m a proud mom and an artist at
            heart. I aim to merge creativity and logic to craft meaningful
            digital experiences, and I aspire to mentor others as I grow into a
            lead front-end developer role. Let’s connect and create something
            amazing!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
