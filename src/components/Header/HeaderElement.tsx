import { Link as Scroll } from "react-scroll";
import { ListItemText } from "@mui/material";

type Props = {
  text: string;
};

const HeaderElement = (props: Props) => {
  const { text } = props;
  return (
    <Scroll to={text} smooth={true} duration={600} offset={-50}>
      <ListItemText
        sx={{
          display: "inline-block",
          mr: "30px",
          ":hover": { color: "lightblue", cursor: "pointer" },
          "@media screen and (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        {text}
      </ListItemText>
    </Scroll>
  );
};

export default HeaderElement;
