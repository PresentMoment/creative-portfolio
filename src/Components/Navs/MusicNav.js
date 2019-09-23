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
        </ul>
      </div>
    );
  }
}

export default MusicNav;
