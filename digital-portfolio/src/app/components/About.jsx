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
            // borderTop: "2px solid #7ed463 ",
            // borderLeft: "2px solid #678fb3  ",
            // borderRight: "2px solid #eba958 ",
            // borderBottom: "2px solid #7767ba  ",
          }}
        ></Box>
        <Box data-aos="zoom-in-left">
          <Typography
            variant="h2"
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
          <Divider sx={{ borderColor: "#678fb3", marginY: 2, maxWidth: 400 }} />
          <Divider sx={{ borderColor: "#678fb3", marginY: 2, maxWidth: 300 }} />
          <Divider sx={{ borderColor: "#678fb3", marginY: 2, maxWidth: 200 }} />

          <Typography
            variant="body1"
            fontFamily={"Lato"}
            fontWeight={600}
            sx={{ maxWidth: 500, color: "white" }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
