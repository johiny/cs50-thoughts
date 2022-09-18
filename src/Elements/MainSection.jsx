import React from 'react'
import Thoughts from './Thoughts';
import Filters from './Filters';
import {ThoughtsProviderAndController} from './ThoughtsProviderAndController'
import useOnScreen from './CustomHooks/useOnScreen';
import { useState } from 'react';
import styled from 'styled-components';
import AddThought from './AddThought';
import NewThoughtModal from './NewThoughtModal';
const MainSection = () => {
    const [addThoughtVisible, setAddThoughtVisible] = useState(false)
    const onIntersection = (entries) => {
        const [entry] = entries
        setAddThoughtVisible(entry.isIntersecting)
    }
    const [elementRef] = useOnScreen(onIntersection, 0.9)
    const [isOpen, setIsOpen] = useState(false)
  return (
    <ThoughtsProviderAndController>
      <OptionsContainer>
      {addThoughtVisible ? <AddThought action={() => setIsOpen(true)}/> : null}
      <Filters/>
      </OptionsContainer>
      <Thoughts refInstance={elementRef}/>
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