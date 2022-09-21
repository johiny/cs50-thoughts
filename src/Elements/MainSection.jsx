import React from 'react'
import Thoughts from './Thoughts';
import Filters from './Filters';
import {ThoughtsProviderAndController} from './ThoughtsProviderAndController'
import { useState,useEffect } from 'react';
import styled from 'styled-components';
import AddThought from './AddThought';
import NewThoughtModal from './NewThoughtModal';
const MainSection = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <ThoughtsProviderAndController>
      <OptionsContainer>
      <AddThought action={() => setIsOpen(true)}/>
      <Filters/>
      </OptionsContainer>
      <Thoughts/>
      <NewThoughtModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </ThoughtsProviderAndController>
  )
}

const OptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    position: relative;
`

export default MainSection