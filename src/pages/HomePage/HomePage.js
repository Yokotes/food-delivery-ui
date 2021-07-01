import React, { Component } from 'react';
import styles from './HomePage.module.css';
import Container from '../../components/Container/Container';
import Searchbar from '../../components/Searchbar/Searchbar';
import FooterPanel from '../../components/FooterPanel/FooterPanel';
import Catalog from '../../components/Catalog/Catalog';

export default class HomePage extends Component {
  render() {
    return (
      <div className={`page ${styles.page}`}>
        <Container className={styles.container}>
          <div className={styles.header}>
            <button className={styles.burger}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={styles.cart}>
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
          <h2 className={styles.title}>
            Delicious
            <br />
            food for you
          </h2>
          <Searchbar />
        </Container>
        <div className={styles.food}>
          <Catalog />
        </div>
        <Container className={styles.container}>
          <FooterPanel />
        </Container>
      </div>
    )
  }
}
