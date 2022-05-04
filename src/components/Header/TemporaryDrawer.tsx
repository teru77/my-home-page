import { Box, List, Drawer, ListItem, ListItemText } from "@mui/material";
import { Link as Scroll } from "react-scroll";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const TemporaryDrawer = (props: Props) => {
  return (
    <Drawer anchor="right" open={props.open} onClose={props.onClose}>
      <Box sx={{ width: 250 }} role="presentation">
        <List sx={{ p: 0 }}>
          {["About", "Education", "Work", "Papers", "Qualifications"].map(
            (text, index) => (
              <ListItem
                button
                key={index}
                sx={{
                  display: "inline-block",
                  borderBottom: "solid 1px lightgray",
                  p: 0,
                  m: 0,
                }}
              >
                <Scroll to={text} smooth={true}>
                  <ListItemText
                    primary={text}
                    onClick={props.onClose}
                    sx={{ display: "block", px: 1, py: 2, m: 0 }}
                  />
                </Scroll>
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Drawer>
  );
};
