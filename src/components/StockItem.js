/* global google */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import { styled } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const StyledCardContent = styled(CardContent) ({
    width: "100%",
    height: "100%",
  });

export default class StockItem extends React.Component {
    constructor(props){
        super(props)
    }


    render() {
        const stock = this.props.data;
        return(
            <ListItem
            button = {true}
            component = {Link}
            to={`profile/${stock.ticker}`}
        >
                <Card>
                    <div>
                        <StyledCardContent>
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
                        </StyledCardContent>
                    </div>
                    <CardMedia
                        image="/static/images/cards/live-from-space.jpg"
                        title="Live from space album cover"
                    />
                </Card>
            </ListItem>
        );
    }
}


