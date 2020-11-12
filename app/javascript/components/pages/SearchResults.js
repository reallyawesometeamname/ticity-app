import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class SearchResults extends React.Component {
  componentDidMount() {
    this.props.getSearch();
  }

  render() {
    const { search } = this.props;
    return (
      search && (
        <>
          <h3>Your top TICities are...</h3>
          <div className="body-container">
            <>
              <div key="city1" className="search-result-card">
                <h3>{search.city1}</h3>
                <br />
                <Link
                  to={`/cityshow/${search.id}/${search.city1}`}
                  className="button"
                >
                  More Info
                </Link>
              </div>
              <div key="city2" className="search-result-card">
                <h3>{search.city2}</h3>
                <br />
                <Link
                  to={`/cityshow/${search.id}/${search.city2}`}
                  className="button"
                >
                  More Info
                </Link>
              </div>
              <div key="city3" className="search-result-card">
                <h3>{search.city3}</h3>
                <br />
                <Link
                  to={`/cityshow/${search.id}/${search.city3}`}
                  className="button"
                >
                  More Info
                </Link>
              </div>
              {this.props.logged_in && (
                <>
                  <Link to={`/searchedit/${search.id}`} className="button">
                    Edit this Search
                  </Link>
                </>
              )}
            </>
          </div>
        </>
      )
    );
  }
}

export default SearchResults;
