import React from "react"
import { Link } from "react-router-dom"

class MySearchIndex extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Saved TICities</h3>
        <div id="search-index-body">
          {this.props.searches.map((search, index) => {
            return (
              <div key={index} className="searches-card">
                <h3>{search.city1}</h3>
                <h3>{search.city2}</h3>
                <h3>{search.city3}</h3>
                <br />
                <Link to={`/searchresults/${search.id}`} className="button">
                    More Info
                </Link>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default MySearchIndex
