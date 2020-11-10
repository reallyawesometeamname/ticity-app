import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import brian from "../assets/brian.png";
import chuck from "../assets/chuck.png";
import matt from "../assets/matt.png";

class AboutUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3 id="about-title">Who is this Really Awesome Team?</h3>
        <div className="container">
          <Row>
            <Col>
              <div className="about-us-card" id="card1">
                <div className="img-buttons-container">
                  <Row>
                    <Col>
                      <img
                        className="about-pics"
                        src={brian}
                        alt="Picture of Brian's adorable face"
                      ></img>
                    </Col>
                    <Col>
                      <Button className="link-stacks">
                        <a
                          href={
                            "https://www.linkedin.com/in/brianthomashammond/"
                          }
                          className="button"
                        >
                          LinkedIn
                        </a>
                      </Button>
                      <Button className="link-stacks">
                        <a
                          href={"https://brianthomashammond.netlify.app/"}
                          className="button"
                        >
                          Portfolio Site
                        </a>
                      </Button>
                      <Button className="link-stacks">
                        <a
                          href={"https://github.com/brianthomashammond"}
                          className="button"
                        >
                          GitHub
                        </a>
                      </Button>
                    </Col>
                  </Row>
                </div>
                <h3>Brian Thomas Hammond</h3>
                <p>
                  Brian, is a full stack web developer at LEARN Academy. He
                  collaborates with creators across disciplines to generate
                  precise, supportive apps that empower users as they meet and
                  surpass their internal goals. Prior to LEARN, Brian was a
                  professional performer, teaching artist, and music director
                  based in San Diego who worked locally, nationally, and
                  internationally.
                </p>
              </div>
            </Col>
            <Col>
              <div className="about-us-card" id="card2">
                <div className="img-buttons-container">
                  <Row>
                    <Col>
                      <img
                        className="about-pics"
                        src={chuck}
                        alt="Picture of Chuck's handsome face"
                      ></img>
                    </Col>
                    <Col>
                      <Button className="link-stacks">
                        <a
                          href={
                            "https://www.linkedin.com/in/chuck-gilbreth-jr/"
                          }
                          className="button"
                        >
                          LinkedIn
                        </a>
                      </Button>
                      <Button className="link-stacks">
                        <a
                          href={"https://crgjr66.github.io/"}
                          className="button"
                        >
                          Portfolio Site
                        </a>
                      </Button>
                      <Button className="link-stacks">
                        <a
                          href={"https://github.com/crgjr66"}
                          className="button"
                        >
                          GitHub
                        </a>
                      </Button>
                    </Col>
                  </Row>
                </div>
                <h3>Chuck Gilbreth</h3>
                <p>
                  With the current environment, Chuck felt now was a good time
                  to learn something new. As a student at the LEARN Academy in
                  San Diego, he began studying full-stack software development
                  which he feels was a good way to augment embedded software
                  with a greater knowledge of applications, servers, databases,
                  and the web. Chuck is already an experienced Software
                  Engineer/Manager with a demonstrated history of working in
                  both wireless, power, and avionics industries. Skilled in
                  Software Design, Device Drivers, Embedded Software, and
                  Embedded Systems. Strong engineering professional with a
                  Bachelor of Science (B.S.) focused in Computer Science from
                  Chapman University.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="about-us-card" id="card3">
                <div className="img-buttons-container">
                  <Row>
                    <Col>
                      <img
                        className="about-pics"
                        src={matt}
                        alt="Picture of Matt's face looking downward"
                      ></img>
                    </Col>
                    <Col>
                      <Button className="link-stacks">
                        <a
                          href={"https://www.linkedin.com/in/matt-mullis-01/"}
                          className="button"
                        >
                          LinkedIn
                        </a>
                      </Button>
                      <Button className="link-stacks">
                        <a
                          href={
                            "https://mmullis07.github.io/Matt-Mullis-Portfolio/"
                          }
                          className="button"
                        >
                          Portfolio Site
                        </a>
                      </Button>
                      <Button className="link-stacks">
                        <a
                          href={"https://github.com/MMullis07"}
                          className="button"
                        >
                          GitHub
                        </a>
                      </Button>
                    </Col>
                  </Row>
                </div>
                <h3>Matt Mullis</h3>
                <p>
                  Matt is a developer who loves the creativity of the front end
                  and logical flow of the backend. He has a strong passion for
                  creating eye-pleasing experiences for users through his
                  styling. He also has two years of teaching in the Special
                  Education field and five years of leadership experience with
                  the Marine Corps. When he isn’t grinding away code at his desk
                  you can find him making appearances all throughout San Diego
                  as Captain America and other characters for charity events.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
