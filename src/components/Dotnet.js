import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Palette from "./Palette";
import * as Generics from "./Generics";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { DiDotnet as DotnetIcon } from "react-icons/di";

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

const StatusText = Generics.StatusText;

const StatusContainer = Generics.StatusContainer;

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
      <DotnetContainer>
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
        <DotnetIcon onClick={() => handleIconClick("dn")} />
        <IconTitle>Microsoft .NET</IconTitle>
      </DotnetContainer>
      <QuestionContainer>
        <Question />
      </QuestionContainer>
      <JSContainer onClick={() => handleSelect("A")}>
        <SelectionText>
          {questions[index] ? questions[index].selections[0] : "A"}
        </SelectionText>
      </JSContainer>
      <AngularContainer onClick={() => handleSelect("B")}>
        <SelectionText>
          {questions[index] ? questions[index].selections[1] : "B"}
        </SelectionText>
      </AngularContainer>
      <ReactContainer onClick={() => handleSelect("C")}>
        <SelectionText>
          {questions[index] ? questions[index].selections[2] : "C"}
        </SelectionText>
      </ReactContainer>
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
  isPassed: state.quizRed.dnPassed
});

const mapDispatchToProps = dispatch => {
  return { onPass: () => dispatch(actions.passAction("dnPassed")) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dotnet);
