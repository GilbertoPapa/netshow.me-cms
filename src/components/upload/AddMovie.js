import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import indigo from '@material-ui/core/colors/indigo';
import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({

  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  card: {
    maxWidth: 850,
    marginLeft: 20,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },


  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: indigo[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: indigo[500],
    },
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },

  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },


});

function IconLabelButtons(props) {
    const { classes } = props;
    return (


    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="200"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          
        </CardContent>
      </CardActionArea>
      <CardActions>

      <FormControl className={classes.margin}>
        <InputLabel
          htmlFor="custom-css-input"
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
        Título
        </InputLabel>
        <Input
          id="custom-css-input"
          classes={{
            underline: classes.cssUnderline,
          }}
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel
          htmlFor="custom-css-input"
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
        Descrição
        </InputLabel>
        <Input
            rowsMax={4}
            id="custom-css-input"
            classes={{
            underline: classes.cssUnderline,
          }}
        />
      </FormControl>

        <Button variant="contained" color="default" className={classes.button}>
          Upload
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
      </CardActions>
    </Card>
    );
  }
  
  IconLabelButtons.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(IconLabelButtons);