import React, {Component} from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

export default class Input extends Component {

  // Component state
  state = {
    focus: false,
    value: '',
  }

  onFocus = () => {
    this.setState({
      focus: true
    })
  }

  onBlur = () => {
    this.setState(({value}) => {
      if (!!!value) {
        return {
          focus: false
        }
      }
    })
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  // Render component
  render() {
    const {
      className,
      cssId,
      type,
      label,
      validator,
      required
    } = this.props;

    return (
      <div className={`${styles.container} ${className}`}>
        <input
          id={cssId}
          type={type}
          onInput={validator}
          className={styles.input}
          required={required}
          value={this.state.value}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
        />
        <label
          htmlFor={cssId}
          className={`${styles.label} ${this.state.focus && styles.focused}`}
        >
          {label}
        </label>
      </div>
    )
  }
}

Input.defaultProps = {
  validator: (e) => {},
  type: 'text',
  label: 'Input',
  required: false
}

Input.propTypes = {
  validator: PropTypes.func,
  type: PropTypes.oneOf(['text', 'email', 'url', 'password', 'tel']),
  label: PropTypes.string,
  className: PropTypes.string,
  cssId: PropTypes.string,
  required: PropTypes.bool
}

