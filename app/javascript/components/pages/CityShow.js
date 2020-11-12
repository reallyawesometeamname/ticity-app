import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cityData from "../TicityCities.js";

class CityShow extends React.Component {
  componentDidMount() {
    const { search } = this.props;
    let currentCity = this.props.currentCity;

    const focusCity = Object.values(cityData).filter(
      (x) => x.name === currentCity
    )[0];
    let cityHREF = focusCity.href;

    this.getTPCityData(cityHREF);
  }

  constructor(props) {
    super(props);
    this.state = {
      form: {
        categories: null,
        summary: null,
        overallCityScore: 0,
      },
      success: false,
    };
  }

  getTPCityData = (cityTPWebsite) => {
    let { form } = this.state;
    fetch(cityTPWebsite)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((payload) => {
        form["categories"] = payload.categories;
        form["summary"] = payload.summary;
        form["overallCityScore"] = parseInt(payload.teleport_city_score);
        this.setState({ form: form });
        this.setState({ success: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      this.state.success && (
        <>
          <h4>City Info</h4>
          <div id="city-show-body">
            <h4>
              Housing is a{" "}
              {this.state.form.categories[0].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Cost of Living is a{" "}
              {this.state.form.categories[1].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Startup Opportunities is a{" "}
              {this.state.form.categories[2].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Venture Capital is a{" "}
              {this.state.form.categories[3].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Travel Connectivity is a{" "}
              {this.state.form.categories[4].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Commute is a{" "}
              {this.state.form.categories[5].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Business Freedom is a{" "}
              {this.state.form.categories[6].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Safety is a{" "}
              {this.state.form.categories[7].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Healthcare is a{" "}
              {this.state.form.categories[8].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Education is a{" "}
              {this.state.form.categories[9].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Environmental Quality is a{" "}
              {this.state.form.categories[10].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Economy is a{" "}
              {this.state.form.categories[11].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Taxation is a{" "}
              {this.state.form.categories[12].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Internet Access is a{" "}
              {this.state.form.categories[13].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Leisure & Culture is a{" "}
              {this.state.form.categories[14].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              Tolerance is a{" "}
              {this.state.form.categories[15].score_out_of_10.toFixed(2)} out of
              10
            </h4>
            <h4>
              The Overall City Score ={" "}
              {this.state.form.overallCityScore.toFixed(2)}
            </h4>
            {this.state.form.summary}
            {!this.props.logged_in && (
              <Link
                to={`/searchresults/${this.props.search.id}`}
                className="button"
              >
                Back to Searches
              </Link>
            )}
            {this.props.logged_in && (
              <Link to={"/mysearchindex"} className="button">
                Back to Searches
              </Link>
            )}
          </div>
        </>
      )
    );
  }
}

export default CityShow;
