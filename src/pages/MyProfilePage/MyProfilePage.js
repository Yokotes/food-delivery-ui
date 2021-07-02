import React from 'react';
import styles from './MyProfilePage.module.css';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageSection from '../../components/PageSection/PageSection';
import PaymentRadioGroup from '../../components/FoodDeliveryComponents/PaymentRadioGroup';
import PageContent from '../../components/PageTemplate/PageContent';
import Button from '../../components/Button/Button';
import Info from '../../components/Info/Info';
import Record from '../../components/Info/Record';
import BoldRecord from '../../components/Info/BoldRecord';
import ImageRecord from '../../components/Info/ImageRecord';
import userImg from './user-img.png';
import penImg from './pen-img.svg';

export default function MyProfilePage() {
  return (
    <PageTemplate className={styles.page}>
      <PageHeader
        title="My profile"
      />
      <PageContent>
        <PageSection
          title="Information"
          className={styles.section}
        >
          <button className={styles.changeBtn}>
            <img src={penImg} alt="Change" />
          </button>
          <Info className={styles.info}>
            <ImageRecord
              src={userImg}
              alt="You"
            />
            <BoldRecord>Marvis Ighedosa</BoldRecord>
            <Record>Dosamarvis@gmail.com</Record>
            <Record>
              No 15 uti street off ovie palace road effurun delta state
            </Record>
          </Info>
        </PageSection>
        <PageSection
          className={styles.section}
          title="Payment methods"
        >
          <PaymentRadioGroup />
        </PageSection>
      </PageContent>
      <Button>
        Update
      </Button>
    </PageTemplate>
  )
}
