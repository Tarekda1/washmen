import React from 'react';
import Typography from '@mui/material/Typography';

const Header = (props) => {
    return (
        <Typography component="h1" variant="h4" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
}

export default Header