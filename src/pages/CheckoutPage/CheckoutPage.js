import React from 'react';
import styles from './CheckoutPage.module.css'
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import PageTitle from '../../components/PageTitle/PageTitle';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageTemplate/PageContent';
import Button from '../../components/Button/Button';
import PaymentSubpage from './PaymentSubpage';
import DeliverySubpage from './DeliverySubpage';
import {withRouter} from 'react-router-dom';

function CheckoutPage({history}) {
  return (
    <PageTemplate className={styles.page}>
      <PageHeader title="Checkout"/>
      <PageTitle
        title="Delivery"
        className={styles.title}
      />
      <PageContent>
        {/* <PaymentSubpage /> */}
        <DeliverySubpage />
      </PageContent>
      <div className={styles.total}>
        <div className={styles.text}>
          Total
        </div>
        <div className={styles.price}>
          23,000
        </div>
      </div>
      <Button>
        Proceed to payment
      </Button>
    </PageTemplate>
  )
}

export default withRouter(CheckoutPage);
