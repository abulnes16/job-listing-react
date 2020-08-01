import React from "react";
import styled from "styled-components";

import colors from "../../constants/colors";

import Button from "./Button";

const PopButton = styled.button`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  outline: none;
  border: none;
  background-color: ${colors.primary};
  background-image: url("./images/icon-remove.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 30px;
  height: 31px;
  margin: 0;

  :hover {
    background-color: ${colors.darkerCyan};
    cursor: pointer;
  }
`;

const FilterButton = ({ children, popFilter, type }) => {
  return (
    <div className="filter-button">
      <Button className="filter-button__text">{children}</Button>
      <PopButton onClick={() => popFilter(children, type)} />
    </div>
  );
};

export default FilterButton;
