import React from "react";
import { Link } from "react-router-dom";

class MusicNav extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <ul onClick={this.props.clickFunction} className="navUL">
          <Link to={"/emmusic"}>
            <li>Emotional Music</li>
          </Link>
          <Link to={"/butw"}>
            <li>Zero Grow</li>
          </Link>
          <Link to={"/blanche"}>
            <li>Vers l’Europa Deserta</li>
          </Link>
          <Link to={"/stress"}>
            <li>Stress Test</li>
          </Link>
          <Link to={"/keys"}>
            <li>Keys To The Universe</li>
          </Link>
          <Link to={"/dicedrecord"}>
            <li>Diced By Light</li>
          </Link>
          <Link to={"/objectdom"}>
            <li>Object Dom</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default MusicNav;
