import React from 'react'
import logo from "../media/cs50thoughts.png"
import styled from 'styled-components'
const Logo = (props) => {
  return (
    <StyledLogo src={logo}/>
  )
}

const StyledLogo = styled.img`
width: 30vh;
animation: floating 3500ms infinite cubic-bezier(.25,.46,.45,.94);
@media only screen and (min-width: 650px)  {
  width: 35vh;
  }
  @media only screen and (min-width: 1200px)  {
            width: 50vh;
}
@keyframes floating {
	0% {
    filter: blur(0.3px);
		transform: translatey(0px);
	}
	50% {
    filter: blur(0px);
		transform: translatey(-20px);
	}
	100% {

    filter: blur(0.3px);
		transform: translatey(0px);
	}
}
`

export default Logo