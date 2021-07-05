import React from 'react';
import styles from './HomeContent.module.css';
import Container from '../../components/Container/Container';
import Searchbar from '../../components/Searchbar/Searchbar';
import FooterPanel from '../../components/FooterPanel/FooterPanel';
import Catalog from '../../components/Catalog/Catalog';
import {Link} from 'react-router-dom';

export default function HomeContent({
  onBurgerClick,
  isShifted,
}) {
  return (
    <div className={`${styles.page} ${isShifted && styles.shifted}`}>
      <div className={styles.content}>
        <Container className={styles.container}>
          <div className={styles.header}>
            <button
              className={styles.burger}
              onClick={onBurgerClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Link to='/cart' className={styles.cart}>
              <i className="fas fa-shopping-cart"></i>
            </Link>
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
    </div>
  )
}
