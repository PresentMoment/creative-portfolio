import React, { useState, useEffect } from "react";
import MusicNav from "./Navs/MusicNav";
import VideoNav from "./Navs/VideoNav";
import PhotosNav from "./Navs/PhotosNav";
import WritingNav from "./Navs/WritingNav";
import { Link } from "react-router-dom";

import {
  HashRouter as Router,
  withRouter,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "./Landing";
import EMMusic from "./Music/EMMusic";
import BUTW from "./Music/BUTW";
import Blanche from "./Music/Blanche";
import Diced from "./Video/Diced";
import Monuments from "./Video/Monuments";
import Welcome from "./Video/Welcome";
import White from "./Video/White";
import Guide from "./Writing/Guide";
import Contact from "./Contact";
import Stress from "./Music/StressTest";
import Keys from "./Music/Keys";
import DicedRecord from "./Music/Diced";
import ObjectDom from "./Music/ObjectLP";
import Carrara from "./Photos/Carrara";
import LaQuinta from "./Photos/LaQuinta";
import Promenade from "./Music/Promenade";
import Mixes from "./Music/Mixes";

export default withRouter(function NavBar(props) {
  const [nav, setNav] = useState(false);

  let [menuClicked, menuValue] = useState([]);

  const setMenu = (e) => {
    menuValue([...menuClicked, e.target.id]);
  };

  useEffect(() => {
    props.history.listen(() => {
      setNav(false);
    });
  });

  const toggleNav = (e) => {
    if (e.target.id !== menuClicked[menuClicked.length - 1] && nav) {
    } else {
      setNav(!nav);
    }
  };

  return (
    <Router>
      <div>
        <div className="topNav">
          <div
            onClick={(e) => {
              props.toggleMusic();
              setMenu(e);
              toggleNav(e);
            }}
          >
            <p id="music">Music</p>
            {props.musicOpen ? <MusicNav /> : null}
          </div>
          <div
            onClick={(e) => {
              props.toggleVideos();
              setMenu(e);
              toggleNav(e);
            }}
          >
            <p id="videos">Videos</p>
            {props.videosOpen ? <VideoNav /> : null}
          </div>
          <div
            onClick={(e) => {
              props.togglePhotos();
              setMenu(e);
              toggleNav(e);
            }}
          >
            <p id="photos">Photos</p>
            {props.photosOpen ? <PhotosNav /> : null}
          </div>
          <div
            onClick={(e) => {
              props.toggleWriting();
              setMenu(e);
              toggleNav(e);
            }}
          >
            <p id="writing">Writing</p>
            {props.writingOpen ? <WritingNav /> : null}
          </div>
          <div
            onClick={() => {
              setNav(false);
            }}
          >
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/our_girardin/"
          >
            <p>Instagram</p>
          </a>
        </div>
        <div style={{ width: "100%", height: "50px" }} />
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Landing {...props} nav={nav} />}
            />
            <Route
              exact
              path="/promenade"
              render={(props) => <Promenade {...props} nav={nav} />}
            />
            <Route
              exact
              path="/emmusic"
              render={(props) => <EMMusic {...props} nav={nav} />}
            />
            <Route
              exact
              path="/stress"
              render={(props) => <Stress {...props} nav={nav} />}
            />
            <Route
              exact
              path="/keys"
              render={(props) => <Keys {...props} nav={nav} />}
            />
            <Route
              exact
              path="/dicedrecord"
              render={(props) => <DicedRecord {...props} nav={nav} />}
            />
            <Route
              exact
              path="/objectdom"
              render={(props) => <ObjectDom {...props} nav={nav} />}
            />
            <Route
              exact
              path="/butw"
              render={(props) => <BUTW {...props} nav={nav} />}
            />
            <Route
              exact
              path="/blanche"
              render={(props) => <Blanche {...props} nav={nav} />}
            />
            <Route
              exact
              path="/diced"
              render={(props) => <Diced {...props} nav={nav} />}
            />
            <Route
              exact
              path="/mooc"
              render={(props) => <Monuments {...props} nav={nav} />}
            />
            <Route
              exact
              path="/wth"
              render={(props) => <Welcome {...props} nav={nav} />}
            />
            <Route
              exact
              path="/white"
              render={(props) => <White {...props} nav={nav} />}
            />
            <Route
              exact
              path="/guide"
              render={(props) => <Guide {...props} nav={nav} />}
            />
            <Route
              exact
              path="/contact"
              render={(props) => <Contact {...props} nav={nav} />}
            />
            <Route
              exact
              path="/apuana"
              render={(props) => <Carrara {...props} nav={nav} />}
            />
            <Route
              exact
              path="/laquinta"
              render={(props) => <LaQuinta {...props} nav={nav} />}
            />
            <Route
              exact
              path="/mixes"
              render={(props) => <Mixes {...props} nav={nav} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
});
