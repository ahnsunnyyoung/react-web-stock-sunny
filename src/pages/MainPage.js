import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useDispatch } from 'react-redux';

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import ErrorMessage from "../components/ErrorMessage";
import StockList from "../components/StockList";
import { loadStock } from '../actions';

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



const MainPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    dispatch(loadStock('AAPL'))
    dispatch(loadStock('MSFT'))
    dispatch(loadStock('AMZN'))
    return (
        <>
            <AppBar/>
            <Container fixed>
                <div className={classes.root}>
                    <div className={classes.title} >
                        <ListAltIcon/> Stock List
                    </div>
                    <Divider />
                    <ErrorMessage/>
                    <StockList/>
                </div>
            </Container>
            
            <BottomNav/> 
        </>
    );
};

export default MainPage;
