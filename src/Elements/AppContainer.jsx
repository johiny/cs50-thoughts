import React from 'react'
import styled from 'styled-components'
const AppContainer = (props) => {
  return (
    <StyledAppContainer>
        {props.children}
    </StyledAppContainer>
  )
}

const StyledAppContainer = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 2vh;
`

export default AppContainer