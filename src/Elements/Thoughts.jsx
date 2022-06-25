import React from 'react'
import styled from 'styled-components'
const Thoughts = (props) => {
  return (
    <div className={props.className}>
        {props.children}
    </div>
  )
}

export default styled(Thoughts)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: auto;
    gap: 2vh;
`