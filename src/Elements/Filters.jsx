import React from 'react'
import styled from 'styled-components'
import filterArrow from '../media/filter-arrow.svg'
import { useState } from 'react'
import FeelingFilter from './FeelingFilter'
import { useThoughtsProviderAndController} from './ThoughtsProviderAndController'
const Filters = () => {
  return (
    <StyledFilters>
        <FeelingFilter/>
        <Filter filter='Order By Date' initialArrowStatus={true} interFilterName ={'createDate'}/>
        <Filter filter='Order By Likes' initialArrowStatus={true} interFilterName ={'upVotes'}/>
        <Filter filter='Order By Dislikes' initialArrowStatus={false} interFilterName ={'downVotes'} />
    </StyledFilters>
  )
}

const Filter = (props) => {
    const {filters, setFilters} = useThoughtsProviderAndController()
    const [arrowUp, setArrowStatus] = useState(props.initialArrowStatus)
    return(
       <StyledFilter arrowUp={arrowUp} onClick={() => {
        setArrowStatus(!arrowUp)
        if(filters[props.interFilterName] === 'desc'){
            setFilters(prev => ({...prev, [props.interFilterName] : 'asc' }))
        }
        else{
            setFilters(prev => ({...prev, [props.interFilterName] : 'desc' }))
        }
        }}>
        <h6>{props.filter}</h6>
        <img src={filterArrow}/>
       </StyledFilter>
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
const StyledFilter = styled.div`
    :hover{
        cursor: pointer;
        color: #ffffffde;
        >img{
            filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(66deg) brightness(90%) contrast(101%);

        }
    }
    gap: 1vh;
    display: flex;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 2.5vh;
    >img{
        transition-duration: 1000ms;
        transform: ${props => props.arrowUp ? 'rotate(0)' : 'rotate(180deg)'};
        width: 1em;
        filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(66deg) brightness(104%) contrast(101%);
    }
`

export default Filters