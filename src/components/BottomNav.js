import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import HomeIcon from '@material-ui/icons/Home';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Link, useLocation } from 'react-router-dom';

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
        if (path === "/news") return 0;
        if (path === "/help") return 2;
        return 1;
    });

    return (
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
    );
}