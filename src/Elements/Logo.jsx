import React from 'react'
import logo from "../media/cs50thoughts.png"
import styled from 'styled-components'
const Logo = (props) => {
  return (
    <img src={logo} className={props.className}/>
  )
}

export default styled(Logo)`
grid-column: 2/6;
grid-row: 2/7;
width: 100%;
height: 100%;
`