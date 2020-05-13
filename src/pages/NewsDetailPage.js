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
        marginBottom: theme.spacing(7),
    },
    imgWrapper: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
        width: "100%",
    },
    ticker: {
        margin: `${theme.spacing(1)}px 0`,
        fontWeight: "bold",
        color: "#369"
    },
}));

const NewsDetailPage = () => {
    const classes = useStyles();
    const {  id } = useParams();
    const newsdata = useSelector(state => state.news);
    var news = "";
    newsdata.forEach(article => {
        if(article.id==id){
            news = article;
        }
    });
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
                                        {news.datetime}
                                    </TableCell>
                                </TableRow>
                                <TableRow key="img">
                                    <TableCell colSpan={2}>
                                    <div className={classes.imgWrapper}>
                                        <img src={news.image} alt={news.headline} />
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
