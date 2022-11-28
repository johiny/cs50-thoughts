import React from 'react'
import styled from 'styled-components'
import allIcon from '../media/AllIcon.svg'
import YearsList from './YearsList'
const YearFilter = () => {
  return (
    <StyledContainer>
        <YearsList/>
    <StyledYearFilter>
         <h6>Year</h6>
         <img src={allIcon}></img>
    </StyledYearFilter>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 6.2vh;
`
const StyledYearFilter = styled.div`
    gap: 1vh;
    display: flex;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 2.5vh;
    align-items: center;
    >img{
        width: 1.3em;
        filter: brightness(104%) invert(100%) sepia(0%) saturate(2%) hue-rotate(66deg) brightness(104%) contrast(101%) drop-shadow(0 0 1.5px #fff);
        }
    :hover{
        cursor: pointer;
        color: #ffffffde;
        >img{
            filter: brightness(104%) invert(100%) sepia(0%) saturate(2%) hue-rotate(66deg) brightness(90%) contrast(101%) drop-shadow(0 0 1.5px #fff);
        }
    }    
        
`

export default YearFilter