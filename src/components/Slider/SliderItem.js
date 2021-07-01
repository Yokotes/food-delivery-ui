import React from 'react';
import styles from './Slider.module.css';

export default function SliderItem({
  id,
  img,
}) {
  return (
    <div className={styles.slide}>
      <img
        src={img}
        alt={`Item ${id}`}
      />
    </div>
  )
}
