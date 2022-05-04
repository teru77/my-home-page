import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

type exType = {
  startDate: string;
  finishDate?: string;
  text: string;
  detail: string;
};
const ex: exType = {
  startDate: "2021/10",
  finishDate: "2022/05",
  text: "株式会社アダコテック (機械学習インターン)",
  detail: "異常検知のための位置補正",
};

const Works = () => {
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
        Works
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
              <ListItemText primary={obj["detail"]} />
            </Box>
          ))}
        </ListItem>
      </List>
    </Box>
  );
};

export default Works;
