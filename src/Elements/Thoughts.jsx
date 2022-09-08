import React from 'react'
import styled from 'styled-components'
import Thought from './Thought';
import PageArrow from './PageArrow';
import { keyframes } from 'styled-components';
import { useState } from 'react';
const apidata = JSON.parse(`[
	{
		"id": 1,
		"byUsername": "johiny",
		"content": "I love cs50 so much! i will never forget those weeks!",
		"feeling": "positive",
		"upVotes": 19,
		"DownVotes": 4,
		"createdDate": "2022-08-05T18:58:39.942Z"
	},
	{
		"id": 2,
		"byUsername": "johiny",
		"content": "I love cs50 so much! web development is so fun!",
		"feeling": "negative",
		"upVotes": 14,
		"DownVotes": 1,
		"createdDate": "2022-08-05T19:25:05.707Z"
	},
	{
		"id": 3,
		"byUsername": "johiny",
		"content": "learning how to code was awesome!",
		"feeling": "positive",
		"upVotes": 0,
		"DownVotes": 0,
		"createdDate": "2022-08-08T21:10:58.144Z"
	},
	{
		"id": 4,
		"byUsername": "karol",
		"content": "cs50 was a trash!",
		"feeling": "positive",
		"upVotes": 0,
		"DownVotes": 1,
		"createdDate": "2022-08-10T22:16:57.402Z"
	},
	{
		"id": 6,
		"byUsername": "yoru",
		"content": "cs50 is the best course to start with CS",
		"feeling": "positive",
		"upVotes": 1,
		"DownVotes": 1,
		"createdDate": "2022-08-18T03:17:23.191Z"
	},
  {
		"id": 2,
		"byUsername": "johiny",
		"content": "I love cs50 so much! web development is so fun!",
		"feeling": "negative",
		"upVotes": 14,
		"DownVotes": 1,
		"createdDate": "2022-08-05T19:25:05.707Z"
	},
	{
		"id": 1,
		"byUsername": "johiny",
		"content": "I love cs50 so much! i will never forget those weeks!",
		"feeling": "positive",
		"upVotes": 19,
		"DownVotes": 4,
		"createdDate": "2022-08-05T18:58:39.942Z"
	},
	{
		"id": 2,
		"byUsername": "johiny",
		"content": "I love cs50 so much! web development is so fun!",
		"feeling": "negative",
		"upVotes": 14,
		"DownVotes": 1,
		"createdDate": "2022-08-05T19:25:05.707Z"
	},
	{
		"id": 3,
		"byUsername": "johiny",
		"content": "learning how to code was awesome!",
		"feeling": "positive",
		"upVotes": 0,
		"DownVotes": 0,
		"createdDate": "2022-08-08T21:10:58.144Z"
	},
	{
		"id": 4,
		"byUsername": "karol",
		"content": "cs50 was a trash!",
		"feeling": "positive",
		"upVotes": 0,
		"DownVotes": 1,
		"createdDate": "2022-08-10T22:16:57.402Z"
	},
	{
		"id": 6,
		"byUsername": "yoru",
		"content": "cs50 is the best course to start with CS",
		"feeling": "positive",
		"upVotes": 1,
		"DownVotes": 1,
		"createdDate": "2022-08-18T03:17:23.191Z"
	},
  {
		"id": 2,
		"byUsername": "johiny",
		"content": "I love cs50 so much! web development is so fun!",
		"feeling": "negative",
		"upVotes": 14,
		"DownVotes": 1,
		"createdDate": "2022-08-05T19:25:05.707Z"
	}
]`)

const Thoughts = (props) => {
	const [currentAnimation, setCurrentAnimation] = useState('')
	const animationControl = (direction) => {
		if(direction === 'backwards'){
			setCurrentAnimation(goOutRight)
		}
	}
  return (
	<StyledThoughtsContainer>
		<PageArrow arrowDirection={'90deg'} spaceDirection={`right: 0.4vh`} ArrowHandler={() => setCurrentAnimation(goOutRight)} />
		<StyledThoughts currentAnimation={currentAnimation} onAnimationEnd={() => {
			if(currentAnimation === goOutRight){
				setCurrentAnimation(goInLeft)
			}
			else if(currentAnimation === goOutLeft){
				setCurrentAnimation(goInRight)
			}
		}}>
			{props.children}
			{apidata.map(thought => <Thought
			{...thought}
			/>)}
		</StyledThoughts>
		<PageArrow arrowDirection={'270deg'} spaceDirection={`left: 0.4vh`} ArrowHandler={() => setCurrentAnimation(goOutLeft)} />
	</StyledThoughtsContainer>
  )
}

const StyledThoughts = styled.div`
  	display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 5vh;
    gap: 3.5vh;
    margin: 2vh 0;
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
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
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
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
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