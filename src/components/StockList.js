import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

import StockItem from './StockItem';
import DetailItem from './DetailItem';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    list: {
        display: 'inline-block',
        width: '50%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
          },
    },
    detail: {
        display: 'inline-block',
        width: '50%',
        [theme.breakpoints.down('md')]: {
            display:'none',
        },
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
        <div className={classes.root}>
            <div className={classes.list}>
                <List>
                    {_.map(stocks, stock => <StockItem key={stock.ticker} stock = {stock} />)}
                </List>
            </div>
            <div className={classes.detail}>
                <List>
                    <DetailItem/>
                </List>
            </div>
        </div>
    );
}