import React from 'react'
import { createArrayToThisYear } from './randomFunctions'
import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
const YearsList = (props) => {
    const [years, setYears] = useState(createArrayToThisYear(1989))
    const yearsListRef = useRef(null)
    const close = (e) => {
      if(yearsListRef.current && props.isOpen && !yearsListRef.current.contains(e.target)){
        props.setIsOpen(false)
      }
    }
    useEffect(() => {
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
  }, []);
  return (
      <StyledYearsList ref={yearsListRef}>
            <ul>
            {years.map((year) => {
                return <li>{year}</li>
            })}
            </ul>
      </StyledYearsList>
  )
}

const UpFromBottom = keyframes`
  0% {
    -webkit-transform: rotateX(-70deg);
            transform: rotateX(-70deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 1;
  }
`
const StyledYearsList = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 3vh;
    overflow-y: scroll;
    max-height: 11vh;
    position: absolute;
    bottom: 8vh;
    z-index: 60;
    -webkit-mask: linear-gradient( rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 31%, rgba(0,0,0,1) 61%, rgba(0,0,0,0) 100%);
    mask: linear-gradient( rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 31%, rgba(0,0,0,1) 61%, rgba(0,0,0,0) 100%);
    transition: all 2s ease-in;
    animation: ${UpFromBottom} 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
    -webkit-animation: ${UpFromBottom} 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
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
export default YearsList
