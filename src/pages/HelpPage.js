import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from "../components/AppBar"
import BottomNav from "../components/BottomNav"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7),
    },
}));

const HelpPage = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar/>

            <div className={classes.root}>
                Help
            </div>
            <BottomNav/> 
        </>
    );
};

export default HelpPage;