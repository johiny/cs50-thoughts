import React from 'react'
import styled from 'styled-components'
import filterArrow from '../media/filter-arrow.svg'
import { useState } from 'react'
const Filters = () => {
  return (
    <StyledFilters>
        <Filter filter='Order By Feeling' initialArrowStatus={true}/>
        <Filter filter='Order By Date' initialArrowStatus={true}/>
        <Filter filter='Order By Likes' initialArrowStatus={true}/>
        <Filter filter='Order By Dislikes' initialArrowStatus={false} />
    </StyledFilters>
  )
}

const Filter = (props) => {
    const [arrowUp, setArrowStatus] = useState(props.initialArrowStatus)
    return(
       <StyledFilter arrowUp={arrowUp} onClick={() => setArrowStatus(!arrowUp)}>
        <h6>{props.filter}</h6>
        <img src={filterArrow}/>
       </StyledFilter>
    )
}

const StyledFilters = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    gap: 1em;
    margin-right: 5vh;
`
const StyledFilter = styled.div`
    :hover{
        cursor: pointer;
        color: #ffffffde;
        >img{
            filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(66deg) brightness(90%) contrast(101%);

        }
    }
    gap: 1vh;
    display: flex;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 2.5vh;
    >img{
        transition-duration: 1000ms;
        transform: ${props => props.arrowUp ? 'rotate(0)' : 'rotate(180deg)'};
        width: 1em;
        filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(66deg) brightness(104%) contrast(101%);
    }
`

export default Filters