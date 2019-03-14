import React, { Component } from "react";

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }
  }
  searchGifs = event => {
    this.setState({
      text: event.target.value
    })

    this.props.search(event.target.value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          className="form-control form-search"
          onChange={this.searchGifs}
        />
      </div>
    );
  }
}

export default SearchBar;
