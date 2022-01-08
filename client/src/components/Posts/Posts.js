import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import postsStyles from './styles';

const Posts = () => {

    const posts = useSelector(state => state.posts);
    const classes = postsStyles();

    console.log(posts);

    return (
        <div>
            <h1> Posts </h1>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts;