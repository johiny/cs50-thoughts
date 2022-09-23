import React from 'react'
import styled from 'styled-components'
import LikeAndDislike from './LikeAndDislike'
const Thought = (props) => {
  return (
    <StyledThought feeling={props.feeling}>
        <p>{props.content}</p>
        <ThoughtFooter>
        <LikeAndDislike upVotes={props.upVotes} downVotes={props.DownVotes}/>
        <span>{props.byUsername}</span>
        </ThoughtFooter>
    </StyledThought>
  )
}

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
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  grid-column: span 6;
  grid-row: span 7;
  box-shadow:
    0 0 0.2em #fff,
    0 0 0.2em #fff,
    0 0 0.2em #fff,
    /* Green glow */
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color);
    @media only screen and (min-width: 650px)  {
    grid-column: span 3;
  }
  @media only screen and (min-width: 800px)  {
    grid-column: span 2;
  }
  @media only screen and (min-width: 1200px)  {
    grid-column: span 1;
    grid-row: span 5;
    }
  >p{
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
    display : block; 
    overflow-wrap: break-word; 
    max-width : 100%;
  }
`

const ThoughtFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  >span{
    align-self: flex-end;
    font-style: italic;
  }
`

export default Thought