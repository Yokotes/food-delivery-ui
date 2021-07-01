import React from 'react';
import styles from './NoInternetPage.module.css';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import img from './no-internet-img.svg';

export default function NoInternetPage() {
  return (
    <div className={`page ${styles.page}`}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <img
            src={img}
            alt="No WiFi"
            className={styles.img}
          />
          <h2 className={styles.title}>
            No internet Connection
          </h2>
          <p className={styles.text}>
            Your internet connection is currently
            not available please check or try again.
          </p>
          <Button>Try again</Button>
        </div>
      </Container>
    </div>
  )
}
