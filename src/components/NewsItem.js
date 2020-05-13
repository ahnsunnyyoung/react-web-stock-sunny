import React from 'react';
import { Link } from 'react-router-dom';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const StyledImg = styled('img')`
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
        return(
            <StyledGridListTile 
            component = {Link}
            to={`article/${news.id}`}
            key={news.id}>
                <StyledImg src={news.image} alt={news.headline} />
                <GridListTileBar
                title={news.headline}
                subtitle={<span>Category: {news.category}</span>}
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


