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
    
`