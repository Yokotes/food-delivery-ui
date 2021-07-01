import React from 'react';
import styles from './FoodItem.module.css';
import {Link} from 'react-router-dom';

export default function FoodItem({
  title,
  imgSrc,
  price,
  itemId
}) {
  return (
    <Link to='/' className={styles.item}>
      <img
        src={imgSrc}
        alt="Food"
        className={styles.img}
      />
      <div className={styles.itemBody}>
        <h4 className={styles.title}>
          {title}
        </h4>
        <div className={styles.price}>
          {price}
        </div>
      </div>
    </Link>
  )
}
