import React, { Component } from 'react';
import styles from './CartItem.module.css';

export default class CartItem extends Component {

  // Component state
  state = {
    onSwipe: false
  }

  onSwipeClick = () => {
    this.setState(({onSwipe}) => (
      {
        onSwipe: !onSwipe
      }
    ))
  }

  // Render component
  render() {
    return (
      <div className={styles.container}>
        <div
          onClick={this.onSwipeClick}
          className={`${styles.item} ${this.state.onSwipe && styles.swiped}`}
        >
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                src={`${process.env.PUBLIC_URL}/img/0.png`}
                alt="Food"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.title}>
                Veggie tomato mix
              </div>
              <div className={styles.price}>
                #1,900
              </div>
            </div>
          </div>
          <div className={styles.counter}>
            <button className={styles.counterBtn}>-</button>
            <input
              className={styles.counterInput}
              type="number"
              defaultValue="1"
            />
            <button className={styles.counterBtn}>+</button>
          </div>
        </div>
        <div className={styles.swipeBtns}>
          <button className={styles.swipeBtn}>
            <i class="far fa-heart"></i>
          </button>
          <button className={styles.swipeBtn}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    )
  }
}
