import React from "react";
import { capitalize } from "../../util/Util";
import { Nav, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { strings } from "../../strings/Strings";
import "./navbar.css";

//NavLink will be used for app navigation when user logged (another menu)

const navItems = [
  { name: strings.navbar.navItems.LOGO },
  { name: strings.navbar.navItems.ABOUT },
  { name: strings.navbar.navItems.CONTACT }
  // options below will be used when user go to get started page
  //{ name: "se connecter", path: "/login" },
  //{ name: "s'inscrire", path: "/signup" }
];

const Navbar = () => {
  const menu = navItems.map(item =>
    item.name === "s'inscrire" ? (
      <Nav.Item as="li" className="signup" key={item.name}>
        <Link
          activeClass="active"
          to={item.name}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          {capitalize(item.name)}
        </Link>
      </Nav.Item>
    ) : (
      <Nav.Item as="li" key={item.name}>
        <Link
          activeClass="active"
          to={item.name}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          {capitalize(item.name)}
        </Link>
      </Nav.Item>
    )
  );
  return (
    <Row className="navbar">
      <Col xs>
        <Nav fill as="ul">
          {menu}
        </Nav>
      </Col>
    </Row>
  );
};

export default Navbar;
