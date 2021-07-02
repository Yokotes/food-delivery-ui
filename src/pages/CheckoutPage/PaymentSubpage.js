import React from 'react';
import styles from './CheckoutPage.module.css';
import PageSection from '../../components/PageSection/PageSection';
import {
  DeliveryRadioGroup,
  PaymentRadioGroup
} from '../../components/FoodDeliveryComponents';

export default function PaymentSubpage() {
  return (
    <>
      <PageSection
        title="Payment method"
        className={styles.section}
      >
        <PaymentRadioGroup />
      </PageSection>
      <PageSection
        title="Delivery method"
        className={styles.section}
      >
        <DeliveryRadioGroup />
      </PageSection>
    </>
  )
}
