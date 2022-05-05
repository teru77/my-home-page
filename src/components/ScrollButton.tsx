import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp";
const ScrollButton = () => {
  const [show, setShow] = useState<boolean>(false);

  const changeShow = () => {
    if (window.pageYOffset > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const onScrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeShow);
    return () => window.removeEventListener("scroll", changeShow);
  }, []);

  if (show)
    return (
      <IconButton onClick={onScrollTop}>
        <ArrowCircleUpSharpIcon />
      </IconButton>
    );
  else return null;
};

export default ScrollButton;
