import React from 'react';
import styles from './PageTemplate.module.css';
import Container from '../Container/Container';

export default function PageTemplate({
  children,
  className
}) {
  return (
    <div className={`${styles.template} ${className}`}>
      <Container className={styles.container}>
        {children}
      </Container>
    </div>
  )
}
