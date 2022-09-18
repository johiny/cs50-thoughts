import React from 'react'
import styled from 'styled-components'
import Modal from 'styled-react-modal'
import closeIcon from '../media/closeicon.svg'
const NewThoughtModal = ({isOpen, setIsOpen}) => {
    function toggleModal(e) {
        setIsOpen(!isOpen)
      }
  return (
    <StyledContainerModal
    isOpen={isOpen}
    onBackgroundClick={toggleModal}
    onEscapeKeydown={toggleModal}>
        <StyledModal>
            <img src={closeIcon}/>
            <StyledForm>
                <input type='text' placeholder="Hey what's your name?"/>
                <textarea placeholder="What's your thought?"/>
                <FeelingsContainer>
                <label>Positive</label>
                <input type='radio' id='positiveFeeling' name='feeling' value='positive'/>
                <label>Negative</label>
                <input type='radio' id='negativeFeeling' name='feeling' value='negative'/>
                </FeelingsContainer>
                <button type='button'>Share</button>
            </StyledForm>
        </StyledModal>
    </StyledContainerModal>
  )
}

const StyledContainerModal = Modal.styled`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
const StyledModal = styled.div`
    --card-color: #17b852;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50%;
    backdrop-filter: blur(8px);
    box-shadow:
    0 0 0.2em #fff,
    0 0 0.2em #fff,
    0 0 0.2em #fff,
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color),
    0 0 0.6em var(--card-color);
    img{
        padding: 1vh;
        width: 2vh;
    }
`
const  StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`
const FeelingsContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
`

export default NewThoughtModal