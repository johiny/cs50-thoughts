import { useState, useEffect} from "react";
const usePaginationManager = ({thoughts, startIndex, setStartIndex, newThoghtsComing, setNewThoughtsComing}) => {
    const MAXNumberOfThoughtsPerPage = 12
    let currentPage = thoughts.slice(startIndex, (startIndex + MAXNumberOfThoughtsPerPage > thoughts.length ? thoughts.length : (startIndex + MAXNumberOfThoughtsPerPage)))

    const noMoreLeft = startIndex === 0
    const noMoreRight = startIndex + MAXNumberOfThoughtsPerPage >= thoughts.length
    const frontPageChanger = (direction) => {
        if(direction === 'left' && startIndex >= 0){
            if((startIndex - MAXNumberOfThoughtsPerPage) < 0){
                return false
            }
            if(newThoghtsComing){
                setStartIndex(108)
                setNewThoughtsComing(false)
            }
            else{
                setStartIndex(startIndex - MAXNumberOfThoughtsPerPage)
            }
        }
        else if(direction === 'right' && startIndex <= (thoughts.length)){
            if((startIndex + MAXNumberOfThoughtsPerPage) >= thoughts.length){
                return false
            }
            if(newThoghtsComing){
                setStartIndex(0)
                setNewThoughtsComing(false)
            }
            else{
                setStartIndex(startIndex + MAXNumberOfThoughtsPerPage)
            }
        }

    }
    
    return {currentPage, frontPageChanger, noMoreLeft, noMoreRight}
}

export default usePaginationManager