import { Box, Grid, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import JS from "../../assets/img/javascript.svg";
import Py from "../../assets/img/python.svg";
import TS from "../../assets/img/typescript-icon.svg";
import Re from "../../assets/img/react.svg";
import Fb from "../../assets/img/firebase.svg";
import SkillCard from "./SkillCard";

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
        sx={{ fontSize: 28, my: 2, textDecoration: "underline" }}
      >
        About
      </Typography>

      <Typography variant="h4" sx={{ fontSize: 16, fontWeight: "bold" }}>
        永森輝
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h4" sx={{ fontSize: 24, fontWeight: "bold" }}>
          Teru Nagamori
        </Typography>
        <Link
          sx={{
            color: "inherit",
            textDecoration: "none",
            ml: 1,
            ":hover": { color: "lightblue", cursor: "pointer" },
          }}
          href="https://github.com/teru77"
        >
          <GitHubIcon />
        </Link>
        <Link
          sx={{
            color: "inherit",
            textDecoration: "none",
            ml: 1,
            ":hover": { color: "lightblue", cursor: "pointer" },
          }}
          href="https://twitter.com/teru_dev77"
        >
          <TwitterIcon />
        </Link>
        <Link
          sx={{
            color: "inherit",
            textDecoration: "none",
            ml: 1,
            ":hover": { color: "lightblue", cursor: "pointer" },
          }}
          href="https://www.instagram.com/t_77_photo/"
        >
          <InstagramIcon />
        </Link>
      </Box>
      <p>
        東京都立大学大学院システムデザイン研究科情報科学域に在学中の修士1年。
        <br />
        貴家・塩田研究室に所属し、画像処理に関する研究を行なっています。主な研究テーマは、Semantic
        SegmentationやObject
        Detectionで用いられるDNNやTransformerを不正利用から保護する手法について研究しています。
        <br />
        趣味はカメラや音楽、映画鑑賞です。
      </p>
      <Typography
        variant="h4"
        sx={{
          fontSize: 16,
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
          <SkillCard key={index} image={skill["image"]} text={skill["text"]} />
        ))}
      </Grid>
    </Box>
  );
};

export default About;
