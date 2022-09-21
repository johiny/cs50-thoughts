import React from 'react'
import { css } from 'styled-components'
import styled from 'styled-components'
import thumbIcon from '../media/thumbIcon.svg'
import { useState } from 'react'
const NewThoughtForm = (props) => {
const [selectedFeeling, setSelectedFeeling] = useState('')
  return (
    <StyledForm>
        <input type='text' placeholder="Hey what's your name?"/>
        <textarea placeholder="What's your thought?"/>
        <h5>Your thought is?</h5>
        <FeelingsContainer>
            <Like src={thumbIcon} selectedFeeling={selectedFeeling} onClick={() => {
                setSelectedFeeling('positive')
                props.setFeelingColor('#17b852')
                }}/>
            <DisLike src={thumbIcon} selectedFeeling={selectedFeeling} onClick={() => {
                setSelectedFeeling('negative')
                props.setFeelingColor('#ac011b')
                }}/>
        </FeelingsContainer>
        <button type='button'>Share</button>
    </StyledForm>
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

const  StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    color:white;
    font-family: 'Roboto', sans-serif;
    flex-grow: 1;
    justify-content: center;
    h5{
        margin-bottom: 0;
        margin-top: 2vh;
        margin-left: auto;
        margin-right: auto;
        color:#515151;
        font-size: 2vh;
    }
    input{
        color:white;
        ${neonBox}
        border: none;
        border-radius: 3px;
        padding: 0.8vh;
        margin: 2vh;
        margin-top: 1vh;
        margin-bottom: 1vh;
        background: none;
        ::placeholder{
            text-align: center;
        }
    }
    textarea{
        color:white;
        margin: 2vh;
        margin-bottom: 0;
        padding: 0.5vh;
        ${neonBox}
        background: none;
        ::placeholder{
            text-align: center;
            line-height: 200%;
        }
        min-height: 25vh;
    }
    button{
        margin-top: auto;
        border-bottom-right-radius: 1vh;
        border-bottom-left-radius: 1vh;
        background: none;
        border: none;
        color: white;
        padding: 1vh;
        ${neonBox}
    }
`
const FeelingsContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    gap: 5vh;
    margin-top: 3vh;
    margin-bottom: 3vh;
    justify-content: center;
`
const Like = styled.img`
    width: ${props => props.selectedFeeling == 'positive' ? '25%' : '20%'};    
    transition: all 0.1s ease-in-out;
    filter: ${props => props.selectedFeeling == 'positive' ? 'invert(69%) sepia(90%) saturate(3825%) hue-rotate(101deg) brightness(205%) contrast(82%) drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 0.6em #17b852);' : 'invert(69%) sepia(90%) saturate(3825%) hue-rotate(101deg) brightness(95%) contrast(82%) drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 0.6em #17b852)'};
    :hover{
        filter: invert(69%) sepia(90%) saturate(3825%) hue-rotate(101deg) brightness(205%) contrast(82%) drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 0.6em #17b852);
        width: 25%;
    }
    cursor: pointer;
`

const DisLike = styled.img`
    width: ${props => props.selectedFeeling == 'negative' ? '25%' : '20%'};
    filter: ${props => props.selectedFeeling == 'negative' ? 'invert(11%) sepia(52%) saturate(6522%) hue-rotate(342deg) brightness(204%) contrast(110%) drop-shadow(0 0 0.5px #fff) drop-shadow(0 0 4px #FF0000);' : 'invert(11%) sepia(52%) saturate(6522%) hue-rotate(342deg) brightness(94%) contrast(110%) drop-shadow(0 0 0.5px #fff) drop-shadow(0 0 4px #FF0000);'};
    transform: rotate(-180deg);
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    :hover{
        filter: invert(11%) sepia(52%) saturate(6522%) hue-rotate(342deg) brightness(204%) contrast(110%) drop-shadow(0 0 0.5px #fff) drop-shadow(0 0 4px #FF0000);
        width: 25%;
    }
`

export default NewThoughtForm