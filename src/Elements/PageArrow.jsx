import React from 'react'
import Arrow from '../media/filter-arrow.svg'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
const PageArrow = (props) => {
  return (
    <StyledArrow ArrowLimit={props.ArrowLimit} src={Arrow} arrowDirection={props.arrowDirection}
     spaceDirection={props.spaceDirection} 
     onClick={()=> props.ArrowHandler()} onAnimationEnd={() => props.ArrowLimitAfterAction()}/>
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
    animation: ${props => props.ArrowLimit ? arrowLimitAnimation(props.arrowDirection) : 'none'} 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
    -webkit-animation: ${props => props.ArrowLimit ? arrowLimitAnimation(props.arrowDirection) : 'none'} 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
`
const arrowLimitAnimation = (arrowDirection) => keyframes`
0%,
  100% {
    -webkit-transform: translateY(0) rotate(${arrowDirection});
            transform: translateY(0) rotate(${arrowDirection});
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-8px) rotate(${arrowDirection});
            transform: translateY(-8px) rotate(${arrowDirection});
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(8px) rotate(${arrowDirection});
            transform: translateY(8px) rotate(${arrowDirection});
  }
  80% {
    -webkit-transform: translateY(6.4px) rotate(${arrowDirection});
            transform: translateY(6.4px) rotate(${arrowDirection});
  }
  90% {
    -webkit-transform: translateY(-6.4px) rotate(${arrowDirection});
            transform: translateY(-6.4px) rotate(${arrowDirection});
  }
`
export default PageArrow