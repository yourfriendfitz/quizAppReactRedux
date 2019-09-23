import React, { Component } from "react";
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

const Content = styled(Container)`
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  justify-content: center;
  align-items: center;
  background-size: cover;
  border-radius: 8px;
  background-color: ${Palette.VueColor};
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

const AngularContainer = styled(IconContainer)`
  background-color: ${Palette.AngularColor};
  grid-row: 2;
  grid-column: 2;
`;

const ReactContainer = styled(IconContainer)`
  background-color: ${Palette.ReactColor};
  grid-row: 3;
  grid-column: 1;
`;

const DotnetContainer = styled(IconContainer)`
  background-color: ${Palette.DotNetColor};
  grid-row: 3;
  grid-column: 2;
`;

const VueContainer = styled(IconContainer)`
  background-color: ${Palette.VueColor};
  grid-column: 1/ -1;
`;

const JSContainer = styled(IconContainer)`
  background-color: ${Palette.JavaScriptColor};
  grid-row: 2;
  grid-column: 1;
`;

const IconTitle = styled.span`
  font-size: 16px;
  font-family: monospace;
`;

const Button = styled(BootstrapButton)`
  focus: {
    outline: none;
  }
  grid-row: 4;
  grid-column: 1/ -1;
`;

const Vue = props => {
  const handleIconClick = e => {
    console.log(e);
  };
  return (
    <Content>
      <VueContainer>
        <VueIcon onClick={() => handleIconClick("vu")} />
        <IconTitle>Vue JS</IconTitle>
      </VueContainer>
      <JSContainer>A</JSContainer>
      <AngularContainer>B</AngularContainer>
      <ReactContainer>C</ReactContainer>
      <DotnetContainer>D</DotnetContainer>
      <Button onClick={() => props.onBack()}>Back</Button>
    </Content>
  );
};

export { Vue };
