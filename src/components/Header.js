import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default () =>
    <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                FHIR UI Coding Exercise
            </Typography>
        </Toolbar>
    </AppBar>