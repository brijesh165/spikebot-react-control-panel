import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Actions
import {signOutUserStart} from './../../Store/Action/user.action';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: "white",
        fontWeight: 600,
        textTransform: "uppercase",
        textDecoration: "none"
    }
}));

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})


const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart());
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        SpikeBot
                    </Typography>
                    {currentUser && (
                        <div>
                            <Button color="inherit">
                                <Link to="/" className={classes.link}>Home</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="" className={classes.link}><span onClick={() => signOut()}>Logout</span></Link>
                            </Button>
                        </div>
                    )}

                    {!currentUser && (
                        <div>
                            <Button color="inherit">
                                <Link to="/" className={classes.link}>Home</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/login" className={classes.link}>Login</Link>
                            </Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;