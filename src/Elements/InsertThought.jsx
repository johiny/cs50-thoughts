import React from 'react'
import styled from 'styled-components'
const InsertThought = (props) => {
  return (
    <div className={props.className}>
        <input type="text" placeholder='Your Name?'/>
        <textarea placeholder='Your Thought?'></textarea>
        <button>Sent</button>
    </div>
  )
}

export default styled(InsertThought)`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  background: rgba(0, 0, 0, 1);
  padding: 1vh;
  border: solid #811727 1px;
  border-radius: 11px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  filter: drop-shadow(0px 4px 11px rgba(0, 0, 0, 0.25));
  grid-column: span 3;
  @media only screen and (min-width: 1200px)  {
    grid-column: span 2;
    }
  height: 30vh;
  >*{
    :focus{
      outline: none;
    }
    background: rgba(0, 0, 0, 0);
    border: solid #811727 1px;
    color: #F6FAF6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    line-height: 11px;
    ::placeholder{
      color: #F6FAF6;
      text-align: center; 
    }
  }
  >input{
    padding: 4px;
    :focus::placeholder {
      color: transparent;
}
  }
  >textarea{
    padding: 8px;
    height: 100%;
    font-size: medium;
    overflow-x: hidden;
    resize: none;
    ::placeholder{
      position: relative;
      top: 50%;
      font-size: x-large;
    }
    :focus::placeholder {
      color: transparent;
}
  }
  >button{
    padding: 0.5vh 2.5vh;
    margin-left: auto;
    :hover{
      cursor: pointer;
      background: #811727;
      color: #F6FAF6;
    }
  }
`