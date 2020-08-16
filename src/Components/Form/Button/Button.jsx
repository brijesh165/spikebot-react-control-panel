import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const CustomButton = ({children, ...otherProps}) => {
    const classes = useStyles();
    
    return (
        <Button 
            type={otherProps.type}
            fullWidth
            variant="contained"
            color={otherProps.color}
            className={classes.submit}  
        >{children}</Button>
    )
}

export default CustomButton;