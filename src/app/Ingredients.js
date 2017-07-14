//React Stuff
import React, {PropTypes} from 'react';
import Component from 'react';

class Flipper extends React.Component {
  render() {
    return (
      <ListItem
        avatar='http://67.media.tumblr.com/avatar_bfee0d75c453_128.png'
        caption='Pizza'
        legend="High: Fat | Low: Carbs"
        rightIcon={(
          <IconMenu icon='more_vert' position='topRight' menuRipple>
            <MenuItem value='download' icon='get_app' caption='Download' />
            <MenuItem value='help' icon='favorite' caption='Favorite' />
            <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
            <MenuDivider />
            <MenuItem value='signout' icon='delete' caption='Delete' disabled />
          </IconMenu>
        )}/>
    );
  }
}

export default Flipper;
