import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
const ModalLoader = () => {
  return (
    <StyledModalLoader>
        <span/>
    </StyledModalLoader>
  )
}
const  loadingAnimation = keyframes`
  0% {
    box-shadow: -38px -12px ,  -14px 0,  14px 0, 38px 0;
  }
  33% {
    box-shadow: -38px 0px, -14px -12px,  14px 0, 38px 0;
  }
  66% {
    box-shadow: -38px 0px , -14px 0, 14px -12px, 38px 0;
  }
  100% {
    box-shadow: -38px 0 , -14px 0, 14px 0 , 38px -12px;
  }
`
const  loadingContainerAnimation = keyframes`
  0% {
    opacity:0
  }
  100% {
    opacity:1
  }
`
const StyledModalLoader = styled.div`
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 50;
    border-radius: 1vh;
    align-items: center;
    animation: ${loadingContainerAnimation} 1s linear;
    span{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: block;
        margin:15px auto;
        position: relative;
        color: #FFF;
        box-sizing: border-box;
        animation: ${loadingAnimation} 0.5s linear infinite alternate;
    }
`

export default ModalLoader