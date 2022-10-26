// import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Button extends Component {
  //   static propTypes = { hendelNextPage: PropTypes.func.isRequired };
  handelClick() {
    // console.log('this.props :>> ', event);
    this.props.hendelNextPage();
  }
  render() {
    return (
      <button type="button" onClick={this.handelClick} className="button">
        <span>Давай ще</span>
      </button>
    );
  }
}
