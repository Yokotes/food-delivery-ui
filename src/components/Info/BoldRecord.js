import React from 'react';
import styles from './Info.module.css';

export default function BoldRecord({
  children
}) {
  return (
    <li
      className={`${styles.record} ${styles.boldRecord}`}
    >
      {children}
    </li>
  )
}
