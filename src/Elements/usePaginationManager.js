import { useState, useEffect } from "react";
import { apidata } from "../media/fakequery";

const usePaginationManager = () => {
    const numberOfThoughtsPerPage = 12
    const [startIndex, setStartIndex] = useState(0)
    let currentPage = apidata.slice(startIndex, (startIndex + numberOfThoughtsPerPage))
    const pageChanger = (direction) => {
        if(direction === 'left' && startIndex >= 0){
            if((startIndex - numberOfThoughtsPerPage) < 0){
                return
            }
            setStartIndex(startIndex - numberOfThoughtsPerPage)
        }
        else if(direction === 'right' && startIndex <= (apidata.length)){
            if((startIndex + numberOfThoughtsPerPage) >= apidata.length){
                return
            }
            setStartIndex(startIndex + numberOfThoughtsPerPage)
        }

    }
    // useEffect(()=> {
    //     console.log(currentPage)
    // },[startIndex])

    const noMoreLeft = startIndex === 0
    const noMoreRight = startIndex + numberOfThoughtsPerPage === apidata.length
    return {currentPage, pageChanger, noMoreLeft, noMoreRight}
}

export default usePaginationManager