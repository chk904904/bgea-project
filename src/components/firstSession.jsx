import React, { Component } from "react";
import "../css/firstSessionStyle.css";
import first_flower from "../images/first_flower.svg";
import second_flower from "../images/second_flower.svg";
import { animated, Spring } from "react-spring/renderprops";

class FirstSession extends Component {
  render() {
    return (
      <div id="first_session">
        <div>
          <div>
            <Spring
              native
              config={{ duration: 800 }}
              from={{ opacity: 0, top: "10vh" }}
              to={{ opacity: 1, top: "19vh", left: "25vh" }}
            >
              {(props) => (
                <animated.p style={props} id="first_sentence">
                  Nothing
                  <br />
                  about us,
                </animated.p>
              )}
            </Spring>
          </div>

          <div>
            <Spring
              native
              config={{ duration: 800 }}
              from={{ opacity: 0, top: "23vh" }}
              to={{ opacity: 1, top: "33vh", right: "-37vw" }}
            >
              {(props) => (
                <animated.p style={props} id="second_sentence">
                  without us.
                </animated.p>
              )}
            </Spring>
          </div>
          <div>
            <Spring
              native
              config={{ duration: 800 }}
              from={{ opacity: 0, left: "-26vw" }}
              to={{ opacity: 0.6, left: "-10vw", top: "-18vw" }}
            >
              {(props) => (
                <animated.img
                  style={props}
                  src={first_flower}
                  alt="first_flower"
                  id="first_flower"
                />
              )}
            </Spring>
          </div>
          <div>
            <Spring
              native
              config={{ duration: 800 }}
              from={{ opacity: 0, right: "-40vw" }}
              to={{ opacity: 0.8, right: "-27vw", top: "-62vw" }}
            >
              {(props) => (
                <animated.img
                  style={props}
                  src={second_flower}
                  alt="second_flower"
                  id="second_flower"
                />
              )}
            </Spring>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstSession;
