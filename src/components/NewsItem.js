import React from 'react';
import { Link } from 'react-router-dom';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const StyledDiv = styled('div')`
  width: 280px;
  height: 180px;
`;

const StyledGridListTile = styled(GridListTile)`
  padding: 0 20px;
  margin: 8px;
`;

const StyledIcon = styled(IconButton)`
    color: rgba(255, 255, 255, 0.54);
`;

export default class NewsItem extends React.Component {



    render() {
        const news = this.props.data;
        var date = new Date(news.datetime*1000);
        return(
            <StyledGridListTile 
            component = {Link}
            to={`article/${news.id}`}
            key={news.id}>
                <StyledDiv>
                    <img src={news.image} alt={news.headline} />
                </StyledDiv>
                <GridListTileBar
                title={news.headline}
                subtitle={<span>date: {(date.getMonth()+1) + '월 '+ date.getDate() + '일'}</span>}
                actionIcon={
                    <StyledIcon aria-label={`info about ${news.related}`}>
                    <InfoIcon />
                    </StyledIcon>
                }
                />
            </StyledGridListTile>
        );
    }
}


