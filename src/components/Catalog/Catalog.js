import React, {Component} from 'react';
import styles from './Catalog.module.css';
import CatalogNav from './CatalogNav';
import FoodItem from '../FoodItem/FoodItem';
import PrimaryLink from '../PrimaryLink/PrimaryLink';

export default class Catalog extends Component {

  // Component state
  state = {
    categories: [
      'Food',
      'Drinks',
      'Snacks',
      'Sauce'
    ],
    currentCategory: 0
  }

  changeCurrentCategory = (id) => {
    this.setState({
      currentCategory: id
    })
  }

  // Render component
  render() {
    const {
      categories,
      currentCategory
    } = this.state;

    return (
      <div className={styles.catalog}>
        <div className={styles.catalogContent}>
          <CatalogNav
            items={categories}
            categoryId={currentCategory}
            onCategoryChange={this.changeCurrentCategory}
          />
        </div>
        <PrimaryLink href="/" className={styles.link}>
          see more
        </PrimaryLink>
        <div className={`${styles.catalogContent} ${styles.itemsContainer}`}>
          <FoodItem
              imgSrc={`${process.env.PUBLIC_URL}/img/0.png`}
              itemId={0}
              price="N1,900"
              title="Veggie tomato mix"
            />
            <FoodItem
              imgSrc={`${process.env.PUBLIC_URL}/img/0.png`}
              itemId={0}
              price="N1,900"
              title="Veggie tomato mix"
            />
        </div>
      </div>
    )
  }

}
