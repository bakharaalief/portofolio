import React from "react";
import { Container } from "react-bootstrap";
import "./about.scss";
import photo from "./photo/1523342418956 (1).jpg";

export default function about() {
  const pencet = input => {
    if (input === "ig") {
      window.open("https://www.instagram.com/bakhara_alief/");
    } else if (input === "twitter") {
      window.open("https://twitter.com/bakharaalief12");
    } else if (input === "github") {
      window.open("https://github.com/bakharaalief");
    }
  };
  return (
    <div className="about" id="about">
      <Container>
        <h1>About</h1>
        <div className="profile">
          <div className="image">
            <img src={photo} alt="" />
          </div>
          <div className="text">
            <h2>Hello, Im Bakhara</h2>
            <p>
              I'm from Indonesia. i'm computer science student, i made this site
              to share my project. for me, the best learning something is with
              do it. with that, i know what the problem, than i solved it.
              <br />
              Sorry, for my English XOXO
              <br />
              <br />
              I can use ReactJS, SASS, Redux,Bootstrap, litle bit Django and
              Firebase
              <br />
              <br />
              Contact Me:
            </p>
            <div className="social">
              <div className="ig" onClick={() => pencet("ig")}>
                <img src="https://www.freepnglogos.com/uploads/best-instagram-logo-download-here-15.png" />
              </div>
              <div className="twitter" onClick={() => pencet("twitter")}>
                <img
                  src="http://pluspng.com/img-png/twitter-logo-vector-png--512.png"
                  alt=""
                />
              </div>
              <div className="github" onClick={() => pencet("github")}>
                <img
                  src="https://www.shareicon.net/data/512x512/2015/08/04/79769_square_512x512.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
