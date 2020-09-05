import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  cardStyle:{
    height: "250px",
    backgroundColor: "#ff7043",
    marginTop: "10px",
  },
  titleStyle:{
    color: "#fbe9e7",
    textTransform: "capitalize",
    fontSize: "26px"
  },
  buttonStyle:{
    background: "#fff",
    color: "#444",
    padding: "5px"
  }
});

const PostCard = (props) => {
    const classes = useStyles();
    return (
      <Card className={classes.cardStyle}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" >
                <Link to={"/post/"+props.id} className={classes.titleStyle}>
                {props.title}
                </Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={"/post/"+props.id} style={{textDecoration:'none'}}>
            <Button size="small" className={classes.buttonStyle}>
                See Details
            </Button>
          </Link>
          </CardActions>
      </Card>
    );
};

export default PostCard;