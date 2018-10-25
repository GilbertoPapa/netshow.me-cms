import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import MediaControlCard from "./MediaControlCard";

const styles = {
  card: {
    minWidth: 275,
    display: "flex",
    flexDirection: "column"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },

  media: {
    height: 140
  }
};
const card = [1];
function SimpleCard(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item key={card} sm={12} md={6}>
        <Typography gutterBottom variant="h6" component="h2">
          Top Trending Vídeos
        </Typography>
        <Card className={classes.card}>
          
          
            <CardContent>
              <CardActionArea>
              <MediaControlCard/>
              </CardActionArea>
              <CardActionArea>
              <MediaControlCard/>
              </CardActionArea>
              <CardActionArea>
              <MediaControlCard/>
              </CardActionArea>

            </CardContent>
          
        </Card>
      </Grid>
    </React.Fragment>

    /*
   <Grid container spacing={40}>
   <Grid item key={card} sm={10} md={8} lg={3}>
       <Card className={classes.card}>
         <CardContent className={classes.cardContent}>
         <CardActionArea>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
         </CardContent>
         <CardActions>
           <Select/>
           <Button size="small" color="primary">
             Filtrar
           </Button>
         </CardActions>
       </Card>
     </Grid>
   
 </Grid>*/
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
