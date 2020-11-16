import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
class SearchResults extends React.Component {
  componentDidMount() {
    this.props.getSearch();
  }

  render() {
    const { search } = this.props;
    return (
      search && (
        <>
          <div id="search-results-body">
            <h3 id="results-h3">
              <em>
                Your top <span id="ticity-results">TICities</span> are...
              </em>
            </h3>
            <div className="container" id="search-results-page">
              <Row xs="1" sm="2" md="3">
                <>
                  <div key="city1" className="search-result-card">
                    <h3>{search.city1}</h3>
                    <br />
                    <Link
                      to={`/cityshow/${search.id}/${search.city1}`}
                      className="button more-info"
                    >
                      More Info
                    </Link>
                  </div>
                  <div key="city2" className="search-result-card">
                    <h3>{search.city2}</h3>
                    <br />
                    <Link
                      to={`/cityshow/${search.id}/${search.city2}`}
                      className="button more-info"
                    >
                      More Info
                    </Link>
                  </div>
                  <div key="city3" className="search-result-card">
                    <h3>{search.city3}</h3>
                    <br />
                    <Link
                      to={`/cityshow/${search.id}/${search.city3}`}
                      className="button more-info"
                    >
                      More Info
                    </Link>
                  </div>
                </>
              </Row>
            </div>
            <div>
              {this.props.logged_in && (
                <>
                  <Link
                    to={`/searchedit/${search.id}`}
                    className="button edit-search"
                  >
                    Edit Search
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )
    );
  }
}

export default SearchResults;
