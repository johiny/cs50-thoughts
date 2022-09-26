import React from 'react'
import { css } from 'styled-components'
import styled from 'styled-components'
import thumbIcon from '../media/thumbIcon.svg'
import { useState, useEffect } from 'react'
import validateField from './CustomHooks/validateFunctions'
import { toast } from 'react-toastify';
import fakeAxiosPost from '../media/fakePost'
import { useThoughtsProviderAndController } from './ThoughtsProviderAndController'
const NewThoughtForm = (props) => {
    const [selectedFeeling, setSelectedFeeling] = useState('')
    const [errorMessages, seterrorMessages] = useState({username: null, thought: null, feeling: null})
    const [dirtyFields, setDirtyFields] = useState({username: false, thought: false, feeling: false})
    const {setThoughts} = useThoughtsProviderAndController() 
    useEffect(() => {
        validateField('feeling', selectedFeeling, seterrorMessages)
    },[selectedFeeling])
    const newThoughtSubmit = (e) => {
    let thought = {
            byUsername: e.target.elements.username.value,
             content: e.target.elements.thought.value,
             feeling: selectedFeeling,
             upVotes: 1,
	         DownVotes: 1,
        } 
        e.preventDefault()
        props.setNewThoughtLoading(true)
        toast.promise(fakeAxiosPost(), {
            pending: {
                render(){
                  return `Wait a little...`
                }
            },
            success: {
                render({data}){
                    console.log('success se creo el thought!')
                    props.setIsOpen(false)
                    props.setNewThoughtLoading(false)
                    setThoughts(prev => ([thought, ...prev]))
                    props.setFeelingColor('#f7f7f7')
                  return `${data}`
                }
            },
            error: {
                render({data}){
                    props.setNewThoughtLoading(false)
                    return `${data} try again!`
                    }
            }
        })
    }
  return (
    <StyledForm onSubmit={(e) => newThoughtSubmit(e)}>
        { errorMessages.username && dirtyFields.username ? <StyledErrorMessage>{errorMessages.username}</StyledErrorMessage> : null}
        <input name='username' type='text' placeholder="Hey what's your name?"
        onChange={(e) => validateField('username', e.target.value, seterrorMessages)}
        onKeyUp={() => {
            setDirtyFields(prev => ({...prev, username: true}))
        }}/>

        { errorMessages.thought && dirtyFields.thought ? <StyledErrorMessage>{errorMessages.thought}</StyledErrorMessage> : null}
        <textarea name='thought' placeholder="What's your thought?"
        onChange={(e) => validateField('thought', e.target.value, seterrorMessages)}
        onKeyUp={() => {
            setDirtyFields(prev => ({...prev, thought: true}))
        }}/>

        <h5>Your thought is?</h5>
        { errorMessages.feeling && dirtyFields.feeling ? <StyledErrorMessage>{errorMessages.feeling}</StyledErrorMessage> : null}
        <FeelingsContainer>
            <Like src={thumbIcon} selectedFeeling={selectedFeeling} onClick={() => {
                setSelectedFeeling('positive')
                props.setFeelingColor('#17b852')
                setDirtyFields(prev => ({...prev, feeling: true}))
                }}/>
            <DisLike src={thumbIcon} selectedFeeling={selectedFeeling} onClick={() => {
                setSelectedFeeling('negative')
                props.setFeelingColor('#ac011b')
                setDirtyFields(prev => ({...prev, feeling: true}))
                }}/>
        </FeelingsContainer>
        <button type='submit' 
        disabled={errorMessages.username || errorMessages.thought || errorMessages.feeling}>
        Share</button>
    </StyledForm>
  )
}

const StyledErrorMessage = styled.span`
    color: white;
    font-size: 1.2vh;
    text-align: center;
`
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
        margin-bottom: 2vh;
        background: none;
        ::placeholder{
            text-align: center;
        }
    }
    textarea{
        ::-webkit-scrollbar{
            width: 2px;
        }
        ::-webkit-scrollbar-track{
            background: #0e0d0d
        }
        ::-webkit-scrollbar-thumb{
            
            background: #e6dddd;
        }
        color:white;
        margin: 2vh;
        margin-top: 1vh;
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
        cursor: pointer;
        :hover{
           color: #e6dddd
        }
        :disabled{
            cursor: default;
            color: #cfcbcb;
        }
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