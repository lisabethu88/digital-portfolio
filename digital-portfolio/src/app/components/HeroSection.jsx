import React from "react";
import { Box, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        top: 0,
        position: "relative",
        backgroundImage: "url(/computersetup.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          // textAlign: { xs: "center", md: "left" },
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          height: "100%",
          width: "100%",
          flexWrap: { xs: "wrap", md: "nowrap" },
          // alignContent: "center",
        }}
      >
        <Box
          sx={{
            // width: { xs: "100vw", md: "50%" },
            // height: { xs: "50%", md: "100%" },
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "flex-start",
            margin: 2,
          }}
        >
          <Typography
            variant="h1"
            fontWeight={800}
            fontSize={{ xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" }}
            sx={{ textWrap: "wrap" }}
            // data-aos="fade-down"
          >
            Digital Portfolio
          </Typography>
          <Typography
            variant="h4"
            fontSize={{ xs: "1rem", sm: "1.5rem", md: "2.125rem" }}
            // data-aos="fade-up"
          >
            Lisa Utsett{" "}
            <KeyboardDoubleArrowRightIcon sx={{ color: "#7ed463" }} />
            <Typography variant="span" id="hero-text" sx={{ color: "#7767ba" }}>
              {" "}
              Front End Developer{" "}
            </Typography>
          </Typography>
        </Box>

        {/* <Box
          component="div"
          data-aos="fade-left"
          sx={{
            backgroundImage: "url(/jannis-brandt-4mHaSX8zvJI-unsplash.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: { xs: "100vw", md: "50%" },
            height: { xs: "50%", md: "100%" },
          }}
        ></Box> */}
      </Box>
    </Box>
  );
};

export default HeroSection;