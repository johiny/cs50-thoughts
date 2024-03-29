import React from 'react'
import styled from 'styled-components'
import allIcon from '../media/AllIcon.svg'
import negativeIcon from '../media/NegativeIcon.svg'
import positiveIcon from '../media/PositiveIcon.svg'
import { useState } from 'react'
import { keyframes } from 'styled-components'
import { useThoughtsProviderAndController} from './ThoughtsProviderAndController'
const FeelingFilter = () => {
    const {setFilters, filters} = useThoughtsProviderAndController()
    const startingFilterIcon = () => {
        switch(filters.feeling){
            case null:
                return allIcon
            case 'postive':
                return positiveIcon
            case 'negative':
                return negativeIcon
        }
    }
    const [currentFeelingIcon, setCurrentFeelingicon] = useState(startingFilterIcon())
    const [FilterChangingStatus, setFilterChangingStatus] = useState('off')
    const filterChangerHandler = () => {
        if(FilterChangingStatus === 'fadeIn'){
            setFilterChangingStatus('off')
            return
        }
        switch(filters.feeling){
            case null:
                setFilters(prev => ({...prev, feeling: 'positive'}))    
                setCurrentFeelingicon(positiveIcon)
                setFilterChangingStatus('fadeIn')
                break;
            case 'positive':
                setFilters(prev => ({...prev, feeling: 'negative'}))
                setCurrentFeelingicon(negativeIcon)
                setFilterChangingStatus('fadeIn')
                break;
            case 'negative':
                setFilters(prev => ({...prev, feeling: null}))
                setCurrentFeelingicon(allIcon)
                setFilterChangingStatus('fadeIn')
                break;
        }
    }
    const filterOnClick = () => {
        setFilterChangingStatus('fadeOut')
    }
  return (
    <StyledFilter currentIcon={currentFeelingIcon} FilterChangingStatus={FilterChangingStatus} 
    onClick={filterOnClick}>
        <h6>Show</h6>
        <img src={currentFeelingIcon} onAnimationEnd={filterChangerHandler}/>
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
    >img{
        width: 1.3em;
        -webkit-animation: ${props => props.FilterChangingStatus === 'fadeOut' ? FadeOutRotation : props.FilterChangingStatus === 'fadeIn' ? FadeInRotation : ''} 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: ${props => props.FilterChangingStatus === 'fadeOut' ? FadeOutRotation : props.FilterChangingStatus === 'fadeIn' ? FadeInRotation : ''} 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        filter: ${(props) => {
            if(props.currentIcon === allIcon){
                return 'brightness(104%) invert(100%) sepia(0%) saturate(2%) hue-rotate(66deg) brightness(104%) contrast(101%) drop-shadow(0 0 1.5px #fff)'
            }
            else if(props.currentIcon === positiveIcon){
                return 'invert(54%) sepia(62%) saturate(600%) hue-rotate(89deg) brightness(93%) contrast(91%) drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 0.6em #17b852)'
            }
            else{
                return 'invert(7%) sepia(89%) saturate(6780%) hue-rotate(347deg) brightness(93%) contrast(102%) drop-shadow(0 0 0.5px #c4bdbd) drop-shadow(0 0 4px #FF0000)'
            }
        } };
    }
    :hover{
        cursor: pointer;
        color: #ffffffde;
        >img{
            filter: ${(props) => {
            if(props.currentIcon === allIcon){
                return 'brightness(104%) invert(100%) sepia(0%) saturate(2%) hue-rotate(66deg) brightness(90%) contrast(101%) drop-shadow(0 0 1.5px #fff)'
            }
            else if(props.currentIcon === positiveIcon){
                return 'invert(54%) sepia(62%) saturate(600%) hue-rotate(89deg) brightness(93%) contrast(91%) drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 0.3em #17b852)'
            }
            else{
                return 'invert(7%) sepia(89%) saturate(6780%) hue-rotate(347deg) brightness(93%) contrast(102%) drop-shadow(0 0 0.5px #e23f3f) drop-shadow(0 0 4px #FF0000)'
            }
        } };

        }
    }
    align-items: center;
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
export default FeelingFilter