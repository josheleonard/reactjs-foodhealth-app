//React Stuff
import React, { PropTypes } from 'react';
//Material Toolbox Stuff
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
//styles
import theme from '../theme/_config.scss';
//vars

class LunchCard extends React.Component {
  render() {
    const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to a type specimen book.';
    return (
      <Card className="w3-third w3-animate-bottom w3-margin-bottom"
        style={{flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
        <CardTitle
          avatar="https://placeimg.com/150/150/people"
          title="Avatar style title"
          subtitle="Subtitle here"
        />
        <CardMedia
          aspectRatio="wide"
          image="http://lorempixel.com/800/400/food/"
        />
        <CardTitle
          title="Title goes here"
          subtitle="Subtitle here"
        />
        <CardText>
          {dummyText}
        </CardText>
        <CardActions theme={theme}>
          <Button label="Action 1" />
          <Button label="Action 2" />
        </CardActions>
      </Card>
    );
  }
}

export default LunchCard;
