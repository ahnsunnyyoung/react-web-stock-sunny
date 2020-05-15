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
        marginBottom: 80,
    },
    imgWrapper: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
        width: "100%",
    },
    img: {
        width: '100%',
        height: '100%'
    },
}));

const NewsDetailPage = () => {
    const classes = useStyles();
    const {  id } = useParams();
    const newsdata = useSelector(state => state.news);
    var news;
    var date;
    if(news = newsdata.company[id]){
        news = newsdata.company[id];
        date = new Date(news.datetime*1000);
    }else if(news = newsdata.general[id]){
        news = newsdata.general[id];
        date = new Date(news.datetime*1000);
    }else if(news = newsdata.forex[id]){
        news = newsdata.forex[id];
        date = new Date(news.datetime*1000);
    }
    return (
        <>
            <AppBar/>
            <Container maxWidth="sm">
                <div className={classes.root}>
                    <h1>{news.headline}</h1>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow key="date">
                                    <TableCell component="th" scope="row">
                                        date.
                                    </TableCell>
                                    <TableCell>
                                        {(date.getMonth()+1) + '월 '+ date.getDate() + '일'}
                                    </TableCell>
                                </TableRow>
                                <TableRow key="img">
                                    <TableCell colSpan={2}>
                                    <div className={classes.imgWrapper}>
                                        <img src={news.image} alt={news.headline} className={classes.img}/>
                                    </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow key="summary">
                                    <TableCell>
                                        Summary
                                    </TableCell>
                                    <TableCell>
                                        {news.summary}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                
            </Container>
            <BottomNav/> 
        </>
    );
};

export default NewsDetailPage;
