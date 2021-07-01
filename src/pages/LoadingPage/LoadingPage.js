import React from 'react';
import styles from './LoadingPage.module.css';
import loadingLogo from './loading-page-logo.png';

export default function LoadingPage() {
  return (
    <div className={`page ${styles.page}`}>
      <div className={styles.logo}>
        <img
          src={loadingLogo}
          alt="Loading..."
        />
      </div>
    </div>
  )
}
