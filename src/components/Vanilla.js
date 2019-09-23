import React, { useState, useEffect } from "react";
import { Container, Button as BootstrapButton } from "reactstrap";
import styled from "styled-components";
import * as Palette from "./Palette";
import {
  DiAngularSimple as NgIcon,
  DiAtom as ReactIcon,
  DiDotnet as DotnetIcon,
  DiJsBadge as JsIcon
} from "react-icons/di";
import { FaVuejs as VueIcon, FaCheckCircle } from "react-icons/fa";

const Content = styled(Container)`
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 16px;
  justify-content: center;
  align-items: center;
  background-size: cover;
  border-radius: 8px;
  background-color: ${Palette.JavaScriptColor};
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
`;

const IconContainer = styled(Container)`
  height: 100px;
  display: grid;
  justify-content: center;
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
  grid-row: 3;
  grid-column: 1;
`;

const ReactContainer = styled(IconContainer)`
  background-color: ${Palette.ReactColor};
  grid-row: 3;
  grid-column: 2;
`;

const DotnetContainer = styled(IconContainer)`
  background-color: ${Palette.DotNetColor};
  grid-row: 4;
  grid-column: 1;
`;

const VueContainer = styled(IconContainer)`
  background-color: ${Palette.VueColor};
  grid-row: 4;
  grid-column: 2;
`;

const JSContainer = styled(IconContainer)`
  position: relative;
  background-color: ${Palette.JavaScriptColor};
  grid-column: 1/ -1;
`;

const IconTitle = styled.span`
  font-size: 16px;
  font-family: monospace;
  margin: auto;
`;

const QuestionText = styled(IconTitle)`
  margin-top: 16px;
  height: 80px;
`;

const QuestionContainer = styled(IconContainer)`
  grid-row: 2;
  grid-column: 1/ -1;
`;

const Button = styled(BootstrapButton)`
  focus: {
    outline: none;
  }
  margin-bottom: 16px;
  grid-row: 5;
  grid-column: 1/ -1;
`;

const CheckmarkContainer = styled.div`
  position: absolute;
  font-size: 32px;
  top: 4%;
  left: 6%;
`;

const Check = styled(FaCheckCircle)`
  padding: 4px;
`;

const SelectionText = styled(IconTitle)``;

const Vanilla = props => {
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
        {questions[index] ? questions[index].body : null}
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
      <JSContainer>
        <CheckmarkContainer>
          {Checkmarks().map(check => check)}
        </CheckmarkContainer>
        <JsIcon data-tag={"js"} onClick={e => handleIconClick(e)} />
      </JSContainer>
      <QuestionContainer>
        <Question />
      </QuestionContainer>
      <AngularContainer onClick={() => handleSelect("A")}>
        <SelectionText>
          {questions[index] ? questions[index].selections[0] : "A"}
        </SelectionText>
      </AngularContainer>
      <ReactContainer onClick={() => handleSelect("B")}>
        <SelectionText>
          {questions[index] ? questions[index].selections[1] : "B"}
        </SelectionText>
      </ReactContainer>
      <DotnetContainer onClick={() => handleSelect("C")}>
        <SelectionText>
          {questions[index] ? questions[index].selections[2] : "C"}
        </SelectionText>
      </DotnetContainer>
      <VueContainer onClick={() => handleSelect("D")}>
        <SelectionText>
          {questions[index] ? questions[index].selections[3] : "D"}
        </SelectionText>
      </VueContainer>
      <Button onClick={() => props.onBack()}>Back</Button>
    </Content>
  );
};

export { Vanilla };
