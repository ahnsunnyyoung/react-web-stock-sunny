import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';
import { useDispatch } from 'react-redux';

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import ErrorMessage from "../components/ErrorMessage";
import { loadForex } from '../actions';

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
  const dispatch = useDispatch();
  dispatch(loadForex())
  
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
                
            </Container>
        </ThemeProvider>
        <BottomNav/>
    </>
  );
}
