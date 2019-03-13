import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    this.props.select(this.props.id);
  };
  render() {
    const gifUrl = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={gifUrl} className="gif" alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
