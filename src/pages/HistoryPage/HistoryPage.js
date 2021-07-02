import React from 'react';
import styles from './HistoryPage.module.css';
import img from './history-img.svg';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import PageContent from '../../components/PageTemplate/PageContent';
import Button from '../../components/Button/Button';

export default function HistoryPage() {
  return (
    <PageTemplate className={styles.page}>
      <PageHeader title="History"/>
      <PageContent>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                src={img}
                alt="History"
              />
            </div>
            <h3 className={styles.title}>
              No history yet
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
