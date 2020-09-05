import React from 'react';
import Grid from "@material-ui/core/Grid";
import PostCard from '../PostCard/PostCard';

const Posts = (props) => {
    const {title, body, id} = props.post;
    return (
        <Grid item xs={12} sm={6} md={6}>
            <PostCard title={title} body={body} id={id}></PostCard>
        </Grid>
    );
};

export default Posts;