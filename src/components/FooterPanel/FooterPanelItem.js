import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterPanel.module.css';

export default function FooterPanelItem({
  isCurrent,
  onCurrent,
  pathTo,
  children
}) {
  return (
    <Link
      to={pathTo}
      className={`${styles.item} ${isCurrent && styles.current}`}
    >
      <span className={styles.itemIcon}>
        {children}
      </span>
    </Link>
  )
}
