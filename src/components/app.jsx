import React, { Component } from "react";
import giphy from "giphy-api";

import SearchBar from "./search_bar";
import Gif from "./gif";
import Gifs from "./gifs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [{ id: "5sUyKBXg1BURy" }, { id: "DIznMs6yf7p6M" }],
      selectedGifId: "5sUyKBXg1BURy"
    };
  }
  handleClick = id => {
    this.setState({ selectedGifId: id });
  };

  searchGifs = query => {
    giphy("API-KEY").search(
      {
        q: query,
        rating: "g",
        limit: 20
      },
      (err, res) => {
        this.setState({ gifs: res.data });
      }
    );
  };

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.searchGifs} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <Gifs gifs={this.state.gifs} select={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
