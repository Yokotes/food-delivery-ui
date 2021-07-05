import React from 'react';
import styles from './Slider.module.css';

export default function SliderPanel({
  itemsCount,
  currentItem
}) {
  const buttons = [];

  for (let i = 0; i < itemsCount; i++) {
    buttons.push(
      <button
        key={i}
        className={i === currentItem ? styles.current : null}
      ></button>
    )
  }

  return (
    <div className={styles.sliderPanel}>
      {buttons}
    </div>
  )
}
