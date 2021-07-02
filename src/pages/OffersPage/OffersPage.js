import React from 'react';
import styles from './OffersPage.module.css';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import PageContent from '../../components/PageTemplate/PageContent';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function OffersPage() {
  return (
    <PageTemplate className={styles.page}>
      <PageHeader/>
      <PageTitle
        title="My Offers"
      />
      <PageContent>
        <div className={styles.container}>
          <h3 className={styles.title}>
            ohh snap!  No offers yet
          </h3>
          <p className={styles.text}>
            Bella doesn’t have any offers
            yet please check again.
          </p>
        </div>
      </PageContent>
    </PageTemplate>
  )
}
