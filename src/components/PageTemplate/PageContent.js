import React from 'react';
import styles from './PageTemplate.module.css';

export default function PageContent({
  children,
  className
}) {
  return (
    <div className={styles.contentContainer}>
      <div className={`${styles.content} ${className}`}>
        {children}
      </div>
    </div>
  )
}
