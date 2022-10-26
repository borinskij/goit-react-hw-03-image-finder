// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Modal.module.css';
// import css from '../../Styles.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyModalClose);
  }

  hendleKeyModalClose = event => {
    console.log('event :', event.code);
    if (event.code === 'Escape') {
      this.props.close();
    }
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyModalClose);
  }

  render() {
    return (
      <div className={css.overlay} onClick={this.props.close}>
        <div className={css.modal}>
          <img src={this.props.data} alt="ccc" />
        </div>
      </div>
    );
  }
}

// import * as basicLightbox from 'basiclightbox';
// // import PropTypes from 'prop-types';
// import React, { Component } from 'react';

// export default class Modal extends Component {
//   //   static propTypes = { data: String };
//   render() {
//     console.log('props :>> ', this.props.data);
//     const instance = basicLightbox.create(`${this.props.data}
//     `);
//     return instance.show();
//   }
// }
