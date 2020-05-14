import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    graphWrapper: {
        marginTop: theme.spacing(3),
        width: "100%",
        marginBottom: theme.spacing(7),
        height: '400px',
    },
    title: {
        marginBottom: '10px',
        fontSize: '30px',
        fontWeight: "bold",
    },
    ticker: {
        marginBottom: '10px',
        color: 'rgb(180, 121, 175)',
    },
}));

function DetailItem() {
    const classes = useStyles();
    const aapl = useSelector(state => state.stocks['AAPL']);
    const company = useSelector(state => state.selected);
    var stock = undefined;
    var profile = undefined;
    if(!company){
        if(!aapl){
            return(
                <Alert severity="warning">로딩 중입니다...</Alert>
            )
        }else{
            stock = aapl;
            profile = stock.profile;
        }
        
    }else{
        stock = company;
        profile = stock.profile;
    }
    return (
        <Container maxWidth="sm">
            <div className={classes.root}>
                <div className={classes.title}>{profile.name}</div>
                <div className={classes.ticker}>{profile.ticker}</div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            <TableRow key="exchanges">
                                <TableCell component="th" scope="row">
                                    Exchange
                                </TableCell>
                                <TableCell>
                                    {profile.exchange}
                                </TableCell>
                            </TableRow>
                            <TableRow key="ipo_date">
                                <TableCell component="th" scope="row">
                                    IPO date.
                                </TableCell>
                                <TableCell>
                                    {profile.ipo}
                                </TableCell>
                            </TableRow>
                            <TableRow key="ipo_date">
                                <TableCell component="th" scope="row">
                                    IPO date.
                                </TableCell>
                                <TableCell>
                                    {profile.ipo}
                                </TableCell>
                            </TableRow>
                            <TableRow key="url" >
                                <TableCell colSpan={2} component="th" scope="row">
                                    {profile.weburl}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={classes.graph}>
                    <Sparklines data={stock.earningsCalendar}  height={100} width={300} svgHeight={100} svgWidth={300}>
                        <SparklinesLine color="blue"/>
                        <SparklinesReferenceLine type='mean'/>
                    </Sparklines>
                </div>
        </Container>
    );
};

export default DetailItem;
