import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Modal extends Component {
  static propTypes = { data: String };

  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <img src={this.props.data} alt="ccc" />
        </div>
      </div>
    );
  }
}

{
  /* <div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>; */
}
//`
