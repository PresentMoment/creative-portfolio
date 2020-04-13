import React, { Component } from "react";
import "../Styles/StressStyle.css";

export default class Stress extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.nav ? "stressScreen" : "stress"}>
        <div className="stress-container">
          <div className="stress-image1">
            <img src="images/stfront.jpg" alt="" />
          </div>
          <div className="stress-text">
            <p>
              Original music and production by Robert Girardin. Designed by
              Robert Girardin and Simone Trabucchi
            </p>

            <p>
              Published by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hundebissrecords.bigcartel.com/"
              >
                Hundebiss
              </a>
              , Milan
            </p>
          </div>
          <div className="stress-image1">
            <img id="stfull" src="images/stfull.jpg" alt="" />
          </div>
          <div className="stress-image1">
            <img src="images/stinsert.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
