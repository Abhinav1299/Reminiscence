import React from 'react';
import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';
import { Container, Grow, Grid } from '@material-ui/core';
// import srcStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/post';
import { useEffect, useState } from 'react';

const Home = () => {

    // const styleClasses = srcStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {                       // after execution of useEffect, our store has post data, and now any component can use it.
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                {/* <Grid container className={styleClasses.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}> */}
                <Grid container  justifyContent='space-between' alignItems='stretch' spacing={3}>

                    <Grid item xs={12} md={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home