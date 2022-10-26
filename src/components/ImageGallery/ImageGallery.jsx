import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ImageGallery extends Component {
  static propTypes = {
    getData: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    modal: false,
  };

  openModal(data) {
    console.log('data433563', data);
    this.setState(prevState => ({ mdodal: !prevState.modal }));
  }
  render() {
    return (
      <>
        <ul className="gallery">
          <ImageGalleryItem
            getData={this.props.getData}
            openModal={this.openModal}
          />
          {this.props.children}
          {this.state.modal && <Modal data={this.openModal} />}
        </ul>
      </>
    );
  }
}
// openModal();

// function ImageGallery({ getData, children }) {
//   return (
//     <>
//       <ul className="gallery">
//         <ImageGalleryItem getData={getData} openModal={openModal} />
//         {children}
//       </ul>
//     </>
//   );
// }

// ImageGallery.propTypes = {
//   getData: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// export default ImageGallery;
