import React from "react";
import styled from "styled-components";

import { isFiltersEmpty } from "../../helpers";

import Context from "../../context";

const MainContainer = styled.main`
  margin-top: ${(props) => (props.filter === "true" ? "90px" : "0")};
  padding: 50px 30px;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 20px auto;
  }
`;

const Main = (props) => {
  return (
    <Context.Consumer>
      {(context) => (
        <MainContainer filter={isFiltersEmpty(context.filters).toString()}>
          {props.children}
        </MainContainer>
      )}
    </Context.Consumer>
  );
};

export default Main;
