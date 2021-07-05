import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({
  onClick,
  theme,
  children
}) {
  return (
    <button 
      className={`${styles.btn} ${styles[theme]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  onClick: () => {},
  theme: 'orange'
}

Button.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['white', 'orange']),
  children: PropTypes.node.isRequired,
}