import React, { Component } from "react";
import "../Styles/BlancheStyle.css";

export default class Blanche extends Component {
  render() {
    return (
      <div className={this.props.nav ? "blancheScreen" : "blanche"}>
        <div className="blanche-txt">
          <p>
            Original Soundtrack for{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.poriartmuseum.fi/eng/exhibitions/2018/217/"
            >
              Vers l’Europa Deserta, Terra Incognita
            </a>
            , a film by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://invernomuto.info/"
            >
              Invernomuto
            </a>
            .<br />
            Premiered at the Pori Art Museum as part of the 2017 Nuit Blanche in
            Paris.
          </p>
        </div>
        <div className="blanche-img">
          <img src="images/blanche1.jpg" alt="" />
          <img src="images/blanche2.jpg" alt="" />
          <img src="images/blanche3.jpg" alt="" />
        </div>
      </div>
    );
  }
}
