import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import _ from 'lodash';

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import NewsItem from "../components/NewsItem";
import ErrorMessage from "../components/ErrorMessage";
import { loadStock } from '../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '70px',
  },
  title: {
      textAlign: 'center',
      marginTop: 80,
      marginBottom: 15,
      fontWeight: 'bold',
      fontSize: 30
  },
  divider: {
    margin: 20,
},
  gridList: {},
}));


 
export default function NewsPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  dispatch(loadStock('AAPL'))
  dispatch(loadStock('MSFT'))
  dispatch(loadStock('AMZN'))
  const news = useSelector(state => state.news);

  return (
    <>
        <AppBar/>
        <Container fixed>
            <div className={classes.title} >
                <AnnouncementIcon/> Stock News
            </div>
            <Divider/>
            <ErrorMessage/>
        </Container>
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {_.map(news, article => <NewsItem key={article.id} data = {article}/>)}
            </GridList>
        </div>
        <BottomNav/>
    </>
  );
}
