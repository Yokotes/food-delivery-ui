import React from 'react';
import styles from './PageSection.module.css';

export default function PageSection({
  title,
  children,
  className
}) {
  return (
    <section
      className={`${styles.section} ${className}`}
    >
      <h5 className={styles.title}>
        {title}
      </h5>
      <div className={styles.body}>
        {children}
      </div>
    </section>
  )
}
