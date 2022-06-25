import React from 'react'
import styled from 'styled-components'
const Thought = (props) => {
  return (
    <div className={props.className}>
        <p>CS50 wassdkljkalfjka;lkfj;adfka;jds;jfl;jsdl;fjal;fn;kdl </p>
    <span>by user</span>
    </div>
  )
}

export default styled(Thought)`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 1);
  padding: 1vh;
  border: solid #811727 1px;
  border-radius: 11px;
  color: #F6FAF6;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  grid-column: span 3;
  @media only screen and (min-width: 1200px)  {
    grid-column: span 2;
    }
  height: 30vh;
  filter: drop-shadow(0px 4px 11px rgba(0, 0, 0, 0.25));
  >p{
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
    display : block; 
    overflow-wrap: break-word; 
    max-width : 100%;
  }
  >span{
    margin-left: auto;
  }
`