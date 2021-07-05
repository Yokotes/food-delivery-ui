import React from 'react';
import styles from './ProfilePage.module.css'
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import PageContent from '../../components/PageTemplate/PageContent';
import PageSection from '../../components/PageSection/PageSection';
import Info from '../../components/Info/Info';
import Record from '../../components/Info/Record';
import BoldRecord from '../../components/Info/BoldRecord';
import ImageRecord from '../../components/Info/ImageRecord';
import img from './user-img.png';
import ProfileBtn from './ProfileBtn';
import PrimaryLink from '../../components/PrimaryLink/PrimaryLink';

export default function ProfilePage() {
  return (
    <PageTemplate className={styles.page}>
      <PageHeader />
      <PageTitle
        title="My profile"
        className={styles.title}
      />
      <PageContent>
        <PageSection title="Personal details">
          <PrimaryLink
            className={styles.changeLink}
            href='/'
          >
            change
          </PrimaryLink>
          <Info>
            <ImageRecord
              src={img}
              alt="You"
            />
            <BoldRecord>Marvis Ighedosa</BoldRecord>
            <Record>Dosamarvis@gmail.com</Record>
            <Record>+234 9011039271</Record>
            <Record>
              No 15 uti street off ovie palace road effurun delta state
            </Record>
          </Info>
        </PageSection>
        <ProfileBtn
          className={styles.profileBtn}
          to='/orders'
        >
          Orders
        </ProfileBtn>
        <ProfileBtn
          className={styles.profileBtn}
          to='/'
        >
          Pending reviews
        </ProfileBtn>
        <ProfileBtn
          className={styles.profileBtn}
          to='/'
        >
          Faq
        </ProfileBtn>
        <ProfileBtn
          className={styles.profileBtn}
          to='/'
        >
          Help
        </ProfileBtn>
      </PageContent>
      <Button>
        Update
      </Button>
    </PageTemplate>
  )
}