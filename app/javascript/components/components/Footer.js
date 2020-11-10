import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
    } = this.props;
    return (
      <>
        <div id="footer">
          <Nav>
            <NavItem>
              <a href="/">Home</a>
            </NavItem>
            <NavItem>
              <a href="/searchnew">New Search</a>
            </NavItem>
            <NavItem>
              <a href="/aboutus">About Us</a>
            </NavItem>
          </Nav>
        </div>
      </>
    );
  }
}

export default Footer;
