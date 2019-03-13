import React, { Component } from "react";

class SearchBar extends Component {
  searchGifs = event => {
    this.props.search(event.target.value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control form-search"
          onChange={this.searchGifs}
        />
      </div>
    );
  }
}

export default SearchBar;
