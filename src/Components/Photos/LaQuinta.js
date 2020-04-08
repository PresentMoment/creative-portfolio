import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "../Styles/GalleryStyle.css";

let images = new Array(17);

for (let i = 0; i < 17; i++) {
  images[i] = {
    original: `images/laquinta/${i}.jpg`,
    thumbnail: `images/laquinta/thumbnails/${i}.jpg`
  };
}
export default class LaQuinta extends Component {
  constructor() {
    super();
    this.state = {
      modalFullscreen: false
    };
  }

  handleFullScreen = () => {
    this.setState({ modalFullscreen: !this.state.modalFullscreen });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          margin: "3em 1em 0 1em",
          height: "100%"
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
        />
        <div style={{ flexGrow: 1 }} />
        <div style={{ marginTop: "auto" }}>
          <p>
            La Quinta, California is an affluent community in the Coachella
            Valley, sited against the Santa Rosa mountain range. These trails
            are popular with offroad cyclists. In the Spring of 2020 I began
            documenting the relationship between these bicycle trails and the
            surrounding wilderness.
          </p>
        </div>
      </div>
    );
  }
}
