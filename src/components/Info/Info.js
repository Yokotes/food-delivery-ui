import React from 'react';
import ImageRecord from './ImageRecord';
import styles from './Info.module.css';

export default function Info({
  className,
  children
}) {
  const records = []
  let img = null;

  React.Children.forEach(children, (child) => {
    if (child.type === ImageRecord) {
      img = child;
    }
    else {
      records.push(child);
    }
  })

  return (
    <div className={`${styles.container}  ${className}`}>
      <div className={styles.imgContainer}>
        {img}
      </div>
      <ul className={styles.info}>
        {records}
      </ul>
    </div>
  )
}
