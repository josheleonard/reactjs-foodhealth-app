//React Stuff
import React, { PropTypes, Component } from 'react';
//Material Toolbox Stuff
import {Tab, Tabs} from 'react-toolbox/lib/tabs';
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';

//styles
import theme from '../theme/_config.scss';

//custom
import IngredientListItem from '../IngredientListItem.js';
//vars

class BreakfastCard extends React.Component {
  state = {
    tabIndex: 0
  }

  handleTabChange = (tabIndex) => {
    this.setState({tabIndex});
  };

  render() {
    return (
      <Card className="w3-third w3-animate-bottom w3-margin-bottom"
        style={{flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
        <CardTitle
          avatar="https://placeimg.com/150/150/people"
          title="Avatar style title"
          subtitle="Subtitle here"
        />
      <div className="w3-row">
        <div className="w3-half">
          <CardMedia
            aspectRatio="wide"
            image="http://lorempixel.com/1000/500/food/"
          />
          <CardTitle
            title="Title goes here"
            subtitle="Subtitle here"
          />
        </div>

        <CardText className="w3-half" >
            <Tabs index={this.state.tabIndex} onChange={this.handleTabChange} inverse>

              <Tab label='Overview'>
                HIHI
              </Tab>

              <Tab label='Nutrition'>
                  xcvdxvd
              </Tab>

              <Tab label='Ingredients'>
                <List selectable ripple>
                  <ListSubHeader caption='Current Ingredients' />

                <IngredientListItem /><IngredientListItem />
                <IngredientListItem /><IngredientListItem />

                  <ListDivider />
                  <ListItem caption='Add Ingredient' leftIcon='add' />
                  <ListItem caption='Remove all Ingredients' leftIcon='delete' />
                </List>
              </Tab>

            </Tabs>
          </CardText>
        </div>

        <CardActions theme={theme}>
        </CardActions>
      </Card>

    );
  };
}

export default BreakfastCard;
