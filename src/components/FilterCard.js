import React from "react";
import styled from "styled-components";

import FilterButton from "./styled/FilterButton";

import Context from "../context";

import { isFiltersEmpty } from "../helpers";

const Card = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 10px 12px -6px hsla(180, 29%, 50%, 0.3);
  padding: 10px 20px;
  position: absolute;
  bottom: -80px;
  left: 0;
  right: 0;

  @media screen and (min-width: 376px) {
    bottom: -40px;
    padding: 10px 30px;
  }
`;

const FilterCard = () => {
  return (
    <Context.Consumer>
      {(context) =>
        !isFiltersEmpty(context.filters) ? (
          <Card>
            <div className="card__filters">
              {context.filters.role !== "" ? (
                <FilterButton type="role" popFilter={context.popFilter}>
                  {context.filters.role}
                </FilterButton>
              ) : null}
              {context.filters.level !== "" ? (
                <FilterButton type="level" popFilter={context.popFilter}>
                  {context.filters.level}
                </FilterButton>
              ) : null}
              {context.filters.tools.length !== 0
                ? context.filters.tools.map((value, index) => (
                    <FilterButton
                      key={`${value}-${index}`}
                      type="tools"
                      popFilter={context.popFilter}
                    >
                      {value}
                    </FilterButton>
                  ))
                : null}
              {context.filters.languages.length !== 0
                ? context.filters.languages.map((value, index) => (
                    <FilterButton
                      key={`${value}-${index}`}
                      type="languages"
                      popFilter={context.popFilter}
                    >
                      {value}
                    </FilterButton>
                  ))
                : null}
            </div>
            <div className="card__button-container">
              <button className="card__button" onClick={context.clean}>
                Clear
              </button>
            </div>
          </Card>
        ) : null
      }
    </Context.Consumer>
  );
};

export default FilterCard;
