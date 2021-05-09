import React, { useState, useEffect } from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import MusicNav from "./Navs/MusicNav";
import VideoNav from "./Navs/VideoNav";
import PhotosNav from "./Navs/PhotosNav";
import WritingNav from "./Navs/WritingNav";

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
import Alaska from "./Photos/Alaska";
import Diary from "./Photos/Diary";
import Promenade from "./Music/Promenade";
import Mixes from "./Music/Mixes";
import Baltz from "./Writing/Baltz";

import useMediaQuery from "../Utils/useMediaQuery";

export default withRouter(function NavBar(props) {
  const { location } = { ...props };
  const [nav, setNav] = useState(false);
  const smallPhoneBreak = useMediaQuery(376);
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
  }, [props.musicOpen, props.videosOpen, props.photosOpen, props.writingOpen, props.history, location]);

  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      position: "absolute",
      transform: "translateX(-100%)",
    },
    enter: {
      position: `${location.pathname === "/blanche" ? "fixed" : "absolute"}`,
      width: `${!smallPhoneBreak ? "99.5%" : "99%"}`,
      transform: `${
        location.pathname === "/blanche" ? "translateX(-10)" : "translateX(0)"
      }`,
    },
    leave: {
      position: "absolute",
      transform: "translateX(100%)",
    },
  });

  return (
    <>
      <div id={props.isScrolling ? "navScroll" : null} className="topNav">
        <div
          onClick={() => {
            props.toggleMusic();
          }}
          className="navLink"
        >
          <span id="music">Music</span>
          {props.musicOpen ? <MusicNav /> : null}
        </div>
        <div
          onClick={() => {
            props.toggleVideos();
          }}
          className="navLink"
        >
          <span id="videos">Videos</span>
          {props.videosOpen ? <VideoNav /> : null}
        </div>
        <div
          onClick={() => {
            props.togglePhotos();
          }}
          className="navLink"
        >
          <span id="photos">Photos</span>
          {props.photosOpen ? <PhotosNav /> : null}
        </div>
        <div
          onClick={() => {
            props.toggleWriting();
          }}
          className="navLink"
        >
          <span id="writing">Writing</span>
          {props.writingOpen ? <WritingNav /> : null}
        </div>
        <div
          onClick={() => {
            setNav(false);
          }}
          className="navLink"
        >
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </div>
        <div className="navLink">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/our_girardin/"
          >
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="navSpacer" />
      {transitions.map(({ item, props }) => (
        <animated.div key={item.key} style={props} className="aniDiv">
          <div style={{ marginLeft: "8px" }}>
            <Switch location={item}>
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
                path="/baltz"
                render={(props) => <Baltz {...props} nav={nav} />}
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
                path="/alaska"
                render={(props) => <Alaska {...props} nav={nav} />}
              />
              <Route
                exact
                path="/diary"
                render={(props) => <Diary {...props} nav={nav} />}
              />
              <Route
                exact
                path="/mixes"
                render={(props) => <Mixes {...props} nav={nav} />}
              />
            </Switch>
          </div>
        </animated.div>
      ))}
    </>
  );
});
