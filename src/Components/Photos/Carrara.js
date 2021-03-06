import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "../Styles/GalleryStyle.css";

let images = new Array(21);

for (let i = 0; i < 21; i++) {
  images[i] = {
    original: `images/carrara/${i}.jpg`,
    thumbnail: `images/carrara/thumbnails/${i}.jpg`,
  };
}
export default class Carrara extends Component {
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
                The Riviera Apuana sits in the Northwestern corner of Tuscany,
                between the Apuan Alps and the Tyrrhenian Sea. At its northern
                border is Carrara, an important source of marble since the Roman
                era, and a main economic driver of the region. At its southern
                tip is Viareggio, a seaside resort town and pleasure palace.
                Since the 1980's the region has invested in errecting a number
                of public sculptures in its motorway roundabouts and public
                parks. In the winter of 2020 I traveled to The Riviera Apuana to
                document the artworks and their environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
