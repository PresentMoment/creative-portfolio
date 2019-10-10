import React, { Component } from "react";
import "../Styles/ObjectStyle.css";

export default class Object extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.sidebarOpen ? "objectScreen" : "object"}>
        <div className="object-container">
          <div className="object-image1">
            <img src="images/objectfront.jpg" alt="" />
          </div>
          <div className="object-text">
            <p>
              Original music and production by Robert Girardin. <br />
              Photography by Robert Girardin. <br />
              Designed by Robert Girardin and Simone Trabucchi.
            </p>

            <p>
              Published by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://paltoflats.com/"
              >
                Hundebiss
              </a>
              , Milan
            </p>
          </div>
          <div className="object-image1">
            <img id="stfull" src="images/objectback.jpg" alt="" />
          </div>
          <div className="object-image1">
            <img src="images/objectfold1.jpg" alt="" />
          </div>
          <div className="object-image1">
            <img src="images/objectfold2.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
