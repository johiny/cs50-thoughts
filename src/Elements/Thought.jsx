import React, { useState } from 'react'
import styled from 'styled-components'
import LikeAndDislike from './LikeAndDislike'
import { Textfit } from 'react-textfit'
import ModalLoader from './ModalLoader'
const Thought = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <StyledThought feeling={props.feeling}>
    {isLoading ? <ModalLoader/> : null}
        <StyledYear>{`${props.cs50year || '2022'} Edition`}</StyledYear>
        <Textfit className='textFit' min={1} max={16}>{props.content}</Textfit>
        <ThoughtFooter>
        <LikeAndDislike upVotes={props.upVotes} downVotes={props.DownVotes} id={props.id} setIsLoading={setIsLoading}/>
        <Textfit className='textFit_username' mode='single' min={1} max={17}>{props.byUsername}</Textfit>
        </ThoughtFooter>
    </StyledThought>
  )
}

const StyledYear = styled.span`
  font-size: 1.5vh;
  margin: none;
  font-style: italic;
  opacity: 0.8;
`

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
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  grid-column: span 6;
  grid-row: span 7;
  box-shadow:
    0 0 0.2em #fff,
    0 0 0.2em #fff,
    0 0 0.2em #fff,
    /* Color glow */
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color);
    @media only screen and (min-width: 700px)  {
    grid-column: span 3;
  }
  @media only screen and (min-width: 800px)  {
    grid-column: span 2;
  }
  @media only screen and (min-width: 1200px)  {
    max-width: 242px;
    grid-column: span 1;
    grid-row: span 5;
    }
  /* >p{
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
    display : block; 
    overflow-wrap: break-word; 
    max-width : 100%;
    margin-left: 1.5vh;
    margin-right: 1.5vh;
  } */
  .textFit{
    display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 2;
      text-align: center;
      margin: 1vh;
      max-height: 80%;
  }
`

const ThoughtFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  >.textFit_username{
    align-self: flex-end;
    font-style: italic;
    width: 100%;
    text-align: right;
  }
`

export default Thought