import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    data: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyModalClose);
  }
  onClick = e => {
    if (e.target === e.currentTarget) {
      return this.props.close();
    }
    return;
  };

  hendleKeyModalClose = event => {
    if (event.code === 'Escape') {
      this.props.close();
    }
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyModalClose);
  }

  render() {
    return (
      <div className={css.overlay} onClick={this.onClick}>
        <div className={css.modal}>
          <img src={this.props.data} alt="ccc" />
        </div>
      </div>
    );
  }
}
