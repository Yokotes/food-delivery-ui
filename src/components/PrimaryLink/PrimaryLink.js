import React from 'react';
import styles from './PrimaryLink.module.css';
import { Link } from 'react-router-dom';

export default function PrimaryLink({
  href,
  className,
  children
}) {
  return (
    <Link
      to={href}
      className={`${styles.link} ${className}`}
    >
      {children}
    </Link>
  )
}
