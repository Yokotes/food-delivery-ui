import React from 'react';
import styles from './CartPage.module.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import PageContent from '../../components/PageTemplate/PageContent';
import CartItem from '../../components/CartItem/CartItem';
import img from './swipe-img.svg'
import { withRouter } from 'react-router-dom';

function CartPage({
  history
}) {

  const onCheckoutClick = () => {
    history.push('/checkout/delivery');
  }

  return (
    <div className={styles.page}>
      <Container>
        <PageHeader
          title="Cart"
        />
      </Container>
      <div className={styles.note}>
        <img src={img} alt="Swipe" />
        <span>swipe on an item to delete</span>
      </div>
      <PageContent>

        <div className={styles.items}>
          <CartItem />
          <CartItem />

          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />

        </div>
      </PageContent>
      <Container>
        <Button onClick={onCheckoutClick}>
          Complete order
        </Button>
      </Container>
    </div>
  )
}

export default withRouter(CartPage)