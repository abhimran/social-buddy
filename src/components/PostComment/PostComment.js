import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

 

const useStyles = makeStyles({
  cardStyle:{
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



const PostComment = (props) => {
    const {email, body} = props.comment;
    const classes = useStyles();
    const number = Math.floor(Math.random() * 99) + 1;
    const userImg = `https://randomuser.me/api/portraits/thumb/men/${number}.jpg`
    
    return (
         <List>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={userImg} />
                </ListItemAvatar>
                <ListItemText
                primary={email}
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                    </Typography>
                    {body}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
};

export default PostComment;