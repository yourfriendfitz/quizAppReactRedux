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
import { FaVuejs as VueIcon, FaCheckCircle } from "react-icons/fa";

const Content = styled(Generics.UnstyledContent)`
  background-color: ${Palette.AngularColor};
`;

const JSContainer = styled(Generics.TopLeft)`
  background-color: ${Palette.JavaScriptColor};
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

const AngularContainer = styled(Generics.TopBlock)`
  background-color: ${Palette.AngularColor};
`;

const IconTitle = Generics.IconTitle;

const QuestionText = Generics.QuestionText;

const QuestionContainer = Generics.QuestionContainer;

const Button = Generics.Button;

const CheckmarkContainer = Generics.CheckmarkContainer;

const Check = Generics.Check;

const SelectionText = Generics.SelectionText;

const Angular = props => {
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
      <AngularContainer>
        <CheckmarkContainer>
          {Checkmarks().map(check => check)}
        </CheckmarkContainer>
        <NgIcon onClick={() => handleIconClick("ng")} />
        <IconTitle>Angular JS</IconTitle>
      </AngularContainer>
      <QuestionContainer>
        <Question />
      </QuestionContainer>
      <JSContainer>
        <SelectionText>
          {questions[index] ? questions[index].selections[0] : "A"}
        </SelectionText>
      </JSContainer>
      <ReactContainer>
        <SelectionText>
          {questions[index] ? questions[index].selections[1] : "B"}
        </SelectionText>
      </ReactContainer>
      <DotnetContainer>
        <SelectionText>
          {questions[index] ? questions[index].selections[2] : "C"}
        </SelectionText>
      </DotnetContainer>
      <VueContainer>
        <SelectionText>
          {questions[index] ? questions[index].selections[3] : "D"}
        </SelectionText>
      </VueContainer>
      <Button onClick={() => props.onBack()}>Back</Button>
    </Content>
  );
};

export { Angular };
