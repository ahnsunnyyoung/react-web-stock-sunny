import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import StockPage from "./pages/StockPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import { loadStock, loadForex, loadGeneralNews, loadForexNews, loadCandle, loadCovid } from './actions';

const useStyles = makeStyles((theme) => ({
  app: {
    
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loadStock('AAPL'))
    dispatch(loadStock('MSFT'))
    dispatch(loadStock('AMZN'))
    dispatch(loadForex())
    dispatch(loadGeneralNews())
    dispatch(loadForexNews())
    dispatch(loadCandle())
    dispatch(loadCovid())
  })
  return (
    <Router>
      <div className={classes.app}>
        <Switch>
          <Route path="/news">
            <NewsPage />
          </Route>
          <Route path="/stock">
            <StockPage />
          </Route>
          <Route path="/article/:id">
            <NewsDetailPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
