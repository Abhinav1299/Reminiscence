import React, { useEffect } from 'react';
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

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

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
                            <Posts/>
                        </Grid>

                        <Grid item xs = {12} sm = {4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default App;