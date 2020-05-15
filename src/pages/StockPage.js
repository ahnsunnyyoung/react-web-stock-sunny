import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';
import Grid from '@material-ui/core/Grid';

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import CandleChart from "../components/CandleChart";
import BarChart from "../components/BarChart";
import ErrorMessage from "../components/ErrorMessage";

const theme = createMuiTheme({
    palette: {
      primary: purple,
    },
  });

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 30
},
}));


export default function StockPage() {
  const classes = useStyles();
  
  return (
    <>
        <AppBar/>
        
        <ThemeProvider theme={theme}>
            <Container fixed>
                <div className={classes.title} >
                    <ShowChartIcon/> Stock Data
                </div>
                <Divider/>
                <ErrorMessage/>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <CandleChart/>
                      </Grid>
                      <Grid item xs={12}>
                        <CandleChart/>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <BarChart/>
                  </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
        <BottomNav/>
    </>
  );
}
