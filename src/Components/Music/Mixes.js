import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../Styles/MixesStyle.css";

export default class Mixes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jazz: false,
      screen: false,
    };
    this.toggleJazz = this.toggleJazz.bind(this);
    this.toggleScreen = this.toggleScreen.bind(this);
  }
  toggleJazz() {
    this.setState({ jazz: !this.state.jazz });
  }
  toggleScreen() {
    this.setState({ screen: !this.state.screen });
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
              <h1>Screen Time</h1>
              {this.state.screen ? (
                <div className="button" onClick={(e) => this.toggleScreen(e)}>
                  <p>Edgar Froese - Blue Panther (from 'Kamikaze 1989')</p>
                  <p>Michael Shrieve - Mon Amie</p>
                  <p>Mica Levi - Lonely Void (from 'Under The Skin')</p>
                  <p>Michiru Oshima - Heal (from 'Ico')</p>
                  <p>
                    Yoichiro Yoshikawa - Nebraska (from 'The Miracle Planet')
                  </p>
                  <p>Vladimir Cosma - P.S. & P.S. (from 'Diva')</p>
                  <p>Haruomi Hosono - Fujitsubo (from 'Tale of Genji')</p>
                  <p>Thomas Newman - Arose (from 'American Beauty')</p>
                  <p>
                    Howard Shore - After Hours : Midnight (from 'After Hours')
                  </p>
                  <p>Can - Theme from Alice In The Cities</p>
                  <p>
                    Bruce Langhorn - No Further Need (from 'The Hired Hand')
                  </p>
                  <p>Andrew Dickson - Meantime Main Titles (from 'Meantime')</p>
                  <p>Mica Levi - Monos (from 'Monos')</p>
                  <p>Wally Badarou - Theme from Countryman</p>
                  <p>Daniel Lopatin - Pure Elation (from 'Uncut Gems')</p>
                  <p>Marvin Gaye - 'T' Plays It Cool (from 'Troubleman')</p>
                  <p>
                    Fab 5 Freddy & Chris Stein - Down By Law (from 'Wild Style')
                  </p>
                  <p>F.P.U. - Cockett's Theme (from 'Miami Vice')</p>
                  <p>Thomas Newman - Dead Already (from 'American Beauty')</p>
                  <p>Tangerine Dream - Out Of The Heat (from 'Firestarter')</p>
                  <p>Marius West - Celebration (from 'Super Markt')</p>
                  <p>
                    Jürgen Knieper - Goodbye To Lisbon (from 'The State of
                    Things')
                  </p>
                  <p>
                    Hiroyuki Onogawa - August In The Water (from 'August In The
                    Water')
                  </p>
                  <p>Johnny Jewel - Windswept (from 'Twin Peaks')</p>
                  <p>
                    Popol Vuh - Die große Ekstase des Bildschnitzers Steiner
                    (from 'The Great Ecstasy of Woodcarver Steiner')
                  </p>
                  <p>Canto (from 'Purple Noon')</p>
                  <p>Mica Levi - Love (from 'Under The Skin')</p>
                  <p>Michael Stearns - Closing Credits (from 'Chronos')</p>
                  <p>Tangerine Dream - Charly The Kid (from 'Firestarter')</p>
                </div>
              ) : (
                <div className="button" onClick={(e) => this.toggleScreen(e)}>
                  <p>Music from Movies</p>
                  <p>tracklist</p>
                </div>
              )}
            </div>
            <div className="music-column">
              <div className="soundCloud">
                <ReactPlayer url="https://soundcloud.com/robertgirardin/screen-time" />
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
