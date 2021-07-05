import React, { Component } from 'react';
import styles from './FooterPanel.module.css';
import FooterPanelItem from './FooterPanelItem';

export default class FooterPanel extends Component {

  // Component state
  state = {
    items: [
      {
        id: 0,
        icon: <i className="fas fa-home"></i>,
        pathTo: '/home'
      },
      {
        id: 1,
        icon: <i className="far fa-heart"></i>,
        pathTo: '/offers'
      },
      {
        id: 2,
        icon: <i className="far fa-user"></i>,
        pathTo: '/profile'
      },
      {
        id: 3,
        icon: <i className="fas fa-history"></i>,
        pathTo: '/history'
      }
    ],
    currentItem: 0
  }

  // Render component
  render() {
    const itemsView = this.state.items.map((item) => (
      <FooterPanelItem
        key={item.id}
        pathTo={item.pathTo}
        isCurrent={this.state.currentItem === item.id}
      >
        {item.icon}
      </FooterPanelItem>
    ))

    return (
      <div className={styles.panel}>
        {itemsView}
      </div>
    )
  }
}
