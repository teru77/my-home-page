import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import db from "../firebase";
import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

const Works = () => {
  const [works, setWorks] = useState<DocumentData[]>([]);

  useEffect(() => {
    const workData = collection(db, "works");
    const q = query(workData, orderBy("timestamp", "desc"));
    getDocs(q).then((querySnapshot) => {
      setWorks(querySnapshot.docs.map((doc) => doc.data()));
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
        sx={{ fontSize: 28, my: 2, textDecoration: "underline" }}
      >
        Experience
      </Typography>
      <List sx={{ p: 0 }}>
        <ListItem
          sx={{
            display: "inline-block",
            p: 0,
            m: 0,
          }}
        >
          {works.map((work, index) => (
            <Box key={index} component="div" sx={{ mb: 2 }}>
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {work.FinishDate ? (
                  <ListItemText
                    sx={{ textDecoration: "underline" }}
                    primary={`${work.StartDate} - ${work.FinishDate}`}
                  />
                ) : (
                  <ListItemText
                    sx={{ textDecoration: "underline" }}
                    primary={`${work.StartDate} - 現在`}
                  />
                )}
              </Box>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: 20 }}
                  >
                    {work.Name}
                  </Typography>
                }
              />
              <ListItemText primary={work.Detail} />
            </Box>
          ))}
        </ListItem>
      </List>
    </Box>
  );
};

export default Works;
