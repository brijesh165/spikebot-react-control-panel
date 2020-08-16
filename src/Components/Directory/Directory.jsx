import React from 'react';

// Material UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Directory = (props) => {
    return (
        <Container fixed>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                SpikeBot
            </Typography>
        </Container>
    )
}

export default Directory;