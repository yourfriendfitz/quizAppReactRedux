import React, { useState } from "react";
import styled from "styled-components";
import * as Palette from "./Palette";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import {
  DiAngularSimple as NgIcon,
  DiAtom as ReactIcon,
  DiDotnet as DotnetIcon,
  DiJsBadge as JsIcon
} from "react-icons/di";
import * as Generics from "./Generics";
import { FaVuejs as VueIcon } from "react-icons/fa";
import Vanilla from "./Vanilla";
import Angular from "./Angular";
import ReactView from "./React";
import DotnetView from "./Dotnet";
import Vue from "./Vue";
import Win from "./Win";

const Content = Generics.UnstyledContent;

const IconContainer = styled(Generics.IconContainer)`
  position: relative;
  height: auto;
`;

const BlockIconContainer = styled(IconContainer)`
  grid-row: 3;
  grid-column: 1/ -1;
  max-width: 50%;
  text-align: center;
`;

const JSContainer = styled(IconContainer)`
  background-color: ${Palette.JavaScriptColor};
`;

const AngularContainer = styled(IconContainer)`
  background-color: ${Palette.AngularColor};
`;

const ReactContainer = styled(IconContainer)`
  background-color: ${Palette.ReactColor};
`;

const DotnetContainer = styled(IconContainer)`
  background-color: ${Palette.DotNetColor};
`;

const VueContainer = styled(BlockIconContainer)`
  background-color: ${Palette.VueColor};
`;

const IconTitle = Generics.IconTitle;

const CheckmarkContainer = styled(Generics.CheckmarkContainer)`
  text-align: center;
`;

const Check = styled(Generics.Check)`
  grid-row: 1;
`;

const StatusText = Generics.StatusText;

const Home = props => {
  const [view, setView] = useState({ selected: "main" });
  const handleIconClick = string => {
    setView({ selected: string });
  };
  const returnMain = () => {
    props.onReturn();
    setView({ selected: "main" });
  };
  switch (view.selected) {
    case "js":
      return props.state.viewWin ? (
        <Win onBack={() => returnMain()} />
      ) : (
        <Vanilla onBack={() => setView({ view: "main" })} />
      );
    case "ng":
      return props.state.viewWin ? (
        <Win onBack={() => returnMain()} />
      ) : (
        <Angular onBack={() => setView({ view: "main" })} />
      );
    case "rc":
      return props.state.viewWin ? (
        <Win onBack={() => returnMain()} />
      ) : (
        <ReactView onBack={() => setView({ view: "main" })} />
      );
    case "dn":
      return props.state.viewWin ? (
        <Win onBack={() => returnMain()} />
      ) : (
        <DotnetView onBack={() => setView({ view: "main" })} />
      );
    case "vu":
      return props.state.viewWin ? (
        <Win onBack={() => returnMain()} />
      ) : (
        <Vue onBack={() => setView({ view: "main" })} />
      );
    default:
      return props.state.viewWin ? (
        <Win onBack={() => returnMain()} />
      ) : (
        <Content>
          <JSContainer>
            <CheckmarkContainer>
              {props.state.jsPassed ? (
                <Check />
              ) : (
                <StatusText>Incomplete</StatusText>
              )}
            </CheckmarkContainer>
            <JsIcon onClick={() => handleIconClick("js")} />
            <IconTitle>Vanilla JS</IconTitle>
          </JSContainer>
          <AngularContainer>
            <CheckmarkContainer>
              {props.state.ngPassed ? (
                <Check />
              ) : (
                <StatusText>Incomplete</StatusText>
              )}
            </CheckmarkContainer>
            <NgIcon onClick={() => handleIconClick("ng")} />
            <IconTitle>Angular</IconTitle>
          </AngularContainer>
          <ReactContainer>
            <CheckmarkContainer>
              {props.state.rcPassed ? (
                <Check />
              ) : (
                <StatusText>Incomplete</StatusText>
              )}
            </CheckmarkContainer>
            <ReactIcon onClick={() => handleIconClick("rc")} />
            <IconTitle>React</IconTitle>
          </ReactContainer>
          <DotnetContainer>
            <CheckmarkContainer>
              {props.state.dnPassed ? (
                <Check />
              ) : (
                <StatusText>Incomplete</StatusText>
              )}
            </CheckmarkContainer>
            <DotnetIcon onClick={() => handleIconClick("dn")} />
            <IconTitle>.NET</IconTitle>
          </DotnetContainer>
          <VueContainer>
            <CheckmarkContainer>
              {props.state.vuPassed ? (
                <Check />
              ) : (
                <StatusText>Incomplete</StatusText>
              )}
            </CheckmarkContainer>
            <VueIcon onClick={() => handleIconClick("vu")} />
            <IconTitle>Vue</IconTitle>
          </VueContainer>
        </Content>
      );
  }
};

const mapStateToProps = state => ({
  state: state.quizRed
});

const mapDispatchToProps = dispatch => {
  return {
    onAllPass: () => dispatch(actions.allPassAction()),
    onReturn: () => dispatch(actions.returnAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
