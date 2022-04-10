import React, { useState, useEffect } from 'react';
import NavStyles from './styles';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import memories from '../../images/memories.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {

    const styleClasses = NavStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    let userT = useSelector(state => state.auth.authData);      // checks the redux store
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    console.log(userT);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        setUser(null);
        userT = null;
    }

    useEffect(() => {
        const token = user?.token;

        // JWT auth

        setUser(JSON.parse(localStorage.getItem('profile')));

    }, [userT, location]);

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
                        <Avatar className={styleClasses.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={styleClasses.userName} variant="h6">{user.result.name} </Typography>
                        <Button variant="contained" className={styleClasses.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>

                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">SignIn</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
