import React from 'react';
import styles from './PageTemplate.module.css';

export default function PageContent({
  children
}) {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
