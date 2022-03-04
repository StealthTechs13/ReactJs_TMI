import React, { Component } from "react";
import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Iclightimgzoom } from "./Icon";
const images = [
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png"
];

class ImageLightBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="lightboxCol">
        <button className="flex items-center text-white" type="button" onClick={() => this.setState({ isOpen: true })}>
            <Iclightimgzoom/> View All Pictures
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })}
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })}
          />
        )}
      </div>
    );
  }
}

// render(<App />, document.getElementById("root"));
export default ImageLightBox

