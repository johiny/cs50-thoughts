import React from 'react'
import styled from 'styled-components'
import { randomFeeling } from './randomFunctions'
import { keyframes } from 'styled-components'
const DummyCard = () => {
    let feeling = randomFeeling()
  return (
    <StyledThought feeling={feeling}>
        <StyledDummyParagrahp>
            <StyledDummyWhiteBox/>
            <StyledDummyWhiteBox/>
        </StyledDummyParagrahp>
        <StyledDummyUser/>
    </StyledThought>
  )
}

export default DummyCard

const StyledThought = styled.div`
--card-color: ${props=> props.feeling === 'positive' ? '#17b852' : '#ac011b' };
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(8px);
  padding: 1vh;
  border: solid var(--card-color) 1px;
  border-radius: 11px;
  color: #F6FAF6;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  grid-column: span 6;
  grid-row: span 7;
  box-shadow:
    0 0 0.2em #fff,
    0 0 0.2em #fff,
    0 0 0.2em #fff,
    /* Green glow */
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color);
  @media only screen and (min-width: 650px)  {
  grid-column: span 3;
  }
  @media only screen and (min-width: 800px)  {
    grid-column: span 2;
  }
  @media only screen and (min-width: 1200px)  {
    grid-column: span 1;
    grid-row: span 5;
    }
`
const blink = keyframes`
0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.6;
  }
`
const StyledDummyWhiteBox = styled.div`
    background-color: white;
    padding:1vh;
    border-radius: 2px;
    opacity: 0.6;
    -webkit-animation: ${blink} 1.2s both infinite;
	        animation: ${blink} 1.2s both infinite;
`

const StyledDummyUser = styled.div`
    opacity: 0.6;
    margin-top: auto;
    margin-left: auto;  
    background-color: white;
    padding: 1vh;
    border-radius: 2px;
    width: 30%;
    -webkit-animation: ${blink} 1.2s both infinite;
	        animation: ${blink} 1.2s both infinite; 
`

const StyledDummyParagrahp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    margin-top: 12vh;
`