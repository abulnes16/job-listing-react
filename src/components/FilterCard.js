import React from "react";
import styled from "styled-components";

import FilterButton from "./styled/FilterButton";

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

const FilterCard = ({ filters, clean, popFilter }) => {
  return (
    <Card>
      <div className="card__filters">
        {filters.role !== "" ? (
          <FilterButton type="role" popFilter={popFilter}>
            {filters.role}
          </FilterButton>
        ) : null}
        {filters.level !== "" ? (
          <FilterButton type="level" popFilter={popFilter}>
            {filters.level}
          </FilterButton>
        ) : null}
        {filters.tools.length !== 0
          ? filters.tools.map((value, index) => (
              <FilterButton
                key={`${value}-${index}`}
                type="tools"
                popFilter={popFilter}
              >
                {value}
              </FilterButton>
            ))
          : null}
        {filters.languages.length !== 0
          ? filters.languages.map((value, index) => (
              <FilterButton
                key={`${value}-${index}`}
                type="languages"
                popFilter={popFilter}
              >
                {value}
              </FilterButton>
            ))
          : null}
      </div>
      <div className="card__button-container">
        <button className="card__button" onClick={clean}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export default FilterCard;
