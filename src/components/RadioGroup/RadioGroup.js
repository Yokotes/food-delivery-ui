import React, { Component } from 'react'
import styles from './RadioGroup.module.css';

export default class RadioGroup extends Component {

  // Component state
  state = {
    checkedId: 0
  }

  onCheckCLick = (id) => {
    this.setState({
      checkedId: id
    });
  }

  // Render component
  render() {
    const {children} = this.props;

    return (
      <ul className={styles.group}>
        {
          React.Children.map(children, (child, index) => {
            const checked = index === this.state.checkedId;
            const isLast = index === children.length - 1;
            const item = React.cloneElement(child, {
              id: index,
              onChange: this.onCheckCLick,
              checked,
              isLast
            });

            return <li>{item}</li>;
          })
        }
      </ul>
    )
  }
}

