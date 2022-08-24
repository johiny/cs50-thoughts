import React from 'react'
import styled from 'styled-components'
import Logo from './Logo';
const HomeCover = () => {
  return (
    <StyledHomeCover>
       <StyledText>Welcome to....</StyledText>
       <Logo/>
       <StyledText>the place where you can leave your thougths about CS50</StyledText>
    </StyledHomeCover>
  )
}

const StyledHomeCover = styled.radialGradient`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-bottom: 1vh;
    gap: 2vh;
    margin-top: 5vh;
`

const StyledText = styled.h1`
    --card-color: #A51C30;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 8em;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #fff;
    text-shadow: 0 0 0em #fff,
    0 0 0em #fff,
    0 0 0em #fff,
    /* Green glow */
    0 0 0.2em var(--card-color),
    0 0 0.2em var(--card-color),
    0 0 0.2em var(--card-color),
    0 0 0.2em var(--card-color),
    0 0 0.2em var(--card-color);;
    margin: 0;
    text-align: center;
`

export default HomeCover