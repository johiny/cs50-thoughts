import React from 'react'
import styled from 'styled-components'
import Logo from './Logo';
import Typewriter from 'typewriter-effect';

const HomeCover = () => {
  return (
    <StyledHomeCover>
       <Logo/>
       <Typewriter options={{
        strings: ['This is the place to share your thoughts on CS50',
         'Tu lugar para compartir tus pensamientos sobre CS50',
          '在这里分享您对 CS50 的看法',
          "C'est l'endroit idéal pour partager vos réflexions sur le CS50",
           'ここは、CS50 に関するあなたの考えを共有する場所です。',
           'O lugar para compartilhar seus pensamentos sobre CS50',
           'Der Ort, an dem Sie Ihre Gedanken zu CS50 teilen können',
           'Il posto giusto per condividere le tue opinioni su CS50',
          'CS50 पर अपने विचार साझा करने का स्थान'],
        autoStart: true,
        loop: true,
        wrapperClassName: 'home-text',
        pauseFor: 2000,
        cursorClassName: 'home-text__cursor'
       }} />
    </StyledHomeCover>
  )
}

const StyledHomeCover = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    margin-bottom: 1vh;
    gap: 10vh;
    margin: 0 5vh;
`

export default HomeCover