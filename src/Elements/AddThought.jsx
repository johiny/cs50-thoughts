import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import addIcon from "../media/addIcon.svg"
import { keyframes } from 'styled-components'
const AddThought = (props) => {
  return (
        <StyledAddThought src={addIcon} 
        onClick={props.action}/>
  )
}

export default AddThought
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
const StyledAddThought = styled.img`
    position: relative;
    @media only screen and (max-width: 700px){
        position: fixed;
        bottom: 1%;
        z-index: 30;
        left: -7%;
    }
        margin-left: 5vh;
        width: 9vh;
        filter: invert(97%) sepia(0%) saturate(0%) hue-rotate(122deg) brightness(103%) contrast(103%) drop-shadow(0 0 4px #fff) drop-shadow(0 0 2px #17b852)  drop-shadow(0 0 10px #17b852);
        animation: ${floating} 3500ms infinite cubic-bezier(.25,.46,.45,.94);
        -webkit-animation: ${floating} 3500ms infinite cubic-bezier(.25,.46,.45,.94);
        :hover{
            animation: ${jelly} 0.9s both;
            -webkit-animation: ${jelly} 0.9s both;
            cursor: pointer;
        }
`