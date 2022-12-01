import React from 'react'
import { css } from 'styled-components'
import styled from 'styled-components'
import thumbIcon from '../media/thumbIcon.svg'
import { useState, useEffect, useRef } from 'react'
import validateField from './CustomHooks/validateFunctions'
import { toast } from 'react-toastify';
import axios from 'axios'
import fakeAxiosPost from '../media/fakePost'
import { useThoughtsProviderAndController } from './ThoughtsProviderAndController'
import YearsListSelect from './YearsListSelect'
const NewThoughtForm = (props) => {
    const [selectedFeeling, setSelectedFeeling] = useState('')
    const [errorMessages, seterrorMessages] = useState({username: null, thought: null, feeling: null, year: null})
    const [dirtyFields, setDirtyFields] = useState({username: false, thought: false, feeling: false, year: false})
    const {setThoughts} = useThoughtsProviderAndController()
    const api = import.meta.env.VITE_API
    
    const [isOpen, setIsOpen] = useState('begin')
    const [selectedYear, setSelectedYear] = useState('begin')
    const openSelectButton = useRef(null)
    useEffect(() => {
        validateField('feeling', selectedFeeling, seterrorMessages)
    },[selectedFeeling])

    const newThoughtSubmit = (e) => {
    e.preventDefault()
    let thought = {
            byUsername: e.target.elements.username.value,
             content: e.target.elements.thought.value,
             feeling: selectedFeeling
        } 
        props.setNewThoughtLoading(true)
        toast.promise(axios.post(`${api}thoughts`, thought), {
            pending: {
                render(){
                  return `Wait a little...`
                }
            },
            success: {
                render({data}){
                    props.setIsOpen(false)
                    props.setNewThoughtLoading(false)
                    setThoughts(prev => ([data.data.newThought, ...prev]))
                    props.setFeelingColor('#f7f7f7')
                  return `${data.data.message}`
                }
            },
            error: {
                render({data}){
                    props.setNewThoughtLoading(false)
                    return `${data.response.data.message} try again!`
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
        { errorMessages.year && dirtyFields.year ? <StyledErrorMessage style={{paddingTop : '2vh'}}>{errorMessages.year}</StyledErrorMessage> : null}
        <StyledSelect ref={openSelectButton} onClick={() => {
                if(typeof isOpen != 'boolean'){
                    setIsOpen(true)
                }
                else{
                    setIsOpen(!isOpen)
                }
                setDirtyFields(prev => ({...prev, year: true}))
            }
        }>
        <h5>{selectedYear == 'begin' | selectedYear == null ? 'What edition did you take?': selectedYear}</h5>
        <YearsListSelect 
        setIsOpen={setIsOpen} 
        isOpen={isOpen} 
        setSelectedYear={setSelectedYear} 
        selectedYear={selectedYear} 
        switchButton={openSelectButton} 
        validateField={validateField}
        seterrorMessages={seterrorMessages}/>
        </StyledSelect>
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
        disabled={errorMessages.username || errorMessages.thought || errorMessages.feeling || errorMessages.year}>
        Share</button>
    </StyledForm>
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

const StyledSelect = styled.div`
    position: relative;
    background: transparent;
    margin-top: 2vh;
    color: #fff;
    text-align: center;
    ${neonBox};
    border-radius: 3px;
    width: 75%;
    align-self: center;
    transition: max-height 1s ease-out;
    :hover{
        cursor: pointer;
       >h5{
        color:#d1cdcd;
       }
    }
    >h5{
        margin-bottom: 0;
        margin-top: 0;
        margin-left: auto;
        margin-right: auto;
        color:#515151;
        font-size: 2vh;
        padding: 1vh;
        
    }
`

const StyledErrorMessage = styled.span`
    color: white;
    font-size: 1.2vh;
    text-align: center;
`

const  StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    color:white;
    font-family: 'Roboto', sans-serif;
    flex-grow: 1;
    justify-content: center;
    >h5{
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
        :focus{
        outline: none;
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
        :focus{
        outline: none;
    }
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