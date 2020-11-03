import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "../Styles/GalleryStyle.css";

let images = new Array(14);

for (let i = 0; i < 14; i++) {
  images[i] = {
    original: `images/alaska/${i}.jpg`,
    thumbnail: `images/alaska/thumbnails/${i}.jpg`,
  };
}
export default class Alaska extends Component {
  state = {
    modalFullscreen: false,
  };

  handleFullScreen = () => {
    this.setState({ modalFullscreen: !this.state.modalFullscreen });
  };

  render() {
    return (
      <div className={this.props.nav ? "photosScreen" : "photos"}>
        <div className="photosContainer">
          <div
            style={{
              display: "flex",
              flexGrow: 1,
              flexDirection: "column",
              margin: "3em 1em 0 1em",
              height: "100%",
            }}
          >
            <ImageGallery
              items={images}
              infinite={false}
              showBullets={false}
              disableThumbnailScroll={false}
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={!this.state.modalFullscreen ? true : false}
              onScreenChange={this.handleFullScreen}
              lazyLoad={true}
            />
            <div style={{ flexGrow: 1 }} />
            <div style={{ marginTop: "auto" }}>
              <p>
                In 2019 I moved to Alaska
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
