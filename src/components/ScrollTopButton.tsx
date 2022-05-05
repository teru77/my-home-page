import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [isTop, setIsTop] = useState<boolean>(false);

  useEffect(() => {
    const scrollTop = () => {
      if (window.scrollY >= 100) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    scrollTop();
    window.addEventListener("scroll", scrollTop);

    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);

  return (
    <IconButton
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        right: "5%",
        bottom: "8%",
        minWidth: "48px",
        minHeight: "48px",
        zIndex: 100,
        transition: "1.5s",
        opacity: isTop ? 1 : 0,
      }}
    >
      <ArrowCircleUpRoundedIcon
        sx={{
          color: "#3f2b96",
          fontSize: 40,
          display: "block",
        }}
      />
    </IconButton>
  );
};

export default ScrollTopButton;
