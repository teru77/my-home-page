import { Box, Typography } from "@mui/material";

const Papers = () => {
  return (
    <Box
      component="div"
      sx={{
        mx: "auto",
        pt: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: 28, my: 2, textDecoration: "underline" }}
      >
        Papers
      </Typography>
    </Box>
  );
};

export default Papers;
