import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useSelector } from "react-redux";
import _ from 'lodash';

import AppBar from "../components/AppBar"
import BottomNav from "../components/BottomNav"

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    },
    cardRoot: {
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
            <Card className={classes.cardRoot}>
                <div className={classes.details}>
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

const MainPage = () => {
    const classes = useStyles();
    const stocks = useSelector(state => state.stocks)
    
    return (
        <>
            <AppBar/>
            <Container fixed>
                <div className={classes.root}>
                    <div className={classes.mainTitle} >
                        <ListAltIcon/> Stock List
                    </div>
                    <Divider />
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
                </div>
            </Container>
            
            <BottomNav/> 
        </>
    );
};

export default MainPage;
