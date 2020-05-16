import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector} from 'react-redux';
import GridList from '@material-ui/core/GridList';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

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
chipRoot: {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: theme.spacing(0.5),
  margin: 0,
},
chip: {
  margin: theme.spacing(0.5),
},
}));

 
export default function NewsPage() {
  const classes = useStyles();
  const Cnews = useSelector(state => state.news.company);
  const Gnews = useSelector(state => state.news.general);
  const Fnews = useSelector(state => state.news.forex);
  const [chipData] = React.useState([
    { key: 0, label: 'APPLE' },
    { key: 1, label: 'MICROSOFT' },
    { key: 2, label: 'AMAZON' },
  ]);


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
                <div component="ul" className={classes.chipRoot}>
                  {chipData.map((data) => {
                    let icon;

                    return (
                      <li key={data.key}>
                        <Chip
                          icon={icon}
                          label={data.label}
                          className={classes.chip}
                        />
                      </li>
                    );
                  })}
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
