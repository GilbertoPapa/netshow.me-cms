import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Select from "../dashboard/Select";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import image from "../img/media-default-thumbnail-url-video.png";

const styles = {
  card: {
    minWidth: 260,
    display: "flex",
    flexDirection: "column"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 10
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
      <Grid item key={card} sm={12} md={6} lg={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Título
              </Typography>
              <Typography component="p">Data de Exibição</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    

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
