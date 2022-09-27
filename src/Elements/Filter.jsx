import React from 'react'
import { useThoughtsProviderAndController} from './ThoughtsProviderAndController'
import filterArrowDown from '../media/filter-arrow.svg'
import offIcon from '../media/offIcon.svg'
import FilterArrowUp from '../media/filterArrowUp.svg'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { useState } from 'react'
const Filter = (props) => {
    const {setFilters, filters} = useThoughtsProviderAndController()
    const startingFilterIcon = () => {
        switch(filters[props.FilterName]){
            case 'desc' :
                return filterArrowDown 
            case 'asc':     
                return FilterArrowUp
            case null :
                return offIcon    
        }
    }
    const [currentFilterIcon, setCurrentFiltericon] = useState(startingFilterIcon())
    const [FilterChangingStatus, setFilterChangingStatus] = useState('off')
    const filterChangerHandler = () => {
        if(FilterChangingStatus === 'fadeIn'){
            setFilterChangingStatus('off')
            return
        }
        switch(filters[props.FilterName]){
            case 'desc' :
                setFilters(prev => ({...prev, [props.FilterName] : 'asc' }))
                setCurrentFiltericon(FilterArrowUp)
                setFilterChangingStatus('fadeIn')
                break;
            case 'asc' :
                setFilters(prev => ({...prev, [props.FilterName] : null }))
                setCurrentFiltericon(offIcon)
                setFilterChangingStatus('fadeIn')
                break;
            case null :
                setFilters(prev => ({...prev, [props.FilterName] : 'desc' }))
                setCurrentFiltericon(filterArrowDown)
                setFilterChangingStatus('fadeIn')
                break;
        }
    }
    const filterOnClick = () => {
        setFilterChangingStatus('fadeOut')
    }
  return (
    <StyledFilter FilterChangingStatus={FilterChangingStatus} 
    onClick={filterOnClick}>
    <h6>{props.label}</h6>
    <img src={currentFilterIcon} onAnimationEnd={filterChangerHandler}/>
    </StyledFilter>
  )
}

const StyledFilter = styled.div`
    gap: 1vh;
    display: flex;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 2.5vh;
    align-items: center;
    >img{
        width: 1.3em;
        -webkit-animation: ${props => props.FilterChangingStatus === 'fadeOut' ? FadeOutRotation : props.FilterChangingStatus === 'fadeIn' ? FadeInRotation : ''} 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: ${props => props.FilterChangingStatus === 'fadeOut' ? FadeOutRotation : props.FilterChangingStatus === 'fadeIn' ? FadeInRotation : ''} 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
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

export default Filter