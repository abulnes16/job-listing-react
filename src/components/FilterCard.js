import React from "react";
import styled from "styled-components";

import Button from './styled/Button';

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

  @media screen and (min-width: 376px){
    bottom: -40px;
    padding: 10px 30px;
  }

`;

const FilterCard = () => {
  return (
    <Card>
      <div className="card__filters">
        <Button>Frontend</Button>
        <Button>CSS</Button>
        <Button>Javascript</Button>
      </div>
      <div className="card__button-container">
        <button className="card__button">Clear</button>
      </div>
    </Card>
  );
};

export default FilterCard;
