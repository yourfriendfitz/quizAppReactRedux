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

const Button = styled(BootstrapButton)`
  :focus {
    outline: none;
  }
  background-color: ${Palette.AltPrimary};
  color: ${Palette.Primary};
`;

const WinnerButton = styled(Button)``;

const NavbarToggler = styled(BootstrapNavbarToggler)`
  :focus {
    outline: none;
  }
`;

const Brand = styled.span`
  font-family: "Orbitron", sans-serif;
`;

const ButtonsGrid = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 576px) {
    grid-template-columns: auto;
  }
`;

const NavMenu = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const DisplayWinnerButton = bool => {
    const content = bool ? (
      <WinnerButton onClick={() => props.onViewWin()} block>
        Winner
      </WinnerButton>
    ) : (
      <WinnerButton disabled block>
        Winner
      </WinnerButton>
    );
    return content;
  };

  const AllPassed =
    props.state.jsPassed &&
    props.state.ngPassed &&
    props.state.rcPassed &&
    props.state.dnPassed &&
    props.state.vuPassed
      ? true
      : false;

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
          <ButtonsGrid className="navbar-nav flex-grow">
            <NavItem>
              <NavLink>
                {AllPassed
                  ? DisplayWinnerButton(true)
                  : DisplayWinnerButton(false)}
              </NavLink>
            </NavItem>
            <NavItem className="align-self-end">
              <NavLink tag={Link} className="text-dark" to="/">
                <Button block>Home</Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Button block onClick={() => props.onSignOut()}>
                  Sign Out
                </Button>
              </NavLink>
            </NavItem>
          </ButtonsGrid>
        </Collapse>
      </Container>
    </Navbar>
  );

  return <header>{props.isAuth ? content : null}</header>;
};

const mapStateToProps = state => {
  return {
    isAuth: state.authRed.isAuth,
    state: state.quizRed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(actions.unauthAction()),
    onViewWin: () => dispatch(actions.viewWinAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu);
