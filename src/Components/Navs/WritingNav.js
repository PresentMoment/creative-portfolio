import React from "react";
import { Link } from "react-router-dom";

class WritingNav extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="navULContainer">
        <ul onClick={this.props.clickFunction} className="navUL">
          <Link to="/guide">
            <li>Orange County Travel Guide</li>
          </Link>
          <Link to="/baltz">
            <li>On Baltz</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default WritingNav;
