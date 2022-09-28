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
const floating = (arrowDirection) => keyframes`
0% {
		transform: rotate(${arrowDirection}) translatey(0%);
	}
	50% {
		transform: rotate(${arrowDirection}) translatey(10%);
	}
	100% {
		transform: rotate(${arrowDirection}) translatey(0px);
	}
`
const jelly = keyframes`
     0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`

const StyledArrow = styled.img`
    filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(66deg) brightness(104%) contrast(101%) drop-shadow(0px 0px 5px #ffffff);; 
    width: 5vh;
    transform: ${props => `rotate(${props.arrowDirection})`};
    position: relative;
    z-index: 30;
    @media only screen and (max-width: 700px){
      animation: ${props => floating(props.arrowDirection)} 3500ms infinite cubic-bezier(.25,.46,.45,.94);
      -webkit-animation: ${props => floating(props.arrowDirection)} 3500ms infinite cubic-bezier(.25,.46,.45,.94);
      position: fixed;
      left: ${props => props.arrowDirection == '270deg' ? '90%' : '75%'};
      bottom: 4%;
      width: 7vh;
    }
    @media only screen and (max-width: 500px){
      animation: ${props => floating(props.arrowDirection)} 3500ms infinite cubic-bezier(.25,.46,.45,.94);
      -webkit-animation: ${props => floating(props.arrowDirection)} 3500ms infinite cubic-bezier(.25,.46,.45,.94);
      position: fixed;
      left: ${props => props.arrowDirection == '270deg' ? '85%' : '70%'};
      bottom: 4%;
      width: 7vh;
    }
    ${props => props.spaceDirection};
    transition: all 200ms ease-in;
    cursor: pointer;
    :hover{
        width: 7vh;
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