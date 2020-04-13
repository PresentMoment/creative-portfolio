import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.nav ? "contactScreen" : "contact"}>
        <p>
          <span>Robert Girardin</span>
          <br />
          <span>
            tel: <a href="tel:+1 (213) 769-3973">+1 (213) 769-3973</a>
          </span>
          <br />
          <span>
            What's App:
            <a href="whatsapp://tel:12137693973"> &nbsp; +1 (213) 769-3973</a>
          </span>
          <br />
          <span>
            <a
              href="mailto:robertlgirardin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              robertlgirardin@gmail.com
            </a>
          </span>
        </p>
      </div>
    );
  }
}
