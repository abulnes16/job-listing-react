import React from 'react'

// Styled Components 
import Button from "./styled/Button";

const BadgeList = ({data}) => {
  return data.map((badge, index) => (
    <Button key={index}>
      {badge}
    </Button>
  ))
}

export default BadgeList
