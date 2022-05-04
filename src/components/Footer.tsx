import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
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
          sx={{ color: "inherit", textDecoration: "none" }}
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
