import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// Componentd
import Input from './../Form/Input/Input';
import CustomButton from './../Form/Button/Button';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { signInStart } from '../../Store/Action/user.action';
import { useHistory } from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(18, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    }
}));

const mapState = ({user}) => ({
    currentUser: user.currentUser
});

const SignIn = (props) => {
    const classes = useStyles('light');
    const history = useHistory();
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
        }
    }, [currentUser, history, dispatch]);

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signInStart({email, password}));
    }

    return (
        <Grid container comonent="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} sqaure="true" className={classes.grid}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            name="email"
                            label="Email Address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            name="password"
                            label="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <CustomButton
                            type="submit"
                            color="primary">Sign In</CustomButton>

                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default SignIn;