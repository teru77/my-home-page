import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const scrollTop = (): number => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
};

const ScrollTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [isTop, setIsTop] = useState<boolean>(true);

  const onScroll = (): void => {
    const position = scrollTop();
    if (position >= 80) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  const Flag = isTop ? 0 : 1;
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
        opacity: { Flag },
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
