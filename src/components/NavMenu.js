import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler as BootstrapNavbarToggler,
  NavItem,
  NavLink,
  Button as BootstrapButton
} from "reactstrap";
import * as Palette from "./Palette";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { connect } from "react-redux";
import * as actions from "../store/actions";

const Text = styled.span`
  color: ${Palette.Text};
`;

const Button = styled(BootstrapButton)`
  :focus {
    outline: none;
  }
  background-color: ${Palette.AltPrimary};
  color: ${Palette.Primary};
`;

const NavbarToggler = styled(BootstrapNavbarToggler)`
  :focus {
    outline: none;
  }
`;

const Brand = styled.span`
font-family: 'Orbitron', sans-serif;
`

const NavMenu = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const content = (
    <Navbar
      className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3"
      light
    >
      <Container>
        <NavbarBrand tag={Link} to="/">
          <Brand aria-label="none" role="img">
            StackFAQs
          </Brand>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse
          className="d-sm-inline-flex flex-sm-row-reverse"
          isOpen={!collapsed}
          navbar
        >
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">
                <Text>Home</Text>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button block onClick={() => props.onSignOut()}>
                Sign Out
              </Button>
            </NavItem>
          </ul>
        </Collapse>
      </Container>
    </Navbar>
  );

  return <header>{props.isAuth ? content : null}</header>;
};

const mapStateToProps = state => {
  return {
    isAuth: state.authRed.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(actions.unauthAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu);
