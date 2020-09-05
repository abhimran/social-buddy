import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';
import { Grid } from '@material-ui/core';

const Home = () => {
    const [posts, setPosts] =useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setPosts(data))
    }, [])

    return (
        <Grid container direction="column">
            <Grid item container>
                <Grid item xs={false} sm={1} md={1}></Grid>
                <Grid item xs={12} sm={10} md={10}>
                    <Grid container spacing={2}>
                        {
                        posts.map(item=> <Posts post={item} key={item.id}></Posts>)
                        }
                    </Grid>
                </Grid>
                <Grid item xs={false} sm={1} md={1}></Grid>
            </Grid>
        </Grid>
        
    );
};

export default Home;