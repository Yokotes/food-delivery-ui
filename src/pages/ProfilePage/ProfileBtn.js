import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfilePage.module.css';

export default function ProfileBtn({
  className,
  children,
  to
}) {
  return (
    <Link
      className={`${styles.wideBtn} ${className}`}
      to={to}
    >
      <div className={styles.btnContent}>
        {children}
      </div>
      <div className={styles.btnIcon}>
        <i className="fas fa-chevron-right"></i>
      </div>
    </Link>
  )
}
