import React from 'react';
import NavStyles from './styles';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import memories from '../../images/memories.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const styleClasses = NavStyles();
    const user = null;

    return (
        <AppBar className={styleClasses.appBar} position='static' color='inherit'>

            <div className={styleClasses.brandContainer}>

                {/* <Typography component={Link} to="/" className={`${styleClasses.heading} ${styleClasses.defHeading}`} align='center'> Reminiscence </Typography> */}
                <Typography component={Link} to="/" className={styleClasses.heading} variant="h2" align='center'> Reminiscence </Typography>

                <img className={styleClasses.image} src={memories} alt='memories' height='60' />

            </div>

            <Toolbar className={styleClasses.Toolbar}>
                {user ? (
                    <div className={styleClasses.profile}>
                        <Avatar className={styleClasses.purple} alt={user.result.name} src={user.results.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={styleClasses.userName} variant="h6">{user.result.name} </Typography>
                        <Button variant="contained" className={styleClasses.logout} color="secondary">Logout</Button>
                    </div>

                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">SignIn</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
