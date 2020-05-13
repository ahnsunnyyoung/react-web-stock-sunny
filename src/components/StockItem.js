import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const StyledCard = styled(Card) ({
    width: "100%",
    height: "200px",
  });

const DetailDiv = styled('div') ({
    width: "35%",
    height: '200px',
    display: 'inline-block',
});

const GraphDiv = styled('div') ({
    width: "60%",
    height: '200px',
    display: 'inline-block',
});

export default class StockItem extends React.Component {
    render() {
        const stock = this.props.data;
        return(
            <ListItem
            button = {true}
            component = {Link}
            to={`profile/${stock.ticker}`}
        >
                <StyledCard>
                    <DetailDiv>
                        <CardContent>
                            <Typography component="h5" variant="h5">
                                {stock.profile.name}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Current Price: {stock.c}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                High Price: {stock.h}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Low Price: {stock.l}
                            </Typography>
                        </CardContent>
                    </DetailDiv>
                    <GraphDiv>
                        Graph
                    </GraphDiv>
                </StyledCard>
            </ListItem>
        );
    }
}


