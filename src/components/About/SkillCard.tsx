import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

type Props = {
  image: string;
  text: string;
};
const SkillCard = (props: Props) => {
  const { image, text } = props;
  return (
    <Grid item>
      <Card
        sx={{
          height: "150px",
          width: "150px",
          "@media screen and (max-width:600px)": {
            height: "80px",
            width: "80px",
          },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt="Logo"
          sx={{
            objectFit: "fill",
            display: "block",
            height: "80%",
          }}
        />
        <CardContent
          sx={{
            height: "20%",
            display: "flex",
            p: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SkillCard;
