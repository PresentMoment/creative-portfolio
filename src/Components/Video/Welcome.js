import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import YouTubePlayer from "react-player";
import "../Styles/WelcomeStyle.css";

export default function Welcome(props) {
  const [hunt, setHunt] = useState(false);
  const [camera, setCamera] = useState(false);
  const [title, setTitle] = useState(false);

  const toggleHunt = () => {
    setHunt(!hunt);
  };
  const toggleCamera = () => {
    setCamera(!camera);
  };
  const toggleTitle = () => {
    setTitle(!title);
  };

  const huntTransition = useTransition(hunt, null, {
    config: { mass: 1, tension: 100, friction: 0, clamp: true },
    from: { transform: "translateY(-100px)", opacity: 0 },
    enter: { transform: "translateY(0px)", opacity: 1 },
    leave: { opacity: 0 },
  });
  const cameraTransition = useTransition(camera, null, {
    config: { mass: 1, tension: 100, friction: 0, clamp: true },
    from: { transform: "translateY(-100px)", opacity: 0 },
    enter: { transform: "translateY(0px)", opacity: 1 },
    leave: { opacity: 0 },
  });
  const titleTransition = useTransition(title, null, {
    config: { mass: 1, tension: 100, friction: 0, clamp: true },
    from: { transform: "translateY(-100px)", opacity: 0 },
    enter: { transform: "translateY(0px)", opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <div className={props.nav ? "welcomeScreen" : "welcome"}>
      <div className="player-wrapper">
        <YouTubePlayer
          className="videoPlayer"
          url="https://youtu.be/KpEU0OGpDr0"
        />
      </div>
      <div className="welcome-text">
        <h3 id="welcomeHead">Welcome To Hell</h3>
        <p>
          Welcome To Hell is a skate video without any skateboarding. It
          utilizes the vernacular of skate videos (quick repetitive cuts,
          tracking shots from a skateboard, fisheye lenses, editing to music) to
          highlight the marginal architectural zones sought out by
          skateboarders. With people and action emptied from the frame the
          viewer is left to participate in a desolate, serialized cinemascape of
          stairwells, parking lots, construction sites and public schools.
        </p>

        <div onClick={(e) => toggleHunt(e)}>
          <h3 className={hunt ? "popClicked" : "welcomePop"}>The Hunt</h3>
        </div>
        {huntTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <div>
                  <p>
                    Looking for places where skateboard culture has marked its
                    territory in various ways. Physical markings, waxed curbs,
                    markings of transference. Looking for locations which posses
                    attributes which have been codified into skate culture.
                    Projecting my own personal image of skateboarding onto a
                    place. Looking for disused and anomalous infrastructural
                    corners in which I could imagine a skateboarder performing.
                    Spaces society has provided explicitly for skateboarding.
                    Examining the structure and visual identity of these spaces
                    when approached from a purely aesthetic level.
                  </p>
                </div>
              </animated.div>
            )
        )}
        <div onClick={(e) => toggleCamera(e)}>
          <h3 className={camera ? "popClicked" : "welcomePop"}>The Camera</h3>
        </div>
        {cameraTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                {camera ? (
                  <div>
                    <p>
                      {" "}
                      A Mini DV camera was deliberately utilized. To me,
                      handheld digital video recorders instantly read “skate
                      video” and little else. Growing up in the media saturated
                      landscape of Southern California, the skate videos I
                      watched as an adolescent were some of the only egalitarian
                      media I encountered prior to discovering DIY punk culture.
                      Whereas even in the 90’s most media strove toward a slick
                      commercialism, classic skate videos still look like anyone
                      could make them, which is probably why you still see kids
                      skating around cities carrying Mini DV cameras today. I
                      also wanted to avoid any attempts at quoting the
                      expensively produced, corporate backed skate videos of the
                      current era. These videos, in employing high end lenses,
                      drone photography and the like have abandoned the
                      vernacular of the skate video, embracing the vernacular of
                      the advertisement. For me to quote such videos with a
                      pointed absence of skateboarding would not result in a
                      ‘skate video without skateboarding’ but rather an
                      architectural video about cities, which would have been
                      far from my intent.
                    </p>{" "}
                  </div>
                ) : null}
              </animated.div>
            )
        )}
        <div onClick={(e) => toggleTitle(e)}>
          <h3 className={title ? "popClicked" : "welcomePop"}>The Title</h3>
        </div>
        {titleTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                {title ? (
                  <div>
                    <p>
                      {" "}
                      Another reference to 90’s skate culture, ‘Welcome To Hell’
                      is the title of a Toy Machine video from 1996. It is also
                      a reference to the depopulated, concretized environment
                      depicted in the video, one i made no attempt to highlight
                      but that naturally reveals itself to any filmmaker working
                      at the street level of Southern California.
                    </p>
                  </div>
                ) : null}
              </animated.div>
            )
        )}
      </div>
    </div>
  );
}
