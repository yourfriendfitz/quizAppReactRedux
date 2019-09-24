import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Palette from "./Palette";
import * as Generics from "./Generics";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { DiJsBadge as JsIcon } from "react-icons/di";

const Content = styled(Generics.UnstyledContent)`
  background-color: ${Palette.JavaScriptColor};
`;

const AngularContainer = styled(Generics.TopLeft)`
  background-color: ${Palette.AngularColor};
`;

const ReactContainer = styled(Generics.TopRight)`
  background-color: ${Palette.ReactColor};
`;

const DotnetContainer = styled(Generics.BottomLeft)`
  background-color: ${Palette.DotNetColor};
`;

const VueContainer = styled(Generics.BottomRight)`
  background-color: ${Palette.VueColor};
`;

const JSContainer = styled(Generics.TopBlock)`
  background-color: ${Palette.JavaScriptColor};
`;

const QuestionText = Generics.QuestionText;

const QuestionContainer = Generics.QuestionContainer;

const Button = Generics.Button;

const CheckmarkContainer = Generics.CheckmarkContainer;

const Check = Generics.Check;

const SelectionText = Generics.SelectionText;

const StatusText = Generics.StatusText;

const StatusContainer = Generics.StatusContainer;

const Win = props => {
  return (
    <Content>
      You Win<Button onClick={() => props.onBack()}>Back</Button>
    </Content>
  );
};

const mapStateToProps = state => ({
  state: state.quizRed
});

const mapDispatchToProps = dispatch => {
  return { onSubmit: name => dispatch(actions.submitNameAction(name)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Win);
