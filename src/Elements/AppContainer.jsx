import React from 'react'
import styled from 'styled-components'
import prevBackground from  '../media/background_poster.jpg'
import videoBackground from '../media/cs50_background.mp4'
import { ModalProvider } from 'styled-react-modal'
import { useRef, useEffect } from 'react'
const AppContainer = (props) => {
  const videoRef = useRef(undefined);
    useEffect(() => {
      videoRef.current.setAttribute('muted', '')
    },[])
  return (
    <ModalProvider>
        <StyledBackground defaultMuted muted playsInline autoPlay loop ref={videoRef} poster={prevBackground} onPlay={e => e.target.playbackRate = 0.5}>
          <source src={ videoBackground } type="video/mp4"/>
        </StyledBackground>
      <StyledAppContainer>
        {props.children}
      </StyledAppContainer>
    </ModalProvider>
  )
}

const StyledAppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const StyledBackground = styled.video`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  width:100vw;
    height:100vh;
    object-fit: cover;
`

export default AppContainer