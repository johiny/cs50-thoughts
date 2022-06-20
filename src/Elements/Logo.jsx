import React from 'react'
import logo from "../media/cs50thoughts.png"
import styled from 'styled-components'
const Logo = (props) => {
  return (
    <div className={props.className}>
    <img src={logo}/>
    </div>
  )
}

export default styled(Logo)`
    display: flex;
    justify-content: center;
    img{
        width: 50vh;
        margin-top: 2vh;
    }
`