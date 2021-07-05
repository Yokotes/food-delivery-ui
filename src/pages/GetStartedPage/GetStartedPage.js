import React from 'react';
import styles from './GetStartedPage.module.css';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';

export default function GetStartedPage() {
  return (
    <div className={`page ${styles.page}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <Logo className={styles.logo}/>
          </div>
          <h1 className={styles.slogan}>
            Food For Everyone!
          </h1>
        </div>
        <Button theme="white">
            <Link to='/login'>
              Get Started
            </Link>
        </Button>
      </div>
    </div>
  )
}
