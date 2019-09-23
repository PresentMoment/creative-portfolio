import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Collapsible from "./Components/Collapsible";
import Sidebar from "react-sidebar";
import Landing from "./Components/Landing";
import EMMusic from "./Components/Music/EMMusic";
import BUTW from "./Components/Music/BUTW";
import Blanche from "./Components/Music/Blanche";
import MusicNav from "./Components/Navs/MusicNav";
import Diced from "./Components/Video/Diced";
import Monuments from "./Components/Video/Monuments";
import Welcome from "./Components/Video/Welcome";
import White from "./Components/Video/White";
import VideoNav from "./Components/Navs/VideoNav";
import Guide from "./Components/Writing/Guide";
import Contact from "./Components/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.navCollapse = this.navCollapse.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  navCollapse() {
    this.setState({ sidebarOpen: false });
  }

  render() {
    let buttonStyle = {};
    if (this.state.sidebarOpen) {
      buttonStyle = {
        left: "20vw",
        transition: "transform .2s ease-out",
        WebkitTransition: "-webkit-transform .2s ease-out"
      };
    }
    return (
      <Router>
        <div>
          <Sidebar
            sidebar={
              <div className="navbar">
                <Collapsible title="Music">
                  <MusicNav clickFunction={this.navCollapse} />
                </Collapsible>
                <Collapsible title="Video">
                  <VideoNav clickFunction={this.navCollapse} />
                </Collapsible>
                <Collapsible title="Writings">
                  <Link to="/guide">
                    <div onClick={this.navCollapse}>
                      <p>Orange County Travel Guide</p>
                    </div>
                  </Link>
                </Collapsible>
                <Link to="/">
                  <p id="home" onClick={this.navCollapse}>
                    Home
                  </p>
                </Link>
                <Link to="/contact">
                  <p id="home" onClick={this.navCollapse}>
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
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            shadow={false}
            styles={{
              sidebar: {
                background: "rgba(0,0,0,0.1)",
                width: "20vw",
                height: "100%",
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
                onClick={() => this.onSetSidebarOpen(true)}
                style={buttonStyle}
                src="/images/recycle.png"
                alt=""
              />
            </div>
          </Sidebar>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Landing {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/emmusic"
              render={props => (
                <EMMusic {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/butw"
              render={props => (
                <BUTW {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route exact path="/blanche" component={Blanche} />
            <Route
              exact
              path="/diced"
              render={props => (
                <Diced {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/mooc"
              render={props => (
                <Monuments {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/wth"
              render={props => (
                <Welcome {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/white"
              render={props => (
                <White {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/guide"
              render={props => (
                <Guide {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/contact"
              render={props => (
                <Contact {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
