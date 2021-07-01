import React from 'react';
import styles from './Searchbar.module.css';

export default function Searchbar() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
      <i className="fas fa-search"></i>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          placeholder="Search"
        />
      </div>
    </div>
  )
}
