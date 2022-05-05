import { Box, Grid, Typography } from "@mui/material";

import JS from "../../assets/img/javascript.svg";
import Py from "../../assets/img/python.svg";
import TS from "../../assets/img/typescript-icon.svg";
import Re from "../../assets/img/react.svg";
import Fb from "../../assets/img/firebase.svg";
import SkillCard from "./SkillCard";
import Profile from "./Profile";

const About = () => {
  const Skills = [
    { image: Py, text: "Python" },
    { image: JS, text: "JavaScript" },
    { image: TS, text: "TypeScript" },
    { image: Re, text: "React" },
    { image: Fb, text: "Firebase" },
  ];
  return (
    <Box
      component="div"
      sx={{
        pt: 4,
        mx: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: 28,
          mt: 2,
          mb: 4,
          textDecoration: "underline",
          fontWeight: "bold",
        }}
      >
        About
      </Typography>

      <Profile />
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: 18,
            fontWeight: "bold",
            textDecoration: "underline",
            mb: 4,
          }}
        >
          スキル
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {Skills.map((skill, index) => (
            <SkillCard
              key={index}
              image={skill["image"]}
              text={skill["text"]}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
