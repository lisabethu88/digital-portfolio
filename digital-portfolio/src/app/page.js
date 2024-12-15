"use client";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import ProjectSection from "./components/ProjectSection";
import About from "./components/About";
import { Box } from "@mui/material";
import Contact from "./components/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Reflection from "./components/Reflection";

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Optional settings:
      duration: 1200, // Animation duration in ms
      offset: 200, // Offset (in px) from the original trigger point
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []); // Empty dependency array ensures this runs only once
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          height: "calc(100% + 64px)",
          top: 0,
          position: "absolute",
        }}
      >
        <HeroSection />
        <About />
        <ProjectSection />
        <Reflection />
      </Box>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
