import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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

const StockItem = ({stock}) => {
    const classes = useStyles();

    return (
        <ListItem>
            <Card className={classes.root}>
                <div>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {stock.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Current Price: {stock.c}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        High Price: {stock.h}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Low Price: {stock.l}
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                />
            </Card>
        </ListItem>
    );
};

export default function StockList() {
    const stocks = useSelector(state => state.stocks);
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <List className={classes.root}>
                    {_.map(stocks, stock => <StockItem key={stock.name} stock = {stock}/>)}
                </List>
            </Grid>
            <Grid item xs={6}>
                <List className={classes.root}>
                    {_.map(stocks, stock => <StockItem key={stock.name} stock = {stock}/>)}
                </List>
            </Grid>
        </Grid>
    );
}