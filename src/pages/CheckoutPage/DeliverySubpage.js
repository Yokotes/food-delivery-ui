import React from 'react';
import styles from './CheckoutPage.module.css';
import PageSection from '../../components/PageSection/PageSection';
import {
  DeliveryRadioGroup,
} from '../../components/FoodDeliveryComponents';
import Info from '../../components/Info/Info';
import Record from '../../components/Info/Record';
import BoldRecord from '../../components/Info/BoldRecord';
import PrimaryLink from '../../components/PrimaryLink/PrimaryLink';

export default function DeliverySubpage() {
  return (
    <>
      <PageSection
        title="Address details"
        className={styles.section}
      >
        <PrimaryLink
          className={styles.changeLink}
          href='/'
        >
          change
        </PrimaryLink>
        <Info>
          <BoldRecord>
            Marvis Kparobo
          </BoldRecord>
          <Record>
            Km 5 refinery road oppsite re
            public road, effurun, delta state
          </Record>
          <Record>
            +234 9011039271
          </Record>
        </Info>
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
