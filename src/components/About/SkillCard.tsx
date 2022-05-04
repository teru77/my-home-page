import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

type Props = {
  image: string;
  text: string;
};
const SkillCard = (props: Props) => {
  const { image, text } = props;
  return (
    <Grid item sm={3} sx={{ margin: "auto" }}>
      <Card
        sx={{
          height: 200,
          width: "80%",
          margin: "theme.spacing(1)",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt="Paella dish"
          sx={{
            height: "80%",
            objectFit: "fill",
          }}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: "20%", margin: "auto" }}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SkillCard;
