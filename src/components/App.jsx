import React, { Component } from 'react';
import { getGalerry } from './Service/API';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    name: '',
    getPage: 1,
    getData: [],
  };

  hendelSubmit = name => {
    this.setState({ name });
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.name !== this.state.name) {
      const { hits } = await getGalerry(this.state.name, this.state.getPage);

      this.setState({ getData: hits });
    }
  }
  hendelNextPage() {
    console.log('getPage :>> ', this.state.getPage);
    this.state(prevState => ({ getPage: prevState.getData + 1 }));
  }

  render() {
    // console.log('this.state.getDataAPP :>> ', this.state.getData);
    return (
      <>
        <Searchbar hendelSubmit={this.hendelSubmit} />;
        <ImageGallery getData={this.state.getData}>
          {this.state.name && <Button hendelNextPage={this.hendelNextPage} />}
        </ImageGallery>
        {/* <Button hendelNextPage={this.hendelNextPage} /> */}
      </>
    );
  }
}
