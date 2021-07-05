import React from 'react';
import styles from './Searchbar.module.css';
import {withRouter} from 'react-router-dom'

function Searchbar({history}) {

  const onSubmitForm = (e) => {
    e.preventDefault();
    history.push(`/search/${e.target[0].value}`);
  }

  return (
    <form className={styles.container} onSubmit={onSubmitForm}>
      <div className={styles.icon}>
      <i className="fas fa-search"></i>
      </div>
      <div className={styles.inputContainer}>
        <input
          name="search"
          type="text"
          className={styles.input}
          placeholder="Search"
        />
      </div>
    </form>
  )
}

export default withRouter(Searchbar)