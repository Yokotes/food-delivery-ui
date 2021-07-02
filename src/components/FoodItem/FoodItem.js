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
      <div className={styles.imgContainer}>
        {/* Image */}
        <img
          src={imgSrc}
          alt="Food"
          className={styles.img}
        />
      </div>
      <div className={styles.itemBody}>
        <div className={styles.bodyContent}>
        <h4 className={styles.title}>
          {title}
        </h4>
        <div className={styles.price}>
          {price}
        </div>
        </div>
      </div>
    </Link>
  )
}
