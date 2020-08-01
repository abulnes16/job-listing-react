import React from 'react'

// Styled Components 
import Button from "./styled/Button";

const BadgeList = ({data, addFilter, info}) => {
  return data.map((badge, index) => (
    <Button key={index} onClick={()=>addFilter(badge, info)}>
      {badge}
    </Button>
  ))
}

export default BadgeList
