import React from 'react'
import styled from 'styled-components'
import Modal from 'styled-react-modal'
import closeIcon from '../media/closeicon.svg'
import { css, keyframes } from 'styled-components'
import NewThoughtForm from './NewThoughtForm'
import { useState } from 'react'
import ModalLoader from './ModalLoader'
const NewThoughtModal = ({isOpen, setIsOpen}) => {
    function toggleModal(e) {
        setIsOpen(!isOpen)
      }
const [feelingColor, setFeelingColor] = useState('#f7f7f7')
const [newThoughtLoading, setNewThoughtLoading] = useState(false) 
  return (
    <StyledContainerModal
    isOpen={isOpen}
    onBackgroundClick={toggleModal}
    onEscapeKeydown={toggleModal}>
        <StyledModal feelingColor={feelingColor}>
          { newThoughtLoading ? <ModalLoader/> : null }
            <img src={closeIcon} id='closeCross' onClick={() => {
                setIsOpen(false)
                setFeelingColor('#f7f7f7')
                }}/>
            <NewThoughtForm 
            setFeelingColor={setFeelingColor} 
            setNewThoughtLoading={setNewThoughtLoading}
            setIsOpen={setIsOpen}/>
        </StyledModal>
    </StyledContainerModal>
  )
}

const neonBox = css`
    transition: all ease-in-out 500ms;
    box-shadow:
    0 0 0.2em #fff,
    0 0 0.2em #fff,
    0 0 0.2em #fff,
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color);
`
const flickerEntrance = keyframes`
    0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  10.1% {
    opacity: 1;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    opacity: 1;
  }
  20.6% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  30.1% {
    opacity: 1;
  }
  30.5% {
    opacity: 1;
  }
  30.6% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  45.1% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  55% {
    opacity: 1;
  }
  55.1% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  57.1% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  60.1% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  65.1% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  75.1% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  77.1% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  85.1% {
    opacity: 0;
  }
  86% {
    opacity: 0;
  }
  86.1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`
const StyledContainerModal = Modal.styled`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
backdrop-filter: blur(8px);
animation: none;
`
const StyledModal = styled.div`
    --card-color: ${props => props.feelingColor};
    position: relative;
    display: flex;
    flex-direction: column;
    width: 18%;
    min-height: 50%;
    border-radius: 1vh;
    -webkit-animation: ${flickerEntrance} 1s linear;
    animation: ${flickerEntrance} 1s linear;
    ${neonBox}
    #closeCross{
        filter: invert(100%) sepia(27%) saturate(147%) hue-rotate(338deg) brightness(107%) contrast(101%);
        padding: 1vh;
        width: 2vh;
        transition: all ease-in-out 100ms;
        cursor: pointer;
        :hover{
            filter: invert(100%) sepia(27%) saturate(147%) hue-rotate(338deg) brightness(80%) contrast(101%);
        }
    }
`
export default NewThoughtModal