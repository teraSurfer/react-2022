import React from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavDropdown,
  Nav
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useIntl } from "react-intl";
import PropTypes from "prop-types";

const NavBar = ({ user }) => {
  const { formatMessage } = useIntl();
  const isDarkMode = user.p13n.darkMode;

  return (
    <Navbar
      expand="lg"
      variant={isDarkMode ? "dark" : "light"}
      bg={isDarkMode ? "dark" : "light"}
    >
      <Container>
        <NavbarBrand>{formatMessage({ id: "app.title" })}</NavbarBrand>
        <NavbarToggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown
              menuVariant={isDarkMode ? "dark" : "light"}
              title={formatMessage(
                { id: "home.greeting" },
                { user: user.name }
              )}
            >
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavBar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    p13n: PropTypes.shape({
      darkMode: PropTypes.bool,
    }),
  }),
};

export default NavBar;
