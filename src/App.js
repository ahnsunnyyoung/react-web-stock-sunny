import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import StockPage from "./pages/StockPage";
import NewsDetailPage from "./pages/NewsDetailPage";

const useStyles = makeStyles((theme) => ({
  app: {
    
  },
}));

function App() {
  const classes = useStyles();
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
