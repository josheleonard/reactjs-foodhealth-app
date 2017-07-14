//React Stuff
import React, {PropTypes} from 'react';
import Component from 'react';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';


class IngredientListItem extends React.Component {
  render() {
    return (
      <ListItem
        avatar='http://67.media.tumblr.com/avatar_bfee0d75c453_128.png'
        caption='Pizza'
        legend="High: Fat | Low: Carbs"
        rightIcon={(
          <IconMenu icon='more_vert' position='topRight' menuRipple>
            <MenuItem value='settings' icon='open_in_browser' caption='Add to a Meal' />
            <MenuItem value='download' icon='get_app' caption='Download Recipe' />
            <MenuItem value='help' icon='favorite' caption='Favorite' />

            <MenuDivider />
            <MenuItem value='signout' icon='delete' caption='Delete' disabled />
          </IconMenu>
        )}/>
    );
  }
}

export default IngredientListItem;
