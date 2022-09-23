import { useState, useEffect} from "react";
import { useThoughtsProviderAndController} from './ThoughtsProviderAndController'
const usePaginationManager = () => {
    const {thoughts} = useThoughtsProviderAndController()
    const MAXNumberOfThoughtsPerPage = 12
    const [startIndex, setStartIndex] = useState(0)
    let currentPage = thoughts.slice(startIndex, (startIndex + MAXNumberOfThoughtsPerPage > thoughts.length ? thoughts.length : (startIndex + MAXNumberOfThoughtsPerPage)))

    useEffect(() => {
        console.log(thoughts)
        setStartIndex(0)
    }, [thoughts])

    const pageChanger = (direction) => {
        if(direction === 'left' && startIndex >= 0){
            if((startIndex - MAXNumberOfThoughtsPerPage) < 0){
                return
            }
            setStartIndex(startIndex - MAXNumberOfThoughtsPerPage)
        }
        else if(direction === 'right' && startIndex <= (thoughts.length)){
            if((startIndex + MAXNumberOfThoughtsPerPage) >= thoughts.length){
                return
            }
            setStartIndex(startIndex + MAXNumberOfThoughtsPerPage)
        }

    }
    
    const noMoreLeft = startIndex === 0
    const noMoreRight = startIndex + MAXNumberOfThoughtsPerPage >= thoughts.length
    return {currentPage, pageChanger, noMoreLeft, noMoreRight}
}

export default usePaginationManager