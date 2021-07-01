import React, {Component} from 'react';
import styles from './LoginPage.module.css';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';

export default class LoginPage extends Component {

  // Component state
  state = {
    isLogin: true
  }

  setIsLogin = (value) => {
    this.setState({
      isLogin: value
    });
  }

  // Render component
  render() {
    const { isLogin } = this.state;
    const currentForm = isLogin ? <LoginForm /> : <SignUpForm />

    return (
      <div className={`page ${styles.page}`}>
        <div className={styles.header}>
          <Logo
            className={styles.logo}
          />
          <nav className={styles.nav}>
            <button
              className={`${styles.navBtn} ${this.state.isLogin && styles.current}`}
              onClick={() => this.setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`${styles.navBtn} ${!this.state.isLogin && styles.current}`}
              onClick={() => this.setIsLogin(false)}
            >
              Sign-up
            </button>
          </nav>
        </div>
        <Container className={styles.container}>
          {currentForm}
        </Container>
      </div>
    )
  }
}

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.fields}>
        <div className={styles.inputs}>
          <Input
            cssId='login-username-input'
            label='Email address'
            type='email'
            className={styles.input}
          />
          <Input
            cssId='login-password-input'
            label='Password'
            type='password'
            className={styles.input}
          />
        </div>
        <Link to="/login" className={styles.link}>
          Forgot password?
        </Link>
      </div>
      <Button>
        Login
      </Button>
    </form>
  )
}

const SignUpForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.fields}>
        <div className={styles.inputs}>
          <Input
            cssId='signup-username-input'
            label='Email address'
            type='email'
            className={styles.input}
          />
          <Input
            cssId='signup-password-input'
            label='Password'
            type='password'
            className={styles.input}
          />
          <Input
            cssId='signup-confirm-password-input'
            label='Confirm password'
            type='password'
            className={styles.input}
          />
        </div>
      </div>
      <Button>
        Sign Up
      </Button>
    </form>
  )
}