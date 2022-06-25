import React from 'react'
import logo from "../media/cs50thoughts.png"
import styled from 'styled-components'
const Logo = (props) => {
  return (
    <img src={logo} className={props.className}/>
  )
}

export default styled(Logo)`
margin-top: 2vh;
margin-bottom: 1vh;
margin-left: auto;
margin-right: auto;
width: 35vh;
`