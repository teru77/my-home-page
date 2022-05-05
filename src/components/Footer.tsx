import { Box, Link, Typography } from "@mui/material";
import ScrollTopButton from "./ScrollTopButton";

const Footer = () => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        background: "linear-gradient(to right, #a8c0ff, #3f2b96)",
        color: "white",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="body2" align="center">
        {"Copyright © "}
        <Link
          sx={{ color: "inherit", textDecoration: "none", mr: 1 }}
          href="https://github.com/teru77"
        >
          Teru Nagamori
        </Link>
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default Footer;
