import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

type exType = {
  receivedDate: string;
  text: string;
};
const ex: exType = { receivedDate: "2021/2", text: "TOEIC 公開テスト 765点" };

const Qualifications = () => {
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
        Qualfications
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
              <ListItemText
                sx={{ textDecoration: "underline" }}
                primary={obj["receivedDate"]}
              />
              <ListItemText primary={obj["text"]} />
            </Box>
          ))}
        </ListItem>
      </List>
    </Box>
  );
};

export default Qualifications;
