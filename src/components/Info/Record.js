import React from 'react';
import styles from './Info.module.css';

export default function Record({
  children
}) {
  return (
    <li className={styles.record}>
      {children}
    </li>
  )
}
