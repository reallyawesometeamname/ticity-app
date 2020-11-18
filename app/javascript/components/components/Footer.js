import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div id="footer">
          <Nav>
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
