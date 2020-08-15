import React, { useState, useEffect } from "react";
import MusicNav from "./Navs/MusicNav";
import VideoNav from "./Navs/VideoNav";
import PhotosNav from "./Navs/PhotosNav";
import WritingNav from "./Navs/WritingNav";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { createBrowserHistory } from "history";
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

export default (function NavBar(props) {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    if (
      props.musicOpen ||
      props.videosOpen ||
      props.photosOpen ||
      props.writingOpen
    ) {
      setNav(true);
    } else {
      setNav(false);
    }
  }, [
    props.musicOpen,
    props.videosOpen,
    props.photosOpen,
    props.writingOpen,
    props.history,
  ]);

  return (
    <Router>
      <div>
        <div className="topNav">
          <div
            onClick={(e) => {
              props.toggleMusic();
            }}
          >
            <p id="music">Music</p>
            {props.musicOpen ? <MusicNav /> : null}
          </div>
          <div
            onClick={(e) => {
              props.toggleVideos();
            }}
          >
            <p id="videos">Videos</p>
            {props.videosOpen ? <VideoNav /> : null}
          </div>
          <div
            onClick={(e) => {
              props.togglePhotos();
            }}
          >
            <p id="photos">Photos</p>
            {props.photosOpen ? <PhotosNav /> : null}
          </div>
          <div
            onClick={(e) => {
              props.toggleWriting();
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
