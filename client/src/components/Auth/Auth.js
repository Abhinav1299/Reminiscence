import React, { useState } from 'react';
import authStyles from './styles';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input'
import { GoogleLogin } from 'react-google-login';
import Icon from './icon';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(false)
    const styleClasses = authStyles();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const handleShowPassword = () => {
        setShowPassword((prevPassword) => !prevPassword);
    }

    const switchMode = () => {
        setIsSignUp((prevVal) => !prevVal);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', payload: { result, token } })
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = (err) => {
        console.log(err);
        console.log("Google Sign In was unsuccessful. Please try again later.")
    }

    return (
        <Container component="main" maxWidth='xs'>
            <Paper className={styleClasses.paper} elevation={3}>

                <Avatar className={styleClasses.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>

                <form className={styleClasses.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}

                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />

                        {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}

                    </Grid>

                    <Button type="submit" fullWidth variant="contained" color='primary' className={styleClasses.submit} >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </Button>



                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT}
                        render={(renderProps) => (
                            <Button
                                className={styleClasses.googleButton}
                                color='primary'
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant='contained'
                            >
                                Google Sign In
                            </Button>
                        )}

                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    />


                    <Grid container justifyContent='flex-end' >
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </Paper>
        </Container>
    )
}

export default Auth