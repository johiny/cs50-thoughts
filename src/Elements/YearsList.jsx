import React from 'react'
import { createArrayToThisYear } from './randomFunctions'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const YearsList = () => {
    const [years, setYears] = useState(createArrayToThisYear(1989))
    console.log(years)
  return (
    <StyledYearsList>
            <ul>
            {years.map((year) => {
                return <li>{year}</li>
            })}
            </ul>
    </StyledYearsList>
  )
}

export default YearsList

// const AbsoluteContainer = styled.div`
//     position: absolute;
//     top: 8ch
// `

const StyledYearsList = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 3vh;
    overflow-y: scroll;
    max-height: 9.2vh;
    /* background-image: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 95%); */
    ::-webkit-scrollbar {
    width: 0; 
    background: transparent;
    }
    ul{
        padding: 0;
        list-style-type: none;
    }
    li{
        text-shadow:
    0 0 5px #fff,
    0 0 5px #fff,
    0 0 0px #fff,
    0 0 0px #0ff,
    0 0 0px #0ff,
    0 0 0px #0ff,
    0 0 0px #0ff,
    0 0 0px #0ff;
}
`
