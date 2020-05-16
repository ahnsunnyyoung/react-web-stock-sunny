import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import{ useDispatch, useSelector } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';

import { loadStock } from '../actions';

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  exchange: {
    borderRadius: 15,
    backgroundColor: 'rgb(104, 36, 98)',
    padding: 10,
  },
  forexTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  forexSTitle: {
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 15,
  },
  forex: {
    fontWeight: 'bold',
    marginLeft: 30,
    marginLRight: 20,
    fontSize: 20,
  },
}));

function refreshPage() {
  window.location.reload(false);
}

export default function PrimarySearchAppBar() {
  const [name, setName] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)
  const forex = useSelector(state => state.forex);

  return (
    <div className={classes.grow}>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Stock-Sunny
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={name}
                  onChange={(event) => {
                      setName(event.target.value);
                  }}
                  onKeyDown={(event)=>{
                      if (event.keyCode === 13){
                          if (!loading){
                              dispatch(loadStock(name))
                              setName("");
                          }
                          event.preventDefault();
                          return false;
                      }
                  }}
              />
            </div>
            <div className={classes.exchange}>
              <span className={classes.forexTitle}>EUR/USD</span>
              <span className={classes.forex}>{forex['USD']}</span>
              <span className={classes.forexSTitle}>EUR/JPY</span>
              <span className={classes.forex}>{forex['JPY']}</span>
              <span className={classes.forexSTitle}>EUR/CNY</span>
              <span className={classes.forex}>{forex['CNY']}</span>
            </div>
            <div className={classes.grow} />
            <IconButton color="inherit" aria-label="refresh" onClick={refreshPage}>
              <RefreshIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}