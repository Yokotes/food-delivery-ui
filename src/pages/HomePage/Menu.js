import React from 'react';
import styles from './Menu.module.css';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import PageContent from '../../components/PageTemplate/PageContent';
import { Link } from 'react-router-dom';
import arrow from './icons/right-arrow.svg';
import profileImg from './icons/profile-img.svg';
import offersImg from './icons/offers-img.svg';
import cartImg from './icons/buy-img.svg';
import securityImg from './icons/security-img.svg';
import policyImg from './icons/note-img.svg';

export default function Menu() {
  return (
    <PageTemplate className={styles.menu}>
      <PageContent>
        <div className={styles.content}>
        <ul className={styles.nav}>
          <li>
            <Link to="/profile">
              <img src={profileImg} alt="Profile" />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <img src={cartImg} alt="Orders" />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/offers">
              <img src={offersImg} alt="Offers" />
              <span>Offers and promo</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <img src={policyImg} alt="Policy" />
              <span>Privacy policy</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <img src={securityImg} alt="Security" />
              <span>Security</span>
            </Link>
          </li>
        </ul>
        </div>
      </PageContent>
      <div className={styles.btnsContainer}>
        <button className={styles.signOutBtn}>
          <Link to="/login">
            <span>
              Sign-out
            </span>
            <img src={arrow} alt="Right arrow" />
          </Link>
        </button>
      </div>
    </PageTemplate>
  )
}
