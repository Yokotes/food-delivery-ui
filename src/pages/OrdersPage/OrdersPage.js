import React from 'react';
import styles from './OrdersPage.module.css';
import img from './orders-img.svg';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import PageContent from '../../components/PageTemplate/PageContent';
import Button from '../../components/Button/Button';

export default function OrdersPage() {
  return (
    <PageTemplate className={styles.page}>
      <PageHeader title="Orders"/>
      <PageContent>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                src={img}
                alt="Orders"
              />
            </div>
            <h3 className={styles.title}>
              No orders yet
            </h3>
            <p className={styles.text}>
              Hit the orange button down
              below to Create an order
            </p>
          </div>
        </div>
      </PageContent>
      <Button>
        Start ordering
      </Button>
    </PageTemplate>
  )
}
