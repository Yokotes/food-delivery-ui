import React from 'react';
import logo from './logo.png';
import styles from './Logo.module.css';
import PropTypes from 'prop-types'

export default function Logo({className}) {
  return (
    <img
      src={logo}
      alt="Logo"
      className={`${styles.logo} ${className}`}
    />
  )
}

Logo.propTypes = {
  className: PropTypes.string
}