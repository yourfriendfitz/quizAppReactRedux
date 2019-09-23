import React, { useState } from "react";
import { Container, Button as BootstrapButton } from "reactstrap";
import styled from "styled-components";
import * as Palette from "./Palette";
import {
  DiAngularSimple as NgIcon,
  DiAtom as ReactIcon,
  DiDotnet as DotnetIcon,
  DiJsBadge as JsIcon
} from "react-icons/di";
import { FaVuejs as VueIcon } from "react-icons/fa";
import { Vanilla } from "./Vanilla";
import { Angular } from "./Angular";
import { ReactView } from "./React";
import { Dotnet as DotnetView } from "./Dotnet";
import { Vue } from "./Vue";

const Content = styled(Container)`
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  justify-content: center;
  align-items: center;
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
`;

const IconContainer = styled(Container)`
  display: grid;
  justify-content: center;
  margin: auto;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  font-size: 80px;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
  svg {
    margin: auto;
  }
`;

const BlockIconContainer = styled(IconContainer)`
  grid-row: 3;
  grid-column: 1/ -1;
  max-width: 50%;
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

const IconTitle = styled.span`
  font-size: 16px;
  font-family: monospace;
  margin: auto;
`;

const Home = props => {
  const [view, setView] = useState({ selected: "main" });
  const handleIconClick = string => {
    console.log("click", string);
    setView({ selected: string });
  };
  switch (view.selected) {
    case "js":
      return <Vanilla onBack={() => setView({ view: "main" })} />;
    case "ng":
      return <Angular onBack={() => setView({ view: "main" })} />;
    case "rc":
      return <ReactView onBack={() => setView({ view: "main" })} />;
    case "dn":
      return <DotnetView onBack={() => setView({ view: "main" })} />;
    case "vu":
      return <Vue onBack={() => setView({ view: "main" })} />;
    default:
      return (
        <Content>
          <JSContainer>
            <JsIcon onClick={() => handleIconClick("js")} />
            <IconTitle>Vanilla JS</IconTitle>
          </JSContainer>
          <AngularContainer>
            <NgIcon onClick={() => handleIconClick("ng")} />
            <IconTitle>Angular JS</IconTitle>
          </AngularContainer>
          <ReactContainer>
            <ReactIcon onClick={() => handleIconClick("rc")} />
            <IconTitle>React JS</IconTitle>
          </ReactContainer>
          <DotnetContainer>
            <DotnetIcon onClick={() => handleIconClick("dn")} />
            <IconTitle>Microsoft .NET</IconTitle>
          </DotnetContainer>
          <VueContainer>
            <VueIcon onClick={() => handleIconClick("vu")} />
            <IconTitle>Vue JS</IconTitle>
          </VueContainer>
        </Content>
      );
  }
};

export { Home };
