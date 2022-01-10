import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import srcStyles from './styles'
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/post';

const App = () => {

    const styleClasses = srcStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {                       // after execution of useEffect, our store has post data, and now any component can use it.
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth = "lg">

            <AppBar className = {styleClasses.appBar} position='static' color='inherit'>

                <Typography className = {styleClasses.heading} variant='h2' align='center'> Reminiscence </Typography> 

                <img className={styleClasses.image} src={memories} alt='memories' height='60' />

            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>

                        <Grid item xs = {12} sm = {7}>
                            <Posts setCurrentId = {setCurrentId}/>
                        </Grid>

                        <Grid item xs = {12} sm = {4}>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default App;