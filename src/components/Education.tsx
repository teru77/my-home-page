import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

type exType = {
  startDate: string;
  finishDate?: string;
  text: string;
};
const ex: exType = {
  startDate: "2018/4",
  finishDate: "2022/03",
  text: "東京都立大学システムデザイン学部情報科学科",
};

const Education = () => {
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
        Education
      </Typography>
      <List sx={{ p: 0 }}>
        <ListItem
          sx={{
            display: "inline-block",
            p: 0,
            m: 0,
          }}
        >
          {[ex, ex, ex, ex].map((obj, index) => (
            <Box key={index} component="div" sx={{ mb: 2 }}>
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {obj["finishDate"] ? (
                  <ListItemText
                    sx={{ textDecoration: "underline" }}
                    primary={`${obj["startDate"]} - ${obj["finishDate"]}`}
                  />
                ) : (
                  <ListItemText
                    sx={{ textDecoration: "underline" }}
                    primary={`${obj["startDate"]} - 現在`}
                  />
                )}
              </Box>
              <ListItemText primary={obj["text"]} />
            </Box>
          ))}
        </ListItem>
      </List>
    </Box>
  );
};

export default Education;
