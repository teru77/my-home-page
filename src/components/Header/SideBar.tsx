import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

type Props = {
  onOpen: () => void;
};
const SideBar = (props: Props) => {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{
        display: "none",
        "@media screen and (max-width: 768px)": { display: "block" },
      }}
      onClick={props.onOpen}
    >
      <Menu />
    </IconButton>
  );
};

export default SideBar;
