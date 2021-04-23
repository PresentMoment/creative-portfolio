import React from "react";
import { Link } from "react-router-dom";

class PhotosNav extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="navULContainer">
        <ul onClick={this.props.clickFunction} className="navUL">
          <Link to="/apuana">
            <li>Riviera Apuana</li>
          </Link>
          <Link to="/laquinta">
            <li>La Quinta</li>
          </Link>
          <Link to="/alaska">
            <li>Alaska</li>
          </Link>
          <Link to="/diary">
            <li>Photo Diary</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default PhotosNav;
