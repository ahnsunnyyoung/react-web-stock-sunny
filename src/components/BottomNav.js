import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import HomeIcon from '@material-ui/icons/Home';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Link, useLocation } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';


const theme = createMuiTheme({
    palette: {
      primary: purple,
    },
  });

const useStyles = makeStyles({
    root: {
        background: "#eee",
        position: "fixed",
        bottom: 0,
        width: "100%",
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0
        }
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const location = useLocation();

    const [value, setValue] = React.useState(() => {
        const path = location.pathname;
        const check = path.split('/')[1]
        if (check === "news") return 0;
        if (check === "help") return 2;
        if (check === "article") return 0;
        return 1;
    });

    return (
        
        <ThemeProvider theme={theme}>
            <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
                <BottomNavigationAction 
                    label="News" 
                    icon={<AnnouncementOutlinedIcon />} 
                    component={Link}
                    to="/news"
                />
                <BottomNavigationAction 
                    label="StockSunny" 
                    icon={<HomeIcon />} 
                    component={Link}
                    to="/"
                />
                <BottomNavigationAction 
                    label="Help" 
                    icon={<HelpOutlineIcon />} 
                    component={Link}
                    to="/help"
                />

            </BottomNavigation>
        </ThemeProvider>
    );
}