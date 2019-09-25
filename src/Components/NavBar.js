import React, { Component } from "react";
import Collapsible from "./Collapsible";
import Sidebar from "react-sidebar";
import MusicNav from "./Navs/MusicNav";
import VideoNav from "./Navs/VideoNav";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    let buttonStyle = {};
    if (this.props.sidebarOpen) {
      buttonStyle = {
        left: "20vw",
        transition: "transform .2s ease-out",
        WebkitTransition: "-webkit-transform .2s ease-out"
      };
    }
    return (
      <div>
        <Sidebar
          sidebar={
            <div className="navbar">
              <Collapsible title="Music">
                <MusicNav clickFunction={this.props.navCollapse} />
              </Collapsible>
              <Collapsible title="Video">
                <VideoNav clickFunction={this.props.navCollapse} />
              </Collapsible>
              <Collapsible title="Writings">
                <Link to="/guide">
                  <div onClick={this.props.navCollapse}>
                    <ul className="navUL">
                      <li>
                        <p>Orange County Travel Guide</p>
                      </li>
                    </ul>
                  </div>
                </Link>
              </Collapsible>
              <Link to="/">
                <p id="home" onClick={this.props.navCollapse}>
                  Home
                </p>
              </Link>
              <Link to="/contact">
                <p id="home" onClick={this.props.navCollapse}>
                  Contact
                </p>
              </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/our_girardin/"
              >
                <p id="home">Instagram</p>
              </a>
            </div>
          }
          open={this.props.sidebarOpen}
          onSetOpen={this.props.onSetSidebarOpen}
          shadow={false}
          styles={{
            sidebar: {
              background: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0)",
              width: "20vw",
              height: "100vh",
              transition: "transform .3s ease-out",
              WebkitTransition: "-webkit-transform .3s ease-out",
              willChange: "transform",
              overflow: "auto"
            },
            overlay: {
              zIndex: 1,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0,
              visibility: "hidden",
              transition: "opacity .3s ease-out, visibility .3s ease-out",
              backgroundColor: "rgba(0,0,0,0)"
            }
          }}
        >
          <div>
            <img
              className="navButton"
              onClick={() => this.props.onSetSidebarOpen(true)}
              style={buttonStyle}
              src="images/recycle.png"
              alt=""
            />
          </div>
        </Sidebar>
      </div>
    );
  }
}