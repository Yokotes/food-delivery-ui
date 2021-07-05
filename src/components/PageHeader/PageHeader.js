import React from 'react';
import {withRouter} from 'react-router-dom';
import styles from './PageHeader.module.css';

function PageHeader({
  title,
  history
}) {
  const onBack = () => {
    history.goBack();
  }

  return (
    <div className={styles.header}>
      <button className={styles.arrowBack} onClick={onBack}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  )
}

export default withRouter(PageHeader)