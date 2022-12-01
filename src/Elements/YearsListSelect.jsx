import React from 'react'
import { createArrayToThisYear } from './randomFunctions'
import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { nanoid } from 'nanoid'
const YearsListSelect = (props) => {
    const [years, setYears] = useState(createArrayToThisYear(1989))
    const [displayState, setDisplayState] = useState(false)
    const yearsListRef = useRef(null)
    const close = (e) => {
      if(yearsListRef.current && props.isOpen && !yearsListRef.current.contains(e.target) && !props.switchButton.current.contains(e.target)){
        props.setIsOpen(false)
        props.validateField('year', props.selectedYear, props.seterrorMessages)
      }
    }
    useEffect(() => {
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
  }, [props.isOpen]);
  useEffect(() => {
    if(props.isOpen == true){
      setDisplayState(true)
    }
}, [props.isOpen]);

const animationEndHandler = () => {
  if(props.isOpen == false){
    setDisplayState(false)
    props.validateField('year', props.selectedYear, props.seterrorMessages)
  }
}
  return (
      <StyledYearsList ref={yearsListRef} isOpen={props.isOpen} displayState={displayState} onAnimationEnd={animationEndHandler}>
            <ul>
            {years.map((year) => {
                return <li  key={nanoid()} onClick={() => props.setSelectedYear(year)}>{year}</li>
            })}
            </ul>
      </StyledYearsList>
  )
}

const UpFromBottom = keyframes`
  0% {
    visibility: visible;
    -webkit-transform: rotateX(-70deg);
            transform: rotateX(-70deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 0;
  }
  100% {
    visibility: visible;
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 1;
  }
`
const ToBottomFromUp = keyframes`
 0% {
    visibility: visible;
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 1;
  }
  100% {
    visibility: visible;
    -webkit-transform: rotateX(-70deg);
            transform: rotateX(-70deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 0;
  }
`
const StyledYearsList = styled.div`
    display: ${props => props.displayState ? 'block' : 'none'};
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 3vh;
    overflow-y: scroll;
    max-height: 11vh;
    z-index: 60;
    -webkit-mask: linear-gradient( rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 31%, rgba(0,0,0,1) 61%, rgba(0,0,0,0) 100%);
    mask: linear-gradient( rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 31%, rgba(0,0,0,1) 61%, rgba(0,0,0,0) 100%);
    animation: ${props => props.isOpen == 'begin' ? '' : props.isOpen ? UpFromBottom : ToBottomFromUp} ${props => props.isOpen ? '0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both' : '0.45s cubic-bezier(0.600, -0.280, 0.735, 0.045) both'};
    -webkit-animation: ${props => props.isOpen == 'begin' ? '' : props.isOpen ? UpFromBottom : ToBottomFromUp} ${props => props.isOpen ? '0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both' : '0.45s cubic-bezier(0.600, -0.280, 0.735, 0.045) both'};
    ::-webkit-scrollbar {
    width: 0; 
    background: transparent;
    }
    ul{
        padding: 0.3vh;
        list-style-type: none;
        margin: 0;
    }
    li{
      text-align: center;
        text-shadow:
    0 0 2px #fff,
    0 0 4px #fff,
    0 0 0px #fff,
    0 0 0px #fff,
    0 0 0px #fff,
    0 0 0px #fff,
    0 0 0px #fff,
    0 0 0px #fff;
    
    :hover{
        cursor: pointer;
        text-shadow:
        0 0 7px #fff,
        0 0 5px #fff,
        0 0 0px #fff,
        0 0 0px #fff,
        0 0 0px #fff,
        0 0 0px #fff,
        0 0 0px #fff,
        0 0 0px #fff;
    }
}
`
export default YearsListSelect
