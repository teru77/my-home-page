import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import db from "../../firebase";
import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

const Education = () => {
  const [schools, setSchools] = useState<DocumentData[]>([]);

  useEffect(() => {
    const educationData = collection(db, "education");
    const q = query(educationData, orderBy("timestamp", "desc"));
    getDocs(q).then((querySnapshot) => {
      setSchools(querySnapshot.docs.map((doc) => doc.data()));
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
          {schools.map((school, index) => (
            <Box key={index} component="div" sx={{ mb: 2 }}>
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {school.FinishDate ? (
                  <ListItemText
                    sx={{ textDecoration: "underline" }}
                    primary={`${school.StartDate} - ${school.FinishDate}`}
                  />
                ) : (
                  <ListItemText
                    sx={{ textDecoration: "underline" }}
                    primary={`${school.StartDate} - 現在`}
                  />
                )}
              </Box>
              {school.FinishDate ? (
                <ListItemText primary={`${school.Name} 卒業`} />
              ) : (
                <ListItemText primary={`${school.Name} 在学`} />
              )}
            </Box>
          ))}
        </ListItem>
      </List>
    </Box>
  );
};

export default Education;
