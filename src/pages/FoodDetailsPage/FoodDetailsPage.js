import React from 'react';
import styles from './FoodDetailsPage.module.css';
import {Link} from 'react-router-dom';
import Button from '../../components/Button/Button';
import Slider from '../../components/Slider/Slider';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import PageContent from '../../components/PageTemplate/PageContent';

function FoodDetailsPage() {
  return (
    <PageTemplate className={styles.page}>
        <div className={styles.header}>
          <Link to="/home">
            <i className="fas fa-chevron-left"></i>
          </Link>
          <button className={styles.loved}>
            <i className="far fa-heart"></i>
          </button>
        </div>
        <PageContent>
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
          </div>
        </PageContent>
        <Button className={styles.addBtn}>
          Add to cart
        </Button>
    </PageTemplate>
  )
}

export default FoodDetailsPage;
