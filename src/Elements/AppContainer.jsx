import React from 'react'
import styled from 'styled-components'
const AppContainer = (props) => {
  return (
    <div className={props.className}>
        {props.children}
    </div>
  )
}

export default styled(AppContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 2vh;
`