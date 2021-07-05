import React from 'react';
import styles from './CheckoutPage.module.css'
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import PageTitle from '../../components/PageTitle/PageTitle';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageTemplate/PageContent';
import Button from '../../components/Button/Button';
import PaymentSubpage from './PaymentSubpage';
import DeliverySubpage from './DeliverySubpage';
import NoteModal from '../../components/NoteModal/NoteModal';
import {withRouter} from 'react-router-dom';

function CheckoutPage({match, history}) {

  const subpageUrl = match.params.subpage;
  const subpage = subpageUrl === 'payment' ? <PaymentSubpage /> : <DeliverySubpage />;

  const onProceedClick = () => {
    history.push('/checkout/payment');
  }

  return (
    <>
      <PageTemplate className={styles.page}>
        <PageHeader title="Checkout"/>
        <PageTitle
          title="Delivery"
          className={styles.title}
        />
        <PageContent>
          {subpage}
        </PageContent>
        <div className={styles.total}>
          <div className={styles.text}>
            Total
          </div>
          <div className={styles.price}>
            23,000
          </div>
        </div>
        <Button onClick={onProceedClick}>
          Proceed to payment
        </Button>
      </PageTemplate>
      <NoteModal />
    </>
  )
}

export default withRouter(CheckoutPage);
