import React from 'react'
import styled from 'styled-components'
import prevBackground from  '../media/background_poster.jpg'
import videoBackgroundDesktop from '../media/cs50_background_bigScreen.mp4'
import videoBackgroundMobile from '../media/cs50_background_mobile_optimized.mp4'
import { ModalProvider } from 'styled-react-modal'
import { useRef, useEffect} from 'react'
import isMobile from './CustomHooks/useIsMobile'
const AppContainer = (props) => {
  const ismobile = isMobile()
  const videoRef = useRef(undefined);
    useEffect(() => {
      videoRef.current.setAttribute('muted', '')
    },[])
  return (
    <ModalProvider>
        <StyledBackground onError={(e) => console.log(e.target.error)} src={ismobile ? videoBackgroundMobile : videoBackgroundDesktop} type="video/mp4" defaultMuted muted playsInline autoPlay loop ref={videoRef} poster={prevBackground} onCanPlay={e => e.target.playbackRate = ismobile ? 0.9 : 0.5}/>
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