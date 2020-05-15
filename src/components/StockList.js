import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import StockItem from './StockItem';
import DetailItem from './DetailItem';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
    },
    cover: {
        width: 151,
    },
    content: {
        flex: '1 0 auto',
    },
    mainTitle: {
        marginTop: 80,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 30
    },
}));


export default function StockList() {
    const stocks = useSelector(state => state.stocks);
    const classes = useStyles();
    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <List className={classes.root}>
                    {_.map(stocks, stock => <StockItem key={stock.ticker} stock = {stock} />)}
                </List>
            </Grid>
            <Grid item xs={6}>
                <List className={classes.root}>
                    <DetailItem/>
                </List>
            </Grid>
        </Grid>
    );
}