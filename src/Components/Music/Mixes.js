import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../Styles/MixesStyle.css";

export default class Mixes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jazz: false,
    };
    this.toggleJazz = this.toggleJazz.bind(this);
  }
  toggleJazz() {
    this.setState({ jazz: !this.state.jazz });
  }
  render() {
    return (
      <div className={this.props.nav ? "mixesScreen" : "mixes"}>
        <div className="mixes-text">
          <h3>A series of genre specific mixes</h3>
          <div className="mixesContent">
            <div className="text-column">
              <h1>Another Hour of Jazz</h1>
              {this.state.jazz ? (
                <div className="button" onClick={(e) => this.toggleJazz(e)}>
                  <p>Earth, Wind & Fire - Beijo (interlude)</p>
                  <p>Matthew Larkin Cassell - In My Life</p>
                  <p>Infinite Spirit Music - Children’s Song</p>
                  <p>Angel Bat Dawid - Destination (Dr. Yusef Lateef)</p>
                  <p>Pharaoh Sanders - Japan</p>
                  <p>Sonny Fortune - Perihelion</p>
                  <p>Pep Llopis - El Vell de la Serp</p>
                  <p>Christian Gaubert - Sweet and Fool Like A Child</p>
                  <p>Bohren & Der Club of Gore - Im Rauch</p>
                  <p>Lemon Quarter - Limping Through the Garden</p>
                  <p>Alabaster DePlume - Visit Croatia</p>
                  <p>Brigitte Fontaine - J’ai 26 ans</p>
                  <p>Douglas Wood - Moon Nightclub</p>
                  <p>Don Cherry & Latif Khan - One Dance</p>
                  <p>Christian Primmer - Strings of Life</p>
                  <p>Bengt Berger - Chetu</p>
                  <p>Sun Ra - Discipline 27-II</p>
                  <p>Yasuaki Shimizu - Tew Semagn Hagere</p>
                  <p>Motohiko Hamase - Pascal</p>
                  <p>Azymuth - Fly Over the Horizon</p>
                  <p>Jack Sheldon - The Long Goodbye</p>
                </div>
              ) : (
                <div className="button" onClick={(e) => this.toggleJazz(e)}>
                  <p>tracklist</p>
                </div>
              )}
            </div>
            <div className="music-column">
              <div className="soundCloud">
                <ReactPlayer url="https://soundcloud.com/robertgirardin/another-hour-of-jazz" />
              </div>
            </div>
          </div>
          <div className="mixesContent">
            <div className="text-column">
              <h1>4 Corners Pt. II</h1>
              <p>Memphis tape cassette rap</p>
            </div>
            <div className="music-column">
              <div className="soundCloud">
                <ReactPlayer url="https://soundcloud.com/robertgirardin/4corners-pt-ii" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
