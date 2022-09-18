import React, { useState } from 'react'
import styled from 'styled-components'
import addIcon from "../media/addIcon.svg"
import { keyframes } from 'styled-components'
const AddThought = (props) => {
    const [currentAnimation, setCurrentAnimation] = useState('start') 
  return (
    <StyledAddThought animation={currentAnimation}>
        <img src={addIcon} onAnimationEnd={() => setCurrentAnimation('static')} onClick={props.action}/>
    </StyledAddThought>
  )
}

export default AddThought

const  rollInleft = keyframes`
    0% {
    -webkit-transform: translateX(-1000px) rotate(-720deg) ;
            transform: translateX(-1000px) rotate(-720deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
`
const floating = keyframes`
0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
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
const StyledAddThought = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1vh;

    img{
        margin-left: 5vh;
        width: 9vh;
        filter: invert(97%) sepia(0%) saturate(0%) hue-rotate(122deg) brightness(103%) contrast(103%) drop-shadow(0 0 4px #fff) drop-shadow(0 0 2px #17b852)  drop-shadow(0 0 10px #17b852);
        animation: ${props => props.animation === 'start' ? rollInleft : floating} ${props => props.animation === 'start' ? '0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) both' : '3500ms infinite cubic-bezier(.25,.46,.45,.94)'};
        -webkit-animation: ${props => props.animation === 'start' ? rollInleft : floating} ${props => props.animation === 'start' ? '0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) both' : '3500ms infinite cubic-bezier(.25,.46,.45,.94)'};
        :hover{
            animation: ${jelly} 0.9s both;
            -webkit-animation: ${jelly} 0.9s both;
            cursor: pointer;
        }
    }
`