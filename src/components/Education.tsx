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

const Education = () => {
  const [scholls, setScholls] = useState<DocumentData[]>([]);

  useEffect(() => {
    const educationData = collection(db, "education");
    const q = query(educationData, orderBy("timestamp", "desc"));
    getDocs(q).then((querySnapshot) => {
      setScholls(querySnapshot.docs.map((doc) => doc.data()));
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
        Education
      </Typography>
      <List sx={{ p: 0 }}>
        <ListItem
          sx={{
            display: "inline-block",
            p: 0,
            m: 0,
          }}
        >
          {scholls.map((scholl, index) => (
            <Box key={index} component="div" sx={{ mb: 2 }}>
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {scholl.FinishDate ? (
                  <ListItemText
                    sx={{ textDecoration: "underline" }}
                    primary={`${scholl.StartDate} - ${scholl.FinishDate}`}
                  />
                ) : (
                  <ListItemText
                    sx={{ textDecoration: "underline" }}
                    primary={`${scholl.StartDate} - 現在`}
                  />
                )}
              </Box>
              {scholl.FinishDate ? (
                <ListItemText primary={`${scholl.Name} 卒業`} />
              ) : (
                <ListItemText primary={`${scholl.Name} 在学`} />
              )}
            </Box>
          ))}
        </ListItem>
      </List>
    </Box>
  );
};

export default Education;
