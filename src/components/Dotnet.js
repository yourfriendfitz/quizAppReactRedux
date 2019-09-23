import React, { useState, useEffect } from "react";
import { Container, Button as BootstrapButton } from "reactstrap";
import styled from "styled-components";
import * as Palette from "./Palette";
import * as Generics from "./Generics";
import {
  DiAngularSimple as NgIcon,
  DiAtom as ReactIcon,
  DiDotnet as DotnetIcon,
  DiJsBadge as JsIcon
} from "react-icons/di";

const Content = styled(Generics.UnstyledContent)`
  background-color: ${Palette.DotNetColor};
`;

const AngularContainer = styled(Generics.TopRight)`
  background-color: ${Palette.AngularColor};
`;

const ReactContainer = styled(Generics.BottomLeft)`
  background-color: ${Palette.ReactColor};
`;

const DotnetContainer = styled(Generics.TopBlock)`
  background-color: ${Palette.DotNetColor};
`;

const VueContainer = styled(Generics.BottomRight)`
  background-color: ${Palette.VueColor};
`;

const JSContainer = styled(Generics.TopLeft)`
  background-color: ${Palette.JavaScriptColor};
`;

const IconTitle = Generics.IconTitle;

const QuestionText = Generics.QuestionText;

const QuestionContainer = Generics.QuestionContainer;

const Button = Generics.Button;

const CheckmarkContainer = Generics.CheckmarkContainer;

const Check = Generics.Check;

const SelectionText = Generics.SelectionText;

const Dotnet = props => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  useEffect(() => {
    const fetchQuestions = async callback => {
      const response = await fetch("https://lacy-ringer.glitch.me/questions");
      const questions = await response.json();
      callback(questions);
    };
    fetchQuestions(setQuestions);
  }, []);
  const handleIconClick = e => {};
  const handleSelect = answer => {
    console.log(questions[index]);
    if (answer == questions[index].answer) {
      setRightAnswers(rightAnswers + 1);
    }
    index == questions.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const Question = () => {
    return (
      <QuestionText>
        {questions[index] ? questions[index].body : "Loading..."}
      </QuestionText>
    );
  };
  const Checkmarks = () => {
    let checkmarksArray = [];
    const populateChecks = () => {
      for (let i = 0; i < rightAnswers; i++) {
        checkmarksArray.push(<Check />);
      }
    };
    populateChecks();
    return checkmarksArray;
  };
  console.log(index, rightAnswers, questions);
  return (
    <Content>
      <DotnetContainer>
        <CheckmarkContainer>
          {Checkmarks().map(check => check)}
        </CheckmarkContainer>
        <DotnetIcon onClick={() => handleIconClick("dn")} />
        <IconTitle>Microsoft .NET</IconTitle>
      </DotnetContainer>
      <QuestionContainer>
        <Question />
      </QuestionContainer>
      <JSContainer>
        <SelectionText>
          {questions[index] ? questions[index].selections[0] : "A"}
        </SelectionText>
      </JSContainer>
      <AngularContainer>
        <SelectionText>
          {questions[index] ? questions[index].selections[1] : "B"}
        </SelectionText>
      </AngularContainer>
      <ReactContainer>
        <SelectionText>
          {questions[index] ? questions[index].selections[2] : "C"}
        </SelectionText>
      </ReactContainer>
      <VueContainer>
        <SelectionText>
          {questions[index] ? questions[index].selections[3] : "D"}
        </SelectionText>
      </VueContainer>
      <Button onClick={() => props.onBack()}>Back</Button>
    </Content>
  );
};

export { Dotnet };
