import React, {Component} from 'react';
import styles from './NoteModal.module.css';
import Button from '../Button/Button';

export default class NoteModal extends Component {

  // Component state
  state = {
    show: true,
  }

  onCloseClick = () => {
    this.setState({
      show: false,
    })
  }

  // Render component
  render() {
    return (
      <div className={`${styles.container} ${this.state.show && styles.show}`}>
        <div className={styles.black} onClick={this.onCloseClick}></div>
        <div className={styles.modal}>
          <div className={styles.header}>
            Please note
          </div>
          <ul className={styles.list}>
            <li>
              <div className={styles.itemHeader}>Delivery to Mainland</div>
              <div className={styles.itemValue}>N1000 - N2000</div>
            </li>
            <li>
              <div className={styles.itemHeader}>Delivery to island</div>
              <div className={styles.itemValue}>N2000 - N3000</div>
            </li>
          </ul>
          <div className={styles.btns}>
            <button
              onClick={this.onCloseClick}
              className={`${styles.btn} ${styles.cancel}`}
            >Cancel</button>
            <Button className={styles.btn} onClick={this.onCloseClick}>
              Proceed
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
