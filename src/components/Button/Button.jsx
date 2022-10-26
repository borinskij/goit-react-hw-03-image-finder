import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Button.module.css';

export default class Button extends Component {
  static propTypes = { hendelNextPage: PropTypes.func.isRequired };
  handelClick = () => {
    console.log('props :>> ', this.props);
    this.props.hendelNextPage();
  };
  render() {
    return (
      <button type="button" onClick={this.handelClick} className={css.button}>
        <span>Давай ще</span>
      </button>
    );
  }
}
// import React from 'react';
// import PropTypes from 'prop-types';

// const Button = hendelNextPage => {
//   //   console.log('hendelNextPage :', hendelNextPage);
//   const handelClick = () => {
//     return hendelNextPage();
//   };
//   return (
//     <button type="button" onClick={handelClick} className="button">
//       <span>Давай ще</span>
//     </button>
//   );
// };

// Button.propTypes = { hendelNextPage: PropTypes.func.isRequired };

// export default Button;
