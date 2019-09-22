import React from "react";
import { Link } from "react-router-dom";

class VideoNav extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <ul onClick={this.props.clickFunction}>
          <Link to={"/mooc"}>
            <li>The Monuments of Orange County</li>
          </Link>
          <Link to={"/wth"}>
            <li>Welcome To Hell</li>
          </Link>
          <Link to={"/diced"}>
            <li>Diced By Light</li>
          </Link>
          <Link to={"/white"}>
            <li>Covered In White</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default VideoNav;
