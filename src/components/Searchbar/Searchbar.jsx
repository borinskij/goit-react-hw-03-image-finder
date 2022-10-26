import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Searchbar extends Component {
  static propTypes = { hendelSubmit: PropTypes.func.isRequired };
  state = {
    name: '',
  };
  hendelerChange = ({ target }) => this.setState({ name: target.value });
  hendelSubmit = event => {
    event.preventDefault();
    this.props.hendelSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <header className="searchbar">
          <form className="form" onSubmit={this.hendelSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              onChange={this.hendelerChange}
              className="input"
              type="text"
              name="name"
              value={this.state.name}
              //   autocomplete="off"
              //   autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
