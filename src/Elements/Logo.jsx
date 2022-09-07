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
animation: floating 3500ms infinite;
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

@-webkit-keyframes pulse {
  0% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  50% {
  -webkit-transform: scale3d(1.05, 1.05, 1.05);
  transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  }
  @keyframes pulse {
  0% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  50% {
  -webkit-transform: scale3d(1.05, 1.05, 1.05);
  transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  } 
`

export default Logo