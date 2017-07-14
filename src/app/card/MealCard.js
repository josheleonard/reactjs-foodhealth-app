
import React, { PropTypes } from 'react';
import theme from '../theme/_config.scss';
import Button  from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

import BreakfastCard from './BreakfastCard.js';
import LunchCard from './LunchCard.js';
import DinnerCard from './DinnerCard.js';
import Flipper from './Flipper.js';
class MealCard extends React.Component {
  getInitialState: function() {
    return {
      bFlipped: false,
      lFlipped: false,
      dFlipped: false
    };
  }

  bFlip: function() { this.setState({ bFlipped: !this.state.flipped }); }
  lFlip: function() { this.setState({ lFlipped: !this.state.flipped }); }
  dFlip: function() { this.setState({ dFlipped: !this.state.flipped }); }

  render: function() {
    return (
      <div>
        <Flipper flipped={this.state.bFlipped} orientation="horizontal" />
        <Flipper flipped={this.state.lFlipped} orientation="horizontal" />
        <Flipper flipped={this.state.dFlipped} orientation="horizontal" />
        <button onClick={this.bFlip}>Flip A!</button>
        <button onClick={this.bFlip}>Flip B!</button>
        <button onClick={this.bFlip}>Flip C!</button>
    </div>
  );
  render() {
    return (
      <div className="w3-row">
        <div className="w3-third w3-animate-bottom w3-margin-bottom">
          <div className={"w3-third w3-animate-bottom w3-margin-bottom flipper-container " + this.props.orientation}>
            <div className={"flipper w3-margin-bottom" + (this.props.flipped ? " flipped" : "")}>
              <Front>
                <BreakfastCard />
              </Front>
              <Back>
                <LunchCard />
              </Back>
            </div>
          </div>

        </div>
        <div className="w3-third w3-animate-bottom w3-margin-bottom">
          <LunchCard />
        </div>
        <div className="w3-third w3-animate-bottom w3-margin-bottom">
          <DinnerCard />
        </div>
      </div>
    );
  }
}

export default MealCard;
