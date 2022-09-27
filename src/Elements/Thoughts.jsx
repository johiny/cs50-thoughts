import React from 'react'
import styled from 'styled-components'
import Thought from './Thought';
import PageArrow from './PageArrow';
import { keyframes } from 'styled-components';
import { useState} from 'react';
import { useThoughtsProviderAndController} from './ThoughtsProviderAndController'
import DummyCard from './DummyCard';
import { nanoid } from 'nanoid'
const Thoughts = (props) => {
  const {apiCallIsLoading, currentPage, frontPageChanger,noMoreLeft, noMoreRight, checkForMore} = useThoughtsProviderAndController()
	const [currentAnimation, setCurrentAnimation] = useState('')
	const [leftArrowLimit, setleftArrowLimit] = useState(false)
	const [rightArrowLimit, setrightArrowLimit] = useState(false)
  return (
	<StyledThoughtsContainer>
		<PageArrow arrowDirection={'90deg'} spaceDirection={`right: 0.4vh`} ArrowLimit={leftArrowLimit} ArrowLimitAfterAction={() => setleftArrowLimit(false)}
		ArrowHandler={async () => {
			if(noMoreLeft){
        if( await checkForMore('left')){
          setCurrentAnimation(goOutRight)
        }
        else{
          setleftArrowLimit(true)
          return
        }
			}
      else{
        setCurrentAnimation(goOutRight)
      }
    }}
		/>

		<StyledThoughts currentAnimation={currentAnimation} onAnimationEnd={() => {
			if(currentAnimation === goOutRight){
				setCurrentAnimation(goInLeft)
          frontPageChanger('left', true)
			}
			else if(currentAnimation === goOutLeft){
				setCurrentAnimation(goInRight)
          frontPageChanger('right', true)
			}
		}}>
      {/* thoughts iteration */}
			{apiCallIsLoading ?
      [...Array(12)].map(dummyThought => <DummyCard key={nanoid()}/>) :
      currentPage.map(thought => <Thought {...thought} key={nanoid()}/>)
      }
		</StyledThoughts>
		<PageArrow arrowDirection={'270deg'} spaceDirection={`left: 0.4vh`} ArrowLimit={rightArrowLimit} ArrowLimitAfterAction={() => setrightArrowLimit(false)}
		ArrowHandler={async () => {
			if(noMoreRight){
        if(await checkForMore('right')){
          setCurrentAnimation(goOutLeft)
        }
        else{
          setrightArrowLimit(true)
          return
        }
			}
      else{
        setCurrentAnimation(goOutLeft)
      }
    }}
    />

	</StyledThoughtsContainer>
  )
}

const StyledThoughts = styled.div`
  	display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 5vh;
    gap: 3.5vh;
    margin: 2vh 0;
    width: 100%;
	-webkit-animation: ${props => props.currentAnimation} ${props => props.currentAnimation === goOutLeft || goOutRight ? '0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060)' : '0.10s cubic-bezier(0.230, 1.000, 0.320, 1.000)'} both;
	        animation: ${props => props.currentAnimation} ${props => props.currentAnimation === goOutLeft || goOutRight ? '0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060)' : '0.10s cubic-bezier(0.230, 1.000, 0.320, 1.000)'} both;
`
const StyledThoughtsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: hidden;
`

const  goInLeft = keyframes`
	 0% {
    -webkit-transform: translateX(-100vw) scaleX(1) scaleY(1);
            transform: translateX(-100vw) scaleX(1) scaleY(1);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
  75% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  80% {
    -webkit-transform: translateX(-25px) scaleY(1) scaleX(1);
            transform: translateX(-25px) scaleY(1) scaleX(1);
	-webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  85%{
	-webkit-transform: translateX(0px) scaleY(1) scaleX(1);
            transform: translateX(0px) scaleY(1) scaleX(1);
	-webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(-15px) scaleY(1) scaleX(1);
            transform: translateX(-15px) scaleY(1) scaleX(1);
	-webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
	-webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
`
const  goOutLeft = keyframes`
	 0% {
    -webkit-transform: translateX(0) scaleX(1) scaleY(1);
            transform: translateX(0) scaleX(1) scaleY(1);
	-webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  100% {
    -webkit-transform: translateX(-100vw) scaleY(1) scaleX(1);
            transform: translateX(-100vw) scaleY(1) scaleX(1);
	-webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
`
const  goInRight = keyframes`
	 0% {
    -webkit-transform: translateX(100vw) scaleX(1) scaleY(1);
            transform: translateX(100vw) scaleX(1) scaleY(1);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
  }
  75% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  80% {
    -webkit-transform: translateX(25px) scaleY(1) scaleX(1);
            transform: translateX(25px) scaleY(1) scaleX(1);
	-webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  85%{
	-webkit-transform: translateX(0px) scaleY(1) scaleX(1);
            transform: translateX(0px) scaleY(1) scaleX(1);
	-webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(15px) scaleY(1) scaleX(1);
            transform: translateX(15px) scaleY(1) scaleX(1);
	-webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
	-webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
`

const  goOutRight = keyframes`
	 0% {
    -webkit-transform: translateX(0vw) scaleX(1) scaleY(1);
            transform: translateX(0vw) scaleX(1) scaleY(1);
	-webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  100% {
    -webkit-transform: translateX(100vw) scaleY(1) scaleX(1);
            transform: translateX(100vw) scaleY(1) scaleX(1);
	-webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
`

export default Thoughts