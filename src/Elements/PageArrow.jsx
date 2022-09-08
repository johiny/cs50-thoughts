import React from 'react'
import Arrow from '../media/filter-arrow.svg'
import styled from 'styled-components'
const PageArrow = (props) => {
  return (
    <StyledArrow src={Arrow} arrowDirection={props.arrowDirection}
     spaceDirection={props.spaceDirection} 
     onClick={()=> props.ArrowHandler()}/>
  )
}

const StyledArrow = styled.img`
    filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(66deg) brightness(104%) contrast(101%) drop-shadow(0px 0px 5px #ffffff);; 
    width: 5vh;
    transform: ${props => `rotate(${props.arrowDirection})`};
    position: relative;
    ${props => props.spaceDirection};
    transition: all 200ms ease-in;
    cursor: pointer;
    :hover{
        width: 6vh;
    }

`
export default PageArrow