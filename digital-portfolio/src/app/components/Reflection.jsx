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
          textAlign: "justify",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          <span className="arrows">{"<"}</span>Reflection on My Learning Journey
          <span className="arrows">{"/>"}</span>
        </Typography>
        {/* <Divider sx={{ borderColor: "#ff24d2", marginY: 2 }} /> */}
        <Typography sx={{ margin: 2 }}>
          One of the most valuable aspects of this course was the focus on
          accessibility and inclusivity. In Module 4, I conducted an
          accessibility audit on one of my projects, testing color contrast,
          keyboard navigation, and screen reader compatibility. For instance, I
          identified issues like insufficient focus indicators and missing alt
          text for images. Addressing these challenges not only improved my
          technical skills but also taught me the importance of designing for
          all users, including those with disabilities. I now understand that
          accessibility should be a priority from the start, as retrofitting it
          later can be both time consuming and inefficient.
        </Typography>
        <Typography sx={{ margin: 2 }}>
          A major highlight of this class was the development of{" "}
          <i>Just the Effing Recipe</i>, a website I designed to provide
          straightforward recipes while accommodating diverse dietary needs. The
          integration of OpenAI’s API was particularly challenging yet
          rewarding. I initially faced issues such as improperly formatted
          prompts and "Too Many Requests" errors. These setbacks required
          troubleshooting and creative problem solving, such as restructuring
          recipe data retrieved from the Spoonacular API to align with OpenAI's
          requirements. By the end of the project, I successfully implemented a
          feature that allowed users to customize recipes for dietary
          restrictions with just two clicks. The feedback I received was very
          positive, with the users who tested it appreciating the detailed
          advice provided by the AI. This experience both improved my technical
          abilities but also reinforced the value of user centered design.
        </Typography>
        <Typography sx={{ margin: 2 }}>
          Collaboration was another significant learning point. Working
          alongside classmates with varied skill sets, I contributed my
          strengths in coding while learning from others about wireframing and
          user experience design. For instance, in a group project, I
          implemented the wireframes created by my teammates and handled the
          website’s API integration. This collaboration taught me the importance
          of teamwork and utilizing each person’s strengths.
        </Typography>
        <Typography sx={{ margin: 2 }}>
          The class also emphasized the importance of planning and structure.
          Through tools like wireframes and flowcharts, I learned to create a
          project’s structure before jumping into development. This approach
          allowed me to anticipate potential challenges and streamline my
          workflow. For example, during the design phase of my portfolio
          project, I prioritized simplicity and readability to make sure the
          site would appeal to potential employers.
        </Typography>
        <Typography sx={{ margin: 2 }}>
          Another critical component was testing and quality assurance. I
          performed comprehensive testing on my projects, including
          functionality, responsiveness, and cross-browser compatibility. One
          interesting challenge was identifying styling issues in Safari while
          doing cross-browser testing. Another issue that I wish I caught
          earlier and need to do more research on is performance optimization.
          My home page for <i>Just the Effing Recipe</i> only received an
          87/100, due to issues like large layout shifts and not using video
          format for animated content. Doing this assignment really helped me
          realize that testing and QA are areas I need to strengthen. I also
          really enjoyed getting user feedback. It was fun seeing the user
          navigate the web page and hearing from them what they would like to
          improve and what they expect to see. I found this really helpful.
        </Typography>
        <Typography sx={{ margin: 2 }}>
          Looking back, this class has prepared me for a career in web
          development by equipping me with essential tools for success,
          including expertise in accessibility, collaboration, AI integration,
          and a strong understanding of the ethical considerations involved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Reflection;
