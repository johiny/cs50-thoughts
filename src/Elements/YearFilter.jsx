import React from 'react'
import styled from 'styled-components'
import allIcon from '../media/AllIcon.svg'
import YearsList from './YearsList'
import { useState, useRef, useEffect } from 'react'
import { useThoughtsProviderAndController } from './ThoughtsProviderAndController'
import { keyframes } from 'styled-components'
const YearFilter = () => {
    const {setFilters, filters} = useThoughtsProviderAndController()
    const [isOpen, setIsOpen] = useState(false)
    const [selectedYear, setSelectedYear] = useState('begin')
    const filterButtonRef = useRef(null)

    const [FilterChangingStatus, setFilterChangingStatus] = useState('off')
    const filterChangingHandler = () => {
        if(FilterChangingStatus === 'fadeIn'){
            setFilterChangingStatus('off')
            return
        }
        else{
            if(FilterChangingStatus === 'off'){
                setFilterChangingStatus('fadeOut')
            }
            else{
                console.log('wtf',selectedYear)
                setFilters(prev => ({...prev, cs50year: selectedYear}))
                setFilterChangingStatus('fadeIn')
            }
        }
    }
    useEffect(() => {
        if(selectedYear != 'begin'){
            filterChangingHandler()
        }
    },[selectedYear])
  return (
    <StyledContainer>
        <YearsList setIsOpen={setIsOpen} isOpen={isOpen} filterButtonRef={filterButtonRef} setSelectedYear={setSelectedYear}/>
    <StyledYearFilter onClick={() => setIsOpen(!isOpen)} ref={filterButtonRef} FilterChangingStatus={FilterChangingStatus}>
         <h6>Year</h6>
         <div onAnimationEnd={filterChangingHandler}>{filters.cs50year == null ? <img src={allIcon}></img> : <li>{filters.cs50year}</li>}</div>
    </StyledYearFilter>
    </StyledContainer>
  )
}

const FadeOutRotation = keyframes`
    0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
    opacity: 0;
  }
`
const FadeInRotation = keyframes`
    0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
    opacity: 1;
  }
`  

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
const StyledYearFilter = styled.div`
    gap: 1vh;
    display: flex;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 2.5vh;
    align-items: center;
    >div{
        display: flex;
        -webkit-animation: ${props => props.FilterChangingStatus === 'fadeOut' ? FadeOutRotation : props.FilterChangingStatus === 'fadeIn' ? FadeInRotation : ''} 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: ${props => props.FilterChangingStatus === 'fadeOut' ? FadeOutRotation : props.FilterChangingStatus === 'fadeIn' ? FadeInRotation : ''} 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }
    img{
        width: 1.3em;
        filter: brightness(104%) invert(100%) sepia(0%) saturate(2%) hue-rotate(66deg) brightness(104%) contrast(101%) drop-shadow(0 0 1.5px #fff);
        }
    li{
        list-style: none;
        font-size: 2.8vh; 
        margin: 0;
        text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff;
    }
    :hover{
        cursor: pointer;
        color: #ffffffde;
        img{
            filter: brightness(104%) invert(100%) sepia(0%) saturate(2%) hue-rotate(66deg) brightness(90%) contrast(101%) drop-shadow(0 0 1.5px #fff);
        }
        li{
        color: #ffffffde;
        text-shadow: none;
    }
}         
`


export default YearFilter