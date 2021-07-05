import React, { Component } from 'react';
import styles from './HomePage.module.css';
import HomeContent from './HomeContent';
import Menu from './Menu';

export default class HomePage extends Component {

  // Component state
  state = {
    menuShowed: false
  }

  onBurgerClick = () => {
    this.setState(({menuShowed}) => {
      return {
        menuShowed: !menuShowed,
      }
    });
  }

  // Render component
  render() {
    return (
      <div className={styles.container}>
        <HomeContent
          onBurgerClick={this.onBurgerClick}
          isShifted={this.state.menuShowed}
        />
        <Menu />
      </div>
    )
  }
}
