import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import ticityBackground from "../assets/ticityBackground.jpg";

class Home extends React.Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
    } = this.props;
    return (
      <React.Fragment>
        <div
          id="home"
          style={{
            backgroundImage: `url(${ticityBackground})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: "0.9",
          }}
        >
          <h1 id="home-title">Find Your Next Dream Location!</h1>
          <div className="container home">
            <p id="home-text">
              TICity finds your next home using predetermined categories such
              as: Cost of Living, Housing, Commute, Venture Capital, Education,
              and more! Simply rank how important a category is and we will tell
              you your top 3 locations!
            </p>
          </div>
          <div className="container button">
            <Link to={"/searchnew"} className="button" id="home-button">
              <Button>Find your TICity!</Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
