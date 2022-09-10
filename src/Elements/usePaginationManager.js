import { useState, useEffect } from "react";
import { useThoughtsProviderAndController} from './ThoughtsProviderAndController'
const usePaginationManager = () => {
    const {thoughts, setThoughts} = useThoughtsProviderAndController()
    const numberOfThoughtsPerPage = 12
    const [startIndex, setStartIndex] = useState(0)
    let currentPage = thoughts.slice(startIndex, (startIndex + numberOfThoughtsPerPage))
    const pageChanger = (direction) => {
        if(direction === 'left' && startIndex >= 0){
            if((startIndex - numberOfThoughtsPerPage) < 0){
                return
            }
            setStartIndex(startIndex - numberOfThoughtsPerPage)
        }
        else if(direction === 'right' && startIndex <= (thoughts.length)){
            if((startIndex + numberOfThoughtsPerPage) >= thoughts.length){
                return
            }
            setStartIndex(startIndex + numberOfThoughtsPerPage)
        }

    }
    // useEffect(()=> {
    //     console.log(currentPage)
    // },[startIndex])

    const noMoreLeft = startIndex === 0
    const noMoreRight = startIndex + numberOfThoughtsPerPage === thoughts.length
    return {currentPage, pageChanger, noMoreLeft, noMoreRight}
}

export default usePaginationManager