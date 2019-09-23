import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Palette from "./Palette";
import * as Generics from "./Generics";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { DiAngularSimple as NgIcon } from "react-icons/di";

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

const StatusText = Generics.StatusText;

const StatusContainer = Generics.StatusContainer;

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
    if (answer === questions[index].answer) {
      setRightAnswers(rightAnswers + 1);
    }
    index === questions.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handlePassed = (bool = false) => {
    if (bool && rightAnswers !== 3) {
      setRightAnswers(3);
    }
    if (!props.isPassed) {
      props.onPass();
    }
    return "You've passed this quiz!";
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
        checkmarksArray.push(<Check key={i} />);
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
          <StatusContainer>
            <StatusText>
              {props.isPassed
                ? handlePassed(true)
                : rightAnswers >= 3
                ? handlePassed()
                : `${3 - rightAnswers} more correct to pass!`}
            </StatusText>
          </StatusContainer>
          {Checkmarks().map(check => check)}
        </CheckmarkContainer>
        <NgIcon onClick={() => handleIconClick("ng")} />
        <IconTitle>Angular JS</IconTitle>
      </AngularContainer>
      <QuestionContainer>
        <Question />
      </QuestionContainer>
      <JSContainer onClick={() => handleSelect("A")}>
        <SelectionText>
          {questions[index] ? questions[index].selections[0] : "A"}
        </SelectionText>
      </JSContainer>
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

const mapStateToProps = state => ({
  isPassed: state.quizRed.ngPassed
});

const mapDispatchToProps = dispatch => {
  return { onPass: () => dispatch(actions.passAction("ngPassed")) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Angular);
