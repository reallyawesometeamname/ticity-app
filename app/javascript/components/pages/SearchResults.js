import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class SearchResults extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Your top TICities are...</h3>
        <div className="body-container">
          {this.props.searches.map((search, index) => {
            return (
              <>
                <div key={index} className="search-result-card">
                  <h3>{search.city1}</h3>
                  <br />
                  <Link to={`/cityshow/${search.id}`} className="button">
                    More Info
                  </Link>
                </div>
                <div key={index} className="search-result-card">
                  <h3>{search.city2}</h3>
                  <br />
                  <Link to={`/cityshow/${search.id}`} className="button">
                    More Info
                  </Link>
                </div>
                <div key={index} className="search-result-card">
                  <h3>{search.city3}</h3>
                  <br />
                  <Link to={`/cityshow/${search.id}`} className="button">
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
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResults;
