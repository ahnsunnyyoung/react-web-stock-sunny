import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import { selectCompany } from '../actions';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    card: {
        width: "100%",
        height: "150px",
    },
    detail: {
        width: "45%",
        height: '150px',
        display: 'inline-block',
    },
    graph: {
        width: "55%",
        height: '150px',
        paddingTop: '10px',
        display: 'inline-block',
        position: 'absolute',
    },
    logo: {
        width: 25,
        height: 25,
        marginRight: 1,
    },
}));

function selectPercent(per, diff){
    if(per<0){
        return(
            <ListItemText primary={
                <React.Fragment>
                    <span style={{color:'#D80A0A'}}>
                        <b>{per}%</b>({diff})
                    </span>
                </React.Fragment>
            } />
        );
    }else{
        return(
            <ListItemText primary={
                <React.Fragment>
                    <span style={{color:'#0AA5D8'}}>
                        <b>{per}%</b>({diff})
                    </span>
                </React.Fragment>
            } />
        );
    }
}

export default function StockItem({stock}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <ListItem button onClick={() => dispatch(selectCompany(stock))}>
            <Card className={classes.card}>
                <div className={classes.detail}>
                    <CardContent>
                        <Typography component="h5" variant="h5">
                            <img src={stock.profile.logo} alt={stock.profile.ticker} className={classes.logo}/>
                            {stock.profile.name}
                        </Typography>
                        {selectPercent(stock.percent, stock.diff)}
                        <Typography variant="subtitle1" color="textSecondary">
                            High Price: {stock.h}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Low Price: {stock.l}
                        </Typography>
                    </CardContent>
                </div>
                <div className={classes.graph}>
                    Ravenue Calendar
                    <Sparklines data={stock.earningsCalendar}  height={100} width={300} svgHeight={100} svgWidth={300}>
                        <SparklinesLine color="blue"/>
                        <SparklinesReferenceLine type='mean'/>
                    </Sparklines>
                </div>
            </Card>
        </ListItem>
    );
    
}


