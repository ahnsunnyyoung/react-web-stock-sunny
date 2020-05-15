import React from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 10,
        display: 'block',
    },
    forex: {
        fontWeight: 'bold',
        color: 'rgb(180, 121, 175)',
    },
}));


export default function ExchangeList() {
    const forex = useSelector(state => state.forex);
    const classes = useStyles();
    console.log(forex['USD'])
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell>EUR/USD {forex['USD']}</TableCell>
                        <TableCell className={classes.forex}>{forex['USD']}</TableCell>
                        <TableCell>EUR/USD {forex['USD']}</TableCell>
                        <TableCell className={classes.forex}>{forex['USD']}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}