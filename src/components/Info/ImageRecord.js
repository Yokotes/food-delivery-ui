import React from 'react';
import styles from './Info.module.css';

export default function ImageRecord({
  src,
  alt
}) {
  return (
    <img src={src} alt={alt} className={styles.img} />
  )
}
