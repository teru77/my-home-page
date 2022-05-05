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

const Qualifications = () => {
  const [qualifications, setQualifications] = useState<DocumentData[]>([]);

  useEffect(() => {
    const qualificationData = collection(db, "qualifications");
    const q = query(qualificationData, orderBy("timestamp", "desc"));
    getDocs(q).then((querySnapshot) => {
      setQualifications(querySnapshot.docs.map((doc) => doc.data()));
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
        Qualfications
      </Typography>

      <List sx={{ p: 0 }}>
        <ListItem
          sx={{
            display: "inline-block",
            p: 0,
            m: 0,
          }}
        >
          {qualifications.map((qualification, index) => (
            <Box key={index} component="div" sx={{ mb: 2 }}>
              <ListItemText
                sx={{ textDecoration: "underline" }}
                primary={qualification.ReceivedDate}
              />
              <ListItemText primary={qualification.Name} />
            </Box>
          ))}
        </ListItem>
      </List>
    </Box>
  );
};

export default Qualifications;
