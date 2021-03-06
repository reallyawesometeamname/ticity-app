import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import ticityLogo from "../assets/ticityLogo.png";

class Header extends React.Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
    } = this.props;
    return (
      <>
        <div id="header">
          <Nav>
            <NavItem>
              <a href="/">Home</a>
            </NavItem>
            {logged_in && (
              <>
                <NavItem>
                  <a href="/searchnew">New Search</a>
                </NavItem>
                <img src={ticityLogo} id="header-logo"></img>
                <NavItem>
                  <a href={sign_out_route}>Sign Out</a>
                </NavItem>
                <NavItem>
                  <a href="/mysearchindex">Saved Searches</a>
                </NavItem>
              </>
            )}
            {!logged_in && (
              <>
                <img src={ticityLogo} id="header-logo"></img>
                <NavItem>
                  <a href={sign_in_route}>Sign In</a>
                </NavItem>
                <NavItem>
                  <a href={sign_up_route}>Sign Up</a>
                </NavItem>
              </>
            )}
          </Nav>
        </div>
      </>
    );
  }
}

export default Header;
