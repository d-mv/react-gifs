import React, { Component } from "react";

import Gif from "./gif";

class Gifs extends Component {
  returnList = () => {
    return this.props.gifs.map(gif => (
      <Gif id={gif.id} key={gif.id} select={this.props.select} />
    ));
  };

  render() {
    return <div className="gif-list">{this.returnList()}</div>;
  }
}

export default Gifs;
