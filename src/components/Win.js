import React, { useState, useEffect } from "react";
import { Input as BootstrapInput, Button as BootstrapButton } from "reactstrap";
import styled from "styled-components";
import * as Palette from "./Palette";
import * as Generics from "./Generics";
import { connect } from "react-redux";
import * as actions from "../store/actions";

const Content = styled(Generics.UnstyledContent)`
  background-color: ${Palette.JavaScriptColor};
`;

const JSContainer = styled(Generics.TopBlock)`
  background-color: ${Palette.JavaScriptColor};
  font-size: 1em;
  height: 100%;
`;

const QuestionContainer = Generics.QuestionContainer;

const Button = Generics.Button;

const WinnerContainer = styled(Generics.IconContainer)`
  display: grid;
  opacity: 1;
  justify-content: center;
  grid-template-rows: repeat(2, 1fr);
  font-size: 1em;
  background-color: ${props => props.theme.colors[props.index]};
`;

const WinnersContainer = styled(QuestionContainer)`
  font-size: 1rem;
  display: grid;
  grid-template-rows: repeat(2, 0.5fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  width: 100%;
  height: 100%;
`;

WinnerContainer.defaultProps = {
  theme: {
    colors: [
      Palette.AngularColor,
      Palette.ReactColor,
      Palette.DotNetColor,
      Palette.VueColor
    ]
  }
};

const WinnerForm = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 0.5fr);
  font-size: 1em;
`;

const Input = styled(BootstrapInput)`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const FormTitle = styled.span``;

const WinnersTitle = styled(FormTitle)`
  grid-row: 1;
  grid-column: 1 / -1;
  height: 100%;
`;

const FormButton = styled(BootstrapButton)`
  width: 100%;
`;

const IconTitle = styled(Generics.IconTitle)`
  font-size: 1rem;
`;

const Win = props => {
  const [winners, setWinners] = useState([]);
  const [added, setAdded] = useState(false);
  const [name, setName] = useState({ name: "" });
  useEffect(() => {
    const fetchWinners = async callback => {
      const response = await fetch("https://lacy-ringer.glitch.me/winners");
      const winners = await response.json();
      callback(winners);
    };
    fetchWinners(setWinners);
  }, [added]);
  const addWinner = async () => {
    if (name === "") {
      return;
    }
    const response = await fetch("https://lacy-ringer.glitch.me/winner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(name)
    });
    setAdded(true);
    return response.json();
  };
  return (
    <Content className="overflow-hidden">
      <JSContainer>
        <WinnerForm>
          <FormTitle>
            <IconTitle>Join the Winner's Circle</IconTitle>
          </FormTitle>
          <Input
            onChange={e => setName({ name: e.target.value })}
            type="text"
            placeholder="Name"
            pattern="[a-z,A-Z]*"
          />
          <FormButton block onClick={() => addWinner()}>
            Submit
          </FormButton>
        </WinnerForm>
      </JSContainer>
      <WinnersContainer className="overflow-auto">
        <WinnersTitle>
          <IconTitle>Winners</IconTitle>
        </WinnersTitle>
        {winners.map((winner, i) => (
          <WinnerContainer index={i % 4} key={winner._id}>
            <span>
              <IconTitle>{winner.name}</IconTitle>
            </span>
            <span>
              <IconTitle>{winner.date.slice(0, -18)}</IconTitle>
            </span>
          </WinnerContainer>
        )) || "Loading..."}
      </WinnersContainer>
      <Button onClick={() => props.onBack()}>Back</Button>
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
