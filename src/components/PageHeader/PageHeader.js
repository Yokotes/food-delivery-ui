import React from 'react';
import styles from './PageHeader.module.css'


export default function PageHeader({
  title
}) {
  return (
    <div className={styles.header}>
      <button className={styles.arrowBack}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  )
}
