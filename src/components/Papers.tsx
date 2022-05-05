import { Box, Link, ListItemText, Typography } from "@mui/material";

type exType = {
  PublishedDate: string;
  title: string;
  ConferenceName: string;
  url: string;
};
const ex: exType = {
  PublishedDate: "2021/2",
  title: "ac",
  ConferenceName: "IEEE",
  url: "https://github.com/teru77",
};

const Papers = () => {
  return (
    <Box
      component="div"
      sx={{
        mx: "auto",
        mt: 4,
        pt: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: 28, my: 2, textDecoration: "underline" }}
      >
        Papers
      </Typography>

      {[ex, ex, ex, ex].map((obj, index) => (
        <Box key={index} component="div" sx={{ mb: 2 }}>
          <ListItemText
            sx={{ textDecoration: "underline" }}
            primary={obj["PublishedDate"]}
          />
          <ListItemText
            sx={{ color: "gray" }}
            primary={obj["ConferenceName"]}
          />
          <ListItemText
            disableTypography
            primary={
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: 22 }}
              >
                {obj["title"]}
              </Typography>
            }
          />
          <Link
            sx={{
              color: "inherit",
              ":hover": { color: "lightblue", cursor: "pointer" },
            }}
            href={obj["url"]}
          >
            URL
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Papers;
