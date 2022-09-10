import { useState, useEffect} from "react";
import { createContext, useContext} from "react";
import {apidata} from '../media/fakequery'

const ThoughtsContext = createContext()

const ThoughtsProviderAndController = ({children}) => {
    const [thoughts, setThoughts] = useState([])
    const [filters, setFilters] = useState({feeling: null, createDate: 'desc', upVotes: 'desc', downVotes: 'asc' })
    const [apiCallIsLoading, setApiCallIsLoading] = useState(false)
    useEffect(() => {
        const axiosQuery = `http://localhost:3000/api/v1/thoughts?${ filters.feeling ? `feeling=${filters.feeling}&` : '' }${`createDate=${filters.createDate}&`}${`upVotes=${filters.upVotes}&`}${`DownVotes=${filters.downVotes}`}`
        console.log(axiosQuery)
        setThoughts(apidata)
    },[filters])
    return(
        <ThoughtsContext.Provider value={{thoughts, filters, setFilters, setApiCallIsLoading, apiCallIsLoading, setThoughts}}>
            {children}
        </ThoughtsContext.Provider>
    )
}

const useThoughtsProviderAndController = () => {
    const context = useContext(ThoughtsContext)
    return context
}

export {ThoughtsProviderAndController, useThoughtsProviderAndController}