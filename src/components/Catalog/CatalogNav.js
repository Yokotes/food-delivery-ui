import React from 'react';
import styles from './Catalog.module.css';

export default function CatalogNav({
  items,
  categoryId,
  onCategoryChange
}) {
  return (
    <nav className={styles.catalogNav}>
      {
        items.map((item, index) => (
          <button
            key={index}
            className={`${styles.navItem} ${index === categoryId ? styles.current : null}`}
            onClick={() => onCategoryChange(index)}
          >
            <span className={styles.navItemContent}>
              {item}
            </span>
          </button>
        ))
      }
    </nav>
  )
}
