import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="not-found-page">
          <h3>UH OH! PAGE NOT FOUND!</h3>
          <p>
            Looks like you may be lost. <br />
            May we suggest you head back to our home page <br /> so we can help
            you find your TICity!
          </p>
          <Link to={"/home"} className="button not-found-button">
            Home
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
