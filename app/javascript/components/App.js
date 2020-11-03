import React from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"

import AboutUs from "./pages/AboutUs"
import CityShow from "./pages/CityShow"
import Home from "./pages/Home"
import MySearchIndex from "./pages/MySearchIndex"
import NotFound from "./pages/NotFound"
import Search from "./pages/Search"
import SearchEdit from "./pages/SearchEdit"
import SearchResults from "./pages/SearchResults"

import mockSearch from "./mockSearch.js"

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
        <h1>Welcome to TICity!</h1>
        { logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }

        { !logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }

        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/searchedit/:id" component={SearchEdit} />
          <Route path="/mysearchindex" component={MySearchIndex} />
          <Route path="/searchresults" component={SearchResults} />
          <Route path="/search" component={Search} />
          <Route path="/cityshow/:id" component={CityShow} />
          <Route path="/aboutus" component={AboutUs} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App
