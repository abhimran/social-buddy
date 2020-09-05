import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import PostDetail from '../PostDetail/PostDetail';
import PostComment from '../PostComment/PostComment';

const PostData = () => {
    const {postid} = useParams();
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    
   
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
        .then(res => res.json())
        .then(data=> setPosts(data))
    }, [postid])

    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [postid])

    return (
        <Grid container direction="column">
            <Grid item container>
                <Grid item xs={false} sm={1} md={1}></Grid>
                <Grid item xs={12} sm={10} md={10}>
                    <Grid container spacing={2}>
                        <PostDetail post={posts}></PostDetail>
                    </Grid>
                    <Grid container spacing={2}>
                        {
                            comments.map(comment=><PostComment comment={comment} key={comment.id}></PostComment>)
                        }
                    </Grid>
                </Grid>
                <Grid item xs={false} sm={1} md={1}></Grid>
            </Grid>
        </Grid>
    );
};

export default PostData;