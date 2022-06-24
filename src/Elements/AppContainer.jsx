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
    display: grid;
    margin: 0 2vh;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 4vh repeat(15, 1fr);
    height: 100vh;
`