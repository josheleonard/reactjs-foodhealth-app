//React Stuff
import React, {PropTypes} from 'react';
import Component from 'react';
//React Material Toolbox Stuff
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import Button from 'react-toolbox/lib/button';
import IconButton from 'react-toolbox/lib/button';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';


import FontIcon from 'react-toolbox/lib/font_icon';

import MediaQuery from 'react-responsive';

//CUSTOM
//themes
import theme from '../theme/BlueAppBar.scss';
//components
import MealCards from '../cards/MealCards.js'; //custom cards for homepage

const AppBarNav = () => (
  <Navigation type="horizontal" style={{justifyContent: 'space-between'}}>
    <Link href="#" label="Inbox" leftIcon="inbox" />
    <Link href="#" active label="Profile" icon="person" />
  </Navigation>
);


class AppLayout extends React.Component {
  state = {
      drawerActive: false,
      drawerPinned: false,
      sidebarPinned: true
  };

    toggleDrawerActive = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
    };

    toggleDrawerPinned = () => {
        this.setState({ drawerPinned: !this.state.drawerPinned });
    };

    toggleSidebar = () => {
        this.setState({ sidebarPinned: !this.state.sidebarPinned });
    };

    render() {

        return (
          <Layout layout="LayoutToolbox">
          <NavDrawer
            active={this.state.drawerActive}
            pinned={this.state.drawerPinned} permanentAt='xxxl'
            onOverlayClick={ this.toggleDrawerActive } >
              <Navigation type='vertical'>
                  <List selectable ripple>
                    <ListSubHeader caption='Main Menu' />
                    <ListDivider />
                    <ListItem caption='Close'   leftIcon='inbox'  onClick={ this.toggleDrawerActive } />
                    <ListItem caption='Inbox'   leftIcon='inbox'  onClick={ this.toggleDrawerActive } />
                    <ListItem caption='Profile' leftIcon='person' onClick={ this.toggleDrawerActive } />
                    <ListItem caption='Contact the publisher: Josh Leonard' leftIcon='send' />
                  </List>
              </Navigation>
          </NavDrawer>

          <Panel panel>
            <AppBar
              title='React.js Health Tracker'
              leftIcon='menu'
              onLeftIconClick={this.toggleDrawerActive}
              rightIcon='search'
              onRightIconClick={this.toggleSidebar} >
              <Navigation orientation="horizontal">
                <IconButton
                  icon='menu'
                  onClick={this.toggleDrawerActive}
                  theme={{float:'left'}}
                />

              <Button style={{color:'white',
              flex:1}}>
                React Health App
              </Button>

                <IconButton
                  icon='search'
                  onClick={this.toggleSidebar}
                  theme={{float:'right'}}

                />
              </Navigation>


            </AppBar>

            <MealCards />

          </Panel>

          <Sidebar pinned={ this.state.sidebarPinned }  width={ 5 }>
                  <div>
                    <IconButton icon='close' onClick={ this.toggleSidebar }/>
                    <p>Supplemental content goes here.</p>
                  </div>
          </Sidebar>
          </Layout>
        );
    };
}

export default AppLayout;
