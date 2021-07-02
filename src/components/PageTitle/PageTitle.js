import React from 'react';
import styles from './PageTitle.module.css';

export default function PageTitle({
  title,
  className
}) {
  return (
    <h2
      className={`${styles.title} ${className}`}
    >
      {title}
    </h2>
  )
}
