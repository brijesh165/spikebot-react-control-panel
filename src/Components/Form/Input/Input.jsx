import React from 'react';

// Material UI
import TextField from '@material-ui/core/TextField';

const Input = ({handleChange, label, ...otherprops}) => {
    return (
        <TextField 
            type={otherprops.type}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={otherprops.type}
            label={label}
            name={otherprops.name}
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            {...otherprops}
        />
    )
}

export default Input;