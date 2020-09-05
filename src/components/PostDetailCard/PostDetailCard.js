import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  cardStyle:{
    backgroundColor: "#ff7043",
    marginTop: "10px",
  },
  titleStyle:{
    color: "#fbe9e7",
    textTransform: "capitalize",
    fontSize: "36px"
  },
  buttonStyle:{
    background: "#fff",
    color: "#444",
    padding: "5px"
  },
  descriptionStyle:{
      fontSize: "20px"
  }
});

const PostDetailCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.cardStyle}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className={classes.titleStyle}>
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.descriptionStyle}>
                {props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
           <CardActions>
            <Button size="small" className={classes.buttonStyle}>
               Comments
            </Button>
          </CardActions>
        </Card>    
    );
};

export default PostDetailCard;