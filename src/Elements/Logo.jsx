import React from 'react'
import logo from "../media/cs50thoughts.png"
import styled from 'styled-components'
const Logo = (props) => {
  return (
    <StyledLogo src={logo} className={props.className}/>
  )
}

const StyledLogo = styled.img`
width: 40vh;
`

export default Logo