import React from "react";
import PropTypes from "prop-types";
import lizard from "../../../assets/images/lizard.jpg";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  CardHeader,
  CardActions,
  Button
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345
  },
  media: {
    height: 300
  }
});

function InfoCard({ title, image }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader title={title} />
        <CardMedia
          className={classes.media}
          image={URL.createObjectURL(image)}
          title={title}
        />

        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

InfoCard.defaultProps = {
  title: "Lizard",
  description:
    '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit'
};

export default InfoCard;
