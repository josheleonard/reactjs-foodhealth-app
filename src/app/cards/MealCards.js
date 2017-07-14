
import React, { PropTypes } from 'react';
import theme from '../theme/_config.scss';
import Button  from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Tab, Tabs} from 'react-toolbox/lib/tabs';

import BreakfastCard from './BreakfastCard.js';
import LunchCard from './LunchCard.js';
import DinnerCard from './DinnerCard.js';

class MealCards extends React.Component {

  state = {
    tabIndex: 0
  }

  handleTabChange = (tabIndex) => {
    this.setState({tabIndex});
  };

  render() {
    return (
      <div className="w3-row" style={{minHeight: 800}}>
        <Tabs index={this.state.tabIndex} onChange={this.handleTabChange}>
          <Tab label='Breakfast'>
            <BreakfastCard />
          </Tab>
          <Tab label='Lunch'>
            <LunchCard />
          </Tab>
          <Tab label='Dinner'>
            <BreakfastCard />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default MealCards;
