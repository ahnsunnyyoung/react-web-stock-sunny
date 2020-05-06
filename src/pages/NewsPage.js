import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from "../components/AppBar"
import BottomNav from "../components/BottomNav"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7),
    },
}));

const NewsPage = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar/>

            <div className={classes.root}>
                News
            </div>
            <BottomNav/> 
        </>
    );
};

export default NewsPage;