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
import CallIcon from '@material-ui/icons/Call';

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
    logo: {
        width: 50,
        height: 50,
        marginRight: 2,
    },
    th: {
        fontWeight: 'bold',
        color: 'rgb(180, 121, 175)',
    }
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
                <img src={profile.logo} alt={profile.ticker} className={classes.logo}/> 
                <div className={classes.ticker}>{profile.ticker}</div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            <TableRow key="countryCurrncy">
                                <TableCell className={classes.th} component="th" scope="row">
                                    Country
                                </TableCell>
                                <TableCell>
                                    {profile.country}
                                </TableCell>
                                <TableCell className={classes.th} component="th" scope="row">
                                    Currency
                                </TableCell>
                                <TableCell>
                                    {profile.currency}
                                </TableCell>
                            </TableRow>
                            <TableRow key="exchanges">
                                <TableCell className={classes.th} colSpan={2} component="th" scope="row">
                                    Exchange
                                </TableCell>
                                <TableCell colSpan={2}>
                                    {profile.exchange}
                                </TableCell>
                            </TableRow>
                            <TableRow key="ipo_date">
                                <TableCell className={classes.th} colSpan={2} component="th" scope="row">
                                    IPO date.
                                </TableCell>
                                <TableCell colSpan={2}>
                                </TableCell>
                            </TableRow>
                            <TableRow key="phone" >
                                <TableCell className={classes.th} colSpan={2} component="th" scope="row">
                                    <CallIcon/>
                                </TableCell>
                                <TableCell colSpan={2} component="th" scope="row">
                                    {profile.phone}
                                </TableCell>
                            </TableRow>
                            <TableRow key="url" >
                                <TableCell colSpan={4} component="th" scope="row">
                                    {profile.weburl}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>
    );
};

export default DetailItem;
