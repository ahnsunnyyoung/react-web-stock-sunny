import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector} from 'react-redux';
import GridList from '@material-ui/core/GridList';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import NewsItem from "../components/NewsItem";
import ErrorMessage from "../components/ErrorMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '70px',
  },
  title: {
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
},
  divider: {
    margin: 20,
},
  gridList: {},
}));


 
export default function NewsPage() {
  const classes = useStyles();
  const Cnews = useSelector(state => state.news.company);
  const Gnews = useSelector(state => state.news.general);
  const Fnews = useSelector(state => state.news.forex);

  return (
    <>
        <AppBar/>
        <div className={classes.root}>
          <ErrorMessage/>
          <Grid container spacing={1}>
              <Grid item xs={6}>
                <div className={classes.subtitle} >
                  <AnnouncementIcon/> Company News
                </div>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {_.map(Cnews, article => <NewsItem key={article.id} data = {article}/>)}
                </GridList>
              </Grid>
              <Grid item xs={6}>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <div className={classes.subtitle} >
                        <AnnouncementIcon/> General News
                      </div>
                      <GridList cellHeight={160} className={classes.gridList} cols={3}>
                          {_.map(Gnews, article => <NewsItem key={article.id} data = {article}/>)}
                      </GridList>
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.subtitle} >
                        <AnnouncementIcon/> Forex News
                      </div>
                      <GridList cellHeight={160} className={classes.gridList} cols={3}>
                          {_.map(Fnews, article => <NewsItem key={article.id} data = {article}/>)}
                      </GridList>
                    </Grid>
                  </Grid>
              </Grid>
          </Grid>
        </div>
        <BottomNav/>
    </>
  );
}
