import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
class SearchResults extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3>Your top TICities are...</h3>
                <div id="search-results-body">
                    {this.props.searches.map((search, index) => {
                        return (
                            <>
                                <div key={index} className="search-result-card">
                                    <h3>{search.city1}</h3>
                                    <br />
                                    <Link to={`/cityshow/${search.city1}`} city1={search.city1} className="button">
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
                                    {/* <Link to={`/searchresults/${search.id}`} className="button">
                                    More Info
                                    </Link> */}
                                </div>
                            </>
                        )
                    })}
                </div>
            </React.Fragment >
        );
    }
}

export default SearchResults