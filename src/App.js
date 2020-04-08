import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import EMMusic from "./Components/Music/EMMusic";
import BUTW from "./Components/Music/BUTW";
import Blanche from "./Components/Music/Blanche";
import Diced from "./Components/Video/Diced";
import Monuments from "./Components/Video/Monuments";
import Welcome from "./Components/Video/Welcome";
import White from "./Components/Video/White";
import Guide from "./Components/Writing/Guide";
import Contact from "./Components/Contact";
import Development from "./Components/Development";
import NavBar from "./Components/NavBar";
import Stress from "./Components/Music/StressTest";
import Keys from "./Components/Music/Keys";
import DicedRecord from "./Components/Music/Diced";
import ObjectDom from "./Components/Music/ObjectLP";
import Carrara from "./Components/Photos/Carrara";
import LaQuinta from "./Components/Photos/LaQuinta";
import Promenade from "./Components/Music/Promenade";
import Mixes from "./Components/Music/Mixes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
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
    return (
      <Router>
        <div>
          <NavBar
            navCollapse={this.navCollapse}
            sidebarOpen={this.state.sidebarOpen}
            onSetSidebarOpen={this.onSetSidebarOpen}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Landing {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/promenade"
              render={(props) => (
                <Promenade {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/emmusic"
              render={(props) => (
                <EMMusic {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/stress"
              render={(props) => (
                <Stress {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/keys"
              render={(props) => (
                <Keys {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/dicedrecord"
              render={(props) => (
                <DicedRecord {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/objectdom"
              render={(props) => (
                <ObjectDom {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/butw"
              render={(props) => (
                <BUTW {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route exact path="/blanche" component={Blanche} />
            <Route
              exact
              path="/diced"
              render={(props) => (
                <Diced {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/mooc"
              render={(props) => (
                <Monuments {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/wth"
              render={(props) => (
                <Welcome {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/white"
              render={(props) => (
                <White {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/guide"
              render={(props) => (
                <Guide {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/contact"
              render={(props) => (
                <Contact {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/dev"
              render={(props) => (
                <Development {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/apuana"
              render={(props) => (
                <Carrara {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/laquinta"
              render={(props) => (
                <LaQuinta {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
            <Route
              exact
              path="/mixes"
              render={(props) => (
                <Mixes {...props} sidebarOpen={this.state.sidebarOpen} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
