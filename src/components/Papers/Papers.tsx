import { Box, Link, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import db from "../../firebase";
import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

const Papers = () => {
  const [papers, setPapers] = useState<DocumentData[]>([]);

  useEffect(() => {
    const paperData = collection(db, "papers");
    const q = query(paperData, orderBy("timestamp", "desc"));
    getDocs(q).then((querySnapshot) => {
      setPapers(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);
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
        sx={{
          fontSize: 28,
          my: 2,
          textDecoration: "underline",
          fontWeight: "bold",
        }}
      >
        Papers
      </Typography>

      {papers.map((paper, index) => (
        <Box key={index} component="div" sx={{ mb: 2 }}>
          <ListItemText
            sx={{ textDecoration: "underline" }}
            primary={paper.PublishedDate}
          />
          <ListItemText sx={{ color: "gray" }} primary={paper.ConferenceName} />
          <ListItemText
            disableTypography
            primary={
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: 22 }}
              >
                {paper.Title}
              </Typography>
            }
          />
          <Link
            sx={{
              color: "inherit",
              ":hover": { color: "lightblue", cursor: "pointer" },
            }}
            href={paper.URL}
          >
            URL
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Papers;
