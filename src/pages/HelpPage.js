import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import ErrorMessage from "../components/ErrorMessage";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        marginBottom: 80,
    },
    title: {
        marginTop: 80,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 30
    },
}));



const HelpPage = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar/>
            <Container fixed>
                <div className={classes.root}>
                    <div className={classes.title} >
                        <HelpOutlineIcon/> Help
                    </div>
                    <Divider />
                    <ErrorMessage/>
                </div>
            </Container>
            
            <BottomNav/> 
        </>
    );
};

export default HelpPage;
