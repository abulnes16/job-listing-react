import styled from "styled-components";
import colors from "../../constants/colors";

const Button = styled.button`
  color: ${colors.primary};
  background-color: ${colors.background};
  margin: 10px 10px 5px 0;
  padding: 8px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  font-weight: 700;
  outline: none;
  &:hover {
    background-color: ${colors.primary};
    color: ${colors.text};
  }
`;

export default Button;
