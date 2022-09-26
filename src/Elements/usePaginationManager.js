import { useState, useEffect} from "react";
const usePaginationManager = ({thoughts, startIndex, setStartIndex}) => {
    const MAXNumberOfThoughtsPerPage = 12
    let currentPage = thoughts.slice(startIndex, (startIndex + MAXNumberOfThoughtsPerPage > thoughts.length ? thoughts.length : (startIndex + MAXNumberOfThoughtsPerPage)))

    const noMoreLeft = startIndex === 0
    const noMoreRight = startIndex + MAXNumberOfThoughtsPerPage >= thoughts.length
    const frontPageChanger = (direction, newThoughts) => {
        if(direction === 'left' && startIndex >= 0){
            if((startIndex - MAXNumberOfThoughtsPerPage) < 0){
                return false
            }
            if(newThoughts){
                setStartIndex(108)
            }
            else{
                setStartIndex(startIndex - MAXNumberOfThoughtsPerPage)
            }
        }
        else if(direction === 'right' && startIndex <= (thoughts.length)){
            if((startIndex + MAXNumberOfThoughtsPerPage) >= thoughts.length){
                return false
            }
            if(newThoughts){
                setStartIndex(0)
            }
            else{
                setStartIndex(startIndex + MAXNumberOfThoughtsPerPage)
            }
        }

    }
    useEffect(() => {
        console.log(startIndex, `-`, startIndex + MAXNumberOfThoughtsPerPage)
    }, [startIndex])
    
    return {currentPage, frontPageChanger, noMoreLeft, noMoreRight}
}

export default usePaginationManager