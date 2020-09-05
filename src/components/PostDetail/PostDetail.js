import React from 'react';
import Grid from "@material-ui/core/Grid";
import PostDetailCard from '../PostDetailCard/PostDetailCard';
import { Link } from "react-router-dom"
import { Button } from '@material-ui/core';



const PostDetail = (props) => {
    const {title, body, id} = props.post;
    return (
        <Grid item xs={12} sm={12} md={12}>
            <Link to="/home" style={{textDecoration:'none'}}>
                <Button variant="contained" color="secondary" style={{marginTop:'10px'}}>
                    Back To Home
                </Button>
            </Link>
            <PostDetailCard title={title} body={body} id={id}></PostDetailCard>
        </Grid>
    );
};

export default PostDetail;