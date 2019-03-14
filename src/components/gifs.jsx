import React, { Component } from "react";

import Gif from "./gif";

const Gifs = ({gifs, select}) => {
    return gifs.map(gif => (
      <Gif id={gif.id} key={gif.id} select={select} />
    ));
}

export default Gifs;
