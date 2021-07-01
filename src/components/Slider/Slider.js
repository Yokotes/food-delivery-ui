import React, {Component} from 'react';
import styles from './Slider.module.css';
import SliderItem from './SliderItem';
import SliderPanel from './SliderPanel';

export default class Slider extends Component {

  // Component state
  state = {
    slides: [
      {
        id: 0,
        src: `${process.env.PUBLIC_URL}/img/0.png`,
      }
    ],
    currentSlide: 0,
  }

  // Render component
  render() {
    const {slides, currentSlide} = this.state;
    const items = slides.map(({id, src}) => (
      <SliderItem
        key={id}
        id={id}
        img={src}
      />
    ))

    return (
      <div className={styles.slider}>
        <div className={styles.slides}>
          {items}
        </div>
        <SliderPanel
          itemsCount={slides.length}
          currentItem={currentSlide}
        />
      </div>
    )
  }
}
