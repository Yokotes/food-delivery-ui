import React from 'react';
import styles from './RadioGroup.module.css';

export default function RadioItem({
  content,
  checked,
  id,
  onChange,
  isLast
}) {
  return (
    <div className={styles.container}>
      <div className={`${styles.falseRadio} ${checked && styles.checked}`}></div>
      <div className={`${styles.content} ${isLast && styles.last}`}>
        {content}
      </div>
      <input
          type="radio"
          className={styles.input}
          onChange={() => onChange(id)}
          checked={checked}
        />
    </div>
  )
}
