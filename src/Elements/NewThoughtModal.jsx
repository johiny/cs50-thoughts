import React from 'react'
import styled from 'styled-components'
import Modal from 'styled-react-modal'
import closeIcon from '../media/closeicon.svg'
import { css } from 'styled-components'
import NewThoughtForm from './NewThoughtForm'
import { useState } from 'react'
const NewThoughtModal = ({isOpen, setIsOpen}) => {
    function toggleModal(e) {
        setIsOpen(!isOpen)
      }
const [feelingColor, setFeelingColor] = useState('#f7f7f7')     
  return (
    <StyledContainerModal
    isOpen={isOpen}
    onBackgroundClick={toggleModal}
    onEscapeKeydown={toggleModal}>
        <StyledModal feelingColor={feelingColor}>
            <img src={closeIcon} id='closeCross' onClick={() => {
                setIsOpen(false)
                setFeelingColor('#f7f7f7')
                }}/>
            <NewThoughtForm setFeelingColor={setFeelingColor}/>
        </StyledModal>
    </StyledContainerModal>
  )
}

const neonBox = css`
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

const StyledContainerModal = Modal.styled`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
const StyledModal = styled.div`
    --card-color: ${props => props.feelingColor};
    position: relative;
    display: flex;
    flex-direction: column;
    width: 18%;
    min-height: 50%;
    backdrop-filter: blur(8px);
    border-radius: 1vh;
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