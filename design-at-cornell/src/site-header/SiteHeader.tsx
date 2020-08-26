import React, { Component } from 'react';
import styles from './SiteHeader.module.css';
import { Emitters } from '../event-emitter/constant-emitters';

type SiteHeaderState = {
  navToggleChecked: boolean
};

class SiteHeader extends Component<any, SiteHeaderState> {

  constructor(props: any) {
    super(props);
    this.state = {
      navToggleChecked: false
    };
  }

  onToggleNav() {
    Emitters.navOpenEmitter.emit(!this.state.navToggleChecked);
    this.setState({
      navToggleChecked: !this.state.navToggleChecked
    });
  }

  render() {
    return (
      <div className={styles.SiteHeader} data-testid="SiteHeader">
        <div className={styles.content}>
          <div className={styles.toggleNav + " ui toggle checkbox"}>
            <input type="checkbox" name="open close nav"
              onClick={() => this.onToggleNav()} />
            <label></label>
          </div>
          <h1 className={styles.title} style={{ color: "black" }}>
            Design <span style={{ color: "red" }}>@</span> Cornell
        </h1>
        </div>
      </div>
    )
  }

}

export default SiteHeader;
