import React from 'react';
import {
  Icon,
  Menu,
  Sidebar,
} from 'semantic-ui-react';
import {
  Link
} from 'react-router-dom';
import { Emitters } from '../event-emitter/constant-emitters';

type SideNavState = {
  isNavOpen: boolean
}

class SideNav extends React.Component<any, SideNavState> {

  constructor(props: any) {
    super(props);
    this.state = {
      isNavOpen: false
    }
    Emitters.navOpenEmitter.subscribe((event) => {
      this.setState({
        isNavOpen: event
      });
    })
  }

  render() {
    return (
      <Sidebar
        as={Menu}
        animation="uncover"
        direction="left"
        icon='labeled'
        inverted
        vertical
        visible={this.state.isNavOpen}
        width='thin'
      >
        <Link to="/">
          <Menu.Item>
            <Icon name='home' />
          Home
        </Menu.Item>
        </Link>
        <Link to="/about">
          <Menu.Item>
            <Icon name='info' />
        About
      </Menu.Item>
        </Link>
        <Link to="/contact">
          <Menu.Item>
            <Icon name='mail' />
        Contact Us
      </Menu.Item>
        </Link>
      </Sidebar >
    )
  }
}

export default SideNav;
