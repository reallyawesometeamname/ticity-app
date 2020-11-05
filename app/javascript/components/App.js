import React from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"

import AboutUs from "./pages/AboutUs"
import CityShow from "./pages/CityShow"
import Home from "./pages/Home"
import MySearchIndex from "./pages/MySearchIndex"
import NotFound from "./pages/NotFound"
import SearchNew from "./pages/SearchNew"
import SearchEdit from "./pages/SearchEdit"
import SearchResults from "./pages/SearchResults"

import mockSearch from "./mockSearch.js"
import cityData from './TicityCities.js'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import PropTypes from "prop-types"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searches: mockSearch
    }
  }

  createNewSearch = (search) => {
    console.log(search);
  }

  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      sign_up_route,
      current_user
    } = this.props
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

          <Route path="/searchedit/:id" component={SearchEdit} />

          {logged_in &&
            <Route
              path="/mysearchindex"
              render={(props) => {
                let user = current_user.id
                let searches =
                  this.state.searches.filter(search => search.user_id === user)
                return (
                  <MySearchIndex searches={searches}
                  />
                )
              }}
            />
          }

          <Route
            path="/searchresults"
            render={(props) =>
              <SearchResults
                searches=
                {this.state.searches.filter(search => search.id === 1)}
              />
            }
          />

          <Route
            path="/searchnew"
            render={(props) =>
              <SearchNew
                createNewSearch={this.createNewSearch}
                current_user={current_user}
              />
            }
          />
            }

          <Route
            path="/cityshow/:id"
            render={(props) => {
              let cityName = props.match.params.id
              let city = cityData.find(result => result.id === cityName)
              return (
                <CityShow
                  city={city}
                />
              )
            }
            }
          />
          <Route path="/aboutus" component={AboutUs} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App
