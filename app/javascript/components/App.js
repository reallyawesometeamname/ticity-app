import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import CityShow from "./pages/CityShow";
import Home from "./pages/Home";
import MySearchIndex from "./pages/MySearchIndex";
import NotFound from "./pages/NotFound";
import SearchNew from "./pages/SearchNew";
import SearchEdit from "./pages/SearchEdit";
import SearchResults from "./pages/SearchResults";

import cityData from "./TicityCities.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PropTypes from "prop-types";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searches: [],
    };
  }

  componentDidMount() {
    this.getSearches();
  }

  getSearches = () => {
    fetch("/ticity_searches")
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        this.setState({ searches: payload });
      })
      .catch((errors) => {
        console.log("index errors:", errors);
      });
  };

  createNewSearch = (search) => {
    console.log(search);
    return fetch("/ticity_searches", {
      body: JSON.stringify(search),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        this.getSearches();
      })
      .catch((errors) => {
        console.log("create errors:", errors);
      });
  };

  updateSearch = (search, id) => {
    console.log("Search", search, "id", id);
    return fetch(`/ticity_searches/${id}`, {
      // converting an object to a string
      body: JSON.stringify(search),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json",
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH",
    })
      .then((response) => {
        if (response.status === 200) {
          this.getSearches();
        }
        return response;
      })
      .catch((errors) => {
        console.log("edit errors", errors);
      });
  };

  deleteSearch = (id) => {
    console.log(id);
    return fetch(`/ticity_searches/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => {
        alert("Remove this search?");
        this.getSearches();
        return response;
      })
      .catch((errors) => {
        console.log("delete errors:", errors);
      });
  };

  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      sign_up_route,
      current_user,
    } = this.props;
    return (
      <Router>
        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_up_route={sign_up_route}
          sign_out_route={sign_out_route}
        />

        <Switch>
          <Route exact path="/" component={Home} />
          {logged_in && (
            <Route
              path="/searchedit/:id"
              render={(props) => {
                const id = props.match.params.id;
                const search = this.state.searches.find(
                  (search) => search.id === parseInt(id)
                );
                return (
                  <SearchEdit
                    updateSearch={this.updateSearch}
                    current_user={current_user}
                    search={search}
                    logged_in={logged_in}
                  />
                );
              }}
            />
          )}
          {logged_in && (
            <Route
              path="/mysearchindex"
              render={(props) => {
                let user = current_user.id;
                let searches = this.state.searches.filter(
                  (search) => search.user_id === user
                );
                return (
                  <MySearchIndex
                    searches={searches}
                    deleteSearch={this.deleteSearch}
                  />
                );
              }}
            />
          )}
          <Route
            path="/searchresults"
            render={(props) => (
              <SearchResults
                searches={this.state.searches.filter(
                  (search) => search.id === 6
                )}
                logged_in={logged_in}
              />
            )}
          />
          <Route
            path="/searchnew"
            render={(props) => (
              <SearchNew
                createNewSearch={this.createNewSearch}
                current_user={current_user}
              />
            )}
          />
          }
          <Route
            path="/cityshow/:id"
            render={(props) => {
              let currentCityId = props.match.params.id;
              let city = cityData.find((result) => result.id === currentCityId);
              return <CityShow city={city} />;
            }}
          />
          <Route path="/aboutus" component={AboutUs} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
