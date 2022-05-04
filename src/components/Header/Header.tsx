import { Box, List, ListItem, Typography } from "@mui/material";
import { useState } from "react";

import SideBar from "./SideBar";
import HeaderElement from "./HeaderElement";
import { TemporaryDrawer } from "./TemporaryDrawer";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        background: "linear-gradient(to right, #a8c0ff, #3f2b96)",
        mt: 0,
        height: "8em",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography variant="h3" sx={{ fontSize: 30 }}>
        Teru Nagamori
      </Typography>
      <List>
        <ListItem>
          {["About", "Education", "Works", "Papers", "Qualifications"].map(
            (text, index) => (
              <HeaderElement key={index} text={text} />
            )
          )}
        </ListItem>
      </List>

      <SideBar onOpen={toggleDrawer} />
      <TemporaryDrawer open={drawerOpen} onClose={toggleDrawer} />
    </Box>
  );
};

export default Header;
