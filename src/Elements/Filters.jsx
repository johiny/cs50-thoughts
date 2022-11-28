import React from 'react'
import styled from 'styled-components'
import FeelingFilter from './FeelingFilter'
import Filter from './Filter'
import YearFilter from './YearFilter'
const Filters = () => {
  return (
    <StyledFilters>
        <FeelingFilter/>
        <Filter label='Order By Date' FilterName ='createdDate'/>
        <Filter label='Order By Likes' FilterName ='upVotes'/>
        <Filter label='Order By Dislikes' FilterName ='downVotes' />
        <YearFilter/>
    </StyledFilters>
  )
}

const StyledFilters = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 1em;
    margin: 0 2vh;
    padding: 0;
    width: fit-content;
    @media only screen and (min-width: 650px)  {
        margin: 0;
        margin-left: auto;
        margin-right: 6vh;
}   
`

export default Filters