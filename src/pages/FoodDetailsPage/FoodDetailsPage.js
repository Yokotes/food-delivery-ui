import React from 'react';
import styles from './FoodDetailsPage.module.css';
import Container from '../../components/Container/Container';
import {Link} from 'react-router-dom';
import Button from '../../components/Button/Button';
import Slider from '../../components/Slider/Slider';

export default function FoodDetailsPage() {
  return (
    <div className={`page ${styles.page}`}>
      <Container>
        <div className={styles.header}>
          <Link to="/">
            <i className="fas fa-chevron-left"></i>
          </Link>
          <button className={styles.loved}>
            <i className="far fa-heart"></i>
          </button>
        </div>
        <div className={styles.content}>
          <Slider />
          <h3 className={styles.title}>
            Veggie tomato mix
          </h3>
          <div className={styles.price}>
            N1,900
          </div>
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>
              Delivery info
            </h4>
            <p className={styles.text}>
              Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
            </p>
          </section>
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>
              Return policy
            </h4>
            <p className={styles.text}>
              All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.
            </p>
          </section>
          <Button>
            Add to cart
          </Button>
        </div>
      </Container>
    </div>
  )
}
