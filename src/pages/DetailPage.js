import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 80,
    },
    graphWrapper: {
        marginTop: theme.spacing(3),
        width: "100%",
        marginBottom: theme.spacing(7),
        height: '400px',
    },
    ticker: {
        margin: `${theme.spacing(1)}px 0`,
        fontWeight: "bold",
        color: "#369"
    },
}));

const DetailPage = () => {
    const classes = useStyles();
    const {  symbol } = useParams();
    const stocks = useSelector(state => state.stocks);
    var profile = "";
    stocks.forEach(stock => {
        if(stock.ticker===symbol){
            profile = stock.profile;
        }
    });
    console.log("hi",profile)
    return (
        <>
            <AppBar/>
            <Container maxWidth="sm">
                <div className={classes.root}>
                    <h1>{profile.name}</h1>
                    <div className="ticker">{symbol}</div>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow key="exchanges">
                                    <TableCell component="th" scope="row">
                                        Exchange
                                    </TableCell>
                                    <TableCell>
                                        {profile.exchange}
                                    </TableCell>
                                </TableRow>
                                <TableRow key="ipo_date">
                                    <TableCell component="th" scope="row">
                                        IPO date.
                                    </TableCell>
                                    <TableCell>
                                        {profile.ipo}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className={classes.graphWrapper}>
                    graph
                </div>
            </Container>
            <BottomNav/> 
        </>
    );
};

export default DetailPage;
