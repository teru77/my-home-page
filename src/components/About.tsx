import { Box, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const About = () => {
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
          sx={{ color: "inherit", textDecoration: "none", ml: 1 }}
          href="https://github.com/teru77"
        >
          <GitHubIcon />
        </Link>
        <Link
          sx={{ color: "inherit", textDecoration: "none", ml: 1 }}
          href="https://twitter.com/teru_dev77"
        >
          <TwitterIcon />
        </Link>
        <Link
          sx={{ color: "inherit", textDecoration: "none", ml: 1 }}
          href="https://www.instagram.com/t_77_photo/"
        >
          <InstagramIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default About;
