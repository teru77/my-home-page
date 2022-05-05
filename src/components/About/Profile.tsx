import { Box, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Profile = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontSize: 16, fontWeight: "bold" }}>
        永森輝
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Typography variant="h4" sx={{ fontSize: 24, fontWeight: "bold" }}>
          Teru Nagamori
        </Typography>
        <Link
          sx={{
            color: "inherit",
            textDecoration: "none",
            ml: 1,
            ":hover": { color: "lightblue", cursor: "pointer" },
          }}
          href="https://github.com/teru77"
        >
          <GitHubIcon />
        </Link>
        <Link
          sx={{
            color: "inherit",
            textDecoration: "none",
            ml: 1,
            ":hover": { color: "lightblue", cursor: "pointer" },
          }}
          href="https://twitter.com/teru_dev77"
        >
          <TwitterIcon />
        </Link>
        <Link
          sx={{
            color: "inherit",
            textDecoration: "none",
            ml: 1,
            ":hover": { color: "lightblue", cursor: "pointer" },
          }}
          href="https://www.instagram.com/t_77_photo/"
        >
          <InstagramIcon />
        </Link>
      </Box>
      <p>
        東京都立大学大学院システムデザイン研究科情報科学域に在学中の修士1年。
        <br />
        貴家・塩田研究室に所属し、画像処理に関する研究を行なっています。主な研究テーマは、Semantic
        SegmentationやObject
        Detectionで用いられるDNNやTransformerを不正利用から保護する手法について研究しています。
        <br />
        趣味はカメラや音楽、映画鑑賞です。
      </p>
    </Box>
  );
};

export default Profile;
