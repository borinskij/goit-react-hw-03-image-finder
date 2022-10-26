import React from 'react';
// import PropTypes from 'prop-types'
import { Vortex } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Loader(props) {
  //   console.log('props :>> ', props.isLoader);
  return (
    <Vortex
      visible={props.isLoader}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
  );
}

// Loader.propTypes = {}

export default Loader;
