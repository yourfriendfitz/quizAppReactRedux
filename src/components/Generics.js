import { Container, Button as BootstrapButton } from "reactstrap";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const UnstyledContent = styled(Container)`
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 16px;
  justify-content: center;
  align-items: center;
  background-size: cover;
  border-radius: 8px;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  font-size: 32px;
  width: 25%;
  height: 40%;
  top: 4%;
  left: 6%;
`;

const Check = styled(FaCheckCircle)`
  grid-row: 2;
  padding: 4px;
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

const SelectionText = styled(IconTitle)``;

const StatusContainer = styled.div`
  grid-row: 1;
  grid-column: 1 / -1;
  text-align: center;
`;

const StatusText = styled.span`
  white-space: nowrap;
  font-size: 8px;
`;

const QuestionContainer = styled(IconContainer)`
  grid-row: 2;
  grid-column: 1/ -1;
  opacity: 1;
`;

const TopLeft = styled(IconContainer)`
  grid-row: 3;
  grid-column: 1;
`;

const TopRight = styled(IconContainer)`
  grid-row: 3;
  grid-column: 2;
`;

const BottomLeft = styled(IconContainer)`
  grid-row: 4;
  grid-column: 1;
`;

const BottomRight = styled(IconContainer)`
  grid-row: 4;
  grid-column: 2;
`;

const TopBlock = styled(IconContainer)`
  position: relative;
  grid-column: 1/ -1;
  opacity: 1;
`;

export {
  UnstyledContent,
  IconContainer,
  Button,
  CheckmarkContainer,
  Check,
  QuestionContainer,
  QuestionText,
  IconTitle,
  SelectionText,
  StatusText,
  StatusContainer,
  TopBlock,
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight
};
