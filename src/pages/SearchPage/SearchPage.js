import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageTemplate/PageContent';
import FoodItem from '../../components/FoodItem/FoodItem';
import styles from './SearchPage.module.css';
import img from './search-img.svg';
import { withRouter } from 'react-router-dom';

function SearchPage({match}) {
  return (
    <PageTemplate className={styles.page}>
      <PageHeader title={
        <input className={styles.input} defaultValue={match.params.value}/>
      }/>
      <PageContent>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                src={img}
                alt="History"
              />
            </div>
            <h3 className={styles.title}>
              Item not found
            </h3>
            <p className={styles.text}>
              Try searching the item with
              a different keyword.
            </p>
          </div>
        </div>
      </PageContent>
      <div className={styles.result}>
        <PageContent>
          <div className={styles.resultTitle}>
            Found 6 results
          </div>
          <div className={styles.resultContent}>
            <div className={styles.column}>
              <FoodItem
                imgSrc={`${process.env.PUBLIC_URL}/img/0.png`}
                itemId={0}
                price="N1,900"
                title="Veggie tomato mix"
                className={styles.item}
              />
              <FoodItem
                imgSrc={`${process.env.PUBLIC_URL}/img/0.png`}
                itemId={0}
                price="N1,900"
                title="Veggie tomato mix"
                className={styles.item}
              />
              <FoodItem
                imgSrc={`${process.env.PUBLIC_URL}/img/0.png`}
                itemId={0}
                price="N1,900"
                title="Veggie tomato mix"
                className={styles.item}
              />
            </div>
            <div className={styles.column}>
              <FoodItem
                imgSrc={`${process.env.PUBLIC_URL}/img/0.png`}
                itemId={0}
                price="N1,900"
                title="Veggie tomato mix"
                className={styles.item}
              />
              <FoodItem
                imgSrc={`${process.env.PUBLIC_URL}/img/0.png`}
                itemId={0}
                price="N1,900"
                title="Veggie tomato mix"
                className={styles.item}
              />
              <FoodItem
                imgSrc={`${process.env.PUBLIC_URL}/img/0.png`}
                itemId={0}
                price="N1,900"
                title="Veggie tomato mix"
                className={styles.item}
              />
            </div>
          </div>
        </PageContent>
      </div>
    </PageTemplate>
  )
}

export default withRouter(SearchPage);